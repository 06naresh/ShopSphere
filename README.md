# 🛍️ ShopSphere — Modern E-Commerce Product Catalogue

ShopSphere is a modern, responsive e-commerce product catalogue built with **React and JavaScript**. It provides a smooth shopping experience with product browsing, search and filtering, shopping cart management, authentication, and a responsive user interface.

The project is designed to practice real-world React development concepts, reusable components, state management, API integration, routing, and modern UI styling.

## 📸 Screenshots

<!--
Add your screenshots to the screenshots folder in the repository.
Update the filenames below to match your actual screenshots.
-->

### Home Page

![ShopSphere Home Page](./screenshots/home-page.png)

### Product Catalogue

![ShopSphere Product Catalogue](./screenshots/product-catalogue.png)

### Shopping Cart

![ShopSphere Shopping Cart](./screenshots/shopping-cart.png)

> **Note:** Add screenshots of your actual application to the `screenshots/` directory. If your screenshots have different filenames, update the image paths above.

## ✨ Features

- **Product Catalogue** — Browse products with reusable product cards.
- **Search Products** — Find products by name or search query.
- **Category Filtering** — Filter products by category.
- **Sorting** — Sort products by name and price.
- **Pagination** — Navigate through product listings.
- **Product Details** — View individual product information.
- **Shopping Cart** — Add products, update quantities, and remove items.
- **Wishlist** — Save and manage favorite products.
- **Authentication** — Login and logout functionality.
- **Protected Routes** — Restrict access to selected pages.
- **Role-Based Access** — Support different user roles where configured.
- **Checkout** — Collect customer information through checkout forms.
- **Form Validation** — Validate form inputs.
- **API Integration** — Retrieve product data from an API.
- **Theme Switching** — Support light and dark themes.
- **Responsive Design** — Adapt the interface to desktop, tablet, and mobile screens.
- **Reusable Components** — Maintain a modular and maintainable codebase.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| JavaScript (ES6+) | Application logic |
| Vite | Development server and build tool |
| React Router | Client-side routing and navigation |
| Tailwind CSS | Responsive styling and utility classes |
| Material UI (MUI) | UI components and icons |
| Emotion | Styling support for MUI |
| Context API | Shared application state |
| Zustand | Lightweight state management |
| Redux Toolkit | Structured state management |
| DummyJSON API | Product data integration |
| Git and GitHub | Version control and source hosting |

> Technologies listed here describe the project's intended architecture. Keep only the libraries and features that are actually installed and implemented in your current repository.

## 📁 Project Structure

```text
ShopSphere/
├── public/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── router.jsx
│   │   ├── store.js
│   │   └── theme.js
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   └── hooks/
│   │   ├── cart/
│   │   │   ├── components/
│   │   │   └── store/
│   │   ├── checkout/
│   │   │   └── components/
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   └── context/
│   │   ├── products/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   └── hooks/
│   │   └── wishlist/
│   │       ├── WishlistButton.jsx
│   │       └── wishlistSlice.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── ProductDetail.jsx
│   │
│   ├── shared/
│   │   ├── components/
│   │   └── hooks/
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   └── index.css
│
├── screenshots/
│   ├── home-page.png
│   ├── product-catalogue.png
│   └── shopping-cart.png
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*The folder tree is a representative example. Update it to match the files and directories that actually exist in your repository.*

## ⚙️ Getting Started

### Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) — preferably an active LTS version
- npm — included with Node.js
- [Git](https://git-scm.com/)
- A code editor such as Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/06naresh/ShopSphere.git
```

### 2. Navigate to the project directory

```bash
cd ShopSphere
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 🔌 API Integration

ShopSphere uses an external product API to retrieve product information.

**API:** [DummyJSON Products API](https://dummyjson.com/products)

Example endpoint:

```text
https://dummyjson.com/products
```

The API provides sample product data for practicing:

- Fetching data from an API
- Managing loading and error states
- Displaying product lists
- Searching and filtering products
- Integrating asynchronous requests into React components

An internet connection is required for live API requests.

## 🧠 React Concepts Practiced

This project helps demonstrate practical knowledge of:

- Functional components and JSX
- Props and parent-to-child data flow
- `useState`, `useEffect`, `useMemo`, and custom hooks
- Conditional rendering
- Rendering lists using `map()`
- Event handling and controlled inputs
- React Router and dynamic route parameters
- Context API for shared state
- Zustand for lightweight state management
- Redux Toolkit for structured state management
- Form handling and validation
- API integration and asynchronous operations
- Reusable component design
- Responsive layouts and theme management

## 🎨 UI and Styling

The interface uses Tailwind CSS utility classes for responsive layouts and styling, with Material UI components and icons where needed.

The design aims to provide:

- Clear product cards and pricing
- Consistent spacing and typography
- Interactive buttons and form controls
- Responsive navigation
- Light and dark theme support

## 🚀 Future Improvements

Potential enhancements include:

- User registration and secure authentication
- Persistent cart and wishlist storage
- Product reviews and ratings
- Advanced filtering and sorting
- Payment gateway integration
- Order history and tracking
- Backend integration with a database
- Automated testing
- Improved accessibility and performance

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git switch -c feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git add .
   git commit -m "Add your feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request.

## 👨‍💻 Author

**Naresh**

- GitHub: [@06naresh](https://github.com/06naresh)
- Repository: [ShopSphere](https://github.com/06naresh/ShopSphere)

## 📄 License

This project is intended for learning and development. If you plan to distribute it publicly, consider adding a `LICENSE` file and selecting an appropriate open-source license.
</Writing