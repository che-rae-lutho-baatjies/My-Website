// ELITE WEAR - Part 3 JavaScript interactions.
// Static front-end demonstration: no server, real account authentication, payments,
// live inventory or remote form storage is connected.
"use strict";

// Product enquiry form: validate and display a useful response.
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const response = document.getElementById("enquiryResponse");
        if (!enquiryForm.checkValidity()) { enquiryForm.reportValidity(); return; }
        const name = document.getElementById("enquiryName").value.trim();
        const email = document.getElementById("enquiryEmail").value.trim();
        const category = document.getElementById("productCategory").value;
        const questionType = document.getElementById("productQuestion").value;
        const message = document.getElementById("enquiryMessage").value.trim();
        if (!name || !email || !category || !questionType || message.length < 10) {
            response.textContent = "Please complete every field and enter an enquiry of at least 10 characters.";
            return;
        }
        response.textContent = "Thank you, " + name + ". Your " + questionType.toLowerCase() +
            " enquiry about " + category + " passed validation. This coursework demonstration does not send or store your enquiry.";
        enquiryForm.reset();
    });
}

// Contact form: validate and prepare a prefilled email draft.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();
        const response = document.getElementById("contactResponse");
        if (!name || !email || !phone || !messageType || message.length < 10) {
            response.textContent = "Please complete all required fields and enter a message of at least 10 characters.";
            return;
        }
        // Replace this coursework placeholder with the organisation's real monitored email.
        const recipient = "elitewear@example.com";
        const subject = "ELITE WEAR - " + messageType;
        const body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone +
            "\nMessage Type: " + messageType + "\n\nMessage:\n" + message;
        response.textContent = "Your message is validated and prepared. Review the draft in your email application and press Send.";
        window.location.href = "mailto:" + recipient + "?subject=" +
            encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
}

// Browser-local shopping cart. It stores category quantities only, not payment or personal data.
const CART_STORAGE_KEY = "eliteWearCart";
function readCart() {
    try {
        const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
        return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
    } catch (error) { return {}; }
}
function writeCart(cart) {
    try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); return true; }
    catch (error) { return false; }
}
function renderCart() {
    const container = document.getElementById("cartItems");
    if (!container) return;
    const entries = Object.entries(readCart()).filter(([name, quantity]) =>
        typeof name === "string" && Number.isInteger(quantity) && quantity > 0);
    container.replaceChildren();
    if (entries.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-cart";
        empty.textContent = "Your shopping cart is empty. Visit Products and select “Add to Shopping Cart” to begin.";
        container.appendChild(empty);
        return;
    }
    entries.forEach(([name, quantity]) => {
        const item = document.createElement("div"); item.className = "cart-item";
        const details = document.createElement("div");
        const heading = document.createElement("h2"); heading.textContent = name;
        const description = document.createElement("p"); description.textContent = "Fashion category selection";
        details.append(heading, description);
        const controls = document.createElement("div"); controls.className = "cart-quantity";
        function cartButton(text, label, action, style) {
            const button = document.createElement("button");
            button.className = style || "btn light"; button.type = "button";
            button.textContent = text; button.setAttribute("aria-label", label);
            button.addEventListener("click", action); return button;
        }
        controls.appendChild(cartButton("−", "Remove one " + name, function () {
            const cart = readCart();
            if ((cart[name] || 0) <= 1) delete cart[name]; else cart[name] -= 1;
            writeCart(cart); renderCart();
        }));
        const count = document.createElement("strong"); count.textContent = "Quantity: " + quantity;
        controls.appendChild(count);
        controls.appendChild(cartButton("+", "Add one " + name, function () {
            const cart = readCart(); cart[name] = Math.min(99, (cart[name] || 0) + 1);
            writeCart(cart); renderCart();
        }));
        controls.appendChild(cartButton("Remove", "Remove " + name + " from cart", function () {
            const cart = readCart(); delete cart[name]; writeCart(cart); renderCart();
        }, "btn"));
        item.append(details, controls); container.appendChild(item);
    });
}
document.querySelectorAll("[data-product]").forEach(function (button) {
    button.addEventListener("click", function () {
        const name = button.getAttribute("data-product");
        const cart = readCart(); cart[name] = Math.min(99, (cart[name] || 0) + 1);
        const saved = writeCart(cart);
        const originalText = button.textContent;
        button.textContent = saved ? "Added to Cart ✓" : "Storage unavailable";
        button.setAttribute("aria-live", "polite");
        if (!saved) button.disabled = true;
        window.setTimeout(function () { button.textContent = originalText; button.disabled = false; }, 1600);
    });
});
const clearCartButton = document.getElementById("clearCart");
if (clearCartButton) clearCartButton.addEventListener("click", function () { writeCart({}); renderCart(); });
renderCart();

// Login form: validation demonstration only; never save or transmit passwords here.
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const response = document.getElementById("loginResponse");
        if (!loginForm.checkValidity()) { loginForm.reportValidity(); return; }
        response.textContent = "Your fields passed browser validation. Real sign-in is not available in this static demonstration; no password was sent or saved.";
        loginForm.reset();
    });
}
