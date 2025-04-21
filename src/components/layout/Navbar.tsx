
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-manman-coral">
            만만투어
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">홈</NavLink>
            <NavLink to="/products">여행상품</NavLink>
            <NavLink to="/about">회사소개</NavLink>
            <NavLink to="/contact">문의하기</NavLink>
          </nav>

          {/* 모바일 메뉴 토글 버튼 */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 토글"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-manman-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-manman-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>홈</MobileNavLink>
              <MobileNavLink to="/products" onClick={() => setIsOpen(false)}>여행상품</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>회사소개</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>문의하기</MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

// 데스크탑 네비게이션 링크 컴포넌트
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-manman-charcoal font-medium hover:text-manman-coral transition-colors"
  >
    {children}
  </Link>
);

// 모바일 네비게이션 링크 컴포넌트
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-manman-charcoal font-medium py-2 hover:text-manman-coral transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
