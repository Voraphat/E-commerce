import { useState, useContext } from "react";
import { CartContext } from "../../function/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cartProducts, totalCartPrice } = useContext(CartContext);

  const countries = ["United States", "Thailand", "Brazil"];

  const [formData, setFormData] = useState({
    Name: "",
    country: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    stateCounty: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.Name &&
      formData.country &&
      formData.streetAddress &&
      formData.townCity &&
      formData.stateCounty &&
      formData.postcode &&
      formData.phone &&
      formData.email
    ) {
      const orderData = {
        ...formData,
        products: cartProducts.map((product) => ({
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        })),
        totalCartPrice: totalCartPrice,
      };
      console.log("Sending order:", orderData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <div className="billing_details">
          <form onSubmit={handleSubmit}>
            <h2>Billing details</h2>

            <label htmlFor="Name">Name * (optional)</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="country">Country / Region *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option disabled selected value="">
                Select a country
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <label htmlFor="streetAddress">Street address *</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="apartment">
              Apartment, suite, unit, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
            />

            <label htmlFor="townCity">Town / City *</label>
            <input
              type="text"
              id="townCity"
              name="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="stateCounty">State / County *</label>
            <input
              type="text"
              id="stateCounty"
              name="stateCounty"
              value={formData.stateCounty}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="postcode">Postcode / ZIP *</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <h2>Additional information</h2>

            <label htmlFor="orderNotes">Order notes (optional)</label>
            <textarea
              id="orderNotes"
              name="orderNotes"
              rows="4"
              value={formData.orderNotes}
              onChange={handleInputChange}
            ></textarea>
          </form>
        </div>

        <div className="youroder">
          <table>
            <tr>
              <th>Your Oder</th>
            </tr>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
            <tbody>
              {Object.values(
                cartProducts.reduce((acc, product) => {
                  if (!acc[product.id]) {
                    acc[product.id] = { ...product, quantity: 0 };
                  }
                  acc[product.id].quantity += 1;
                  return acc;
                }, {})
              ).map((product) => (
                <tr key={product.id}>
                  <td>
                    <td>
                      {product.name} x {product.quantity}
                    </td>
                  </td>
                  <td>${product.price * product.quantity}</td>
                </tr>
              ))}

              <tr>
                <td>Subtotal</td>
                <td>${totalCartPrice}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${totalCartPrice}</td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className="text_order">
              <p>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
