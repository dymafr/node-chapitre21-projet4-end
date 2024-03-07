const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/twitter?retryWrites=true"
  )
  .then((m) => {
    console.log("connexion db ok !");
    return m;
  })
  .catch((err) => console.log(err));
