
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-manman-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-manman-charcoal mb-4">
            여행의 모든 순간을 특별하게
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            만만투어와 함께라면 어떤 여행이든 특별한 경험이 됩니다.
            지금 바로 문의하고 당신만의 여행을 계획해보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="bg-manman-coral hover:bg-manman-coral/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              여행 상품 보기
            </Link>
            <Link
              to="/contact"
              className="bg-white border-2 border-manman-coral text-manman-coral hover:bg-manman-coral/10 px-6 py-3 rounded-md font-medium transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
