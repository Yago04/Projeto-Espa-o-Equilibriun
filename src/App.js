import './App.css';
import HeroSection from './components/HeroSection';
import NeurodiversityInfoSection from './components/NeurodiversityInfoSection';
import NeurodiversitySection from './components/NeurodiversityStatsSection';
import ServicesCarouselSection from './components/ServicesCarouselSection';
import PartnersCarouselSection from './components/PartnersCarouselSection';
import CarrouselPhotos from './components/CarouselPhotos';
import LocationSection from './components/LocationSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';

function App() {
  return (
    <div>
      <HeroSection />
      <NeurodiversityInfoSection />
      <NeurodiversitySection />
      <ServicesCarouselSection />
      <CarrouselPhotos />
      <GoogleReviewsSection />
      <PartnersCarouselSection />
      <LocationSection />
      <WhatsAppFloatButton />
      {/* Outras seções aqui */}
    </div>
  );
}

export default App;
