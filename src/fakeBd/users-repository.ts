import {UserItem} from "../models/contracts/users.contracts";
import users from '../assets/users.json';

export class UsersRepository {

  private static readonly appUsers: UserItem[] = users as UserItem[];

  public static getAllUsers(): UserItem[] {
    return this.appUsers;
  }
}