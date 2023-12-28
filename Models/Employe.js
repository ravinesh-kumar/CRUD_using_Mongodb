const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String

    },
    email: {
        type: String

    },
    phone: {
        type: String

    },
    salary: {
        type: Number

    },
    desigination: {
        type: String

    },
    city: {
        type: String

    },
    state: {
        type: String

    },
})

const Employee = new mongoose.model("Employee", EmployeeSchema)  //table name modelschema  //model will communicate with db
module.exports = Employee   //export data