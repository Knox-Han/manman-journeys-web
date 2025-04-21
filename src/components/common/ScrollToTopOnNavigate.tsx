
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 페이지 이동 시 스크롤 위치를 맨 위로 자동 이동시키는 컴포넌트
 */
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;
