import express from "express";

const router = express.Router();
import {
    createMobiles,
    getAllMobiles,
} from "../services/mobiles.service.js";


router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);

    const result = await createMobiles(data);
    response.send(result);


});

router.get("/", async function (request, response) {
    const mobiles = await getAllMobiles(request);
    response.send(mobiles);
})



export default router;