
import { Link } from "react-router-dom";

export type TourCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  productUrl: string;
};

const PopularTourCard = ({
  imageUrl,
  title,
  description,
  price,
  productUrl
}: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-manman-charcoal mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-manman-coral font-bold">{price}</span>
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-manman-coral hover:bg-manman-coral/90 text-white py-2 px-4 rounded-md transition-colors"
          >
            자세히 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularTourCard;
