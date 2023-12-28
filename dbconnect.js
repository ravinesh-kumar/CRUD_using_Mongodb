const mongoose = require("mongoose")
//localhost ke jgha uski  IP address likhna pdega

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

    .then(() => {
        console.log("database connect successfully");
    })
    .catch((error) => {
        console.log(error);
    })