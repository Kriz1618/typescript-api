import mongoose from 'mongoose';


interface IUserAuthentication {
  password: string;
  salt?: string;
  sessionToken?: string;
}

export interface IUser {
  username: string;
  email: string;
  authentication: IUserAuthentication;
}

interface CreateUserResponseType extends IUser {
  _id: mongoose.Types.ObjectId;
}

export type CreateUser = (values: IUser) => Promise<CreateUserResponseType>;

export type GetUserById = (id: string) => Promise<CreateUserResponseType | null>;

