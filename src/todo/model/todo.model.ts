import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Todo {
    @Prop()
        name: string;
    @Prop()
        task:string;
    @Prop()
        taskTime:string;
    
}


export const TodoSchema = SchemaFactory.createForClass(Todo)
