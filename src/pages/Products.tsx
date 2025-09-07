import Layout from "../components/layout/Layout";

const Products = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-manman-charcoal mb-6">
            여행 상품
          </h1>
          <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-semibold text-manman-charcoal mb-4">
              준비중입니다
            </h2>
            <p className="text-gray-600">
              더 좋은 여행 상품으로 곧 찾아뵙겠습니다.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
