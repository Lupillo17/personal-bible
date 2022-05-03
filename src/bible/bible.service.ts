import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBibleDto } from './dtos/bible.dto';
import { Bible } from './entities/bible.entity';

@Injectable()
export class BibleService {
  constructor(@InjectModel(Bible.name) private bibleModule: Model<Bible>) {}

  findAll() {
    return this.bibleModule.find().exec();
  }

  create(bible: CreateBibleDto) {
    const newBible = new this.bibleModule(bible);
    return newBible.save();
  }
}
