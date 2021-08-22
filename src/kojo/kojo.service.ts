import { Injectable } from "@nestjs/common";

import { Kojo } from './kojo.model'

@Injectable()

export class KojoService{
    kojo: Kojo[] = [];
    // create method to insert a new form of Kojo
    insertKojo(title: string, desc: string, age: number) {
        const kojoId = new Date().toString();
        const newKojo = new Kojo(new Date().toString(), title, desc, age);
        this.kojo.push(newKojo);
        return kojoId;
    }
}