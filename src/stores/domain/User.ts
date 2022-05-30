import {makeAutoObservable} from "mobx";
import {getRandomGame} from "../../models/constants/users.constants";
import {NULL} from "../../models/contracts/common";

export class User {
  id: number = 0;
  name: string = '';
  number: string = '';
  avatarUrl: string | NULL = null;
  isOnline: boolean = false;
  isFriend: boolean = false;
  play: string | NULL = null;

  constructor() {
    makeAutoObservable(this, storeConfigurationOverrides);
  }

  setId(value: number) {
    this.id = value;
    return this;
  }

  setName(value: string) {
    this.name = value;
    return this;
  }

  setNumber(value: string) {
    this.number = value;
    return this;
  }

  setAvatarUrl(value: string | NULL) {
    this.avatarUrl = value;
    return this;
  }

  setIsOnline(value: boolean) {
    this.isOnline = value;
    return this;
  }

  setIsFriend(value: boolean) {
    this.isFriend = value;
    return this;
  }

  setPlay(value: string | NULL) {
    this.play = value;
    return this;
  }

  simulateActivity(activityDelay: number) {
    this.setIsOnline(Math.random() >= 0.5);
    this.setPlay(getRandomGame());

    setTimeout(() => this.simulateActivity(activityDelay), activityDelay);
  }

  get isMe(): boolean {
    return this.id === 1;
  }
}

const storeConfigurationOverrides = {};