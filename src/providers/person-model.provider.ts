import { Connection } from 'mongoose';
import { ProviderEnum } from 'src/enums/provider.enums';
import { PersonSchema } from 'src/schemas/person.schema';

export const personModelProvider = [
  {
    provide: ProviderEnum.MODEL.PERSON,
    useFactory: (connection: Connection) =>
      connection.model('Person', PersonSchema),
    inject: [ProviderEnum.DATABASE_CONNECTION],
  },
];
