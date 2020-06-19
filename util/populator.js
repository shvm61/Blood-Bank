const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userModel = require("./../model/user");
const names = require("./../data/names.json");
const surnames = require("./../data/surname.json");
const addresses = require("./../data/addresses.json");
const cities = require("./../data/cities.json");
let phones = require("./../data/phone.json");
const bloods = require("./../data/bloods.json");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connection successful!"));

const populate = async () => {
  console.log("Ready to populate!");
  phones = await [...new Set(phones)];
  await phones.forEach(phone => {
    new userModel({
      name:
        names[Math.floor(Math.random() * names.length)] +
        " " +
        surnames[Math.floor(Math.random() * surnames.length)],
      bloodGroup: bloods[Math.floor(Math.random() * bloods.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      phone: phone,
      amount: Math.floor(Math.random() * 10),
      address: addresses[Math.floor(Math.random() * addresses.length)]
    })
      .save()
      .then(user => {
        console.log(user.phone, " added!");
      });
  });
};
populate();
