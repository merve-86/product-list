import React from 'react'
import { products } from '../helper/data';



function ProductCard({kategori}) {
  const filtreProducts = (kategori) === "all" ? products : products.filter((product) => product.category === kategori)
  return(
    <div className="tasiyici">
    {
      filtreProducts.map(({title, id, price, category, image }) =>(
        <div className="anaDiv" key={id}>
          <div className="imgP">
            <img src={image} alt={title} />
            <p>{price} $</p>
          </div>
          <div className="title">
            <h4>{title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;






















// const ProductCard = ({image, title, price, id}) => {
//   return (
//     <div>
//       <div className="container">        
//         <div className="card">
//           <img src={image} alt={title} />
//           <p>{title}</p>
//           <p>{price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard














// const ProductCard = ({product}) => {
//   return (
//     <div key={product.id} className='cards'>
//         <div className="card">
//             <img className='img' src={product.image} alt={product.title} />
//         </div>      
//     </div>
//   )
// }

// export default ProductCard
