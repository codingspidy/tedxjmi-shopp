import { GridTileImage } from 'components/grid/tile';
// import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import tshirt1 from "../../images/tshirt-mockup.jpg";
function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: any;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={tshirt1}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.

  // if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  // const [firstProduct, secondProduct, thirdProduct] = homepageItems;
  const product1 = {
    id: "product-1",
    handle: "product-handle-1",
    availableForSale: true,
    title: "Product 1",
    description: "Description for Product 1",
    descriptionHtml: "<p>Description for Product 1</p>",
    options: [
      {
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
      {
        name: "Color",
        values: ["Red", "Blue", "Green"],
      },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: 1999,
        currencyCode: "INR",
      },
      minVariantPrice: {
        amount: 1499,
        currencyCode: "INR",
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-1",
            title: "Small Red",
            availableForSale: true,
            selectedOptions: [
              { name: "Size", value: "Small" },
              { name: "Color", value: "Red" },
            ],
            price: {
              amount: 1499,
              currencyCode: "INR",
            },
          },
        },
        {
          node: {
            id: "variant-2",
            title: "Medium Blue",
            availableForSale: true,
            selectedOptions: [
              { name: "Size", value: "Medium" },
              { name: "Color", value: "Blue" },
            ],
            price: {
              amount: 1699,
              currencyCode: "INR",
            },
          },
        },
      ],
    },
    featuredImage: {
      id: "featured-image-1",
      src: "https://example.com/product1-image.jpg",
      alt: "Product 1 Image",
    },
    images: {
      edges: [
        {
          node: {
            id: "image-1-1",
            src: "https://example.com/product1-image1.jpg",
            alt: "Product 1 Image 1",
          },
        },
        {
          node: {
            id: "image-1-2",
            src: "https://example.com/product1-image2.jpg",
            alt: "Product 1 Image 2",
          },
        },
      ],
    },
    seo: {
      title: "Product 1 - Best Product Ever",
      description: "Discover the amazing features of Product 1.",
      keywords: ["product", "example", "1"],
    },
    tags: ["product", "example", "1"],
    updatedAt: "2023-09-18T12:00:00Z",
  };
  
  const product2 = {
    id: "product-2",
    handle: "product-handle-2",
    availableForSale: true,
    title: "Product 2",
    description: "Description for Product 2",
    descriptionHtml: "<p>Description for Product 2</p>",
    options: [
      {
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
      {
        name: "Color",
        values: ["Red", "Blue", "Green"],
      },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: 2299,
        currencyCode: "INR",
      },
      minVariantPrice: {
        amount: 1799,
        currencyCode: "INR",
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-3",
            title: "Small Red",
            availableForSale: true,
            selectedOptions: [
              { name: "Size", value: "Small" },
              { name: "Color", value: "Red" },
            ],
            price: {
              amount: 1799,
              currencyCode: "INR",
            },
          },
        },
        {
          node: {
            id: "variant-4",
            title: "Medium Blue",
            availableForSale: true,
            selectedOptions: [
              { name: "Size", value: "Medium" },
              { name: "Color", value: "Blue" },
            ],
            price: {
              amount: 1999,
              currencyCode: "INR",
            },
          },
        },
      ],
    },
    featuredImage: {
      id: "featured-image-2",
      src: "https://example.com/product2-image.jpg",
      alt: "Product 2 Image",
    },
    images: {
      edges: [
        {
          node: {
            id: "image-2-1",
            src: "https://example.com/product2-image1.jpg",
            alt: "Product 2 Image 1",
          },
        },
        {
          node: {
            id: "image-2-2",
            src: "https://example.com/product2-image2.jpg",
            alt: "Product 2 Image 2",
          },
        },
      ],
    },
    seo: {
      title: "Product 2 - Another Great Product",
      description: "Explore the features of Product 2.",
      keywords: ["product", "example", "2"],
    },
    tags: ["product", "example", "2"],
    updatedAt: "2023-09-18T12:00:00Z",
  };
  
  const product3 = {
    id: "product-3",
    handle: "product-handle-3",
    availableForSale: false,
    title: "Product 3",
    description: "Description for Product 3",
    descriptionHtml: "<p>Description for Product 3</p>",
    options: [
      {
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
      {
        name: "Color",
        values: ["Red", "Blue", "Green"],
      },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: 2499,
        currencyCode: "INR",
      },
      minVariantPrice: {
        amount: 1999,
        currencyCode: "INR",
      },
    },
    variants: {
      edges: [
        {
          node: {
            id: "variant-5",
            title: "Small Red",
            availableForSale: false,
            selectedOptions: [
              { name: "Size", value: "Small" },
              { name: "Color", value: "Red" },
            ],
            price: {
              amount: 1999,
              currencyCode: "INR",
            },
          },
        },
        {
          node: {
            id: "variant-6",
            title: "Medium Blue",
            availableForSale: false,
            selectedOptions: [
              { name: "Size", value: "Medium" },
              { name: "Color", value: "Blue" },
            ],
            price: {
              amount: 2199,
              currencyCode: "INR",
            },
          },
        },
      ],
    },
    featuredImage: {
      id: "featured-image-3",
      src: "https://example.com/product3-image.jpg",
      alt: "Product 3 Image",
    },
    images: {
      edges: [
        {
          node: {
            id: "image-3-1",
            src: "https://example.com/product3-image1.jpg",
            alt: "Product 3 Image 1",
          },
        },
        {
          node: {
            id: "image-3-2",
            src: "https://example.com/product3-image2.jpg",
            alt: "Product 3 Image 2",
          },
        },
      ],
    },
    seo: {
      title: "Product 3 - Limited Availability",
      description: "Learn more about Product 3.",
      keywords: ["product", "example", "3"],
    },
    tags: ["product", "example", "3"],
    updatedAt: "2023-09-18T12:00:00Z",
  };
 
  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={product1} priority={true} />
      <ThreeItemGridItem size="half" item={product2} priority={true} />
      <ThreeItemGridItem size="half" item={product3} />
    </section>
  );
}
