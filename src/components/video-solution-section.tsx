import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ExternalLink, Play, Trash2, FileText, Clock, Youtube } from "lucide-react";

export function VideoSolutionSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
            <Youtube className="w-5 h-5" />
            <span className="font-medium">Complete Video Tutorial</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Gmail Bulk Deletion Master Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this comprehensive step-by-step tutorial to master bulk deletion of emails, attachments, and large files in Gmail
          </p>
        </div>

        {/* YouTube Video Player */}
        <div className="mb-12">
          <Card className="p-6 bg-white border-2 border-gray-200 shadow-2xl max-w-5xl mx-auto">
            <div className="relative">
              {/* YouTube Video Embed */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.youtube.com/embed/hPgGkM5vkJY"
                  title="Gmail Bulk Deletion Tutorial - Reduce Digital Pollution"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info Bar */}
              <div className="mt-4 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gmail Bulk Deletion Complete Guide</h3>
                    <p className="text-sm text-gray-600">Step-by-step tutorial for email cleanup</p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://youtu.be/hPgGkM5vkJY', '_blank')}
                  className="hover:bg-red-50 hover:border-red-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in YouTube
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Bulk Email Deletion</h3>
              <p className="text-green-700 text-sm">Learn to delete thousands of emails in just minutes using advanced Gmail techniques</p>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Large File Cleanup</h3>
              <p className="text-blue-700 text-sm">Find and remove space-consuming attachments that are eating up your storage</p>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Time-Saving Techniques</h3>
              <p className="text-purple-700 text-sm">Master advanced Gmail search commands and automated filtering systems</p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 max-w-4xl mx-auto">
            <p className="text-lg text-yellow-800 font-medium mb-4">
              ⚡ <strong>Pro Tip:</strong> Watch the video above, then use our interactive checklist below to track your cleanup progress!
            </p>
            <div className="flex items-center justify-center gap-2 text-green-700">
              <span>🌱</span>
              <span className="font-medium">Reduce Digital Pollution • Save Energy • Clean Your Inbox</span>
              <span>🌱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}