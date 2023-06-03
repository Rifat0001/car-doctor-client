
import AboutSection from '../../Banner/AboutSection';
import Banner from '../../Banner/Banner';
import Service from '../../Service/Service';

const Home = () => {
    return (
        <div className='px-40'>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Service></Service>
        </div>
    );
};

export default Home;