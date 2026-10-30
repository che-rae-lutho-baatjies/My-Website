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
14. Changelog
15. References
16. Contact information
17. Conclusion
18. Part 3 – Feedback from Part 2
19. Form elements and validation
20. Search engine optimisation (SEO)
21. Testing checklist
22. Deployment and publishing
23. Part 3 changelog
24. Functionality implemented
25. Part 3 verification checklist
26. Part 4 – JavaScript enhancements
27. Part 5 – Search Engine Optimisation (SEO)
28. Form functionality, validation and AJAX submission

> **Proposal documentation note:** If this README is used together with a separate proposal, update the proposal's table-of-contents page numbers after final editing. Page numbers should match the final PDF/Word document rather than being copied from an earlier draft.

---

## 1. Project Overview

ELITE WEAR is a multi-page clothing business website for a fashion store. The website provides product information, business information, customer enquiries, contact details, a shopping-cart interface, customer-login interface and frequently asked questions.

The practical development is separated into two main parts:

- **Part 1 – HTML:** structure, content, semantic elements, forms, navigation and accessibility attributes.
- **Part 2 – CSS:** colours, typography, spacing, grids, cards, buttons, navigation states and responsive layouts.

JavaScript is used for interactive features, including form validation and asynchronous AJAX submission of Enquiry and Contact forms through the external FormSubmit service.

The design keeps the existing beige, cream, white and dark-grey colour palette while using a readable web-safe sans-serif font.

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

- Home, About, Products, Enquiry and Contact pages.
- Additional Customer Login, Shopping Cart and FAQ pages to align the website with the updated sitemap.
- Semantic elements such as `header`, `nav`, `main`, `section`, `article` and `footer`.
- Descriptive page titles and meta descriptions.
- Navigation links connecting all major pages.
- Active navigation-state classes and `aria-current` on the current page where appropriate.
- Product and category content.
- Enquiry form with labels and appropriate input types for product, price, size, colour and availability enquiries.
- Contact form with basic contact details, message type and full-message fields for general communication.
- Customer-login form.
- Shopping-cart interface.
- FAQ content for additional information depth.
- `aria-label` and `aria-live` attributes where they improve accessibility.
- Descriptive labels for visual icons and meaningful alternative text for future image assets.
- Relative links between files in the repository.
- External CSS stylesheet linking through the `<link>` element.

### HTML example

```html
<header class="site-header">
    <nav class="main-nav" aria-label="Main navigation">
        <a class="active nav-link" href="index.html" aria-current="page">Home</a>
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
- Active, hover and focus navigation/form states.
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
- Responsive image rules using `max-width: 100%` and `height: auto`.
- Product-image sizing adjustments at tablet and mobile breakpoints.
- Concise comments for editable/customisable CSS sections.

### CSS default-style example

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; }
```

### CSS typography example

```css
h1, h2, h3 {
    font-family: Arial, Helvetica, sans-serif;
}
```

### CSS layout example

```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
```

### CSS decoration and colour example

```css
.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 12px #00000012;
}
```

### CSS pseudo-class example

```css
.nav-link:hover,
.nav-link.active {
    background: #e6e1da;
}

input:focus,
textarea:focus,
select:focus {
    outline: 2px solid #999;
}
```

### Responsive CSS example

```css
@media (max-width: 800px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 500px) {
    .hero h1 {
        font-size: 34px;
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
- `Pages/enquiry.html` – Enquiry (product/service information, price and availability)
- `Pages/cart.html` – Shopping Cart
- `Pages/login.html` – Customer Login
- `Pages/faq.html` – Frequently Asked Questions
- `Pages/contact.html` – Contact (general message form and email preparation)

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

```text
My-Website/
│
├── index/
│   └── index.html
├── Pages/
│   ├── about.html
│   ├── products.html
│   ├── enquiry.html
│   ├── cart.html
│   ├── login.html
│   ├── faq.html
│   └── contact.html
├── css/
│   └── style.css
├── assets/
│   └── (future images and media)
├── js/
│   └── (future external JavaScript files)
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

Provides client-side form validation, asynchronous form submission, product search and sorting, image lightbox behaviour, FAQ accordions, cart interactions and login-form demonstration feedback.

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
- `aria-current` for current navigation pages where appropriate.
- Viewport meta tags.
- Flexible CSS Grid layouts.
- Responsive media queries for tablet and mobile layouts.
- Responsive image rules so future product images scale within their containers.
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

The project uses incremental and descriptive commits. Each update is committed directly to the remote `main` branch so that page changes, CSS improvements, JavaScript features, SEO work and documentation updates can be reviewed in the repository history. The commit history is the record of pushed changes.

---

## 14. Changelog

The following changelog records the main development stages of the website. The entries below use the actual commits that were verified in the repository.

| Commit | Development change |
|---|---|
| `b38f625` | Created an editable external CSS template for the website pages. |
| `d01a002` | Updated the README with HTML and CSS features and syntax. |
| `c335792` | Replaced the Services page with the Products page. |
| `332a008` | Improved the home page navigation, semantics and branding. |
| `2900a196` | Improved the About page goals and navigation. |
| `3be7af4` | Improved the Enquiry page navigation and accessibility. |
| `0c232ed` | Improved the Contact page navigation and semantics. |
| `8380ab6` | Improved CSS typography, responsive layout and styling for the new pages. |
| `0719394` | Updated the README with rubric improvements and project documentation. |
| `d790114` | Added responsive image styling and image adjustments for tablet/mobile breakpoints. |
| `d58055f` | Improved the Products page content and accessibility. |
| `7d2d3ee` | Improved Shopping Cart accessibility and navigation. |
| `11cb3d3` | Improved enquiry/contact form validation and clarified front-end submission behaviour. |
| `1124f1b` | Added browser-local cart interactions and login/form validation logic. |
| `aa86c11` | Added keyboard focus visibility, skip links support and reduced-motion styling. |
| `ddc359b` | Added product-category buttons that add selections to the shopping cart. |
| `842ccf2` | Replaced static cart examples with editable quantities, removal and clear-cart controls. |
| `940947f` | Added validation feedback to the customer login demonstration without storing passwords. |
| `d68de1c` | Improved root home page keyboard accessibility. |
| `bdafb3f` | Improved FAQ page keyboard accessibility. |
| `e8f4516` | Documented Part 3 functionality and the verification checklist. |
| `6eea906` | Updated the README contents list to include Part 3 sections. |
| `8b44090` | Connected the Enquiry form to the FormSubmit AJAX endpoint with POST submission, email metadata and a honeypot field. |
| `81c8937` | Connected the Contact form to the FormSubmit AJAX endpoint and improved telephone input validation. |
| `5da3a52` | Added asynchronous form submission handling, loading feedback and accessible success/failure messages while preserving cart and page interactions. |
| `69698f1` | Updated the README with the final AJAX form workflow, recipient activation, privacy considerations and testing requirements. |
| `9f332f3` | Updated Part 3 documentation, changelog entries and APA-style references for the latest implementation. |

The project therefore demonstrates multiple incremental, descriptive commits rather than one large submission commit.

---

## 15. References

The following references support the HTML, CSS, responsive design, JavaScript, form submission, accessibility, SEO and publishing guidance in this README. Reference entries use APA-style formatting and identify the publisher or host.

Mozilla. (n.d.-a). *HTML: HyperText Markup Language*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML

Mozilla. (n.d.-b). *Responsive web design*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

Mozilla. (n.d.-c). *CSS media queries*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries

Mozilla. (n.d.-d). *Using the Fetch API*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Mozilla. (n.d.-e). *Constraint validation*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

FormSubmit. (n.d.). *FormSubmit: Easy form endpoints*. https://formsubmit.co/

GitHub. (n.d.-a). *Configuring a publishing source for your GitHub Pages site*. GitHub Docs. https://docs.github.com/en/pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub. (n.d.-b). *About GitHub Pages*. GitHub Docs. https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages

Schema.org. (n.d.). *ClothingStore*. https://schema.org/ClothingStore

---

## 16. Contact Information

**Business:** ELITE WEAR  
**Address:** 76 Durban Street, Port Elizabeth  
**Telephone:** 0866724895  
**Proposed website:** www.elite.com

---

## 17. Conclusion

The updated ELITE WEAR website addresses the main technical and documentation improvements identified in the feedback. The project now separates HTML and CSS features clearly, uses semantic HTML, responsive CSS, a readable sans-serif font, active navigation states, expanded product content, a Products page, Shopping Cart page, Customer Login page and FAQ page. The README also documents the proposed domain, hosting limitations, folder structure, SMART goals, KPIs, seven-month budget framework, installation steps, accessibility considerations, responsive image handling, version control and APA-style references.

The separate proposal document should use the same terminology and sitemap so that the proposal, README and website remain consistent.


---

# PART 3 – ENHANCING FUNCTIONALITY AND SEO

## 18. Feedback from Part 2

Part 3 builds on the existing HTML and CSS work. The website keeps the ELITE WEAR name, Products terminology, shared navigation, external stylesheet, responsive layout and the beige, cream, white and dark-grey colour palette.

The JavaScript was reviewed and updated to:
- Validate required Enquiry and Contact fields using HTML5 form validity checks and custom JavaScript checks.
- Check trimmed field values, email format and telephone number format before submission.
- Display field-level errors and accessible success or failure messages.
- Submit both forms asynchronously with the browser `fetch()` API to the FormSubmit AJAX endpoint.
- Keep visitors on the current page while a submission is processed and show a sending state.
- Disable the submit button during the request to reduce accidental duplicate submissions.

### Important form-processing setup

The Enquiry and Contact forms use the FormSubmit service to forward submitted messages to the configured recipient, `st10511240@rcconnect.edu.za`. The recipient must complete FormSubmit's first-time activation process before email delivery can be relied on. A successful AJAX response means the service accepted the submission; it does not prove that the recipient has read the email. The website still has no custom server or database, and the product enquiry form cannot check live stock or calculate live prices.

## 19. Form Elements and Validation

### Enquiry form — `Pages/enquiry.html`

The enquiry form collects the customer's name, email address, product category, enquiry type and a full message. Required fields, the email input type and minimum text lengths support validation. After successful validation, JavaScript submits the form asynchronously through FormSubmit and displays a sending, success or failure response. The store must confirm exact prices and stock because no live inventory system is connected.

### Contact form — `Pages/contact.html`

The contact form collects the customer's name, email address, telephone number, message type and full message. Required fields, email and telephone input types, a telephone pattern and minimum message length help validate input. JavaScript submits the validated values asynchronously to the configured FormSubmit recipient.

HTML5 and JavaScript validation improve the user experience but do not replace server-side validation. Server-side processing would be required before the site could securely store enquiries, manage accounts or process orders.

## 20. Search Engine Optimisation (SEO)

The page markup uses descriptive page titles, meta descriptions, a language declaration, a responsive viewport setting, meaningful headings and links with clear text. The main pages use descriptive content relevant to ELITE WEAR and its clothing categories.

SEO checks before publishing:
- Keep each page title and meta description specific to that page.
- Use a clear heading hierarchy, with one main `h1` heading per page where practical.
- Use descriptive link text rather than vague phrases such as “click here”.
- Add descriptive `alt` text to meaningful product photographs; use empty `alt` text for purely decorative images.
- Use readable, descriptive file names and keep internal links working.
- Check all pages on mobile and desktop, and correct broken links.
- Do not add a canonical URL or sitemap URL until the final public website address is confirmed.
- Do not claim that search ranking or traffic has improved without measurement.

## 21. Testing Checklist

Before submission, manually test the following in a browser:

- [ ] Open Home, About, Products, Enquiry, Shopping Cart, Customer Login, FAQ and Contact from the navigation.
- [ ] Confirm that every page loads the external `css/style.css` stylesheet.
- [ ] Submit each form with empty fields and confirm that validation prevents processing.
- [ ] Submit the enquiry form with valid details and confirm that the response appears.
- [ ] Submit the contact form with valid details and confirm that the AJAX response appears without a page reload.
- [ ] Complete FormSubmit's first-time recipient activation and verify delivery with a real test message.
- [ ] Test keyboard focus, visible hover/focus states, and mobile navigation/layout.
- [ ] Check the browser console and correct JavaScript errors.
- [ ] Check internal links and page titles before publishing.

## 22. Deployment and Publishing

The website files are stored in the remote GitHub repository. The root-level `index.html` is the entry point for a standard GitHub Pages deployment. Updating files through GitHub commits writes the changes to the remote repository; GitHub Pages must still be enabled in the repository settings to publish the site. The project also contains `index/index.html`; keep the two home pages consistent when making future edits.

To publish the static website using GitHub Pages:

1. Open the repository on GitHub and select **Settings**.
2. Open **Pages** in the repository settings.
3. Under the build/deployment source, choose **Deploy from a branch** if that option is available.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Wait for the deployment status to complete.
6. Open the published URL shown in the Pages settings and test all navigation links and forms.

Confirm the final URL in GitHub Pages settings rather than assuming the proposed `www.elite.com` domain is already active. Deployment is not confirmed until the Pages settings show a published URL and that URL loads successfully.

## 23. Part 3 Changelog Entry

