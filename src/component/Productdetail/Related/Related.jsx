import './Related.css'

function RelatedProducts({ productDetailId, allProducts }) {
  const getRandomProducts = (productDetailId, allProducts) => {
    const productsWithoutDetail = allProducts.filter(product => product.id !== productDetailId);
    const randomProducts = new Set(); 

    while (randomProducts.size < 3 && productsWithoutDetail.length > 0) {
      const randomIndex = Math.floor(Math.random() * productsWithoutDetail.length);
      const randomProduct = productsWithoutDetail[randomIndex];
      randomProducts.add(randomProduct);
      productsWithoutDetail.splice(randomIndex, 1); 
    }
    return Array.from(randomProducts); 
  };
  const randomProducts = getRandomProducts(productDetailId, allProducts);

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <ul>
        {randomProducts.map(randomProduct => (
          <li key={randomProduct.id}>
            <div className='img_random'>
            <img src={randomProduct.img} alt={randomProduct.name} />
            </div>
            <div className="text_random">
            <span>{randomProduct.type}</span>
            <h4>{randomProduct.name}</h4>
            <p>{randomProduct.price}.00 $</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelatedProducts;
