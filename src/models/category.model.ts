import { model, Schema } from "mongoose";

const CategorySchema = new Schema({ 
    Name: { type: String, required: true}
});

export const Category = model('Category', CategorySchema);