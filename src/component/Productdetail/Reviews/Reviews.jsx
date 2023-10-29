import { useState } from "react";
import "./Reviews.css";

const Reviews = ({ product }) => {
  
  const [formData, setFormData] = useState({
    review: "",
    name: "",
    email: "",
  });

  const [reviews, setReviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { ...formData };
    setReviews([...reviews, newReview]);

    setFormData({
      review: "",
      name: "",
      email: "",
    });
  };

  return (
    <div className="reviews">
      <div className="top_reviews">
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <h3>{review.name}</h3>
                <p>{review.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews yet.</p>
        )}
      </div>

      <div className="container">
        <h3>Be the first to review {product.name}</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="review">Your review *</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="half">
              
              <label htmlFor="name">Name *</label>
              <input
                className="name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

            </div>

            <div className="half">
              <label htmlFor="email">Email *</label>
              <input
                className="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
