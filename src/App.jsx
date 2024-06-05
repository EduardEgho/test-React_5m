import './App.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct, nextSlide, prevSlide } from './store/productSlice'

const App = () => {
    const { product, currentProduct, loading, error } = useSelector(
        (state) => state.product,
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(currentProduct))
    }, [currentProduct])

    const buttonNext = () => {
        dispatch(nextSlide())
        console.log(currentProduct)
    }

    const buttonPrev = () => {
        dispatch(prevSlide())
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className='container'>
            <div className="block_product">
                <div className="info_product">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.description}</p>
                <div className="product_buttons">
                    <button
                        onClick={buttonPrev}
                        disabled={currentProduct === 1}
                    >
                        Prev
                    </button>
                    <button onClick={buttonNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default App
