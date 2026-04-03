'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaStar, FaCartPlus, FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {

    const { title, image, ratings, reviews, price, sold, discount } = product;
    const [isWishlisted, setIsWishlisted] = useState(false);
    // Calculate discounted price
    const discountedPrice = product.discount
        ? Math.round(product.price - (product.price * product.discount) / 100)
        : product.price;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* Image Section */}
            <figure className="relative h-64 bg-base-200 overflow-hidden">

                <Image src={product.image} alt={product.title}
                width={400}
                height={150}
                className={`object-contain p-4 transition-transform duration-300 group-hover:scale-105 `} />


                {/* Discount Badge */}
                {product.discount && product.discount > 0 && (
                    <div className="absolute top-3 right-3 badge badge-error text-white font-bold">
                        -{product.discount}%
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-3 left-3 btn btn-circle btn-sm bg-base-100/80 hover:bg-white border-none"
                >
                    <FaHeart className={isWishlisted ? 'text-red-500' : 'text-gray-500'} />
                </button>
            </figure>

            {/* Card Content */}
            <div className="card-body p-4">
                {/* Title */}
                <h2 className="card-title text-lg leading-tight line-clamp-2 min-h-13">
                    {product.title}
                </h2>

                {/* Bangla Title */}
                {product.bangla && (
                    <p className="text-sm text-gray-600 line-clamp-1">
                        {product.bangla}
                    </p>
                )}

                {/* Ratings & Sold */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-yellow-400">
                        <FaStar />
                        <span className="ml-1 font-medium">{product.ratings}</span>
                    </div>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                    <span className="text-gray-400 mx-1">•</span>
                    <span className="text-gray-500">{product.sold} sold</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-3">
                    <span className="text-2xl font-bold text-primary">
                        ৳{discountedPrice}
                    </span>
                    {product.discount && product.discount > 0 && (
                        <span className="text-base line-through text-gray-400">
                            ৳{product.price}
                        </span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <div className="card-actions mt-5">
                    <button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        className="btn btn-primary w-full gap-2 hover:gap-3 transition-all"
                    >
                        <FaCartPlus className="text-lg" />
                        Add to Cart
                    </button>
                    <Link href={`/products/${_id}`}
                        className="btn btn-primary btn-outline w-full gap-2 hover:gap-3 transition-all"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;