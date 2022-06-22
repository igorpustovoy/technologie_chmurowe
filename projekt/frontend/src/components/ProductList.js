import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("/products");
            setProducts(response.data);
        }
        fetchProducts();
    }
    , []);

    return(
        <div className="page">
            <h2>Products</h2>
            <ProductForm products={products} setProducts={setProducts} />
            <div className="product-list">
                {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image_url} alt={product.name}></img>
                    <div className="product-info">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price + "$"}</div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default ProductList;