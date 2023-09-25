import React from 'react';

const Product = () => {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Product;