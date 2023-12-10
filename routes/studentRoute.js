import express from "express";
import StudentController from "../controllers/studentControllers.js";

const studentRoute = express.Router();

const studentController = new StudentController();


studentRoute.get("/:id",studentController.findById);

studentRoute.post("/add",studentController.addStudent);

studentRoute.patch("/update-gpa/:id",studentController.updateGPAById);

studentRoute.delete("/",studentController.deleteById);


export default studentRoute;