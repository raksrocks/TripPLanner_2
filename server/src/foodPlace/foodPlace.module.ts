import { Module } from "@nestjs/common";
import { FoodPlaceModuleBase } from "./base/foodPlace.module.base";
import { FoodPlaceService } from "./foodPlace.service";
import { FoodPlaceController } from "./foodPlace.controller";
import { FoodPlaceResolver } from "./foodPlace.resolver";

@Module({
  imports: [FoodPlaceModuleBase],
  controllers: [FoodPlaceController],
  providers: [FoodPlaceService, FoodPlaceResolver],
  exports: [FoodPlaceService],
})
export class FoodPlaceModule {}
