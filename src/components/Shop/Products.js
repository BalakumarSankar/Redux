import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[{
  id:'p1',
  price: 10,
  title:"abc",
  description:"hello",
},
{
  id:'2',
  price: 10,
  title:"abcd",
  description:"hello2",
},];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product)=>(
        <ProductItem
          key ={product.id}
          id={product.id}
          title = {product.title}
          price ={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
