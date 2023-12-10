import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : String,
    gpa : Number,
},
{
    timestamps : true
});

const studentModel = mongoose.model('Students',studentSchema);

export default studentModel;



