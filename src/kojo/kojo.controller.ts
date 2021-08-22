import { Controller, Post, Body } from "@nestjs/common";

import { KojoService } from './kojo.service';
// KojoService needs to be imported so that we can use this class as a type in the contoller constructor
@Controller('kojo')
export class KojoController {
    // injecting the insertKojo method so that we can use it. 
    constructor(private readonly myStash: KojoService) {}
    // private is used to ensure it is stored in an equally named property
    // readonly makes clear you wont replace myStash with a new value.

    @Post()
    addKojo(
        @Body('title') kojoTitle: string,
        @Body('description')kojoDesc: string,
        @Body('age')kojoAge: number,){
        const generatedId = this.myStash.insertKojo(kojoTitle, kojoDesc, kojoAge);
        // in an API, we want to return a JSON object so, we can return
        return {id: generatedId};
    }
}