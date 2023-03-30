import express from "express";

const router = express.Router();
import {
    createPhones,
    getAllPhones,
    getPhoneById,
} from "../services/phones.service.js";


router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);

    const result = await createPhones(data);
    response.send(result);


});

router.get("/", async function (request, response) {
    const phones = await getAllPhones(request);
    response.send(phones);
})


//get mobiles by id

router.get("/:id", async function (request, response) {


    const { id } = request.params;
    console.log(id);
    const phone = await getPhoneById(id);
    console.log(phone);




    phone ? response.send(phone) : response.status(404).send({ message: "phone not fount" });

});



export default router;