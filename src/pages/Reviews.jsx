import './Reviews.css'

// CLIENT: Replace with real reviews
const reviews = [
  {
    id: 1,
    name: 'Customer Name',
    rating: 5,
    text: 'Review text goes here.',
  },
  {
    id: 2,
    name: 'Customer Name',
    rating: 4,
    text: 'Review text goes here.',
  },
  {
    id: 3,
    name: 'Customer Name',
    rating: 5,
    text: 'Review text goes here.',
  },
]

function Reviews() {
  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>
      <p className="reviews-sub">What our customers say about us</p>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.id}>
            <div className="stars">
              {'★'.repeat(r.rating)}
              {'☆'.repeat(5 - r.rating)}
            </div>
            <p className="review-text">"{r.text}"</p>
            <p className="review-name">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews