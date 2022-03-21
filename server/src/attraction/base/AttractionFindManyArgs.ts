/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttractionWhereInput } from "./AttractionWhereInput";
import { Type } from "class-transformer";
import { AttractionOrderByInput } from "./AttractionOrderByInput";

@ArgsType()
class AttractionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AttractionWhereInput,
  })
  @Field(() => AttractionWhereInput, { nullable: true })
  @Type(() => AttractionWhereInput)
  where?: AttractionWhereInput;

  @ApiProperty({
    required: false,
    type: [AttractionOrderByInput],
  })
  @Field(() => [AttractionOrderByInput], { nullable: true })
  @Type(() => AttractionOrderByInput)
  orderBy?: Array<AttractionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AttractionFindManyArgs };
