import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  name: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
