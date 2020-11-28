import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateEmployeeInput {
  @IsString()
  @IsNotEmpty({message: 'Field can not be null'})
  name: string;

  @IsString()
  job: string;

  @IsString()
  city: string;
}
