export interface UserItem {
  id: number;
  name: string;
  number: string;
  online: boolean;
  avatarUrl?: string;
  friend: boolean;
  play?: string;
}

export enum UserRole {
  CREATOR = 'CREATOR',
  DEVELOPER = 'DEVELOPER'
}