// import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import tshirt1 from "../images/tshirt-mockup.jpg"

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  // if (!products?.length) return null;

  const products = [{
    id: 1,
    handle: "shirt",
    description: "Nothin something",
    descriptionHtml: "Nothin something",
    title: "Shirt",
    availableForSale: false,
    selectedOptions: [{
      name: "color",
      value: "black"
    }],
    price: {
      amount: "700",
      currencyCode: "INR"
    },
  }, {
    id: 2,
    handle: "shirt",
    description: "Nothin something",
    descriptionHtml: "Nothin something",
    title: "Shirt",
    availableForSale: false,
    selectedOptions: [{
      name: "color",
      value: "black"
    }],
    price: {
      amount: "700",
      currencyCode: "INR"
    },
  }, {
    id: 3,
    handle: "shirt",
    description: "Nothin something",
    descriptionHtml: "Nothin something",
    title: "Shirt",
    availableForSale: false,
    selectedOptions: [{
      name: "color",
      value: "black"
    }],
    price: {
      amount: "700",
      currencyCode: "INR"
    },
  }];
  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products, ...products];

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.price.amount,
                  currencyCode: product.price.currencyCode
                }}
                src={tshirt1}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
