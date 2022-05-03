import { Body, Controller, Get, Post } from '@nestjs/common';

import { BibleService } from './bible.service';
import { CreateBibleDto } from './dtos/bible.dto';

@Controller('bible')
export class BibleController {
  constructor(private bibleService: BibleService) {}

  @Get()
  getAll() {
    return this.bibleService.findAll();
  }

  @Post()
  create(@Body() payload: CreateBibleDto) {
    return this.bibleService.create(payload);
  }
}
