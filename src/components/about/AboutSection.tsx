import { Building, Phone, Mail, MapPin, Sparkles, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-manman-offwhite via-white to-manman-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 섹션 */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-manman-coral to-manman-coral/80 rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-manman-charcoal to-manman-coral bg-clip-text text-transparent mb-4">
              만만투어
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              여행의 설렘부터 출장의 효율까지, 당신의 여정을 디자인합니다.
            </p>
          </div>

          {/* 메인 소개 카드 */}
          <div className="relative mb-16 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-manman-coral/10 to-manman-blue/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-manman-coral/10 rounded-xl mb-4">
                    <Users className="w-6 h-6 text-manman-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-manman-charcoal mb-2">설립년도</h3>
                  <p className="text-2xl font-bold text-manman-coral">2015</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-manman-blue/10 rounded-xl mb-4">
                    <Award className="w-6 h-6 text-manman-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-manman-charcoal mb-2">전문분야</h3>
                  <p className="text-sm font-medium text-gray-600">해외여행 & 기업출장</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-manman-coral/10 rounded-xl mb-4">
                    <Sparkles className="w-6 h-6 text-manman-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-manman-charcoal mb-2">서비스</h3>
                  <p className="text-sm font-medium text-gray-600">원스톱 여행 솔루션</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  만만투어는 2015년 설립 이후, 해외여행과 기업 출장 전문 여행사로서 수많은 고객의 여정을 정직하고 정교하게 설계해왔습니다. 
                  항공권 예약·발권, 호텔 예약, 비자 발급, 맞춤 일정 설계 등 여행에 필요한 전 과정을 원스톱으로 지원합니다.
                </p>

                <p>
                  특히 기업 고객을 위한 전용 출장 플래닝 서비스를 통해, 출장 목적과 예산에 최적화된 항공, 숙소, 이동 수단을 신속하고 유연하게 구성하며, 여행지의 리스크에도 철저히 대비하고 있습니다.
                </p>

                <p>
                  또한 자유여행, 허니문, 골프투어 등 개인 여행 고객을 위한 맞춤 서비스도 함께 제공하며, 고객 중심의 세심한 응대와 차별화된 일정 구성으로 높은 만족도를 이끌어내고 있습니다.
                </p>

                <div className="bg-gradient-to-r from-manman-coral/5 to-manman-blue/5 rounded-2xl p-6 mt-8">
                  <p className="text-lg font-medium text-manman-charcoal">
                    만만투어는 단순한 여행사 그 이상의 존재로, 여정의 가치를 높이는 전략적 파트너가 되어드리겠습니다. 지금, 당신의 다음 여정을 저희와 함께 설계해보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 회사 정보 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-manman-coral to-manman-coral/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-manman-charcoal mb-3">
                    사업자 정보
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-medium">상호명:</span> (주) 만만투어</p>
                    <p className="text-gray-700"><span className="font-medium">대표자:</span> 한상만</p>
                    <p className="text-gray-700"><span className="font-medium">사업자 등록번호:</span> 274-81-00293</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-manman-blue to-manman-blue/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-manman-charcoal mb-3">
                    연락처 및 영업시간
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-medium">전화:</span> 02-725-2212</p>
                    <p className="text-gray-700"><span className="font-medium">영업시간:</span> 평일 09:00 ~ 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-manman-coral to-manman-coral/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-manman-charcoal mb-3">
                    이메일
                  </h3>
                  <p className="text-gray-700 break-all">manmantour@naver.com</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-manman-blue to-manman-blue/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold text-manman-charcoal mb-3">
                    주소 및 오시는 길
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="leading-relaxed">
                      서울특별시 중구 남대문로10길 28 우석빌딩 705호 (우편번호: 04533)
                    </p>
                    <div className="text-sm text-gray-600 space-y-1 mt-3">
                      <p>• 을지로입구역 3번 출구에서 우회전 100m (VIP동원참치 7층)</p>
                      <p>• 종각역 5번 출구에서 약 500m 거리</p>
                    </div>
                  </div>
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