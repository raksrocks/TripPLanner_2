import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StartStopPlaceService } from "./startStopPlace.service";
import { StartStopPlaceControllerBase } from "./base/startStopPlace.controller.base";

@swagger.ApiTags("startStopPlaces")
@common.Controller("startStopPlaces")
export class StartStopPlaceController extends StartStopPlaceControllerBase {
  constructor(
    protected readonly service: StartStopPlaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
