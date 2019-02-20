import * as actionTypes from './action';

const INGRIDIENTS_PRICE = {
    salad : 0.5,
    cheese : 1.5,
    bacon : 1.0,
    meat : 1.5
};

const initialState = {
    ingridients : {
        salad : 0,
        bacon : 0,
        cheese : 0,
        meat : 0
    },
    totalPrice : 4,
    purchaseable : false,
    purchasing : false
}

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case actionTypes.ADD_INGRIDIENT :
            return {
                ...state,
                ingridients : {
                    ...state.ingridients,
                    [action.ingridientName] : state.ingridients[action.ingridientName] + 1
                },
                totalPrice : state.totalPrice + INGRIDIENTS_PRICE[action.ingridientName]
            }
        case actionTypes.REMOVE_INGRIDIENT:
            return{
                ...state,
                ingridients :  {
                    ...state.ingridients,
                    [action.ingridientName] : state.ingridients[action.ingridientName] -1 
                },
                totalPrice : state.totalPrice - INGRIDIENTS_PRICE[action.ingridientName]
            }
        default:
            return state;
    }
}

export default reducer;