# Elite Wear Website

## WEDE5020

**Student Name:** CHE-RAE BAATJIES  
**Student Number:** ST10511240  
**Business Name:** Elite Wear

---

## 1. Project Overview

Elite Wear is a clothing business website created for a small fashion store. The website provides customers with information about the business, clothing categories, services, contact details, and an enquiry form.

The project demonstrates the use of **HTML, CSS, and JavaScript** to create a multi-page website with consistent navigation, responsive styling, forms, buttons, product sections, and customer-focused information.

---

## 2. Business Information

**Business Name:** Elite Wear  
**Address:** 76 Durban Street, Port Elizabeth  
**Telephone:** 0866724895

Elite Wear provides affordable and fashionable clothing for women, men, and children.

### Mission

To provide fashionable, affordable, and quality clothing while delivering friendly customer service.

### Vision

To become a trusted local clothing store and grow its online presence.

---

## 3. Target Audience

The website is aimed at:

- Teenagers
- Young adults
- Adults
- Families
- Customers looking for affordable fashion
- Customers who want to make product enquiries

---

## 4. Website Goals

The main goals of the website are to:

- Introduce Elite Wear to customers
- Promote clothing products and categories
- Provide information about the business
- Make contact information easy to find
- Allow customers to submit enquiries
- Provide simple navigation between all pages
- Present the business in a professional way
- Provide a responsive experience on different screen sizes

---

## 5. Website Pages

The project contains five main pages.

### Home Page

**File:** `index/index.html`

The Home page is the main entry point of the website.

Features include:

- Elite Wear introduction
- Hero section
- Welcome message
- Clothing category cards
- Benefits of shopping with Elite Wear
- Call-to-action buttons
- Links to the About, Services, Enquiry, and Contact pages
- Shared header and footer

### About Page

**File:** `Pages/about.html`

The About page explains the business and its purpose.

Features include:

- Company history
- Mission statement
- Vision statement
- Target audience
- Business goals
- Company values
- Structured information sections
- Navigation links to the other pages

### Services Page

**File:** `Pages/services.html`

The Services page presents the main clothing categories and customer services.

Features include:

- Dresses
- Shirts and tops
- Shoes
- Clothing categories
- Product cards
- Online shopping information
- Product search information
- Customer enquiry information
- Step-by-step service process
- Call-to-action buttons

### Enquiry Page

**File:** `Pages/enquiry.html`

The Enquiry page allows customers to submit questions about products and services.

The form includes:

- Full name field
- Email address field
- Phone number field
- Product category selection
- Enquiry message field
- Required-field validation
- Submit button
- Confirmation response
- Customer guidance information

JavaScript is used to handle the form submission and display a confirmation message to the customer.

### Contact Page

**File:** `Pages/contact.html`

The Contact page provides the information customers need to contact or visit Elite Wear.

It includes:

- Business address
- Telephone number
- Customer contact guidance
- Contact information cards
- Enquiry call-to-action button
- Links to the other website pages

---

## 6. Website Features

The website includes the following features:

### Navigation

- Five connected website pages
- Navigation menu on every page
- Home, About, Services, Enquiry, and Contact links
- Links use relative file paths so the pages work together inside the repository

### Product and Category Sections

- Clothing categories
- Product cards
- Product descriptions
- Clothing-related service information
- Structured product layouts

### Customer Enquiries

- Online enquiry form
- Name input
- Email input
- Phone input
- Category selection
- Message textarea
- Required-field validation
- JavaScript confirmation message

### Buttons and Calls to Action

- Primary buttons
- Enquiry buttons
- Navigation buttons
- Hover effects
- Links between related pages

### Responsive Design

The website includes responsive CSS rules for smaller screens.

Responsive features include:

- Flexible navigation
- Mobile-friendly page sections
- Responsive card layouts
- Flexible product grids
- Smaller heading sizes on mobile devices
- Mobile-friendly form layout

### Consistent Layout

All pages use common design classes for:

- Header
- Navigation
- Main content
- Sections
- Cards
- Buttons
- Footer

This creates a consistent appearance throughout the website.

---

## 7. CSS Features

**File:** `css/style.css`

The stylesheet is shared by all pages and has been organised into editable sections.

CSS features include:

- Global reset
- Page background styling
- Typography
- Header styling
- Navigation styling
- Navigation hover effects
- Hero section styling
- Button styling
- Section layouts
- Card layouts
- Product grids
- About content boxes
- Enquiry form styling
- Contact cards
- Footer styling
- Responsive media queries
- Mobile layout adjustments

