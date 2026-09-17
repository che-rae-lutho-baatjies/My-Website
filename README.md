# ELITE WEAR Website

## WEDE5020

**Student Name:** CHE-RAE BAATJIES  
**Student Number:** ST10511240  
**Business Name:** ELITE WEAR  
**Proposed domain:** `www.elite.com`

---

## Table of Contents

1. Project overview
2. Business information
3. Part 1 – HTML features
4. Part 2 – CSS features
5. Website pages and sitemap
6. SMART goals and KPIs
7. Hosting and technical limitations
8. Folder structure
9. Technologies used
10. Installation and usage
11. Accessibility and responsive design
12. Budget and project timeframe
13. Version control
14. References
15. Contact information
16. Conclusion

> **Proposal documentation note:** If this README is used together with a separate proposal, update the proposal's table-of-contents page numbers after final editing. Page numbers should match the final PDF/Word document rather than being copied from an earlier draft.

---

## 1. Project Overview

ELITE WEAR is a multi-page clothing business website for a fashion store. The website provides product information, business information, customer enquiries, contact details, a shopping-cart interface, customer-login interface and frequently asked questions.

The practical development is separated into two main parts:

- **Part 1 – HTML:** structure, content, semantic elements, forms, navigation and accessibility attributes.
- **Part 2 – CSS:** colours, typography, spacing, grids, cards, buttons, navigation states and responsive layouts.

JavaScript is used only where interaction is required, such as the enquiry-form confirmation.

The design keeps the existing beige, cream, white and dark-grey colour palette while replacing the previous handwriting heading font with a readable web-safe sans-serif font.

---

## 2. Business Information

**Business name:** ELITE WEAR  
**Address:** 76 Durban Street, Port Elizabeth  
**Telephone:** 0866724895  
**Proposed domain:** `www.elite.com`

### Mission

To provide fashionable, affordable and quality clothing while delivering friendly customer service.

### Vision

To become a trusted local clothing store and grow its online presence.

### Target audience

- Teenagers
- Young adults
- Working adults
- Families
- Customers looking for affordable fashion
- Customers interested in product enquiries and online shopping

---

# PART 1 – HTML ONLY

## 3. HTML Features

HTML5 is used to create the structure and content of the website. The project uses semantic HTML to make the page structure easier to understand and maintain. Semantic structure and accessible markup are standard parts of modern HTML development (Mozilla Developer Network [MDN], n.d.-a).

### Main HTML features

- Five original business-content areas: Home, About, Products, Enquiry and Contact.
- Additional Customer Login, Shopping Cart and FAQ pages to align the website with the updated sitemap.
- Semantic elements such as `header`, `nav`, `main`, `section`, `article` and `footer`.
- Descriptive page titles and meta descriptions.
- Navigation links connecting all major pages.
- Active navigation-state classes.
- Product and category content.
- Enquiry form with labels and appropriate input types.
- Customer-login form.
- Shopping-cart interface.
- FAQ content for additional information depth.
- `aria-label` and `aria-live` attributes where they improve accessibility.
- Descriptive alternative text/labels for visual content.
- Relative links between files in the repository.
- CSS stylesheet linking through the `<link>` element.

### HTML example

```html
<header class="site-header">
    <nav class="main-nav" aria-label="Main navigation">
        <a class="active nav-link" href="index.html">Home</a>
        <a class="nav-link" href="../Pages/products.html">Products</a>
        <a class="nav-link" href="../Pages/cart.html">Shopping Cart</a>
    </nav>
</header>
```

### Enquiry-form example

```html
<form class="enquiry-form">
    <label for="email">Email Address</label>
    <input id="email" name="email" type="email" required>

    <label for="message">Your Enquiry</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Submit Enquiry</button>
</form>
```

---

# PART 2 – CSS ONLY

## 4. CSS Features

CSS3 controls the presentation and layout of the ELITE WEAR website. Responsive design uses flexible layouts and media queries so that content can adapt to different viewport sizes (MDN, n.d.-b).

### Main CSS features