- **2026-10-29 — Improve form validation and clarify submission behaviour:** strengthened checks for trimmed form values, required selections, email addresses, telephone numbers and minimum message lengths; added accessible field-level feedback.
- **2026-10-29 — Document Part 3 functionality and SEO:** added notes on feedback changes, form elements, validation, SEO best practices, testing, deployment steps and the limits of a static front-end website.
- **2026-10-30 — Connect Enquiry and Contact forms to asynchronous email submission:** configured both forms to use the FormSubmit AJAX endpoint with POST requests, a table email template, subject lines and a honeypot field.
- **2026-10-30 — Improve AJAX form handling:** added shared JavaScript submission handling, a sending state, disabled submit buttons during requests, accessible success/failure feedback and form reset after an accepted response.
- **2026-10-30 — Update documentation for the final form implementation:** replaced outdated mailto/demo descriptions with the current FormSubmit AJAX workflow, documented recipient activation, privacy considerations and the difference between service acceptance and confirmed email delivery.


## 24. Part 3 – Functionality Implemented

The following practical features are included in the repository:

- **Enquiry form:** browser validation, required-field checks, trimmed text values and asynchronous submission to the configured FormSubmit recipient. Exact prices and stock still require confirmation by the store.
- **Contact form:** browser validation for name, email, phone, message type and full message; submits the message asynchronously to the configured FormSubmit recipient.
- **Shopping cart:** product-category buttons add categories to a browser-local cart; users can increase/decrease quantities, remove a category and clear the cart. The cart uses `localStorage` and does not collect personal information.
- **Customer login demonstration:** validates required fields and explains that real authentication is not available. Passwords are not stored or sent by this front-end script.
- **Accessibility:** skip-to-main-content links, keyboard-visible focus styles, live response regions, semantic elements and a reduced-motion preference.
- **SEO and maintainability:** descriptive page titles and meta descriptions, clear navigation labels, headings, page-specific content and responsive image defaults.

### Important limits and final setup

This is a static coursework website. It has no backend/database, secure account authentication, order processing, payment gateway, live inventory or server-side form delivery. The cart is saved only in the same browser on the same device. The Enquiry and Contact forms are configured to send through FormSubmit to `st10511240@rcconnect.edu.za`. The recipient must complete first-time activation, and end-to-end delivery still needs a browser test.

The root-level `index.html` is the GitHub Pages entry page and links to the pages in `Pages/`. The additional `index/index.html` file is retained for the existing coursework structure; keep both home pages aligned when editing.

## 25. Part 3 Verification Checklist

- [ ] Open the root `index.html` and follow all navigation links.
- [ ] Confirm every page loads `css/style.css`.
- [ ] Test the Products add-to-cart buttons, then change quantities and remove/clear items on the Shopping Cart page.
- [ ] Reload the page to confirm the cart persists in the same browser.
- [ ] Submit Enquiry and Contact with empty and valid inputs to test validation.
- [ ] Confirm Contact submits asynchronously without reloading the page; complete recipient activation and verify delivery with a test message.
- [ ] Submit the Customer Login form and confirm the demonstration notice appears.
- [ ] Test keyboard-only navigation and a narrow mobile viewport.
- [ ] Check browser developer tools for broken links, missing assets and JavaScript errors.
- [ ] Enable GitHub Pages in repository Settings > Pages and confirm the published URL loads successfully.

The checklist is provided for the student to perform and record. These browser and deployment checks have not been marked complete by this repository edit.


---

## 26. Part 4 – JavaScript Enhancements

The following improvements were implemented after reviewing the Part 2 feedback and the Part 3 requirements. The changes use **vanilla JavaScript**, the browser's native HTML dialog element and the existing Google Maps embed. No additional framework or API key is required for these coursework demonstrations.

### Interactive elements and DOM manipulation

- **FAQ accordion:** JavaScript converts each FAQ question into an accessible button and places its answer inside a collapsible panel. The button updates `aria-expanded`, uses `aria-controls` to identify its answer, and allows visitors to open or close answers without leaving the page.
- **Product image lightbox:** each product photograph can be selected to open a larger image in a native HTML dialog. The lightbox displays the product name, provides a visible close button, closes when the visitor selects the backdrop, and supports the browser's Escape-key dialog behaviour.
- **Dynamic product catalogue:** JavaScript reads the product cards already provided in the catalogue, filters them as the visitor types, sorts the matching categories alphabetically in either direction, and updates the visible result count. The DOM is updated without reloading the page.
- **Accessible interaction feedback:** search results are announced through an `aria-live` result message. The FAQ buttons and gallery controls can be reached and used with a keyboard.

### Interactive map

The Contact page already contains a Google Maps embedded map for the store address, **76 Durban Street, Port Elizabeth, South Africa**, together with a separate Google Maps directions link. Visitors can interact with the embedded map using the map provider's controls and open directions in Google Maps. This implementation uses Google's embed/search URL and does not require a Google Maps API key. The displayed map pin should still be checked against the real shop location before publication.

### CSS animations and transitions

- Product cards and the product search panel use a short entrance animation.
- FAQ answer panels use a subtle reveal animation when opened.
- Product images zoom slightly on hover, and buttons/cards use transitions for hover feedback.
- The existing `prefers-reduced-motion` accessibility rule is extended so visitors who request reduced motion are not forced to see the new animations.

### Files changed

- `Pages/products.html`: added product search and sort controls, accessible image-gallery triggers and the lightbox dialog.
- `js/script.js`: added live product filtering/sorting, dynamic DOM updates, lightbox behaviour and FAQ accordion behaviour while retaining existing form and cart features.
- `css/style.css`: added responsive search controls, lightbox styling, accordion styling, entrance/reveal animations and reduced-motion handling.
- `Pages/faq.html`: its existing FAQ cards are enhanced into interactive accordion controls by the shared JavaScript file; the original answers remain available in the page markup.
- `Pages/contact.html`: retains the interactive Google Maps embed and directions link added earlier.

### Limitations

These are client-side coursework enhancements. Product information is currently maintained in the website files; it is not loaded from a live product database or external API. Search and sorting work with the catalogue entries included on the page. The map is an embedded Google map, not a custom Leaflet, Mapbox or OpenLayers map application. The lightbox and accordion do not require a server. Online payments, real customer accounts, live inventory and database-backed product management still require a secure backend.

### Part 4 changelog

- **2026-10-30 — Add live product search, filtering and sorting:** added a labelled search field and sort selector to the Products page. JavaScript filters the existing product catalogue as text is entered, sorts matching product categories from A to Z or Z to A, restores the original featured order when selected, and updates an accessible result count. The catalogue is rearranged through DOM manipulation without refreshing the page.
- **2026-10-30 — Add an accessible product image lightbox:** made all six product category images keyboard-accessible gallery triggers and added a native HTML dialog to show the selected image at a larger size. The lightbox includes meaningful alternative text, a product caption, a close button, backdrop closing and Escape-key support.
- **2026-10-30 — Convert FAQ cards into interactive accordions:** enhanced the existing FAQ content with JavaScript-created toggle buttons and collapsible answer panels. Added `aria-expanded`, `aria-controls` and hidden-state updates so the controls communicate their state to assistive technology.
- **2026-10-30 — Improve CSS animations and transitions:** introduced subtle entrance and answer-reveal animations, smoother hover transitions and responsive styling for the new product tools and lightbox. Extended reduced-motion handling to cover the new animated elements.
- **2026-10-30 — Document the existing interactive Google Maps feature:** recorded that the Contact page embeds Google Maps for 76 Durban Street, Port Elizabeth, and provides a separate directions link. Clarified that the embedded map is interactive but should be checked against the shop's exact physical location before launch.
- **2026-10-30 — Update project documentation and testing guidance:** documented the JavaScript enhancements, changed files, implementation approach, accessibility behaviour and limitations so that the lecturer can trace the purpose and scope of each improvement.

### Part 4 testing checklist

- [ ] On Products, search for a word such as `dress` and confirm unrelated cards are hidden.
- [ ] Clear the search and confirm all product categories return.
- [ ] Sort the catalogue A to Z and Z to A and confirm the displayed order changes.
- [ ] Select each product image and confirm the lightbox shows the correct larger image and caption.
- [ ] Close the lightbox with its close button, backdrop and Escape key.
- [ ] On FAQ, open and close each question using a mouse and keyboard.
- [ ] Confirm the FAQ button's expanded state changes when the answer opens and closes.
- [ ] Test the new controls at desktop and mobile widths.
- [ ] Enable reduced-motion preferences and confirm the new animations are minimised.
- [ ] On Contact, interact with the map and follow the directions link; verify that the pin matches the actual store location.
- [ ] Check the browser console for JavaScript errors.

The checklist is for manual browser verification and should only be ticked after each test has been completed.


---

## 27. Part 5 – Search Engine Optimisation (SEO)

SEO improvements have been added across the ELITE WEAR website to help search engines understand the purpose and content of each page and to improve how links may appear when shared on social media.

### On-page SEO

