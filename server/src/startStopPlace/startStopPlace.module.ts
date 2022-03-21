import { Module } from "@nestjs/common";
import { StartStopPlaceModuleBase } from "./base/startStopPlace.module.base";
import { StartStopPlaceService } from "./startStopPlace.service";
import { StartStopPlaceController } from "./startStopPlace.controller";
import { StartStopPlaceResolver } from "./startStopPlace.resolver";

@Module({
  imports: [StartStopPlaceModuleBase],
  controllers: [StartStopPlaceController],
  providers: [StartStopPlaceService, StartStopPlaceResolver],
  exports: [StartStopPlaceService],
})
export class StartStopPlaceModule {}
