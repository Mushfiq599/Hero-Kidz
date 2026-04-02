import React from 'react';

const ProductSkeleton = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div>
            {isLoading && (
                <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="skeleton h-52 w-full rounded-xl mb-4"></div>
                    <div className="skeleton h-6 w-4/5 rounded mb-2"></div>
                    <div className="skeleton h-4 w-3/5 rounded mb-4"></div>

                    <div className="flex gap-2 mb-3">
                        <div className="skeleton h-5 w-12 rounded"></div>
                        <div className="skeleton h-5 w-20 rounded"></div>
                    </div>

                    <div className="skeleton h-8 w-24 rounded mb-4"></div>
                    <div className="skeleton h-12 w-full rounded-xl mt-auto"></div>
                </div>
            )}
        </div>
    );
};

export default ProductSkeleton;