import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    getAllPizzaReducer,
    addPizzaReducer,
    getPizzaByIdReducer,
    updatePizzaByIdReducer,
} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
    registerUserReducer,
    loginUserReducer,
    getAllUsersReducer,
} from "./reducers/userReducer";
import {
    placeOrderReducer,
    getUserOrdersReducer,
    allUserOrdersReducer,
} from "./reducers/orderReducer";

let cartItems = [];
let currentUser = null;

try {
    // Attempt to parse the JSON data from localStorage
    const parsedCartItems = localStorage.getItem("cartItems");
    if (parsedCartItems) {
        cartItems = JSON.parse(parsedCartItems);
    }

    const parsedCurrentUser = localStorage.getItem("currentUser");
    if (parsedCurrentUser) {
        currentUser = JSON.parse(parsedCurrentUser);
    }
} catch (error) {
    // Handle any JSON parsing errors here
    console.error("Error parsing JSON from localStorage:", error);
}

// The rest of your code remains the same
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    updatePizzaByIdReducer: updatePizzaByIdReducer,
    allUserOrdersReducer: allUserOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
});

const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    },
};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
