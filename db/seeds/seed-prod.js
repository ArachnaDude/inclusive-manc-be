// require in all necessary modules
const mongoose = require("mongoose");
const AccessInfo = require("../../models/accessinfo.model.js");
const Users = require("../../models/users.model.js");
const { userDevData } = require("../../db/seed-development.js");
const manchesterData = require("../manchesterBigData.json");
require("dotenv/config");

// IMPORTANT
// Before executing, make sure you're connected to the MongoDB cluster.
// At last test, executing this script takes approximately 5 minutes.

// This is an IIFE - immediately invoked function expression.
// It runs as soon as the file is called.
(async () => {
  try {
    // Opens a connection to the database specified by the .env file
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    console.log("Connected to PRODUCTION database - attempting to seed");

    // Seeding logic
    // TODO maybe take a look at possible improvements?
    await Users.deleteMany({});
    await Users.insertMany(userDevData);
    await AccessInfo.collection.drop();
    await AccessInfo.deleteMany({});

    // As this standalone seed file needs to close the connection,
    // the for of loop ensures that we're correctly awaiting
    // the creation of each element before the connection closes
    let keyArray = manchesterData.features;
    for (const element of keyArray) {
      await AccessInfo.create({
        _id: element.id.match(/[0-9]+/g).join(""),
        osm_type: element.properties["@id"].match(/[a-zA-Z]+/g).join(""),
        name: element.properties["name"],
        lat: element.geometry.coordinates,
        accessibility_ratings: [],
        attitude_ratings: [],
        equality_ratings: [],
        comments: [],
      });
    }

    console.log("PRODUCTION database now seeded");
  } catch (error) {
    console.error("Seeding of PRODUCTION database failed", error);
  } finally {
    // The close being in the finally block ensures
    // that the connection closes no matter what
    console.log("Closing connection");
    await mongoose.connection.close();
  }
})();
