import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StartStopPlaceResolverBase } from "./base/startStopPlace.resolver.base";
import { StartStopPlace } from "./base/StartStopPlace";
import { StartStopPlaceService } from "./startStopPlace.service";

@graphql.Resolver(() => StartStopPlace)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StartStopPlaceResolver extends StartStopPlaceResolverBase {
  constructor(
    protected readonly service: StartStopPlaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
