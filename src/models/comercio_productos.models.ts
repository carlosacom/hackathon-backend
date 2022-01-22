import { model, Schema } from "mongoose";

const CommerceProductSchema = new Schema({
    commerce: { type:  Schema.Types.ObjectId, ref: "Commerce", required: true},
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true},
    price: { type: Number, required: true}
});

export const CommerceProduct = model('CommerceProduct', CommerceProductSchema);