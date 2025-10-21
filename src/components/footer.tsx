import { Leaf, Zap, Lock } from "lucide-react";

export function Footer() {
  const impactHighlights = [
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      emoji: "🌱",
      title: "Environmental Impact",
      description: "Every cleaned inbox reduces server energy consumption"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      emoji: "⚡",
      title: "Productivity Boost",
      description: "Organized emails save time and reduce stress"
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-500" />,
      emoji: "🔒",
      title: "Better Security",
      description: "Fewer emails mean fewer opportunities for scams"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {impactHighlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-2xl">{highlight.emoji}</span>
                {highlight.icon}
              </div>
              <h3 className="text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2024 Digital Pollution Education Initiative
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Making the digital world cleaner, one inbox at a time
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}