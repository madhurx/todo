import app from "./app";
import dotenv from "dotenv";
import connectDatabase from "./db";

dotenv.config({ path: "backend/dev.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