- **Unique page titles:** each page now has a descriptive title that identifies its subject and, where relevant, the ELITE WEAR brand and Port Elizabeth location.
- **Page-specific meta descriptions:** each page has a concise description written for its actual content. The descriptions use relevant natural-language phrases such as affordable fashion, clothing, dresses, footwear, product enquiries and Port Elizabeth.
- **Search indexing instructions:** the pages include robots directives set to `index, follow`, allowing compliant search engines to index the pages and follow their links. This is a request to crawlers, not a guarantee of indexing or ranking.
- **Language and mobile settings:** the existing HTML language declaration (`lang="en"`) and responsive viewport meta tag are retained.
- **Semantic page structure:** existing descriptive page headings, main content regions, navigation and image alternative text are retained to help users and assistive technologies understand the pages.

### Social media sharing metadata

Open Graph metadata and Twitter card metadata have been added to the website pages. These tags provide a page title, description, site name and fashion image for supported social-sharing previews. The image is a representative fashion photograph and is not a photograph of the physical store or a specific product for sale.

### Local business structured data

The homepage now includes JSON-LD structured data using Schema.org's `ClothingStore` type. It identifies ELITE WEAR, describes its clothing business, and supplies the business telephone number and the address already displayed on the website: **76 Durban Street, Port Elizabeth, South Africa**. Structured data helps search engines interpret business information, but does not guarantee a rich result or a higher ranking. The business details must be accurate and consistent wherever the store is listed.

### Technical SEO considerations

- All pages continue to use the existing responsive external stylesheet and working internal navigation.
- Descriptive alternative text is retained on the fashion images so that the image subject is communicated to visitors who cannot see the image.
- Canonical links and an XML sitemap are configured for the standard GitHub Pages project-site URL `https://che-rae-lutho-baatjies.github.io/My-Website/`. Confirm that GitHub Pages is enabled and that this is the actual published URL. If a custom domain is configured, update canonical links, Open Graph URLs, `sitemap.xml` and the sitemap directive in `robots.txt` to use that verified domain.
- The root `robots.txt` file allows compliant crawlers and points to the XML sitemap. The Shopping Cart, Customer Login and duplicate coursework homepage use page-level `noindex, follow` directives and are intentionally omitted from the sitemap. A robots file is a crawler instruction, not access control.
- Search engine crawling and indexing depend on the published site being publicly accessible and on search-engine policies.
- SEO does not guarantee first-page placement. Search rankings depend on many factors, including content quality, relevance, site performance, accessibility, reputation and external links.

### Part 5 changelog

- **2026-10-30 — Improve page titles for search relevance:** revised the title tags on the homepage and all seven supporting pages so each title describes the page's purpose and includes the ELITE WEAR brand. The homepage and Contact page titles also include the Port Elizabeth location where relevant.
- **2026-10-30 — Add unique meta descriptions to every page:** updated the description metadata to summarise each page accurately and include relevant fashion and customer-service search terms. This avoids using one generic description across the website.
- **2026-10-30 — Add search crawler directives and browser metadata:** added robots and Googlebot index/follow directives, a theme colour and a referrer policy while retaining the existing language and responsive viewport settings.
- **2026-10-30 — Add Open Graph and Twitter sharing metadata:** added page-specific social titles and descriptions, together with a representative fashion image, so supported platforms can generate more informative link previews.
- **2026-10-30 — Add ClothingStore structured data:** added homepage JSON-LD to identify ELITE WEAR as a clothing store and describe the business name, telephone number and published street address. No unverified opening hours, coordinates, reviews or website URL were invented.
- **2026-10-30 — Document technical SEO limitations:** recorded that the canonical URL and XML sitemap must wait until the final public deployment URL is confirmed. The proposed domain is not treated as a verified live website address.

### Part 5 SEO verification checklist

- [ ] Open each page and confirm that its browser tab title is unique and descriptive.
- [ ] Inspect each page source and confirm that its meta description matches the page content.
- [ ] Confirm that Open Graph and Twitter title, description and image metadata are present.
- [ ] Validate the homepage JSON-LD with Google's Rich Results Test or Schema.org Validator after deployment.
- [ ] Check that the address and telephone number in structured data match the actual business details.
- [ ] Test internal navigation links and image alternative text.
- [ ] Confirm the final public URL before creating canonical links, an XML sitemap and a sitemap reference in robots.txt.
- [ ] Submit the deployed site to Google Search Console after the domain is verified.
- [ ] Recheck indexing and mobile usability after the website is published.

