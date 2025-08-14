import { Global, Module } from "@nestjs/common";
import { HashService } from "src/services/hash.service";
import { JwtService } from "src/services/jwt.service";
import { PrismaService } from "src/services/prisma.service";

@Global()
@Module({
    providers: [PrismaService, HashService, JwtService],
    exports: [PrismaService, HashService, JwtService]
})
export class UtilsModule { }