
import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요";
    } else if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(formData.phone) && 
               !/^[0-9]{10,11}$/.test(formData.phone)) {
      newErrors.phone = "유효한 전화번호 형식이 아닙니다";
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 형식이 아닙니다";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // 서버 연동 대신 타이머로 시뮬레이션
    try {
      // 실제 구현 시 이 부분을 서버 API 호출로 대체
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      
      // 성공 메시지 3초 후 사라짐
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("제출 오류:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-manman-charcoal mb-6">
        문의하기
      </h2>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-manman-coral/30 focus:border-manman-coral"
            }`}
            placeholder="홍길동"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-manman-coral/30 focus:border-manman-coral"
            }`}
            placeholder="010-1234-5678"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          이메일
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-manman-coral/30 focus:border-manman-coral"
          }`}
          placeholder="example@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          문의 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.message ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-manman-coral/30 focus:border-manman-coral"
          }`}
          placeholder="궁금하신 사항이나 문의하실 내용을 자세히 적어주세요."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 bg-manman-coral text-white font-medium rounded-md ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-manman-coral/90"
        } transition-colors`}
      >
        {isSubmitting ? "제출 중..." : "문의하기"}
      </button>
    </form>
  );
};

export default ContactForm;
