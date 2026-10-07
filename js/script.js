// ELITE WEAR form validation and processing.

// Enquiry form: validates the input and returns information about price/availability.
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }
        const name = document.getElementById("enquiryName").value.trim();
        const category = document.getElementById("productCategory").value;
        const questionType = document.getElementById("productQuestion").value;
        document.getElementById("enquiryResponse").textContent =
            "Thank you, " + name + ". Your " + questionType.toLowerCase() +
            " enquiry about " + category +
            " has been received. We will confirm the current price and availability with you.";
        enquiryForm.reset();
    });
}

// Contact form: validates the input, compiles the message and opens the email application.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        // Demonstration recipient required for the coursework mailto process.
        const recipient = "elitewear@example.com";
        const subject = "ELITE WEAR - " + messageType;
        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Message Type: " + messageType + "\n\n" +
            "Message:\n" + message;

        document.getElementById("contactResponse").textContent =
            "Your message has been validated. Your email application will open so you can send the message to ELITE WEAR.";

        window.location.href = "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}