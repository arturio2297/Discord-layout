import {makeAutoObservable} from "mobx";
import {User} from "./domain/User";
import {UsersRepository} from "../fakeBd/users-repository";
import {UserItem} from "../models/contracts/users.contracts";
import {isInside} from "../fakeBd/utils";
import {UsersMapper} from "./domain/mappers/UsersMapper";
import {NULL} from "../models/contracts/common";

export class UsersStore {

  private users: User[] = [];
  selectedUser: User | NULL = null;

  constructor() {
    makeAutoObservable(this, storeConfigurationOverrides);
    this.initUsers();
  }

  private initUsers() {
    this.users = UsersRepository.getAllUsers()
      .map(x => this.$createUserDTO(x));
    this.simulateActivity();
  }

  setSelectedUser(value: User | NULL) {
    this.selectedUser = value;
  }

  getUser(id: number) {
    return this.users.find(x => x.id === id);
  }

  getChannelUsers(participantsIds: number[]) {
    const users = this.users.filter(x => isInside(participantsIds, x.id));
    return {
      online: this.$filterByOnline(users, true),
      offline: this.$filterByOnline(users, false)
    };
  }

  private $filterByOnline(users: User[], online: boolean): User[] {
    return users.filter(x => x.isOnline === online);
  }

  private simulateActivity() {
    this.users.filter(x => !x.isMe).forEach(x => x.simulateActivity(15000));
  }

  private $createUserDTO(item: UserItem): User {
    const user = new User();
    UsersMapper.map(user, item);
    return user;
  }
}

const storeConfigurationOverrides = {};