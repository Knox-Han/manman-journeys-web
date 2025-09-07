
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroVeniceItaly from "../../assets/hero-venice-italy.jpg";
import heroParisEiffel from "../../assets/hero-paris-eiffel.jpg";
import heroSwissAlps from "../../assets/hero-swiss-alps.jpg";

// 배너 이미지 데이터 - 3개 테마
const bannerData = [
  {
    id: 1,
    imageUrl: heroVeniceItaly,
    title: "베네치아의 로맨틱한 매력",
    description: "운하 위를 미끄러지는 곤돌라와 함께 중세 유럽의 낭만을 만끽하세요",
    theme: "베네치아"
  },
  {
    id: 2,
    imageUrl: heroParisEiffel,
    title: "파리, 사랑의 도시에서 만나는 감동",
    description: "에펠탑이 선사하는 황홀한 야경과 함께 평생 잊지 못할 추억을 만드세요",
    theme: "파리"
  },
  {
    id: 3,
    imageUrl: heroSwissAlps,
    title: "스위스 알프스의 웅장한 자연",
    description: "만년설이 덮인 알프스 산맥과 에메랄드 호수가 선사하는 절경의 감동",
    theme: "스위스"
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
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-manman-coral/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  {banner.theme} 여행
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{banner.title}</h1>
              <p className="text-lg md:text-xl max-w-2xl animate-fade-in">{banner.description}</p>
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