import { Button } from "./ui/button";
import { Share2, Printer, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
              🌱 Digital Wellness Initiative
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
              Clean Your Email Inbox
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-600">
              Reduce Digital Clutter
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Simple, effective steps to unsubscribe from unwanted emails, delete clutter, 
              organize with labels, and manage attachments safely.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={scrollToFeatures}>
                <Play className="w-4 h-4 mr-2" />
                Start Cleaning
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="lg">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2UlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NTg1NjcyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Clean organized digital workspace"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Clean & Organized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}