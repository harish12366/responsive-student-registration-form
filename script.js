// Select the form
const form = document.querySelector("form");

// Select the table body
const tableBody = document.querySelector("tbody");


// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get form values
    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const address = document.querySelector("#address").value.trim();
    const pincode = document.querySelector("#pincode").value.trim();

    const genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );

    const state = document.querySelector("#state").value;
    const country = document.querySelector("#country").value;


    // ==============================
    // VALIDATION
    // ==============================

    // Validate first name
    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }


    // Validate last name
    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }


    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // Validate address
    if (address === "") {
        alert("Please enter your address.");
        return;
    }


    // Validate pincode
    const pincodePattern = /^\d{6}$/;

    if (!pincodePattern.test(pincode)) {
        alert("Pincode must contain exactly 6 digits.");
        return;
    }


    // Validate gender
    if (!genderElement) {
        alert("Please select your gender.");
        return;
    }

    const gender = genderElement.value;


    // Validate state
    if (state === "") {
        alert("Please select your state.");
        return;
    }


    // Validate country
    if (country === "") {
        alert("Please select your country.");
        return;
    }


    // ==============================
    // CREATE TABLE ROW
    // ==============================

    const newRow = document.createElement("tr");


    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;


    // Add row to table
    tableBody.appendChild(newRow);


    // Reset form after successful submission
    form.reset();
});