import { app } from "./app";
import { connect } from "mongoose";
import { env } from "./config/env";

connect(env.MONGO_URL, {}).then(() => app.listen(env.PORT, () => console.log('server runing: ' + env.PORT))).catch(err => console.log(err));
