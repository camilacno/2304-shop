import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          maxime debitis nihil labore soluta laboriosam adipisci fugiat
          inventore voluptatum dolorem temporibus autem dignissimos,
          perspiciatis totam, blanditiis laborum nesciunt impedit animi.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
