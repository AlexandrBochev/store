import { Button } from '../ui/button';

type AddToCartProps = {
  productId: string;
};

function AddToCart({ productId }: AddToCartProps) {
  console.log(productId);
  return (
    <Button className='capitalize mt-8' size='lg'>
      add to cart
    </Button>
  );
}
export default AddToCart;