import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart = () => {} }) => {
  const isOutOfStock =
    product.stock === 0 ||
    product.stock === undefined ||
    product.available === false;

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img
          src={
            product.image ||
            "https://via.placeholder.com/600x400?text=Sem+imagem"
          }
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-price">
          {typeof product.price === "number"
            ? product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : product.price}
        </p>

        {product.variants && product.variants.length > 0 ? (
          <select className="variant-select" defaultValue={product.variants[0]}>
            {product.variants.map((v, i) => (
              <option key={i} value={v}>
                {v}
              </option>
            ))}
          </select>
        ) : (
          <div className="variant-label">{product.variantLabel || ""}</div>
        )}

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Fora de estoque" : "Adicionar ao carrinho"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
