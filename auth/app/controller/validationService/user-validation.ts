import GenericValidation from './validation-Generic';
import UserApp from '../../model/user-model';

export default class UserValition implements GenericValidation<UserApp>{

    validationRead(user: UserApp): void {
        this.validateEmailAndPassword(user);
    }
    validationUpdate(user: UserApp): void {
        this.validateEmailAndPassword(user);
    }
    validationCreate(user: UserApp): void {
        if (user) {
            if (!user?.email) {

            }

            if (!user?.password) {

            }

            if (!user?.name) {

            }

            if (!user?.numberPhone) {

            }
        } else {

        }
    }

    validateEmailAndPassword(user: UserApp) {
        if (user) {
            if (!user?.password) {

            }
            if (!user?.email) {

            }

        } else {

        }
    }

}