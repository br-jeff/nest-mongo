import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePersonDTO } from 'src/dto/create-person.dto';
import { ProviderEnum } from 'src/enums/provider.enums';
import { Person } from 'src/interfaces/person.interface';

@Injectable()
export class PersonService {
  constructor(
    @Inject(ProviderEnum.MODEL.PERSON)
    private personModel: Model<Person>,
  ) {}

  async create(createPersonDTO: CreatePersonDTO): Promise<Person> {
    const createProduct = new this.personModel(createPersonDTO);
    return createProduct.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }
}
