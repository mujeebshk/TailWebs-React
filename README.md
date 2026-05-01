# eGov Foundation Landing Page (React)

This is a re-implementation of the eGov Foundation landing page using React, built with Vite. It features a responsive design, a dynamic product listing, search functionality, and category filtering.

**Live Demo:** [https://mujeebshk.github.io/TailWebs-React/](https://mujeebshk.github.io/TailWebs-React/)

## Features

- **Responsive Design:** Built with a mobile-first approach, ensuring a consistent experience across various screen sizes.
- **Dynamic Product Listing:** Displays a list of "Latest at eGov" products with images, names, prices, and categories.
- **Search Functionality:** Users can search for products by name using a search bar.
- **Category Filtering:** Products can be filtered by category using interactive buttons.
- **Loading State:** A visual indicator is shown while product data is being fetched (simulated).
- **"No Results Found" State:** A message is displayed when no products match the current search or filter criteria.
- **Clean UI:** Basic styling is applied to maintain a clean and user-friendly interface.
- **Automated Deployment:** Integrated with GitHub Actions for continuous deployment to GitHub Pages, ensuring that every push to the `main` branch automatically updates the live site.

## Technologies Used

- **React.js:** For building the user interface with functional components and hooks.
- **Vite:** A fast build tool for modern web projects.
- **HTML5 & CSS3:** For structuring and styling the application.
- **JavaScript (ES6+):** For interactive elements and application logic.
- **GitHub Actions:** For CI/CD pipeline to deploy to GitHub Pages.

## Project Structure

- `src/`: Contains the main application source code.
  - `App.jsx`: The main React component, handling state, filtering logic, and rendering the layout.
  - `App.css`: Styling for the React components.
  - `data/products.json`: Mock data for the product list.
- `public/`: Static assets.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for deployment.
- `vite.config.js`: Vite configuration file, including base path for GitHub Pages.

## Code Flow

### `App.jsx`

1.  **State Management:**
    - `products`: Stores the initial, unfiltered list of products loaded from `products.json`.
    - `filteredProducts`: Holds the list of products after applying search and category filters.
    - `loading`: A boolean flag to manage the loading state during data fetching.
    - `searchTerm`: Stores the current value of the search input.
    - `activeCategory`: Stores the currently selected product category filter.
2.  **`useEffect` (Initial Data Load):**
    - On component mount, a `useEffect` hook simulates an asynchronous data fetch from `products.json` with a 1-second delay.
    - Once data is "fetched", `products` and `filteredProducts` states are updated, and `loading` is set to `false`.
3.  **`useEffect` (Filtering Logic):**
    - Another `useEffect` hook is responsible for filtering the `products` array whenever `searchTerm` or `activeCategory` changes.
    - It filters by product `name` (case-insensitive) and `category`.
    - The `filteredProducts` state is updated with the results.
4.  **UI Rendering:**
    - **Hero Section:** Displays a static header with navigation and a main title/description.
    - **Product Section:**
      - Includes a search input field (`searchTerm` state controlled).
      - Dynamically renders category filter buttons based on unique categories in `productsData`.
      - Conditionally renders a "Loading..." message if `loading` is true.
      - If `loading` is false, it checks `filteredProducts.length`:
        - If products are found, it maps over `filteredProducts` to render `product-card` elements.
        - If no products are found, it displays a "No results found" message.
    - **Footer:** A simple copyright footer.

### `App.css`

- Provides styling for all the React components, including responsive adjustments for different screen sizes.
- Defines styles for the hero section, navigation, product grid, product cards, search input, and category filter buttons.

### `products.json`

- A mock JSON file serving as the data source for the product list. Each product has an `id`, `name`, `price`, `category`, and `image` URL.

### `vite.config.js`

- Configures Vite for React development.
- Crucially, `base: '/TailWebs-HTML/'` is set to ensure correct asset paths when deployed to GitHub Pages, matching the repository name.

### `.github/workflows/deploy.yml`

- Defines a GitHub Actions workflow that triggers on pushes to the `main` branch or manually.
- It builds the React application using `npm run build` and then deploys the generated `dist` folder to GitHub Pages.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mujeebshk/TailWebs-HTML.git
    cd TailWebs-HTML
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will open the application in your browser, usually at `http://localhost:5173`.
4.  **Deployment:** The site is automatically deployed to GitHub Pages via GitHub Actions upon pushes to the `main` branch. Ensure GitHub Pages is enabled in your repository settings, pointing to the `gh-pages` branch or GitHub Actions.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
