import React, { useState, useEffect } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/get_all_products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchTerm === '' && categoryFilter === '' && stockFilter === '' && priceFilter === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => {
        const matchSearch = (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchCategory = categoryFilter === '' || product.category === categoryFilter;
        const matchStock = stockFilter === '' || product.stock >= parseInt(stockFilter);
        const matchPrice = priceFilter === '' || product.price <= parseFloat(priceFilter);
        return matchSearch && matchCategory && matchStock && matchPrice;
      });
      setFilteredProducts(filtered);
    }
  }, [searchTerm, categoryFilter, stockFilter, priceFilter, products]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilterChange = event => {
    setCategoryFilter(event.target.value);
  };

  const handleStockFilterChange = event => {
    setStockFilter(event.target.value);
  };

  const handlePriceFilterChange = event => {
    setPriceFilter(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Product List</h2>
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.searchInput}
        />
        <select value={categoryFilter} onChange={handleCategoryFilterChange} style={styles.select}>
          <option value="">All Categories</option>
          {[...new Set(products.map(product => product.category))].map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select value={stockFilter} onChange={handleStockFilterChange} style={styles.select}>
          <option value="">All Stock</option>
          <option value="0">Out of Stock</option>
          <option value="10">10 or more</option>
          <option value="50">50 or more</option>
          <option value="100">100 or more</option>
          <option value="200">200 or more</option>
          {/* Add more options as needed */}
        </select>
        <select value={priceFilter} onChange={handlePriceFilterChange} style={styles.select}>
          <option value="">All Prices</option>
          <option value="50">Less than $50</option>
          <option value="100">Less than $100</option>
          <option value="500">Less than $500</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td style={styles.td}>{product.id}</td>
                <td style={styles.td}>{product.name}</td>
                <td style={styles.td}>{product.category}</td>
                <td style={styles.td}>${product.price}</td>
                <td style={styles.td}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  header: {
    color: '#333'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  },
  searchInput: {
    marginRight: '10px',
    padding: '8px',
    width: '250px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  select: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    maxWidth: '1000px',
    borderCollapse: 'collapse'
  },
  th: {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left'
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left'
  }
};

export default ProductTable;
