

import { IsNotEmpty, IsString } from "class-validator";

export class TodoDto {
    @IsNotEmpty()
    @IsString()
        readonly name:string

    @IsNotEmpty()
    @IsString()
        readonly task:string

    @IsNotEmpty()
    @IsString()
        readonly taskTime:string
}