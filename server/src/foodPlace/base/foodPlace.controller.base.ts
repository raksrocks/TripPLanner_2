/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FoodPlaceService } from "../foodPlace.service";
import { FoodPlaceCreateInput } from "./FoodPlaceCreateInput";
import { FoodPlaceWhereInput } from "./FoodPlaceWhereInput";
import { FoodPlaceWhereUniqueInput } from "./FoodPlaceWhereUniqueInput";
import { FoodPlaceFindManyArgs } from "./FoodPlaceFindManyArgs";
import { FoodPlaceUpdateInput } from "./FoodPlaceUpdateInput";
import { FoodPlace } from "./FoodPlace";
@swagger.ApiBasicAuth()
export class FoodPlaceControllerBase {
  constructor(
    protected readonly service: FoodPlaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FoodPlace",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FoodPlace })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FoodPlaceCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FoodPlace> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FoodPlace",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FoodPlace"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        city: data.city
          ? {
              connect: data.city,
            }
          : undefined,
      },
      select: {
        city: {
          select: {
            id: true,
          },
        },

        closes: true,
        createdAt: true,
        geolocation: true,
        id: true,
        name: true,
        opens: true,
        rating: true,
        typeoffood: true,
        typicalTimespent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FoodPlace",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FoodPlace] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FoodPlaceFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FoodPlace[]> {
    const args = plainToClass(FoodPlaceFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FoodPlace",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        city: {
          select: {
            id: true,
          },
        },

        closes: true,
        createdAt: true,
        geolocation: true,
        id: true,
        name: true,
        opens: true,
        rating: true,
        typeoffood: true,
        typicalTimespent: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FoodPlace",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FoodPlace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FoodPlaceWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FoodPlace | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FoodPlace",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        city: {
          select: {
            id: true,
          },
        },

        closes: true,
        createdAt: true,
        geolocation: true,
        id: true,
        name: true,
        opens: true,
        rating: true,
        typeoffood: true,
        typicalTimespent: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FoodPlace",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FoodPlace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FoodPlaceWhereUniqueInput,
    @common.Body()
    data: FoodPlaceUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FoodPlace | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FoodPlace",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FoodPlace"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          city: data.city
            ? {
                connect: data.city,
              }
            : undefined,
        },
        select: {
          city: {
            select: {
              id: true,
            },
          },

          closes: true,
          createdAt: true,
          geolocation: true,
          id: true,
          name: true,
          opens: true,
          rating: true,
          typeoffood: true,
          typicalTimespent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FoodPlace",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FoodPlace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FoodPlaceWhereUniqueInput
  ): Promise<FoodPlace | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          city: {
            select: {
              id: true,
            },
          },

          closes: true,
          createdAt: true,
          geolocation: true,
          id: true,
          name: true,
          opens: true,
          rating: true,
          typeoffood: true,
          typicalTimespent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
