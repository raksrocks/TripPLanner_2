import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AttractionResolverBase } from "./base/attraction.resolver.base";
import { Attraction } from "./base/Attraction";
import { AttractionService } from "./attraction.service";

@graphql.Resolver(() => Attraction)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AttractionResolver extends AttractionResolverBase {
  constructor(
    protected readonly service: AttractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
