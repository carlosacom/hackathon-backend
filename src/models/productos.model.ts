import { model, Schema } from "mongoose";

const ProductsSchema = new Schema({
    name_product: { type: String, required: true},
    mark: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true}

});

export const Product = model('Product', ProductsSchema);