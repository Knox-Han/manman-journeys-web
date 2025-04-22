import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full">
      <h2 className="text-2xl font-bold text-manman-charcoal mb-6">
        연락처 정보
      </h2>

      <div className="space-y-6">
        <div className="flex">
          <Phone className="h-6 w-6 text-manman-coral mr-3" />
          <div>
            <h3 className="font-semibold text-manman-charcoal">전화 문의</h3>
            <p className="text-gray-700 mt-1">02-725-2212</p>
            <p className="text-gray-600 text-sm mt-1">
              평일 09:00 - 18:00 (토요일, 일요일 및 공휴일 휴무)
            </p>
          </div>
        </div>

        <div className="flex">
          <Mail className="h-6 w-6 text-manman-coral mr-3" />
          <div>
            <h3 className="font-semibold text-manman-charcoal">이메일 문의</h3>
            <p className="text-gray-700 mt-1">manmantour@naver.com</p>
            <p className="text-gray-600 text-sm mt-1">
              24시간 접수 가능, 영업일 기준 24시간 이내 답변
            </p>
          </div>
        </div>

        <div className="flex">
          <MapPin className="h-6 w-6 text-manman-coral mr-3" />
          <div>
            <h3 className="font-semibold text-manman-charcoal">오시는 길</h3>
            <p className="text-gray-700 mt-1">
              서울특별시 중구 남대문로10길 28 우석빌딩 705호
            </p>
            <p className="text-gray-600 text-sm mt-1">
              을지로입구역 3번 출구에서 우회전 100m (VIP동원참치 7층)
            </p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t">
          <h3 className="font-semibold text-manman-charcoal mb-3">카카오톡 문의</h3>
          <a
            href="https://pf.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#FEE500] text-[#3C1E1E] py-3 px-4 rounded-md font-medium hover:bg-[#FEE500]/90 transition-colors"
          >
            <img
              src="https://developers.kakao.com/assets/img/about/logos/channel/consult_small_yellow_pc.png"
              alt="카카오톡 채널"
              className="w-5 h-5 mr-2"
            />
            카카오톡 채널 연결
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;