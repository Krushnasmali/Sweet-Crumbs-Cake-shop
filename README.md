# Sweet Crumbs — Cake Shop eCommerce Demo

A responsive, multi-page bakery storefront built with **HTML5, CSS3 and Vanilla JavaScript only**. No frameworks or build tools are required.

## Features
- Responsive bakery storefront with Brown + Cream theme
- 20 sample cakes with product details, size pricing, egg/eggless options
- Product search, category/flavour/egg filters, sorting and load-more
- Cart, coupon codes (`CAKE10`, `SWEET20`) and wishlist persisted in localStorage
- Demo registration/login and customer dashboard
- Checkout flow with demo payment selection and order confirmation
- Order history and status timeline
- Custom cake request form with image preview and request IDs
- Blog articles with category filters and article modals
- Contact form, newsletter signup, validation and toast notifications
- SEO metadata, semantic HTML, keyboard-friendly controls and responsive layouts

## Technologies
- HTML5
- CSS3 (custom properties, grid, flexbox, media queries)
- Vanilla JavaScript (ES6)
- Browser localStorage

## Folder structure
```text
cake-shop/
├── index.html
├── cakes.html
├── cake-details.html
├── about.html
├── blog.html
├── contact.html
├── login.html
├── register.html
├── custom-cake.html
├── account.html
├── css/ (style.css, components.css, responsive.css)
├── js/ (app.js, products.js, cart.js, auth.js, orders.js,
│        custom-cake.js, wishlist.js, validation.js)
├── assets/ (images/, icons/, logo/)
└── data/products.json
```

## How to run
1. Extract `cake-shop-ecommerce.zip`.
2. Open the `cake-shop` folder in VS Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.

Product data is embedded in `js/products.js`, so the demo works without fetching JSON and avoids `file://` CORS issues. `data/products.json` is included as an editable reference catalogue.

## Demo account
- Email: `demo@cakeshop.com`
- Password: `Demo@123`

The demo user, a sample order and a sample custom request are seeded automatically on first run. The sample order/request appears in the dashboard when logged in as the demo account.

## Pages
1. Home — `index.html`
2. Cakes — `cakes.html`
3. Cake Details — `cake-details.html?id=1`
4. About — `about.html`
5. Blog — `blog.html`
6. Contact — `contact.html`
7. Login — `login.html`
8. Register — `register.html`
9. Custom Cake Request — `custom-cake.html`
10. Account — `account.html`

The cart and checkout are rendered in the customer account area to keep the page count within ten.

## localStorage keys
- `cakeProducts` — reserved catalogue key (the current catalogue is in `js/products.js`)
- `cakeCart` — cart items
- `cakeWishlist` — product IDs
- `cakeUsers` — demo customer records
- `cakeCurrentUser` — current signed-in demo user
- `cakeOrders` — placed orders
- `cakeCustomRequests` — custom cake requests
- `cakeMessages` — contact form submissions
- `cakeNewsletter` — subscribed email addresses
- `cakeCoupon` — active demo coupon

## Customisation
- **Products and pricing:** edit `window.CAKE_PRODUCTS` in `js/products.js`. Each product has `id`, `name`, `category`, `flavour`, `description`, `image`, `price`, `originalPrice`, `rating`, `reviews`, `eggless`, `sizes`, `ingredients` and `tags`.
- **Colours:** edit the CSS variables at the top of `css/style.css`.
- **Images:** replace the Unsplash URLs in `js/products.js` and page templates with your own image URLs. For offline use, put image files in `assets/images/` and update the paths.
- **Business details:** update phone, email, address and opening hours in `js/app.js`.

## Demo limitations and production upgrade
This is a frontend-only demo. localStorage is editable by the customer and is not a secure database. Demo passwords are stored as plain text for demonstration only. Do not use this authentication or order storage for a real business.

For production deployment, authentication, customer data, orders, payments and admin management must be connected to a secure backend and database. Add server-side validation, password hashing, secure sessions, role-based access, inventory/order management, image upload storage, email/SMS notifications, backups, HTTPS and privacy-compliant data handling. Integrate a certified payment provider on the server; never trust a payment status supplied by browser JavaScript.

## Notes
- Payment methods are selection-only placeholders; no real money is collected.
- The reference image is validated and previewed in the browser, but its binary is intentionally not persisted to localStorage.
- Product photography uses remote Unsplash image URLs and therefore requires an internet connection for images.
