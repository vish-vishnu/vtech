import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const { category } = useParams()

  const images = product.images && product.images.length > 0 ? product.images : []
  const [activeImage, setActiveImage] = useState(0)
  const [imgError, setImgError] = useState(false)

  const handleThumbnailClick = (e, i) => {
    e.stopPropagation() // prevent card click navigation when picking a thumbnail
    setActiveImage(i)
    setImgError(false)
  }

  const goToDetail = () => {
    navigate(`/products/${category}/${product.id}`)
  }

  return (
    <div className="product-card" onClick={goToDetail} role="button" tabIndex={0}>
      <div className="product-image">
        {images.length > 0 && !imgError ? (
          <img
            src={images[activeImage]}
            alt={product.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="image-placeholder">Image</div>
        )}
      </div>

      {images.length > 1 && (
        <div className="thumbnail-row">
          {images.map((img, i) => (
            <button
              key={i}
              className={`thumbnail ${activeImage === i ? 'active' : ''}`}
              onClick={(e) => handleThumbnailClick(e, i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`${product.name} thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <button
            className="btn-small"
            onClick={(e) => {
              e.stopPropagation()
              goToDetail()
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard