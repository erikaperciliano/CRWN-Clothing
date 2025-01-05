import { useState, useEffect } from 'react';
import { useContext, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';


const Category = () => {
    const { category } = useParams();
    const  categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState([categoriesMap[category]]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <>
            <h2 className='category-title'>{category}</h2>
            <div className='category-container'>
                { products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)  
                }
            </div>
        </>
    )
}

export default Category;