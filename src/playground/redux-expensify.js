import {createStore, combineReducers} from 'redux';


//expenses reducer
const expensesReducerDefaultState =[];

const expensesReducer = (state = expensesReducerDefaultState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

console.log(store.getState())
const demoState = {
    expenses:[{
        id:'asdfasdf',
        description:'rent',
        note:'final rent',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', // date or amount
        startDate:undefined,
        endDate:undefined
    }
};