This checklist records tasks for manual verification. Do not mark an item complete until it has been tested.


### Part 5 implementation update — technical SEO, speed and off-page guidance

- **2026-10-30 — Add canonical URLs to indexable pages:** added canonical link elements and matching Open Graph page URLs for the main homepage and the About, Products, Enquiry, Contact and FAQ pages. The URLs use the standard GitHub Pages project-site pattern and must be changed if a different public domain is used.
- **2026-10-30 — Create an XML sitemap:** added `sitemap.xml` containing the six main pages that should be discoverable by search engines. The Shopping Cart, Customer Login and duplicate homepage file are not included because they are utility or duplicate pages.
- **2026-10-30 — Configure robots.txt:** updated the crawler instructions to allow public page crawling and to advertise the sitemap location. Cart, login and duplicate-page exclusion is handled with page-level noindex directives.
- **2026-10-30 — Reduce duplicate homepage indexing:** marked `index/index.html` as noindex and clarified its title so search engines are directed toward the root-level homepage as the primary page.
- **2026-10-30 — Improve image loading hints:** added asynchronous image decoding hints to page images and retained lazy loading on below-the-fold product and category images. Responsive image sizing remains controlled by the existing CSS.
- **2026-10-30 — Add external resource preconnection:** added a preconnect hint for the Unsplash image host to reduce connection setup time for fashion photographs.
- **2026-10-30 — Document keyword and local SEO strategy:** target phrases include affordable clothing in Port Elizabeth, Port Elizabeth fashion store, dresses, shirts and tops, pants, shoes, footwear, handbags, fashion accessories and clothing enquiries. These phrases are used naturally in relevant page titles, descriptions and page copy rather than repeated unnaturally.
- **2026-10-30 — Document off-page SEO actions and security boundaries:** recorded that genuine backlinks and social promotion require real external profiles, partners or directory listings and cannot be truthfully created by editing this repository. The static GitHub Pages site uses local JavaScript and CSS and does not provide server-side authentication or payment processing. Security response headers must be configured by the hosting platform or a reverse proxy; HTML meta tags cannot replace those headers.

### Off-page SEO actions to complete after publication

1. Create or confirm the official ELITE WEAR business profiles on social platforms and link each profile to the verified website URL. Share original product-category photographs and useful fashion updates regularly.
2. Ask legitimate local fashion partners, suppliers, community organisations and relevant business directories to link to the website. Do not buy bulk backlinks or create misleading listings.
3. Create or claim the appropriate Google Business Profile only if ELITE WEAR is an eligible real business with a genuine customer-facing location. Verify the address, phone number and business details before publishing.
4. Once the website is live, add and verify its domain in Google Search Console, submit `sitemap.xml`, and monitor indexing and search queries.

### Page speed and security notes

- Product/category images use responsive CSS, lazy loading where appropriate and asynchronous decoding. The Unsplash image URLs request resized, compressed image variants; replace remote images with locally optimised WebP/AVIF files if the site later hosts its own assets.
- Keep CSS and JavaScript in the existing external files. Avoid adding unnecessary libraries, tracking scripts or large media files.
- GitHub Pages provides static hosting and HTTPS when correctly enabled. It does not allow this repository to set arbitrary HTTP response headers such as Content-Security-Policy, Strict-Transport-Security or X-Content-Type-Options. Configure supported security headers at a hosting/CDN layer if one is added.
- Do not collect real passwords or payment details on this static demonstration site. Real authentication, order processing and payment handling require a secure backend and a trusted payment provider. Keep dependencies updated and never commit API keys, passwords or private customer data.

### Part 5 additional verification checklist

- [ ] Confirm the GitHub Pages published URL matches the canonical URLs in the HTML pages.
- [ ] Open `/robots.txt` and confirm it references `/sitemap.xml` on the correct domain.
- [ ] Open `/sitemap.xml` and validate the XML structure and every page URL.
- [ ] Confirm the sitemap contains only the public indexable pages.
- [ ] Confirm Shopping Cart, Customer Login and `index/index.html` have noindex directives.
- [ ] Test the site over HTTPS and check for mixed-content warnings.
- [ ] Run a page-speed audit and review image transfer sizes, unused CSS/JavaScript and mobile performance.
- [ ] Configure suitable security response headers through the hosting/CDN provider if available.
- [ ] Complete real social profile, backlink and business-directory work only after verifying the business details and live URL.


---

## 28. Form Functionality, Validation and AJAX Submission

