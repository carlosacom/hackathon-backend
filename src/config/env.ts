import { config } from 'dotenv';
config();

export const env = {
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL || ''
}