import Layout from "../../components/Layout/Layout";
import AboutSection from "./_AboutSection";
import ChooseSection from "./_ChooseSection";
import CourseSection from "./_CourseSection";
import EventSection from "./_EventsSection";
import HeroSection from "./_HeroSection";
import ServiceSection from "./_ServiceSection";
import StatisticsSection from "./_StatisticsSection";

function Home () {
    return (
        <>
            <Layout>
                <HeroSection />
                <ServiceSection />
                <AboutSection />
                <CourseSection />
                <ChooseSection />
                <StatisticsSection />
                <EventSection />

            </Layout>
        </>
    )
}

export default Home;
