import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AttractionServiceBase } from "./base/attraction.service.base";

@Injectable()
export class AttractionService extends AttractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
