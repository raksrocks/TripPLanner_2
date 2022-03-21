import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FoodPlaceResolverBase } from "./base/foodPlace.resolver.base";
import { FoodPlace } from "./base/FoodPlace";
import { FoodPlaceService } from "./foodPlace.service";

@graphql.Resolver(() => FoodPlace)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FoodPlaceResolver extends FoodPlaceResolverBase {
  constructor(
    protected readonly service: FoodPlaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
