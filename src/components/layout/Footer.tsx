import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-manman-charcoal py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 간단한 설명 */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-manman-coral mb-4">만만투어</h2>
            <p className="text-gray-300 mb-4">
              여행은 쉽고, 만만해야 한다<br />
              믿고 맡길 수 있는 여행 파트너
            </p>
          </div>

          {/* 퀵 링크 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-manman-coral transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-manman-coral transition-colors">
                  여행상품
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-manman-coral transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-manman-coral transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-manman-coral" />
                <span className="text-gray-300">02-725-2212</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-manman-coral" />
                <span className="text-gray-300">manmantour@naver.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-manman-coral" />
                <span className="text-gray-300">
                  서울특별시 중구 남대문로10길 28 우석빌딩 705호
                </span>
              </li>
            </ul>
          </div>

          {/* 영업시간 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">영업시간</h3>
            <ul className="text-gray-300 space-y-2">
              <li>평일: 09:00 - 18:00</li>
              <li>토요일, 일요일 및 공휴일: 휴무</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 만만투어. All rights reserved.</p>
          <p className="mt-2">사업자 등록번호: 274-81-00293 | 대표: 한상만</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
