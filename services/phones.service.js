import { client } from "../index.js";

export async function createPhones(data) {
    return await client.db("rdb").collection("phones").insertMany(data);
}

export async function getAllPhones(request) {
    return await client.db("rdb").collection("phones").find({}).toArray();
}

export async function getPhoneById(id) {
    return await client
        .db("rdb").collection("phones").findOne({ id: id });
}