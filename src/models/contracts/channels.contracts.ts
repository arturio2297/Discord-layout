export interface ChannelItem {
  serverId: number;
  type: ChannelType;
  name: string;
  id: number;
  participantsIds:  number[];
  isPrivate?: boolean;
}

export enum ChannelType {
  Text = 'TEXT',
  Voice = 'VOICE',
  Music = 'MUSIC'
}