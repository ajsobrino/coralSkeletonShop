import mongoose, { Schema, Document,Model } from 'mongoose';

export default interface UserApp  extends Document{
    email : string;
    numberPhone : string;
    name: string;
    password : string ;
    roles :string [];
}