- Global reset and box sizing.
- Web-safe sans-serif typography using Arial/Helvetica.
- Existing beige, cream, white and dark-grey colour palette.
- Header and navigation styling.
- Active and hover navigation states.
- Hero section styling.
- Reusable button styles.
- Product grids using CSS Grid.
- Flexible card layouts.
- Form and input styling.
- Shopping-cart styling.
- FAQ card styling.
- Contact-card styling.
- Footer styling.
- Mobile breakpoints using `@media` rules.
- Flexible navigation on smaller screens.
- Single-column layouts on narrow screens.
- Editable comments for complex or customisable CSS sections.

### CSS example

```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
```

### Responsive CSS example

```css
@media (max-width: 800px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
}
```

Media queries allow CSS rules to be applied according to the user's viewport or device environment and are a common technique for responsive design (MDN, n.d.-b).

---

## 5. Website Pages and Sitemap

The sitemap and navigation have been aligned with the feature list.

```text
ELITE WEAR
│
├── Home
├── About
├── Products
│   ├── Dresses
│   ├── Shirts & Tops
│   ├── Pants
│   └── Footwear
├── Enquiry
├── Shopping Cart
├── Customer Login
├── FAQ
└── Contact
```

### Page files

- `index/index.html` – Home
- `Pages/about.html` – About
- `Pages/products.html` – Products
- `Pages/enquiry.html` – Enquiry
- `Pages/cart.html` – Shopping Cart
- `Pages/login.html` – Customer Login
- `Pages/faq.html` – Frequently Asked Questions
- `Pages/contact.html` – Contact

The previous **Services** page was replaced by **Products** so that the navigation, sitemap and feature list use the same terminology.

---

## 6. SMART Goals and KPIs

The business goals have been rewritten as measurable objectives. Each KPI should be compared with a documented baseline recorded at the start of the seven-month project.

| SMART objective | KPI | Baseline | Target | Timeframe |
|---|---|---|---|---|
| Increase website reach | Monthly unique visitors | Month 1 launch count | 5,000 visitors/month | By month 4 |
| Increase sales generated through the website | Monthly website/enquiry sales | Month 1 sales baseline | +15% | Within 6 months |
| Increase customer engagement | Qualified product enquiries/month | Month 1 enquiry count | 100/month | By month 6 |
| Improve usability | Successful navigation/task-completion rate | Initial usability test | 90% | By month 7 |
| Improve content engagement | FAQ/product-page engagement | Month 1 analytics baseline | +20% | By month 7 |

**Baseline rule:** the final proposal should record the actual month-one values before claiming percentage growth. Targets are objectives, not current performance results.

---

## 7. Hosting and Technical Limitations

### Proposed domain

The proposed domain is `www.elite.com`. Domain availability and registration costs should be checked before launch because a proposed domain is not automatically available.

### Proposed hosting

The website can be hosted using a static web-hosting service such as GitHub Pages or another suitable hosting provider.

The final hosting plan should document:

- Available monthly bandwidth or traffic limits.
- Storage limits.
- HTTPS/SSL availability and certificate arrangements.
- Custom-domain support.
- Uptime expectations.
- Any limitations on server-side processing.
- Whether a database is supported.
- Whether forms require an external form service or backend.

The current repository is a static front-end project, so database-driven accounts, secure authentication, online payments and real order processing are future enhancements rather than current production functionality.

---

## 8. Folder Structure

The project uses a logical folder hierarchy:

```text
My-Website/
│
├── index/
│   └── index.html
│
├── Pages/
│   ├── about.html
│   ├── products.html
│   ├── enquiry.html
│   ├── cart.html
│   ├── login.html
│   ├── faq.html
│   └── contact.html
│
├── css/
│   └── style.css
│
├── assets/
│   └── (future images and media)
│
├── js/
│   └── (future external JavaScript files)
│
└── README.md
```

This structure keeps page content, styling, media and future scripts separated.

---

## 9. Technologies Used

### HTML5

Creates the website structure, content, semantic sections, forms, links and accessibility attributes.

### CSS3

Controls the visual appearance, typography, spacing, colours, grids, cards, buttons, navigation and responsive layout.

### JavaScript

