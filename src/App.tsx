import { Navigation } from "./components/navigation";
import { EnvironmentalImpactBanner } from "./components/environmental-impact-banner";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { EmissionsCalculator } from "./components/emissions-calculator";
import { FAQSection } from "./components/faq-section";
import { TutorialSection } from "./components/tutorial-section";
import { GoogleDriveSection } from "./components/google-drive-section";
import { SearchCommandsSection } from "./components/search-commands-section";
import { VideoSolutionSection } from "./components/video-solution-section";
import { ChecklistSection } from "./components/checklist-section";
import { SafetySection } from "./components/safety-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Environmental Digital Pollution Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        {/* Digital Pollution Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          {/* Email Icons Scattered */}
          <div className="absolute top-20 left-10 text-4xl text-gray-600">📧</div>
          <div className="absolute top-40 right-20 text-3xl text-gray-600">📧</div>
          <div className="absolute top-80 left-1/4 text-5xl text-gray-600">📧</div>
          <div className="absolute bottom-40 right-1/3 text-4xl text-gray-600">📧</div>
          <div className="absolute bottom-20 left-1/2 text-3xl text-gray-600">📧</div>
          
          {/* CO2 and Energy Icons */}
          <div className="absolute top-60 right-10 text-6xl text-gray-600">💨</div>
          <div className="absolute top-96 left-20 text-4xl text-gray-600">⚡</div>
          <div className="absolute bottom-60 right-1/4 text-5xl text-gray-600">🌍</div>
          <div className="absolute bottom-80 left-1/3 text-3xl text-gray-600">💡</div>
          
          {/* Additional Environmental Elements */}
          <div className="absolute top-1/3 left-1/6 text-7xl text-gray-600">🌱</div>
          <div className="absolute top-2/3 right-1/5 text-6xl text-gray-600">🔋</div>
          <div className="absolute bottom-1/3 left-2/3 text-4xl text-gray-600">♻️</div>
        </div>
        
        {/* Subtle Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Animated CO2 Clouds */}
        <div className="absolute top-32 left-1/4 w-20 h-20 rounded-full bg-gray-300/10 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-gray-300/10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gray-300/10 animate-pulse delay-2000"></div>
        
        {/* Environmental Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/20 via-transparent to-emerald-100/30"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <EnvironmentalImpactBanner />
        <div className="pt-16"> {/* Add top padding to account for fixed navigation */}
          <EmissionsCalculator />
          <HeroSection />
          <FeaturesSection />
          <FAQSection />
          <VideoSolutionSection />
          <TutorialSection />
          <GoogleDriveSection />
          <SearchCommandsSection />
          <ChecklistSection />
          <SafetySection />
          <Footer />
        </div>
      </div>
    </div>
  );
}