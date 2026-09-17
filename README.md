# Elite Wear Website

## WEDE5020

**Student Name:** CHE-RAE BAATJIES  
**Student Number:** ST10511240  
**Business Name:** Elite Wear

---

## 1. Project Overview

Elite Wear is a multi-page clothing business website created for a fashion store. The website provides information about the business, clothing categories, customer services, contact details, and an enquiry form.

The project is divided into two main practical parts:

- **Part 1 – HTML:** The structure and content of the website.
- **Part 2 – CSS:** The styling, layout, appearance, and responsive design of the website.

JavaScript is also used on the enquiry page for a simple form confirmation message.

---

## 2. Business Information

**Business Name:** Elite Wear  
**Address:** 76 Durban Street, Port Elizabeth  
**Telephone:** 0866724895

Elite Wear provides fashionable and affordable clothing for women, men, and children.

### Mission

To provide fashionable, affordable, and quality clothing while delivering friendly customer service.

### Vision

To become a trusted local clothing store and grow its online presence.

---

# PART 1 – HTML ONLY

## 3. HTML Purpose

HTML5 is used to create the structure and content of the Elite Wear website. HTML determines what information appears on each page and how the content is organised.

The HTML files are:

- `index/index.html`
- `Pages/about.html`
- `Pages/services.html`
- `Pages/enquiry.html`
- `Pages/contact.html`

---

## 4. HTML Features – Part 1

### 4.1 Multi-page website

The website contains five connected HTML pages:

- Home
- About
- Services
- Enquiry
- Contact

### 4.2 Semantic HTML

Semantic elements are used to organise the content clearly.

Examples:

- `header` – website header
- `nav` – navigation menu
- `main` – main page content
- `section` – groups related content
- `article` – individual content blocks
- `footer` – bottom section of the page

### 4.3 Navigation links

Anchor tags are used to connect the pages.

### 4.4 Headings and paragraphs

Heading elements such as `h1`, `h2`, and `h3` are used for titles and sections. Paragraph elements are used for normal website information.

### 4.5 Product and category content

HTML structures are used to display clothing categories, product information, benefits, and services.

### 4.6 Enquiry form

The Enquiry page contains:

- Full name input
- Email input
- Phone number input
- Product category selection
- Message textarea
- Submit button
- Required fields

### 4.7 HTML classes and attributes

Classes are added to HTML elements so that CSS can style specific parts of the pages.

Examples include:

- `home-page`
- `about-page`
- `services-page`
- `enquiry-page`
- `contact-page`
- `site-header`
- `main-nav`
- `nav-link`
- `category-card`
- `product-card`
- `benefit-card`
- `enquiry-form`
- `contact-card`
- `site-footer`

### 4.8 CSS connection

Each HTML page is connected to the shared CSS stylesheet using a `link` element.

---

## 5. HTML Syntax Examples – Part 1

### Basic HTML document syntax

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elite Wear</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

</body>
</html>
```

### Heading and paragraph syntax

```html
<h1>Elite Wear</h1>
<h2>Our Clothing</h2>
<p>Discover fashionable and affordable clothing at Elite Wear.</p>
```

### Navigation syntax

```html
<nav class="main-nav">
    <a class="nav-link" href="../index/index.html">Home</a>
    <a class="nav-link" href="about.html">About</a>
    <a class="nav-link" href="services.html">Services</a>
    <a class="nav-link" href="enquiry.html">Enquiry</a>
    <a class="nav-link" href="contact.html">Contact</a>
</nav>
```

### Section syntax

```html
<section class="home-section">
    <h2>Welcome to Elite Wear</h2>
    <p>Fashionable clothing for women, men and children.</p>
