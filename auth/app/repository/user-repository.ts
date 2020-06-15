
import mongoose, { Schema, Document,Model } from 'mongoose';
import UserApp from '../model/user-model';
import UserSchema from './schemas/user-schema';

interface IUserModel extends Model<UserApp> {
    
}


export default mongoose.model<UserApp,IUserModel>('UserApp', UserSchema);