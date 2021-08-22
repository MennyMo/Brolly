// tie features together with module

import { Module } from "@nestjs/common";

import { KojoController } from './kojo.controller';

import { KojoService } from "./kojo.service";

@Module({
    controllers: [KojoController],
    providers: [KojoService],
})
export class KojoModule {}