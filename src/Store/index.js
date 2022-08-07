import {createSlice,configureStore,} from '@reduxjs/toolkit';
const uiSlice=createSlice({
    name: 'ui',
    initialState:{
        cartVisibility:false,notification:null,
    },
    reducers : {
        toggle(state)
        {
            state.cartVisibility=!state.cartVisibility;
        },
        shownotification(state,action){
            state.notification={status:action.payload.status,title:action.payload.title,message:action.payload.message}
        }

    }
});
const cartSlice =createSlice({
 name: 'cart',
 initialState:{
    items: [],
    totalQuantity : 0,
 },
 reducers:{
    addItem(state,action){
        const newitem=action.payload;
        const exist =state.items.find( item=>item.id ===newitem.id);
        state.totalQuantity++;
        if(!exist){
            state.items.push({
                id:newitem.id,
                price:newitem.price,
                quantity:1,
                totalPrice:newitem.price,
                name:newitem.title,
            });
        }
            else{
                exist.quantity++;
                exist.totalPrice=exist.totalPrice+exist.price;
            }
        
    },
    removeItem(state,action){
        const id=action.payload;
        const exist=state.items.find(item=>item.id===id);
        state.totalQuantity--;
        if(exist.quantity===1)
        {
            state.items=state.items.filter(item=>item.id!==id);
        }
        else{
            exist.quantity--;
            exist.totalPrice=exist.totalPrice-exist.price;
        }
    }

 }
});
const store=configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSlice.reducer,
    }
})
export const uiActions=uiSlice.actions;
export const cartActions=cartSlice.actions;
export default store;