import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

function Products() {
  const { category } = useParams()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(
    category || categories[0]?.id
  )

  useEffect(() => {
    if (category) setActiveTab(category)
  }, [category])

  const handleTabClick = (id) => {
    setActiveTab(id)
    navigate(`/products/${id}`)
  }

  const activeCategory = categories.find((c) => c.id === activeTab)

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse by category</p>
      </div>

      <div className="sub-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`sub-tab ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => handleTabClick(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {activeCategory && activeCategory.items.length > 0 ? (
          activeCategory.items.map((item) => (
            <ProductCard key={item.id} product={item} categoryId={activeTab} />))
        ) : (
          <p className="no-products">
            No products added yet in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Products