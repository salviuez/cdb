import express from "express";
import { MongoClient } from "mongodb";
import mobilesRouter from "./routes/mobiles.route.js";
import phonesRouter from "./routes/phones.route.js";
import electricalsRouter from "./routes/electricals.route.js";

import cors from "cors";
const app = express();
const PORT = 4000;

app.get("/", function (request, response) {
    response.send("Welcome")
})




//const MONGO_URL = "mongodb://localhost:27017";
//const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = "mongodb+srv://salviuez:Jesusatas19@cluster0.iy7r0xj.mongodb.net"
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongo is connected");


app.use(express.json());
app.use(cors());

app.use("/mobiles", mobilesRouter);
app.use("/phones", phonesRouter);
app.use("/electricals", electricalsRouter)

app.post("/register", async function (request, response) {
    const data = request.body;
    console.log(data);
    const mentor = await client.db("rdb").collection("capstone").insertMany([data]);

    response.send(mentor);
})


app.get("/login", async function (request, response) {
    const emailget = await client.db("rdb").collection("capstone").find({});
    response.send(emailget);
})

//login check
app.post("/login", async function (request, response) {
    try {
        const email = request.body.email;
        const password = request.body.password;
        //console.log(`${email} and your password is ${password}`);

        const emailpost = await client.db("rdb").collection("capstone").findOne({ email: email });

        if (emailpost.password === password) {
            response.status(201).send("Successfull Login")
        } else {
            response.status(400).send("Invalid Login Credentials");
        }

    } catch (error) {
        response.status(400).send("Invalid email")
    }
})


app.listen(PORT, () => console.log(`The server started in ${PORT}`));

export { client };
