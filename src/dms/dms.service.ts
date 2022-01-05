import { Injectable } from '@nestjs/common';

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

@Injectable()
export class DMsService {
  constructor() {}

  async getWorkspaceDMs(url: string, myId: number) {
    return;
  }

  async getWorkspaceDMChats(
    url: string,
    id: number,
    myId: number,
    perPage: number,
    page: number,
  ) {
    return;
  }

  async createWorkspaceDMChats(
    url: string,
    content: string,
    id: number,
    myId: number,
  ) {}

  async createWorkspaceDMImages(
    url: string,
    files: any[],
    id: number,
    myId: number,
  ) {}

  async getDMUnreadsCount(url, id, myId, after) {
    return;
  }
}
