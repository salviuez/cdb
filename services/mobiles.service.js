import { client } from "../index.js";

export async function createMobiles(data) {
    return await client.db("rdb").collection("mobiles").insertMany(data);
}

export async function getAllMobiles(request) {
    return await client.db("rdb").collection("mobiles").find({}).toArray();
}