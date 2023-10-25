import { Schema } from "@nestjs/mongoose";
import { IsNotEmpty, IsString } from "class-validator";

@Schema({
    timestamps:true
})

export class UserDto {
    @IsNotEmpty()
    @IsString()
        name:string

    @IsNotEmpty()
    @IsString()
        email:string

    @IsNotEmpty()
    @IsString()
        password:string
}