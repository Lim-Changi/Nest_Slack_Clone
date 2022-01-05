import { Injectable } from '@nestjs/common';

@Injectable()
export class ChannelsService {
  constructor() {}

  async findById(id: number) {
    return;
  }

  async getWorkspaceChannels(url: string, myId: number) {
    return;
  }

  async getWorkspaceChannel(url: string, name: string) {
    return;
  }

  async createWorkspaceChannels(url: string, name: string, myId: number) {}

  async getWorkspaceChannelMembers(url: string, name: string) {
    return;
  }

  async createWorkspaceChannelMembers(url, name, email) {}

  async getWorkspaceChannelChats(
    url: string,
    name: string,
    perPage: number,
    page: number,
  ) {
    return;
  }

  async createWorkspaceChannelChats(
    url: string,
    name: string,
    content: string,
    myId: number,
  ) {}

  async createWorkspaceChannelImages(
    url: string,
    name: string,
    files: any[],
    myId: number,
  ) {}

  async getChannelUnreadsCount(url, name, after) {
    return;
  }
}
