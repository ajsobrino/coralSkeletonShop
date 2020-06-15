import bcrypt = require('bcrypt');
import jsonToken = require('jsonwebtoken');
import UserRepository from '../repository/user-repository';
import UserApp from '../model/user-model';

export default class UserService {

    private static instance: UserService;
    constructor() {
    }

    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    generateToken(userApp: UserApp) {
        return jsonToken.sign({
            email: userApp.email,
            roles: userApp.roles
        }, 'secretkey', { expiresIn: 60 * 60, algorithm: 'HS256' });
    }

    async login(email: string, password: string) {
        try {
            let userExpected = await this.findByEmail(email);
            if (!userExpected) {
                throw new Error();
            }
            if (bcrypt.compareSync(password, userExpected.password)) {
                return this.generateToken(userExpected);
            } else {
                throw new Error();
            }
        } catch(error){
            console.log(error);
            throw new Error('Error');
        }
    }


    async create(user: UserApp) {
        try {
            await this.validateIfExistUser(user);
            let userJson = this.insertDataInUSer(user);
            let UserNew = new UserRepository(userJson);
            await UserNew.save((err) => {
                if (err) {
                    throw new Error('It can not save the user');
                }
            });
            return this.generateToken(user);
        } catch(error){
            console.log(error);
            throw new Error('Error');
        }
    }

    async delete(email: string) {
        try {
            let user = await this.findByEmail(email);
            if (!user) {
                throw new Error();
            }
            let userSchema = new UserRepository(user);
            console.log(user._id);
            UserRepository.findByIdAndUpdate(user._id,{delete:true,active:false},(err,res)=>{
                if(err){
                    throw new Error();
                }
            })
        } catch(error){
            console.log(error);
            throw new Error('Error');
        }
    }

    async update(user:UserApp){
        let password = bcrypt.hashSync(user.password, 5);
        UserRepository.findByIdAndUpdate(user._id,{password:password},(err,res)=>{
            if(err){
                throw new Error();
            }
        })
    }

    private insertDataInUSer(user: UserApp) {
        user.password = bcrypt.hashSync(user.password, 5);
        let codeForActivate = bcrypt.hashSync(user.email + (new Date().getMilliseconds), 2);
        let userJson = JSON.parse(JSON.stringify(user));
        userJson.keyForActivation = codeForActivate;
        userJson.active = false;
        userJson.roles = ['user'];
        userJson.delete = false;
        return userJson;
    }

    async validateIfExistUser(user: UserApp) {
        let userExpected = await UserRepository.findOne({ email: user.email }, (err, userExpected) => {
            if (err) {
                throw new Error('Error in search user by email');
            }
            return userExpected;
        });
        if (userExpected) {
            throw new Error('The user already registry');
        }
    }

    private async findByEmail(email: string) {
        return await UserRepository.findOne({ $and: [{ email: email }, { active: true }, { delete: false }] }, (err, userExpected) => {
            if (err) {
                throw new Error('Error in search user by email');
            }
            return userExpected;
        });
    }

}



