import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Bible extends Document {
  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: string;
}

export const BibleSchema = SchemaFactory.createForClass(Bible);
