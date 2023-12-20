// mobile menu --------------------------------
// Toggle between class bars and xmark icons on click
let bars = document.querySelector("#bars");
bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  }
});

// Toggle sidebar visibility on mobile menu click
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});

// mobile menu --------------------------------

// Auto type --------------------------------
// Initializing typed text with looping options
var typed = new Typed(".auto-text", {
  strings: ["'m a Front-end developer", "build websites"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
// Auto type --------------------------------

// *************************************************************
// Google Apps Script URL for form submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzCgoOr6bwJMyjbkiP-7k-gstuDMpu25IjvL6NfpKYeVCZad51cgHnA5bkg35EMS_iT/exec";

// Loader functions for form submission
const loaderContainer = document.getElementById("loader-container");

function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}
// Function to submit form data
function submitForm(formData, formId, successMessage) {
  showLoader(); // Show loader when form is being submitted
  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert(successMessage);
        window.location.reload();
      } else {
        console.error("Error!", data.error);
      }
    })
    .catch((error) => console.error("Error!", error.message))
    .finally(() => {
      hideLoader(); // Hide loader when submission is complete
    });
}
// Handling form submission for form A
const formA = document.forms["contact-form"];
formA.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formA);
  formData.append("form_id", "form_a");
  submitForm(
    formData,
    "form_a",
    "Thank you! Your data is submitted successfully."
  );
});

// const formB = document.forms["contact-form-b"];
// formB.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formB);
//   formData.append("form_id", "form_b");
//   submitForm(
//     formData,
//     "form_b",
//     "Thank you! Your Form B data is submitted successfully."
//   );
// });

// *********************dowanload pdf*******************************
// Function to trigger download of a PDF
function downloadPDF() {
  // Replace 'path/to/your/file.pdf' with the path to your PDF file
  const fileURL = "/assets/images/contact.jpg";
  const fileName = "myresume.pdf";

  // Creating an invisible anchor element
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);

  // Setting the href attribute of the anchor to the file's URL
  a.href = fileURL;
  a.download = fileName;

  // Simulating a click on the anchor element to trigger the download
  a.click();

  // Cleanup
  document.body.removeChild(a);
}
