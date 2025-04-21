
import { TourCardProps } from "../home/PopularTourCard";

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  productUrl,
}: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-manman-coral text-white px-3 py-1 text-sm font-bold">
          인기
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-manman-charcoal mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-manman-coral font-bold">{price}</span>
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-manman-blue hover:bg-manman-blue/90 text-white py-2 px-4 rounded-md transition-colors"
          >
            상품 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
