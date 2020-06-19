/* eslint-disable*/
const createDonor = async (name, city, bloodGroup, phone, amount) => {
  try {
    const result = await axios({
      method: "POST",
      url: "http://127.0.0.1:4000/api/users/",
      data: {
        name,
        city,
        bloodGroup,
        phone,
        amount
      }
    });
    alert("Blood Donated  Thank You!");
    window.location = "http://127.0.0.1:4000/overview";
  } catch (err) {
    alert("User already exists");
    document.querySelector(".form-example").reset();
    console.log(err.response.data);
  }
};

document.querySelector(".form-example").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const amount = document.getElementById("amount").value;
  const bloodgroup = document.getElementById("bloodgroup").value;
  const contact = document.getElementById("contact").value;
  console.log(
    name + " " + city + " " + bloodgroup + " " + amount + " " + contact
  );
  createDonor(name, city, bloodgroup, contact, amount);
});

console.log("hello");
