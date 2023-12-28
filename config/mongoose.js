const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://admin:test1234@cluster0.0iiv50y.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));