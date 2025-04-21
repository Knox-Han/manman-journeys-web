
import PopularTourCard, { TourCardProps } from "./PopularTourCard";

// 인기 여행 상품 데이터
const popularToursData: TourCardProps[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "제주도 3박 4일 패키지",
    description: "아름다운 제주의 자연과 함께하는 힐링 여행. 우도, 성산일출봉, 한라산 등 필수 관광지 포함!",
    price: "₩399,000~",
    productUrl: "https://www.modetour.com/Package/Domestic/List?MainCity=JE",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    title: "대만 타이페이 4박 5일",
    description: "아시아의 숨겨진 보석, 대만! 현지 맛집 투어와 지우펀 야경 관광 포함",
    price: "₩799,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=TPE",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "괌 휴양 패키지 5박 6일",
    description: "에메랄드빛 바다와 함께하는 환상적인 휴양! 투몬비치, 리티디안 비치 등 방문",
    price: "₩1,290,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=GUM",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "스위스 일주 7박 8일",
    description: "알프스의 아름다움을 만끽하는 스위스 여행. 취리히, 인터라켄, 마터호른 등 명소 방문",
    price: "₩2,990,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=ZRH",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "일본 교토/오사카 3박 4일",
    description: "고즈넉한 교토의 전통과 오사카의 활기를 함께 느낄 수 있는 일본 여행",
    price: "₩690,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=KIX",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    title: "베트남 다낭/호이안 4박 5일",
    description: "에메랄드빛 해변과 고풍스러운 호이안 골목길의 매력을 느껴보세요",
    price: "₩590,000~",
    productUrl: "https://www.modetour.com/Package/International/List?MainCity=DAD",
  },
];

const PopularTours = () => {
  return (
    <section className="py-16 bg-manman-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-manman-charcoal">인기 여행상품</h2>
          <p className="text-gray-600 mt-2">많은 고객님들이 선택한 인기 여행 상품을 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularToursData.map((tour) => (
            <PopularTourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
