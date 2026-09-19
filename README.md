Sne's Gourmet Table - Catering Website
WEDE5020 POE Part 1 & 2 - Project Documentation

1. Project Overview

Sne's Gourmet Table is a fictional premium catering brand based in Johannesburg, South Africa, created for my WEDE5020 POE. The project was developed in two phases:

Part 1 (21 July - 20 August 2026: Focused on planning and building the HTML5 structure. This included creating wireframes in Figma, defining the sitemap, and coding 6 semantic HTML pages with no CSS.

Part 2 (21 August - 18 September 2025): Focused on Designing the Visuals. This phase transformed the plain HTML structure into a visually appealing, premium, and fully responsive website using external CSS, Flexbox, Grid, and responsive design principles.

The final website presents Sne's Gourmet Table as a luxurious, trustworthy, and modern catering service that provides bespoke food experiences for high-end events.

Brand Essence: Elegant, Warm, Premium, Trustworthy, Modern African Luxury.

2. Website Goals and Objectives

Business Goals:
1. To establish a strong online presence for Sne's Gourmet Table as a premium catering provider.
2. To convert website visitors into booking enquiries.
3. To showcase menus, services, and social proof (testimonials) to build trust.

Website Objectives (SMART):

For Part 1:
- Create a well-structured, semantic HTML5 website with 6 fully linked pages by 20 August 2025.
- Ensure all pages use accessibility best practices (semantic tags: header, nav, main, section, footer).
- Plan user journey and layout through Figma wireframes before coding.

For Part 2:
- Develop an external stylesheet (css/style.css) and link to all HTML pages.
- Apply a consistent premium visual identity (colour scheme, typography, spacing) across all pages.
- Ensure the website is fully responsive and adapts seamlessly to desktop (1024px+), tablet (768px), and mobile (375px).
- Improve User Experience (UX) with hover states, readable typography, and visual hierarchy.


3. Key Performance Indicators (KPIs)

How we will measure if the website is successful:

1.Responsiveness Score: Website must display correctly on 3 breakpoints (Mobile, Tablet, Desktop) with no horizontal scrolling or broken layout. Tested via Chrome DevTools.
2.Enquiry Conversion:Number of users who visit the contact page and complete the contact form. Target: Contact form is visible and usable on all devices.
3.Usability & Accessibility:All images have descriptive alt text, semantic HTML used, and navigation is consistent on all 6 pages. Lighthouse Accessibility score target > 90.
4.Loading Performance:Images optimized using `srcset` and compressed, CSS is external and minified. Target load time < 3 seconds on mobile.
5.Visual Consistency:Same header, footer, colour scheme (#2C1A1D, #C9A86A, #FFFBF5) and typography (Playfair Display + Poppins) used across all pages.

4. Target Audience

Primary Audience:

1.Corporate Clients (Ages 30-55):Event managers, PAs, HR managers looking for premium catering for year-end functions, launches, and boardroom lunches in Johannesburg. They value professionalism, reliability, and presentation.
2.Brides & Grooms (Ages 26-40):Couples planning high-end weddings. They value aesthetics, testimonials, and customizable menus. They browse heavily on mobile.

Secondary Audience:

3.Private Event Hosts (Ages 35-60):Individuals hosting private birthdays, anniversaries, and home dining experiences. High disposable income.

Audience Needs:Easy-to-find menu, clear service list, social proof (testimonials), quick way to request a quote (contact form), and a website that feels luxurious and trustworthy on their phone.

5. Key Features and Functions

Content Features:
- Hero section with call-to-action "Book a Tasting"
- About Chef Sne story
- Interactive Menu Gallery with categories (Canapés, Main Buffet, Desserts)
- Services Page (Corporate, Weddings, Private Dining, Plated Service)
- Testimonials from past clients
- Contact Form with client-side validation (to be enhanced in Part 3)

Design Features (Part 2):
- Sticky navigation bar
- Premium card design with `box-shadow` and `border-radius`
- Hover effects on buttons and menu items (`:hover`, `:focus`)
- Responsive image gallery using CSS Grid
- Fully responsive footer with contact details and social links

6. Core Functionality

| Page | Core Functionality |
| :--- | :--- |
|index.html| Landing page - introduces brand, showcases hero, featured services, and call-to-action. Drives users to Menu and Contact. |
|about.html| Builds trust - tells Chef Sne's story, philosophy, and values. |
| **menu.html** | Displays catering options in a responsive grid. Uses `srcset` for food images. Main selling page. |
| **services.html** | Explains different catering packages using Flexbox layout with icons and descriptions. |
| **testimonials.html** | Provides social proof with client reviews in card layout. |
| **contact.html** | Lead generation - contains contact details, Google Maps embed placeholder, and enquiry form (Name, Email, Event Type, Message). |

**Navigation:** Consistent `<nav>` on all pages linking all 6 pages for seamless user journey.

---

## 7. Technical Implementation

### Part 1 - HTML Structure (21 July - 20 Aug)
- **Language:** HTML5 only
- **Structure:** Semantic tags used: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`
- **Validation:** Code validated via W3C HTML Validator
- **Folder Structure (Initial):** All files in root folder as per brief.

### Part 2 - CSS Styling & Responsive Design (21 Aug - 18 Sep)
- **Stylesheet:** Single external stylesheet `css/style.css` linked to all pages to leverage cascading nature.
- **Base Styles:** CSS Reset `* {margin:0; padding:0; box-sizing:border-box;}`. Set root variables for colours and fonts.
- **Typography:**
    - Imported Google Fonts: `Playfair Display` (headings - luxury) and `Poppins` (body - readable)
    - Properties used: `font-family`, `font-size: 3rem to 1rem scale`, `font-weight`, `line-height: 1.6`, `letter-spacing`
    - Typographic scale implemented for hierarchy.

- **Layout:**
    - **Flexbox:** Used for header/nav (`display:flex; justify-content:space-between; align-items:center`), service list, footer.
    - **CSS Grid:** Used for menu gallery (`display:grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;`), testimonials.
    - Properties: `display`, `flex-direction`, `justify-content`, `align-items`, `grid-template-areas`.

- **Visual Styles:**
    - `color`, `background-color`, `border`, `border-radius: 12px`, `box-shadow`
    - Pseudo-classes: `nav a:hover {color: #C9A86A}`, `button:hover`, `input:focus {border-color: gold}`

- **Responsive Design:**
    - **Breakpoints:** 
        - Desktop: 1024px+ (3 columns)
        - Tablet: 768px - 1023px (2 columns)
        - Mobile: <=480px (1 column, hamburger menu)
    - **Media Queries:** `@media (max-width: 768px) { ... }` to change layout, font sizes, navigation.
    - **Relative Units:** `rem` for fonts, `em` for padding, `%` for container widths (`width: 90%`), `vh` for hero height.
    - **Responsive Images:** Implemented `srcset` and `sizes` on all menu images and `<picture>` element for hero banner to optimize loading and performance.
    - **Testing:** Used Chrome DevTools Device Toolbar to test on iPhone SE, iPad, Galaxy, and Desktop.

### Tools Used
- Figma (Wireframing)
- Visual Studio Code (Coding)
- GitHub (Version Control) - Commits with descriptive messages
- Chrome DevTools (Testing responsiveness)
- Google Fonts

---

## 8. Content Strategy

**Tone of Voice:** Elegant, warm, professional, inviting, premium.

**Content Approach:**
- **Homepage:** Short, impactful headlines e.g., "Curated Cuisine for Unforgettable Moments" + strong call-to-action.
- **About Page:** Story-driven - Who is Sne? Her passion, training, and commitment to quality.
- **Menu Page:** Descriptive, appetizing copy with categories. High-quality food photography is central. Each item has name + description.
- **Services Page:** Benefit-driven - focuses on what client gets (e.g., "Stress-free wedding catering").
- **Testimonials Page:** Authentic client quotes with name and event type for credibility.
- **Contact Page:** Clear and simple - minimal fields to reduce friction for enquiry.

**SEO Strategy (Basic - Part 1 & 2):**
- Semantic HTML for search engine crawlers
- Descriptive alt text for all images e.g., "Gourmet lamb chop platter"
- Meta description tags on all pages e.g., `<meta name="description" content="Premium catering in Johannesburg...">`
- Keyword focus: "premium catering Johannesburg", "wedding caterer", "corporate catering"

---

## 9. Development Timeline

| Phase | Date Range | Key Activities & Deliverables |
| :--- | :--- | :--- |
| **Phase 1: Planning & HTML** | **21 July - 05 Aug 2026** | Client brief analysis, competitor research, Figma wireframes for 6 pages, sitemap planning |
| **Phase 1: Development** | **06 Aug - 20 Aug 2026** | Coded 6 HTML pages using semantic HTML5, created navigation, built contact form structure, validated HTML, created Part 1 README, final submission for Part 1 |
| **Phase 2: CSS Design** | **21 Aug - 05 Sep 2026** | Created `css/style.css`, implemented CSS reset, defined colour scheme and typography (Playfair Display + Poppins), styled desktop layout using Flexbox and Grid, added visual styles (shadows, hover effects) |
| **Phase 2: Responsive** | **06 Sep - 15 Sep 2026** | Identified breakpoints (1024px, 768px, 480px), converted units to rem/em/%, implemented media queries, added srcset & sizes for responsive images, fixed layout bugs on mobile |
| **Phase 2: Testing & Docs** | **16 Sep - 18 Sep 2026** | Tested on Chrome DevTools across all devices/browsers, took screenshots for evidence (desktop, tablet, mobile), updated README with Part 2 info, changelog, and references, pushed all changes to GitHub remote repository |

**Total Development Time:** 8 Weeks (21 July - 18 September 2026)

---

## 10. Screenshots Evidence

### Desktop (1920px) - Multi-column Layout
![Desktop View]<img width="1339" height="600" alt="d8025797-4830-466c-ba96-33cfcd8ca6cd" src="https://github.com/user-attachments/assets/ad4c9362-3eda-44f9-a78e-298f0ce406d8" />


### Tablet (768px) - 2 Column Layout
![Tablet View<img width="968" height="607" alt="7f3b23b7-af46-4776-b291-4b5753873d45" src="https://github.com/user-attachments/assets/c054b7f3-51c0-4bc1-8e01-fb3f30a39f79" />


### Mobile (375px) - Single Column Stacked
![Mobile View]<img width="968" height="607" alt="7f3b23b7-af46-4776-b291-4b5753873d45" src="https://github.com/user-attachments/assets/1fb50a97-3e00-4714-8412-33aa46901dac" />


---

## 11. How to Run the Website

1. Clone the repository: `git clone https://github.com/[your-username]/snes-gourmet-table.git`
2. Navigate to folder and open in VS Code
3. Open `index.html` with Live Server OR double-click to open in Chrome
4. Ensure folder structure is kept: `/css/style.css` must stay linked

## 12. Changelog

### Part 2 Updates (21 Aug - 18 Sep 2026)
| Date | Update |
| :--- | :--- |
| 10 Sep 2026 | Created external stylesheet and linked to all pages |
| 11 Sep 2026 | Implemented base styles, colour palette, typography |
| 12 Sep 2026 | Built desktop layouts with Flexbox and Grid |
| 14 Sep 2026 | Added responsive breakpoints and media queries |
| 15 Sep 2026 | Added srcset for responsive images |
| 16 Sep 2026 | Fixed navigation on mobile, tested on all devices |
| 18 Sep 2026 | Final README update and push to GitHub |

### Part 1 Feedback Fixes
| Feedback | Fix Implemented |
| :--- | :--- |
| Flat file structure | Created /css, /images, /screenshots folders |
| Missing alt text | Added descriptive alt text to all images |
| No meta tags | Added meta description and viewport tags |

### Part 1 History
| 20 Aug 2026 | Completed HTML structure for 6 pages - Part 1 Submission |
| 19 Aug 2026 | Created contact form structure |
| 18 Aug 2026 | Designed wireframes in Figma |

---

## 13. References (Harvard Style - Updated for Part 2)

1. Figma. 2025. Sne's Gourmet Table - Wireframe and Structure Design. Designed by Mandisa Mamane in Figma. Available at: https://www.figma.com [Accessed 20 August 2026].

2. Mozilla Developer Network (MDN). 2024. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 20 August 2026].

3. W3Schools. 2024. HTML5 Semantic Elements. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 20 August 2026].

4. Mozilla Developer Network (MDN). 2025. CSS Flexible Box Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout [Accessed 10 September 2026].

5. Mozilla Developer Network (MDN). 2025. CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout [Accessed 10 September 2026].

6. Mozilla Developer Network (MDN). 2025. Responsive Images - srcset and sizes. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images [Accessed 12 September 2026].

7. W3Schools. 2025. CSS Media Queries - Responsive Design. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp [Accessed 12 September 2026].

8. Google Fonts. 2025. Playfair Display & Poppins. Available at: https://fonts.google.com [Accessed 10 September 2026].

9. The Independent Institute of Education (IIE). 2025. WEDE5020 POE Brief Part 1 & 2. [Accessed 21 July 2026].

---

## 14. Submission Checklist for Part 2

- External CSS file created and linked
- CSS reset and base styles implemented
- Typography styles applied (font-family, size, weight, line-height)
- Layout using Flexbox and Grid
- Visual styles (colour, border, box-shadow, hover)
- Responsive breakpoints (desktop, tablet, mobile)
- Relative units (rem, em, %)
- Responsive images (srcset, sizes)
- Tested via DevTools
- Screenshots added
- Changelog with Part 1 feedback edits + Part 2 entries
- References updated
- All changes pushed to GitHub remote repository
- GitHub link ready for LMS submission

---

**© 2026 Sne's Gourmet Table - Developed by Mandisa Mamane for WEDE5020**
