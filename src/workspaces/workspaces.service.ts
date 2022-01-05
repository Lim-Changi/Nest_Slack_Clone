import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkspacesService {
  async findById(id: number) {
    return;
  }

  async findMyWorkspaces(myId: number) {
    return;
  }

  async createWorkspace(name: string, url: string, myId: number) {}

  async getWorkspaceMembers(url: string) {
    return;
  }

  async createWorkspaceMembers(url, email) {}

  async getWorkspaceMember(url: string, id: number) {
    return;
  }
}
