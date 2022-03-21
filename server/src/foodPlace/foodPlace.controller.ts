import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FoodPlaceService } from "./foodPlace.service";
import { FoodPlaceControllerBase } from "./base/foodPlace.controller.base";

@swagger.ApiTags("foodPlaces")
@common.Controller("foodPlaces")
export class FoodPlaceController extends FoodPlaceControllerBase {
  constructor(
    protected readonly service: FoodPlaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
