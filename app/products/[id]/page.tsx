import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import { fetchSingleProduct, findExistingReview  } from "@/lib/actions";
import { auth } from '@clerk/nextjs/server';
import { formatCurrency } from "@/lib/format";
import Image from "next/image";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const { userId } = await auth();
  const { id: productId } = await params;
  const product = await fetchSingleProduct(productId);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  const reviewDoesNotExist = userId && (await findExistingReview(userId, productId));

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={productId} />
            <ShareButton name={product.name} productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>
      <ProductReviews productId={productId} />
      {reviewDoesNotExist && <SubmitReview productId={productId} />}
    </section>
  );
}
export default SingleProductPage;