</section>
```

### Link syntax

```html
<a href="../Pages/services.html" class="primary-btn">View Services</a>
```

### Image syntax

```html
<img src="images/dress.jpg" alt="Fashion dress">
```

### Form syntax

```html
<form class="enquiry-form">
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit" class="submit-btn">Submit Enquiry</button>
</form>
```

---

# PART 2 – CSS ONLY

## 6. CSS Purpose

CSS3 is used to control the visual appearance and layout of the Elite Wear website.

The shared stylesheet is:

`css/style.css`

The stylesheet is organised into editable sections so that colours, fonts, spacing, buttons, cards, forms, navigation, and responsive layouts can be changed easily.

---

## 7. CSS Features – Part 2

### 7.1 Global styling

CSS provides common settings for the entire website, including:

- Box sizing
- Page margins
- Font family
- Text colour
- Background colour
- Line spacing

### 7.2 Header styling

The header CSS controls the appearance and position of the website header.

### 7.3 Navigation styling

CSS styles the navigation menu, including:

- Navigation spacing
- Link padding
- Link appearance
- Hover effects
- Mobile navigation

### 7.4 Hero section

The Home page hero section uses CSS for:

- Background styling
- Text alignment
- Section height
- Spacing
- Heading size
- Button positioning

### 7.5 Buttons

CSS styles buttons and call-to-action links with:

- Background colours
- Text colours
- Padding
- Rounded corners
- Hover effects
- Cursor changes

### 7.6 Cards

CSS is used for category cards, product cards, benefit cards, process cards, and contact cards.

Card styling includes:

- Background colour
- Padding
- Border radius
- Shadows
- Grid layout
- Spacing

### 7.7 Product grid

The Services page uses CSS Grid to organise product and clothing category cards.

### 7.8 About page styling

CSS creates styled information boxes for the About page, including spacing, borders, shadows, and readable content layouts.

### 7.9 Enquiry form styling

The form CSS controls:

- Form width
- Input fields
- Labels
- Textarea
- Select fields
- Submit button
- Form spacing
- Response message area

### 7.10 Contact page styling

CSS styles the contact information cards, guidance boxes, and enquiry button.

### 7.11 Footer styling

The footer CSS controls the background, text colour, alignment, spacing, and footer links.

### 7.12 Responsive design

Media queries are used to make the website suitable for smaller screens.

Responsive features include:

- Flexible navigation
- Single-column cards on smaller screens
- Smaller hero headings
- Flexible content containers
- Mobile-friendly forms
- Mobile-friendly spacing

### 7.13 Editable CSS template

The stylesheet contains comments showing where changes can be made. This makes it easier to edit the website without searching through the entire stylesheet.

---

## 8. CSS Syntax Examples – Part 2

### Basic CSS syntax

```css
selector {
    property: value;
}
```

### Body styling

```css
body {
    font-family: Arial, sans-serif;
    background: #f5f2ed;
    color: #333333;
    line-height: 1.6;
}
```

### Class selector

```css
.primary-btn {
    background: #333333;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 6px;
}
```

### Hover syntax

```css
.primary-btn:hover {
    background: #555555;
}
```

### Grid syntax

```css
.category-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}
```

### Card syntax

```css
.category-card {
    background: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 12px #00000012;
}
```

### Form input syntax

```css
input,
textarea,
select {
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 6px;
}
```

### Responsive media query syntax

```css
@media (max-width: 800px) {
    .category-cards {
        grid-template-columns: 1fr;
    }
}
```

---

## 9. Target Audience

The website is aimed at:

- Teenagers
- Young adults
- Adults
- Families
- Customers looking for affordable fashion
- Customers who want to make product enquiries

---

## 10. File Structure

```text
My-Website/
│
├── index/
│   └── index.html
│
├── Pages/
│   ├── about.html
│   ├── services.html
│   ├── enquiry.html
│   └── contact.html
│
├── css/
│   └── style.css
│
└── README.md
```

---

## 11. Technologies Used

### HTML5

Used to create the structure, content, forms, links, headings, sections, and page layout.

### CSS3

Used to create the visual design, colours, typography, grids, cards, buttons, forms, navigation, spacing, and responsive layouts.

### JavaScript

Used on the Enquiry page to provide a simple confirmation response after form submission.

### GitHub

Used to store the project and track development using commits.

---

## 12. Git and GitHub Commits

The project uses separate commits to show the development of the website.

Important development commits include:

- Expand Home page with detailed Elite Wear information
- Expand About page with company story, mission, vision, values and goals
- Expand Services page with detailed clothing categories and customer services
- Expand Contact page with detailed contact information and enquiry guidance
- Improve Enquiry form with phone field validation guidance and confirmation
- Improve shared stylesheet for expanded Elite Wear pages
- Add CSS attributes to Home page
- Add CSS attributes to About page
- Add CSS attributes to Services page
- Add CSS attributes to Enquiry page
- Add CSS attributes to Contact page
- Create editable CSS template for all website pages
- Update README with Part 1 HTML and Part 2 CSS features and syntax

---

## 13. Conclusion

Elite Wear is a multi-page clothing website that demonstrates the separation of website structure and presentation. **Part 1 uses HTML5** to create the pages, content, navigation, forms, and semantic structure. **Part 2 uses CSS3** to control colours, typography, layouts, cards, buttons, forms, navigation, and responsive design.

The project is organised so that the HTML and CSS can be edited separately while working together to create a consistent clothing-store website.
