import { useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { categories } from '../data/products'
import './ProductDetail.css'

function ProductDetail() {
  const { category, productId } = useParams()
  const navigate = useNavigate()

  const activeCategory = categories.find((c) => c.id === category)
  const product = activeCategory?.items.find(
    (item) => String(item.id) === productId
  )

  const [activeImage, setActiveImage] = useState(0)
  const [imgError, setImgError] = useState(false)

  const images = product?.images && product.images.length > 0 ? product.images : []

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)

  const goToNext = () => {
    if (images.length < 2) return
    setActiveImage((prev) => (prev + 1) % images.length)
    setImgError(false)
  }

  const goToPrev = () => {
    if (images.length < 2) return
    setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    setImgError(false)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) goToNext()
    else if (distance < -minSwipeDistance) goToPrev()
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    dragStartX.current = e.clientX
  }

  const handleMouseUp = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    const distance = dragStartX.current - e.clientX
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) goToNext()
    else if (distance < -minSwipeDistance) goToPrev()
  }

  if (!product) {
    return (
      <div className="product-detail-page not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Back to {activeCategory.label}
      </button>

      <div className="detail-grid">
        <div className="detail-images">
          <div
            className="detail-image-main"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {images.length > 0 && !imgError ? (
              <img
                key={activeImage}
                src={images[activeImage]}
                alt={product.name}
                onError={() => setImgError(true)}
                draggable={false}
                className="fade-image"
              />
            ) : (
              <div className="image-placeholder">Image</div>
            )}

            {images.length > 1 && (
              <>
                <button className="slide-arrow slide-arrow-left" onClick={goToPrev} aria-label="Previous image">
                  ‹
                </button>
                <button className="slide-arrow slide-arrow-right" onClick={goToNext} aria-label="Next image">
                  ›
                </button>
                <div className="slide-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`slide-dot ${activeImage === i ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="detail-thumbnail-row">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`thumbnail ${activeImage === i ? 'active' : ''}`}
                  onClick={() => {
                    setActiveImage(i)
                    setImgError(false)
                  }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="detail-price">{product.price}</p>
          <p className="detail-desc">
            {product.longDescription || product.description}
          </p>

          <button className="btn btn-primary">Enquire About This Product</button>

          {product.specifications && product.specifications.length > 0 && (
            <div className="specs-section">
              <h3>Specifications</h3>
              <div className="specs-table">
                {product.specifications.map((spec, i) => (
                  <div className="spec-row" key={i}>
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail