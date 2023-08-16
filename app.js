import express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
config({
    path:"./config/config.env"
})
const app = express();
//using middle wares
 app.use(express.json());
 app.use(
    express.urlencoded({
        extended:true,
    })
 );
 app.use(cookieParser())
import course from "./routes/courseRouter.js"
import user from "./routes/userRoutes.js"
import payment from "./routes/paymentRoutes.js"
import ErrorMiddleware from "./middlewares/Error.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);
export default app;

app.use(ErrorMiddleware)