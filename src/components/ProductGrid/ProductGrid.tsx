'use client';
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/product";

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* section header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Featured Collection
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our handcrafted selection of premium fashion pieces, designed to elevate your closet with endless elegance
                </p>
            </div>

            {/* filter tabs */}
            <div className="flex justify-center gap-4 mb-12">
                <button className="px-6 py-2 bg-black text-white rounded-b-full font-medium">All</button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-b-full font-medium hover:bg-gray-200 transition-colors">New Arrivals</button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-b-full font-medium hover:bg-gray-200 transition-colors">Womans</button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-b-full font-medium hover:bg-gray-200 transition-colors">Mens</button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-b-full font-medium hover:bg-gray-200 transition-colors">Sale</button>
            </div>

            {/* product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* load more button */}
            <div className="text-center mt-12">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Load More Products</button>
            </div>
        </div>
    </section>  
)};

export default ProductGrid;