var mongoose = require("mongoose");

var connectionString =
  "mongodb://dbuser:dbuser1@ds016718.mlab.com:16718/pokemons";
mongoose.connect(connectionString, { useNewUrlParser: true });

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var mySchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    backgroundPosition: String,
    type: String,
    type2: String,
    name: String
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Pokemon", mySchema);
