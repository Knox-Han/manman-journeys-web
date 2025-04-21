
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 배너 이미지 데이터
const bannerData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "아름다운 자연 속으로",
    description: "숨막히는 풍경과 함께하는 특별한 여행",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "도시의 활기를 느껴보세요",
    description: "세계 각국의 문화를 체험하는 도시 여행",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "해변에서의 휴식",
    description: "푸른 바다와 함께하는 완벽한 휴양",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* 슬라이드 */}
      <div className="relative h-full">
        {bannerData.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 화살표 네비게이션 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-colors"
        onClick={prevSlide}
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-colors"
        onClick={nextSlide}
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-manman-coral"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
