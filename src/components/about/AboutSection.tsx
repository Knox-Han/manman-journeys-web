
import { Building, Phone, Mail, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-manman-charcoal mb-6 text-center">
            회사 소개
          </h1>

          {/* 회사 소개 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-manman-coral mb-4">
                만만투어
              </h2>
              <p className="text-lg text-gray-700 italic">
                "진심을 담아 설계한 당신만의 여행, 여행에 진심입니다."
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                만만투어는 2018년에 설립된 이래, 고객님들께 최고의 여행 경험을 
                제공하기 위해 노력해 왔습니다. 저희는 단순한 패키지 여행이 아닌, 
                여행자 개개인의 취향과 필요에 맞춘 맞춤형 여행을 제공합니다.
              </p>
              
              <p className="mt-4">
                만만투어의 전문 여행 컨설턴트들은 각 목적지에 대한 풍부한 경험과 
                지식을 바탕으로, 고객님께서 꿈꾸시는 여행을 현실로 만들어 드립니다. 
                국내부터 해외까지, 가족 여행부터 허니문, 기업 연수까지 다양한 
                여행 서비스를 제공합니다.
              </p>
              
              <p className="mt-4">
                만만투어와 함께라면, 여행이 더 이상 복잡하고 어려운 것이 아닌 
                즐겁고 설레는 경험이 될 것입니다. 저희와 함께 새로운 추억을 만들어보세요.
              </p>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-manman-charcoal mb-6">
              회사 정보
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Building className="w-6 h-6 text-manman-coral mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-manman-charcoal">
                    사업자 정보
                  </h3>
                  <p className="text-gray-700 mt-1">상호명: (주) 만만투어</p>
                  <p className="text-gray-700">대표자: 한상만</p>
                  <p className="text-gray-700">사업자 등록번호: 274-81-00293</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-manman-coral mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-manman-charcoal">
                    연락처 및 영업시간
                  </h3>
                  <p className="text-gray-700 mt-1">전화: 02-725-2212</p>
                  <p className="text-gray-700">영업시간: 평일 09:00 ~ 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-manman-coral mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-manman-charcoal">
                    이메일
                  </h3>
                  <p className="text-gray-700 mt-1">manmantour@naver.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-manman-coral mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-manman-charcoal">
                    주소 및 오시는 길
                  </h3>
                  <p className="text-gray-700 mt-1">
                    서울특별시 중구 남대문로10길 28 우석빌딩 705호 (우편번호: 04533)
                  </p>
                  <p className="text-gray-700 mt-1">
                    을지로입구역 3번 출구에서 우회전 100m (VIP동원참치 7층)
                  </p>
                  <p className="text-gray-700 mt-1">
                    종각역 5번 출구에서 약 500m 거리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
