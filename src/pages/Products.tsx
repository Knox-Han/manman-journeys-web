
import Layout from "../components/layout/Layout";
import ProductTabs from "../components/products/ProductTabs";

const Products = () => {
  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-manman-charcoal mb-6 text-center">
            여행 상품
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            만만투어가 엄선한 최고의 여행 상품들을 소개합니다. 
            국내 여행부터 해외 여행까지, 다양한 목적지와 테마의 여행 상품을 만나보세요.
          </p>
        </div>
      </div>
      <ProductTabs />
    </Layout>
  );
};

export default Products;
