import { model, Schema } from "mongoose";

const CommerceSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true},
    phone: { type: String, required: true}
});

export const Commerce = model('Commerce', CommerceSchema);