The CSS also contains comments that make it easier to identify areas that can be edited.

---

## 8. HTML Features

HTML is used to create the structure of the website.

The project uses semantic and structured elements such as:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `form`
- `label`
- `input`
- `select`
- `textarea`
- `button`

Classes have been added to the pages so that the CSS can target individual sections.

Examples include:

- `home-page`
- `about-page`
- `services-page`
- `enquiry-page`
- `contact-page`
- `site-header`
- `main-nav`
- `nav-link`
- `product-card`
- `category-card`
- `benefit-card`
- `enquiry-form`
- `contact-card`
- `site-footer`

---

## 9. JavaScript Features

JavaScript is used mainly on the Enquiry page.

The JavaScript functionality includes:

- Detecting form submission
- Preventing the page from refreshing during the demonstration
- Displaying a confirmation message
- Giving feedback to the customer after submitting an enquiry

This makes the enquiry form more interactive than a basic HTML form.

---

## 10. Design and Styling

The website uses a clean fashion-store design.

### Colour Scheme

The main colours include:

- Beige
- Cream
- Grey
- White
- Dark grey

These colours are used to create a simple and modern clothing-store appearance.

### Typography

The website uses:

- **Headings:** Lucida Handwriting
- **Body text:** Calibri / Arial

### Layout

The layout uses:

- Hero sections
- Content containers
- Product cards
- Category cards
- Information boxes
- Buttons
- Forms
- Footer sections
- Responsive grids

---

## 11. User Experience

The website is designed to be simple and easy to use.

User experience features include:

- Clear navigation
- Easy-to-read information
- Consistent page structure
- Clearly labelled buttons
- Simple enquiry process
- Easy access to contact information
- Responsive layouts
- Clear product categories
- Customer guidance sections

---

## 12. File Structure

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

## 13. Page Linking

The website pages are connected using HTML anchor links.

The Home page links to:

- About
- Services
- Enquiry
- Contact

The other pages also contain navigation links back to the Home page and to the other main sections.

The CSS file is linked to the HTML pages using relative paths, for example:

```html
<link rel="stylesheet" href="../css/style.css">
```

For the Home page inside the `index` folder:

```html
<link rel="stylesheet" href="../css/style.css">
```

---

## 14. Technologies Used

### HTML5

Used to create the structure and content of the website.

### CSS3

Used for the visual appearance, layout, colours, typography, buttons, cards, forms, navigation, and responsive design.

### JavaScript

Used to provide interactive confirmation behaviour on the enquiry form.

### GitHub

Used to store, manage, and track the website project and its changes through commits.

---

## 15. Git and GitHub Development

The project was developed using separate commits for major website improvements.

The commit history includes changes for:

- Expanding the Home page
- Expanding the About page
- Expanding the Services page
- Expanding the Contact page
- Improving the Enquiry page
- Improving the shared stylesheet
- Linking pages and CSS
- Adding CSS classes and attributes to individual pages
- Creating an editable CSS template
- Updating project documentation

This commit structure makes it easier to track the development of the website.

---

## 16. Current Project Features Summary

| Feature | Description |
|---|---|
| Home page | Introduces Elite Wear and highlights clothing categories |
| About page | Provides company information, mission, vision, values, and goals |
| Services page | Displays clothing categories and customer services |
| Enquiry page | Allows customers to submit product enquiries |
| Contact page | Provides business contact and location information |
| Navigation | Connects all website pages |
| CSS | Provides the shared design and responsive layout |
| JavaScript | Provides enquiry form confirmation |
| Product cards | Organise clothing categories and product information |
| Forms | Collect customer enquiry information |
| Buttons | Provide clear calls to action |
| Responsive design | Supports different screen sizes |
| GitHub | Stores and tracks project development |
| README | Documents the project, features, structure, and technologies |

---

## 17. Future Improvements

Possible future improvements include:

- Adding real product images
- Adding product prices and stock information
- Adding a shopping cart
- Adding online payment functionality
- Connecting the enquiry form to a database
- Adding customer accounts
- Adding product search functionality
- Adding product filtering
- Adding social media links
- Adding an online checkout system

---

## 18. Conclusion

Elite Wear is a multi-page clothing website that demonstrates the use of HTML, CSS, and JavaScript to create a structured and interactive business website. The project includes product information, business information, customer contact details, an enquiry form, navigation, responsive design, and an editable shared stylesheet.

The README documents the project's purpose, pages, features, technologies, structure, and future development ideas.