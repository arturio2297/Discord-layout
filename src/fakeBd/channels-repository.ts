import {ChannelItem} from "../models/contracts/channels.contracts";
import channels from '../assets/channels.json';

export class ChannelsRepository {

  private static readonly appChannels: ChannelItem[] = channels as ChannelItem[];

  public static getChannelsByServerId(id: number): ChannelItem[] {
    return this.appChannels.filter(x => x.serverId === id);
  }
}