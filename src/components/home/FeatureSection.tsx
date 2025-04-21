
import { ArrowRight, MapPin, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-manman-coral" />,
    title: "다양한 여행지",
    description: "국내부터 해외까지, 다양한 여행지에서 최적의 상품을 제공합니다.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-manman-coral" />,
    title: "맞춤형 일정",
    description: "고객님의 취향과 일정에 맞춘 완벽한 여행 계획을 설계해 드립니다.",
  },
  {
    icon: <Phone className="h-10 w-10 text-manman-coral" />,
    title: "24시간 지원",
    description: "여행 중 어떤 상황에서도 24시간 고객 지원 서비스를 제공합니다.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-manman-charcoal mb-4">
            만만투어만의 특별함
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            저희는 단순한 여행사가 아닌, 고객님의 소중한 추억을 만들어 가는 여행 파트너입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-manman-beige/30 rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-manman-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center text-manman-coral hover:text-manman-coral/80 font-medium"
          >
            회사 소개 더 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
