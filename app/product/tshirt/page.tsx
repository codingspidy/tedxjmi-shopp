// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from 'components/grid/tile';
// import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
// import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
// import { getProduct, getProductRecommendations } from 'lib/shopify';
// import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import tshirt1 from "../../../images/tshirt-mockup.jpg";

export const runtime = 'edge';

// export async function generateMetadata({
//     params
// }: {
//     params: { handle: string };
// }): Promise<Metadata> {
//     const product = await getProduct(params.handle);

//     if (!product) return notFound();

//     const { url, width, height, altText: alt } = product.featuredImage || {};
//     const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//     return {
//         title: product.seo.title || product.title,
//         description: product.seo.description || product.description,
//         robots: {
//             index: indexable,
//             follow: indexable,
//             googleBot: {
//                 index: indexable,
//                 follow: indexable
//             }
//         },
//         openGraph: url
//             ? {
//                 images: [
//                     {
//                         url,
//                         width,
//                         height,
//                         alt
//                     }
//                 ]
//             }
//             : null
//     };
// }

export default function ProductPage() {
    const product = {
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
        variants: [
            {

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
            {

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
        ],
        featuredImage: {
            id: "featured-image-1",
            src: "https://example.com/product1-image.jpg",
            alt: "Product 1 Image",
        },
        images:
            [
                {

                    url: "https://example.com/product1-image1.jpg",
                    altText: "Product 1 Image 1",
                },
                {

                    url: "https://example.com/product1-image2.jpg",
                    altText: "Product 1 Image 2",
                },
            ],

        seo: {
            title: "Product 1 - Best Product Ever",
            description: "Discover the amazing features of Product 1.",
            keywords: ["product", "example", "1"],
        },
        tags: ["product", "example", "1"],
        updatedAt: "2023-09-18T12:00:00Z",
    };;

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.src,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd)
                }}
            />
            <div className="mx-auto max-w-screen-2xl px-4">
                <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
                    <div className="h-full w-full basis-full lg:basis-4/6">
                        <Gallery
                            images={product.images.map((image: any) => ({
                                src: tshirt1,
                                altText: image.altText
                            }))}
                        />
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <ProductDescription product={product} />
                    </div>
                </div>
                <Suspense>
                    <RelatedProducts />
                </Suspense>
            </div>
            {/* <Suspense>
                <Footer />
            </Suspense> */}
        </>
    );
}

async function RelatedProducts() {

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
                amount: "1999",
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
                            amount: "1699",
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
                amount: "2299",
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
                amount: "2499",
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

    const relatedProducts = [product1, product2, product3, product1, product2, product3, product1, product2, product3, product1, product2, product3];




    return (
        <div className="py-8">
            <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
            <ul className="flex w-full gap-4 overflow-x-auto pt-1">
                {relatedProducts.map((product) => (
                    <li
                        key={product.handle}
                        className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                        <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
                            <GridTileImage
                                alt={product.title}
                                label={{
                                    title: product.title,
                                    amount: product.priceRange.maxVariantPrice.amount,
                                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                                }}
                                src={tshirt1}
                                fill
                                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
