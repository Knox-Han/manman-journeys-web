
import Layout from "../components/layout/Layout";
import AboutSection from "../components/about/AboutSection";

const About = () => {
  return (
    <Layout>
      <div className="bg-manman-beige/30 py-8">
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </div>
    </Layout>
  );
};

export default About;
