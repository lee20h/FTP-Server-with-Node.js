import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`🎈 Listening Port: ${PORT}`);
};

app.listen(PORT, handleListening);
