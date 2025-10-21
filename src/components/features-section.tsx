import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { UserX, Trash2, FolderOpen } from "lucide-react";

export function FeaturesSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const features = [
    {
      icon: <UserX className="w-8 h-8 text-red-500" />,
      title: "Unsubscribe",
      description: "Stop unwanted emails at the source",
      targetSection: "faq-section"
    },
    {
      icon: <Trash2 className="w-8 h-8 text-blue-500" />,
      title: "Delete Bulk",
      description: "Remove thousands of emails quickly",
      targetSection: "tutorial-section"
    },
    {
      icon: <FolderOpen className="w-8 h-8 text-green-500" />,
      title: "Organize",
      description: "Create labels and folders",
      targetSection: "tutorial-section"
    }
  ];

  return (
    <section id="features-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Essential Email Management Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three powerful strategies to transform your cluttered inbox into an organized, efficient communication hub.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50" onClick={() => scrollToSection(feature.targetSection)}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-md">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{feature.description}</p>
                <Button variant="outline" size="sm" className="w-full hover:bg-green-50 hover:border-green-300">
                  Learn How →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}