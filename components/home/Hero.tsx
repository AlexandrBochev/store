import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Timeless design meets everyday comfort in this carefully crafted piece. 
          Built with attention to detail and durable materials, it provides both 
          style and function for modern living spaces. A versatile choice that 
          blends seamlessly into different interiors, offering elegance and 
          reliability without compromise.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;