import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FoodPlaceServiceBase } from "./base/foodPlace.service.base";

@Injectable()
export class FoodPlaceService extends FoodPlaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
