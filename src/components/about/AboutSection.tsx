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
                "여행의 설렘부터 출장의 효율까지, 당신의 여정을 디자인합니다."
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                만만투어는 2018년 설립 이후, 해외여행과 기업 출장 전문 여행사로서 수많은 고객의 여정을 정직하고 정교하게 설계해왔습니다. 
                항공권 예약·발권, 호텔 예약, 비자 발급, 맞춤 일정 설계 등 여행에 필요한 전 과정을 원스톱으로 지원합니다.
              </p>

              <p className="mt-4">
                특히 기업 고객을 위한 전용 출장 플래닝 서비스를 통해, 출장 목적과 예산에 최적화된 항공, 숙소, 이동 수단을 신속하고 유연하게 구성하며, 여행지의 리스크에도 철저히 대비하고 있습니다.
              </p>

              <p className="mt-4">
                또한 자유여행, 허니문, 골프투어 등 개인 여행 고객을 위한 맞춤 서비스도 함께 제공하며, 고객 중심의 세심한 응대와 차별화된 일정 구성으로 높은 만족도를 이끌어내고 있습니다.
              </p>

              <p className="mt-4">
                만만투어는 단순한 여행사 그 이상의 존재로, 여정의 가치를 높이는 전략적 파트너가 되어드리겠습니다. 지금, 당신의 다음 여정을 저희와 함께 설계해보세요.
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
