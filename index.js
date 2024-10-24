import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.js";
import speakerRoutes from "./routes/speakers.js";
import teamRoutes from "./routes/team.js";
import authRoutes from "./routes/auth.js";
import joinRoutes from "./routes/join.js";
import bodyParser from "body-parser";
import newsletterRoutes from "./routes/newsletter.js";
import cookieParser from "cookie-parser";
import workshopRoutes from "./routes/workshop.js";

const app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));
app.use(cookieParser());

app.use("/blog", blogRoutes);
app.use("/speakers", speakerRoutes);
app.use("/team", teamRoutes);
app.use("/auth", authRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/join", joinRoutes);
app.use("/workshop", workshopRoutes);

app.get("/", (req, res) => {
	res.json("Hello backend TEDxSapienzaU!");
});

app.listen(process.env.PORT || 5500, () => {
	console.log("Running Server");
});
