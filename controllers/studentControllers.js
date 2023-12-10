import studentModel from "../models/studentModel.js";

export default class StudentController{

 async findById(req,res){

    const id = req.params.id;

    try{

    const studentData = await studentModel.findById(id);

    res.status(200).json(studentData);

    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }

}




async addStudent (req,res) {

    try{
        const newStudent = await studentModel.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            gpa : req.body.gpa
        });


        res.status(200).json(newStudent);
    }catch(err){

        res.json({
            success : false,
            message : err.message
        });
    }


}


async updateGPAById(req,res){
    const id = req.params.id;
    const gpa = req.body.gpa;

    try{

    const response = await studentModel.findOne({_id:id});

    response.gpa = gpa;

    await response.save();

    res.status(200).send({
        status : "Success",
        updatedData : response
    });

    }catch(err){
        res.status(500).json({
            status : "Failed",
            message :  err.message
        });
    }

}


async deleteById(req,res) {
    const id = req.body.id;


    try{
    const response = await studentModel.deleteOne({_id:id});

    res.status(200).json({
        status:"Success",
        deletedCount : response.deletedCount
    });

    


    }catch(err){
        res.status(500).json({
            status:"Failed",
            message : err.message
        })
    }
}


}