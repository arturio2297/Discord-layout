export enum AppServerName {
  Main = 'Discord',
  Elephants = 'Elephants',
  Kingdom = 'Kingdom'
}

export interface ServerItem {
  name: AppServerName;
  id: number;
  participantsIds: number[];
}