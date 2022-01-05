import { Channels } from '../../entities/Channels';
import { Workspaces } from '../../entities/Workspaces';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Workspaces)
      .values([{ id: 1, name: 'CashWalk', url: 'cashwalk' }])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Channels)
      .values([{ id: 1, name: 'Main', WorkspaceId: 1, private: false }])
      .execute();
  }
}
