import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './store/users.js'
import productsReducer from './store/products.js'


const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer
    }
})

export default store