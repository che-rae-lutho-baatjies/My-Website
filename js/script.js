// ELITE WEAR - Part 3 JavaScript interactions.
// Static front-end demonstration: no server, real account authentication, payments,
// live inventory or remote form storage is connected.
"use strict";

// JavaScript-only form validation helpers.
// All validation rules are checked here, not by HTML validation attributes.
function showFieldError(field, message) {
    let error = document.getElementById(field.id + "Error");
    if (!error) {
        error = document.createElement("small");
        error.id = field.id + "Error";
        error.className = "field-error";
        error.setAttribute("role", "alert");
        field.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
}
function clearFieldError(field) {
    const error = document.getElementById(field.id + "Error");
    if (error) error.textContent = "";
    field.removeAttribute("aria-invalid");
}
function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}
function isValidPhone(value) {
    const digits = value.replace(/\D/g, "");
    return /^[0-9 +()\-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
}
function validateText(field, label, minimum) {
    const value = field.value.trim();
    if (!value) { showFieldError(field, label + " is required."); return false; }
    if (minimum && value.length < minimum) {
        showFieldError(field, label + " must contain at least " + minimum + " characters.");
        return false;
    }
    clearFieldError(field);
    return true;
}
function validateEmail(field) {
    if (!field.value.trim()) { showFieldError(field, "Email address is required."); return false; }
    if (!isValidEmail(field.value.trim())) { showFieldError(field, "Enter a valid email address, for example name@example.com."); return false; }
    clearFieldError(field);
    return true;
}
function validateSelect(field, label) {
    if (!field.value) { showFieldError(field, "Please select " + label + "."); return false; }
    clearFieldError(field);
    return true;
}

// Product enquiry form.
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("enquiryName");
        const email = document.getElementById("enquiryEmail");
        const category = document.getElementById("productCategory");
        const questionType = document.getElementById("productQuestion");
        const message = document.getElementById("enquiryMessage");
        const valid = [
            validateText(name, "Full name", 2),
            validateEmail(email),
            validateSelect(category, "a product category"),
            validateSelect(questionType, "an enquiry type"),
            validateText(message, "Your enquiry", 10)
        ].every(Boolean);
        const response = document.getElementById("enquiryResponse");
        if (!valid) {
            response.textContent = "Please correct the highlighted fields and submit the form again.";
            const firstInvalid = enquiryForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        response.textContent = "Thank you, " + name.value.trim() + ". Your " + questionType.value.toLowerCase() +
            " enquiry about " + category.value + " passed JavaScript validation. This coursework demonstration does not send or store your enquiry.";
        enquiryForm.reset();
        enquiryForm.querySelectorAll("input, select, textarea").forEach(clearFieldError);
    });
}

// Contact form.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("contactName");
        const email = document.getElementById("contactEmail");
        const phone = document.getElementById("contactPhone");
        const type = document.getElementById("messageType");
        const message = document.getElementById("contactMessage");
        const valid = [
            validateText(name, "Full name", 2),
            validateEmail(email),
            validateText(phone, "Phone number", 7) && (function () {
                if (!isValidPhone(phone.value.trim())) { showFieldError(phone, "Enter a valid phone number with 7 to 15 digits."); return false; }
                clearFieldError(phone); return true;
            })(),
            validateSelect(type, "a message type"),
            validateText(message, "Your message", 10)
        ].every(Boolean);
        const response = document.getElementById("contactResponse");
        if (!valid) {
            response.textContent = "Please correct the highlighted fields and submit the form again.";
            const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        const recipient = "elitewear@example.com";
        const subject = "ELITE WEAR - " + type.value;
        const body = "Name: " + name.value.trim() + "\nEmail: " + email.value.trim() +
            "\nPhone: " + phone.value.trim() + "\nMessage Type: " + type.value +
            "\n\nMessage:\n" + message.value.trim();
        response.textContent = "Your message passed JavaScript validation. Review the draft in your email application and press Send.";
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

// Customer login form: front-end validation demonstration only.
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const validEmail = validateEmail(email);
        const validPassword = validateText(password, "Password", 6);
        const response = document.getElementById("loginResponse");
        if (!validEmail || !validPassword) {
            response.textContent = "Please correct the highlighted fields and try again.";
            const firstInvalid = loginForm.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        response.textContent = "Your email and password fields passed JavaScript validation. Real sign-in is not available in this static demonstration; no password was sent or saved.";
        loginForm.reset();
        loginForm.querySelectorAll("input").forEach(clearFieldError);
    });
}
