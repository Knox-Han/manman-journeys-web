
import Layout from "../components/layout/Layout";
import HeroBanner from "../components/home/HeroBanner";
import PopularTours from "../components/home/PopularTours";
import FeatureSection from "../components/home/FeatureSection";
import CallToAction from "../components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeatureSection />
      <PopularTours />
      <CallToAction />
    </Layout>
  );
};

export default Index;
