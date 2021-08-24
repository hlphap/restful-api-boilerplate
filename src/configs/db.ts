import mongoose from "mongoose";

function connect() {
    mongoose.connect("mongodb://localhost/nodejs-api-starter", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
        .then(() => {
            console.log(`✅Connected Successfully`);
        })
        .catch((error) => {
            console.log(`❌Connect is failed ${error}`)
        })
}

export {
    connect
}