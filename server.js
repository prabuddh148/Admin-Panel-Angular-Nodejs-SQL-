import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

import app from "./src/app.js";
import sequelize from "./src/config/dbConfig.js";

const PORT = process.env.PORT || 4000;

app.use(cookieParser());

// ====== Test DB Connection ======
async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1); // exit if DB connection fails
    }
}

// ====== Start Server ======
async function startServer() {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
}

startServer();
