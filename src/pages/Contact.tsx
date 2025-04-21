
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-manman-beige/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-manman-charcoal mb-6 text-center">
            문의하기
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            여행 문의나 상담이 필요하시면 아래 양식을 통해 문의해 주세요. 
            최대한 빠르게 답변 드리겠습니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
