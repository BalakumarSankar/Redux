import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
   const items=useSelector((state)=>(state.cart.items)) 
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(((it)=>
        <CartItem
         key ={it.id}
        item={{id:it.id,title: it.name, quantity: it.quantity, total: it.totalPrice, price: it.price }}
        />))}
      </ul>
    </Card>
  );
};

export default Cart;
