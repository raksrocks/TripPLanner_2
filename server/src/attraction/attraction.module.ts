import { Module } from "@nestjs/common";
import { AttractionModuleBase } from "./base/attraction.module.base";
import { AttractionService } from "./attraction.service";
import { AttractionController } from "./attraction.controller";
import { AttractionResolver } from "./attraction.resolver";

@Module({
  imports: [AttractionModuleBase],
  controllers: [AttractionController],
  providers: [AttractionService, AttractionResolver],
  exports: [AttractionService],
})
export class AttractionModule {}
