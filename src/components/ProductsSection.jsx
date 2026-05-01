import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsSection() {
  const [searchName, setSearchName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Get unique categories from products
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      let result = PRODUCTS;

      // Filter by category
      if (selectedCategory !== "All") {
        result = result.filter((p) => p.category === selectedCategory);
      }

      // Filter by product name (search by name)
      if (searchName.trim()) {
        const searchLower = searchName.toLowerCase();
        result = result.filter((p) =>
          p.name.toLowerCase().includes(searchLower),
        );
      }

      setFilteredProducts(result);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchName, selectedCategory]);

  const hasNoResults =
    !isLoading && PRODUCTS.length > 0 && filteredProducts.length === 0;

  return (
    <section className="products-section page-section" id="products">
      <div className="container">
        <h2>Our Products & Solutions</h2>
        <p className="section-subtitle">
          Explore our suite of digital public goods solutions
        </p>

        {/* Search and Filter Controls */}
        <div className="products-controls">
          {/* Search by Name */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              aria-label="Search products by name"
              className="search-input"
            />
            <i className="fa-solid fa-magnifying-glass search-box-icon"></i>
            {searchName && (
              <button
                className="search-clear"
                onClick={() => setSearchName("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Dropdown */}
          <div className="category-filter-wrapper">
            <label htmlFor="category-select">Filter by Category:</label>
            <select
              id="category-select"
              className="category-dropdown"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter products by category"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Alternative: Category Buttons */}
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !hasNoResults && (
          <>
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length > 0 && (
              <div className="results-count">
                Showing {filteredProducts.length} of {PRODUCTS.length} products
              </div>
            )}
          </>
        )}

        {/* No Results */}
        {hasNoResults && (
          <div className="no-results">
            <div className="no-results-icon">📦</div>
            <h3>No Products Found</h3>
            <p>
              {searchName
                ? `No products match "${searchName}"`
                : `No products in the "${selectedCategory}" category`}
            </p>
            <button
              className="reset-btn"
              onClick={() => {
                setSearchName("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
