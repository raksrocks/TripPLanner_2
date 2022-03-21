import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StartStopPlaceServiceBase } from "./base/startStopPlace.service.base";

@Injectable()
export class StartStopPlaceService extends StartStopPlaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
