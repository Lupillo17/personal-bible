import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BibleController } from './bible.controller';
import { BibleService } from './bible.service';
import { Bible, BibleSchema } from './entities/bible.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bible.name,
        schema: BibleSchema,
      },
    ]),
  ],
  controllers: [BibleController],
  providers: [BibleService],
})
export class BibleModule {}
