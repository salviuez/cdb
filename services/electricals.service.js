import { client } from "../index.js";

export async function createElectricals(data) {
    return await client.db("rdb").collection("electricals").insertMany(data);
}

export async function getAllElectricals(request) {
    return await client.db("rdb").collection("electricals").find({}).toArray();
}

export async function getElectricalsById(id) {
    return await client
        .db("rdb").collection("electricals").findOne({ id: id });
}