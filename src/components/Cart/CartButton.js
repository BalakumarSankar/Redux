import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../Store/index';
//import { cartActions } from '../../Store/index';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartquantity=useSelector((state)=>(state.cart.totalQuantity))
  const toggleHandler=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
