// ELITE WEAR form validation and processing.
// This is a front-end demonstration. It does not store form submissions on a server.

// Enquiry form: validate the input and display a category-specific response.
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
        const response = document.getElementById("enquiryResponse");

        if (!name || !category || !questionType) {
            response.textContent = "Please complete all required fields before submitting.";
            return;
        }

        response.textContent =
            "Thank you, " + name + ". Your form passed validation for a " +
            questionType.toLowerCase() + " enquiry about " + category +
            ". This demonstration does not send or save your enquiry. Please use the Contact page to prepare an email.";
        enquiryForm.reset();
    });
}

// Contact form: validate the input, compile a message and open the user's email application.
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
        const response = document.getElementById("contactResponse");

        // Check trimmed values as well as the browser's HTML5 validation.
        if (!name || !email || !phone || !messageType || !message) {
            response.textContent = "Please complete all required fields before continuing.";
            return;
        }

        // Replace this coursework placeholder with the organisation's real recipient email.
        const recipient = "elitewear@example.com";
        const subject = "ELITE WEAR - " + messageType;
        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Message Type: " + messageType + "\n\n" +
            "Message:\n" + message;

        response.textContent =
            "Your message has been validated and prepared. Your email application should open; review the message and press Send to email ELITE WEAR.";

        window.location.href = "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}
