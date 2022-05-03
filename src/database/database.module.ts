import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import config from '../config';

@Global()
@Module({
  imports: [
    // MongooseModule.forRoot(
    //   process.env.MONGODB_STORE_URI ||
    //     'mongodb+srv://b1bl34dm1n:b1bl3p455w0rd@cluster0.turp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // ),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        // const { connection, user, password, host, dbName, dbUri } =
        const { dbUri } = configService.mongo;
        return {
          // uri: `${connection}://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`,
          uri: dbUri,
        };
      },
      inject: [config.KEY],
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
