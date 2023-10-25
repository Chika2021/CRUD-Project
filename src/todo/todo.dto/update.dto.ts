import { Schema } from "@nestjs/mongoose";
import { IsOptional, IsString } from "class-validator";


@Schema({
    timestamps:true
})

export class UpdateDto {

    @IsOptional()
    @IsString()
        name:string

    @IsOptional()
    @IsString()
        task:string

    @IsOptional()
    @IsString()
        taskTime:string

        
}

