# Ahmed Raza — Business & Portfolio Website

A responsive multi-page personal business website for positioning Ahmed Raza as a **Full-Stack Developer, SEO Expert and Digital Marketing Specialist**.

## Pages
- `index.html` — Homepage and conversion-focused overview
- `about.html` — Personal story and recognition
- `services.html` — Full-stack development, SEO/local search and digital marketing
- `work.html` — Skin Care Clinic case study
- `projects.html` — Mira AI independent project
- `book.html` — *Where It Is Going* book page
- `insights.html` — Editorial/insights landing page
- `contact.html` — Project enquiry form

## Run locally
Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important: configure before publishing
Open `script.js` and update the `SITE_CONFIG` object:

```js
const SITE_CONFIG = {
  whatsappNumber: "91YOURNUMBER", // digits only, country code included
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  instagram: "https://www.instagram.com/your-profile/",
  github: "https://github.com/your-username/"
};
```

The contact form does not send data to a server. After a valid WhatsApp number is configured, it prepares the enquiry in WhatsApp and the visitor must press **Send**. For a real backend form, connect a trusted form service or your own API and add server-side validation, spam protection and privacy disclosures.

## Replace placeholders
1. Add your actual portrait and relevant project screenshots.
2. Add your real LinkedIn, Instagram, GitHub, email and WhatsApp details in `script.js`.
3. Add the real Amazon book URL and published cover to `book.html`.
4. Add copies/scans of your certificates and competition recognition only after checking the exact titles and dates.
5. Confirm the wording and evidence behind reported clinic metrics before using them publicly.
6. Replace `YOUR-DOMAIN-HERE` in `robots.txt` and `sitemap.xml` after choosing a domain.
7. Add a privacy policy and cookie notice if your deployed version collects personal data or uses tracking tools.

## Technical notes
- Plain HTML, CSS and JavaScript; no framework or build step required.
- Mobile-first responsive layouts with breakpoints for phones, tablets and desktops.
- Semantic page structure, page-specific titles/descriptions, Open Graph basics, sitemap and robots file.
- Keyboard-accessible mobile navigation, reduced-motion support and accessible form labels.
- No fake testimonials, fabricated ratings or guaranteed SEO outcomes.

## Accuracy notes
The clinic figures on the website are explicitly labelled as self-reported and not independently audited. Achievement and experience statements should be supported with authentic documents or examples before publication. Technology-specific stack claims have intentionally been left out until you confirm the technologies you use.

## Visual theme
- Professional dark theme: near-black/charcoal backgrounds, warm-white typography and muted sage accents.
- Consistent dark surfaces and form controls across all pages.
- Mobile navigation and layouts retain the same responsive breakpoints.
- Browser UI chrome uses a matching dark palette; the book-cover artwork remains intentionally dark and understated.