Provides the enquiry-form confirmation interaction. A concise comment explains the purpose of the demonstration function.

### GitHub

Stores the website project and records development changes through incremental commits.

---

## 10. Installation and Usage

1. Clone or download the repository.
2. Open the project in a code editor such as Visual Studio Code.
3. Open `index/index.html` in a browser or use a local development server.
4. Use the navigation menu to test each page.
5. Test the enquiry form and confirmation message.
6. Resize the browser to test the responsive CSS breakpoints.
7. Edit `css/style.css` to change colours, typography, spacing and layout.

No database or server-side installation is currently required for the static demonstration.

---

## 11. Accessibility and Responsive Design

The website includes:

- Semantic HTML elements.
- Labels connected to form fields.
- Required form fields.
- Appropriate input types such as `email` and `tel`.
- Descriptive labels for visual icons.
- `aria-live` feedback for the enquiry response.
- Viewport meta tags.
- Flexible CSS Grid layouts.
- Responsive media queries.
- Readable sans-serif typography.
- Active navigation indicators.

If real product images are added later, every meaningful image should use a descriptive `alt` attribute. Decorative images should use an empty `alt` attribute where appropriate.

---

## 12. Budget and Seven-Month Project Timeframe

All project costs should be reported using the same **seven-month project timeframe**. This prevents one-off costs, monthly costs and annual costs from being mixed without explanation.

Recommended budget table for the final proposal:

| Expense item | Cost basis | Seven-month cost | Purpose |
|---|---|---:|---|
| Domain registration | One-off/annual | Enter actual quotation | Domain name |
| Hosting | Monthly × 7 months | Enter actual quotation | Website hosting |
| Design/software | Seven-month project | Enter actual cost | Development and design |
| Images/assets | Seven-month project | Enter actual cost | Product and branding media |
| Testing/maintenance | Seven-month project | Enter actual cost | Testing and updates |
| Contingency | Percentage of project cost | Enter calculated amount | Unexpected project expenses |
| **Total** | **Seven-month project** | **Calculate total** | **Full project cost** |

The final proposal should replace the placeholders with the actual quotations or approved budget figures. Each expense must explain how it contributes to the total.

---

## 13. Version Control

The project uses incremental and descriptive commits. Recent examples include:

- `Expand home page with detailed Elite Wear information`
- `Expand About page with company story mission vision values and goals`
- `Expand services page with detailed clothing categories and customer services`
- `Improve enquiry form with phone field validation guidance and confirmation`
- `Add CSS attributes to home page`
- `Add CSS attributes to about page`
- `Add CSS attributes to services page`
- `Create editable CSS template for all website pages`
- `Add Products page to match updated sitemap`
- `Add Shopping Cart page to website`
- `Add Customer Login page to website`
- `Add FAQ page for sufficient website content`
- `Improve CSS typography responsive layout and new pages`
- `Update README with HTML and CSS features and syntax`

This incremental history makes individual changes easier to identify and review.

---

## 14. References

The following references are used in the documentation with APA-style in-text citations. Reference entries use sentence case and identify the host/publisher.

Mozilla Developer Network. (n.d.-a). *HTML: HyperText Markup Language*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML

Mozilla Developer Network. (n.d.-b). *Responsive web design*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

Mozilla Developer Network. (n.d.-c). *CSS media queries*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries

---

## 15. Contact Information

**Business:** ELITE WEAR  
**Address:** 76 Durban Street, Port Elizabeth  
**Telephone:** 0866724895  
**Proposed website:** www.elite.com

---

## 16. Conclusion

The updated ELITE WEAR website addresses the main technical and documentation improvements identified in the feedback. The project now separates HTML and CSS features clearly, uses semantic HTML, responsive CSS, a readable sans-serif font, active navigation states, expanded content, a Products page, Shopping Cart page, Customer Login page and FAQ page. The README also documents the proposed domain, hosting limitations, folder structure, SMART goals, KPIs, seven-month budget framework, installation steps, accessibility considerations and APA-style references.

The separate proposal document should use the same terminology and sitemap so that the proposal, README and website remain consistent.