The Product Enquiry and Contact forms validate visitor information and submit it asynchronously using the FormSubmit email form service. GitHub Pages continues to host the static website; FormSubmit provides the external form-processing service.

### Product Enquiry form

- Collects the visitor's full name and email address.
- Requires a product category and an enquiry type: price, availability, size/colour or general product information.
- Requires a message of at least 10 characters.
- Submits the complete enquiry to the configured school-work recipient through the FormSubmit AJAX endpoint.
- Gives a relevant confirmation. Price and stock are not calculated or checked live; the store must confirm exact prices and current availability.

### Contact form

- Collects full name, email address, phone number, message type and the complete message.
- Requires a valid email address and a phone number containing 7 to 15 digits. Spaces, brackets, plus signs and hyphens are accepted as formatting characters.
- Requires a message type and a message of at least 10 characters.
- Sends all named form fields to the configured recipient using an asynchronous JSON request. The visitor remains on the Contact page.

### HTML and JavaScript validation

- HTML controls use appropriate input types, required attributes, minimum and maximum lengths, and descriptive labels.
- JavaScript checks trimmed text, email format, phone number format and required drop-down selections.
- Field-level errors are displayed beside the relevant control, announced accessibly and linked using `aria-describedby`.
- Invalid submission focuses the first field that needs attention.
- Submit buttons are disabled while the asynchronous request is in progress to reduce accidental duplicate submissions.
- A live response area communicates submission success or failure without navigating away from the page.
- A hidden honeypot field is included as an additional spam-control measure.

### AJAX submission and recipient setup

Both forms use an HTML `action` attribute and `method="POST"` and JavaScript's `fetch()` API to send JSON asynchronously to FormSubmit. The configured recipient is `st10511240@rcconnect.edu.za`. FormSubmit requires the recipient to complete its activation email the first time a form is used. Until activation is completed, email delivery may not begin. The recipient should check the inbox and spam/junk folder for the activation message and follow the service's instructions.

The form service is a third-party processor. Form submissions contain the personal information entered by visitors, so the website owner should review the provider's privacy and data-handling terms and only collect information needed to respond. Do not submit passwords, payment-card details or other sensitive information through these forms.

### Important limitations

- This website does not have its own server-side form handler or customer database. FormSubmit is an external service used for Enquiry and Contact message processing.
- A successful AJAX response means the external service accepted the submission; it does not prove that the recipient has read the email.
- First-time recipient activation and a real end-to-end test are still required before claiming that email delivery has been verified.
- The enquiry form cannot query real stock or calculate live prices because no product database or inventory API is connected.
- The Customer Login form remains a front-end validation demonstration only. It does not authenticate users, create accounts or send/store passwords.
- Real authentication, orders and payments require a secure backend and appropriate payment provider.

### Files updated

- `Pages/enquiry.html`: added the FormSubmit AJAX action, POST method, email subject, table template and honeypot field while retaining the existing enquiry fields.
- `Pages/contact.html`: added the FormSubmit AJAX action, POST method, email subject, table template and honeypot field; improved telephone input hints and pattern.
- `js/script.js`: retained accessible validation, added shared asynchronous submission handling, loading and error feedback, and tailored enquiry confirmations. Existing cart, login, product search, gallery and FAQ features remain.
- `README.md`: documented the recipient, external service, AJAX approach, activation step, privacy considerations and limitations.

### Form testing checklist

- [ ] Submit the Enquiry form empty and confirm required-field errors appear.
- [ ] Enter an invalid email address and confirm it is rejected.
- [ ] Leave the product category or enquiry type unselected and confirm it is rejected.
- [ ] Enter an enquiry shorter than 10 characters and confirm it is rejected.
- [ ] Enter valid enquiry details and confirm the button shows a sending state and the page does not reload.
- [ ] On Contact, test empty fields, invalid email, invalid phone number and missing message type.
- [ ] Confirm a contact message shorter than 10 characters is rejected.
- [ ] Submit valid contact details and confirm the asynchronous response appears without navigating away.
- [ ] Check the recipient inbox for the FormSubmit activation email and complete activation if requested.
- [ ] After activation, submit one test enquiry and one test contact message and confirm both emails arrive at the intended recipient.
- [ ] Check the browser console and Network panel for failed requests or JavaScript errors.
- [ ] Confirm the Customer Login page still displays its validation-only message and does not transmit passwords.
- [ ] Test the forms on desktop and mobile screen sizes.

Only tick the checklist after completing each test. The code has been updated, but the live form service, recipient activation and actual email delivery still need to be tested in a browser.
