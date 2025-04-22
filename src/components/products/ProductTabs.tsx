
import { useState } from "react";
import { TourCardProps } from "../home/PopularTourCard";
import ProductCard from "./ProductCard";

// 국내 여행 상품 데이터
const domesticProducts: TourCardProps[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    title: "제주도 3박 4일 패키지",
    description: "아름다운 제주의 자연과 함께하는 힐링 여행",
    price: "₩399,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=JE",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "강원도 설악산 2박 3일",
    description: "설악산의 단풍과 함께하는 가을 여행",
    price: "₩299,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=GN",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "부산 해운대 1박 2일",
    description: "해운대의 낭만과 맛있는 음식을 즐기는 부산 여행",
    price: "₩199,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=BS",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "전주 한옥마을 당일치기",
    description: "전통의 멋이 살아있는 전주한옥마을 여행",
    price: "₩99,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=GJ",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    title: "여수 밤바다 2박 3일",
    description: "아름다운 여수 밤바다와 함께하는 로맨틱 여행",
    price: "₩250,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=GJ",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "서울 시티투어 당일코스",
    description: "서울의 명소를 한 번에 둘러보는 알찬 당일치기 코스",
    price: "₩79,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=SE",
  },
];

// 해외 여행 상품 데이터
const internationalProducts: TourCardProps[] = [
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "괌 휴양 패키지 5박 6일",
    description: "에메랄드빛 바다와 함께하는 환상적인 휴양!",
    price: "₩1,290,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=GUM",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "스위스 일주 7박 8일",
    description: "알프스의 아름다움을 만끽하는 스위스 여행",
    price: "₩2,990,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=ZRH",
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    title: "일본 교토/오사카 3박 4일",
    description: "고즈넉한 교토의 전통과 오사카의 활기",
    price: "₩690,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=KIX",
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "베트남 다낭/호이안 4박 5일",
    description: "에메랄드빛 해변과 고풍스러운 호이안 골목길",
    price: "₩590,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=DAD",
  },
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "하와이 호놀룰루 6박 7일",
    description: "와이키키 비치와 다이아몬드 헤드의 환상적인 풍경",
    price: "₩2,490,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=HNL",
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "태국 방콕/파타야 5박 6일",
    description: "방콕의 활기와 파타야의 해변을 함께 즐기는 여행",
    price: "₩790,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=BKK",
  },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-5 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "domestic"
                  ? "bg-manman-coral text-white"
                  : "bg-white text-manman-charcoal hover:bg-gray-100"
              }`}
            >
              국내 여행
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-5 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "international"
                  ? "bg-manman-coral text-white"
                  : "bg-white text-manman-charcoal hover:bg-gray-100"
              }`}
            >
              해외 여행
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "domestic"
            ? domesticProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            : internationalProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
