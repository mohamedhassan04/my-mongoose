const express = require("express");
const personRouter = express.Router();
const Person = require("../models/person");

//create a person and save it
//req.body
//method POST

personRouter.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    let result = await newPerson.save();
    res.send({ result: result, msg: "user adedd" });
  } catch (error) {
    console.log(error);
  }
});
//get all person
//method GET

personRouter.get("/", async (req, res) => {
  try {
    let result = await Person.find();
    res.send({ persons: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});
//get one person
//method GET
//params

personRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await Person.findOne({ _id: req.params.id });
    res.send({ persons: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});
//update person
//method PUT
//params
//req.body

personRouter.put("/:id", async (req, res) => {
  try {
    let result = await Person.findOneAndUpdate({
      id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ newUser: result, msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});
//delete person
//method DELETE
//params
personRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "user deleted" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = personRouter;
