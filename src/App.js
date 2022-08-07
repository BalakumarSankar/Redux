import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import { uiActions } from './Store/index';
import {Fragment, useEffect} from 'react'
import Notification from './components/Layout/notification';
let isinitial=true;
function App() {
  const cart=useSelector((state)=>(state.cart));
  const isvisi=useSelector((state)=>state.ui.cartVisibility);
  const dispatch=useDispatch();
  const notifi=useSelector((state)=>state.ui.notification);
  
  useEffect(()=>{
    const sendCart=async()=>{
      dispatch(uiActions.shownotification({
        status: 'pending',
        title:'Sending...',
        message:'sending data',
      }))
     const response = await fetch("https://redux-2f0c4-default-rtdb.firebaseio.com/cart.json",{
      method:'PUT',
      body:JSON.stringify(cart)}
      );
    
     if(! response.ok)
     {
      throw new Error("failed");
      
     }
     dispatch(uiActions.shownotification({
      status: 'sucsess',
      title:'Success!',
      message:'Sent cart data successfully!',
    }))
  }
  if(isinitial)
  {
    isinitial=false;
    return;
  }
    sendCart().catch((error)=>{
      dispatch(uiActions.shownotification({
        status: 'error',
        title:'ERROR!',
        message:'FAILED',
      }))
    });

  },[cart,dispatch]);
  
  return (
    <Fragment>
      {notifi && <Notification status={notifi.status} title={notifi.title} message={notifi.message}></Notification>}
      <Layout>
      {isvisi && <Cart />}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
