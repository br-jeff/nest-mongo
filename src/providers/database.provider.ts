import mongoose from 'mongoose';
import { ProviderEnum } from 'src/enums/provider.enums';

export const databaseProviders = [
  {
    provide: ProviderEnum.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:mongodb123@127.0.0.1:27017/dev'),
  },
];
