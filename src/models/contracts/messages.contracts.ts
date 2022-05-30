export enum MessageBodyType {
  Text= 'text',
  Audio = 'audio',
  Video = 'video',
  Image = 'image'
}

export interface MessageItem {
  channelId: number;
  userId: number;
  date: string;
  body: string;
  bodyType: MessageBodyType;
}