import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-manman-coral mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-manman-charcoal mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나, 이동되었거나, 삭제되었을 수 있습니다.
          </p>
          <Link
            to="/"
            className="bg-manman-coral hover:bg-manman-coral/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
