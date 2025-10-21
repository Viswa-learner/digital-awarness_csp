import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Paperclip, FileText, Image, Video, Clock, Trash2 } from "lucide-react";
import { CopyButton } from "./copy-button";

export function SearchCommandsSection() {
  const commandCategories = [
    {
      title: "📎 All Attachments",
      icon: <Paperclip className="w-5 h-5 text-blue-500" />,
      commands: [
        {
          command: "has:attachment",
          description: "All emails with any attachments",
          copyText: "has:attachment"
        }
      ]
    },
    {
      title: "📄 Specific File Types",
      icon: <FileText className="w-5 h-5 text-green-500" />,
      commands: [
        {
          command: "filename:pdf",
          description: "PDF files",
          copyText: "filename:pdf"
        },
        {
          command: "filename:doc OR filename:docx",
          description: "Word documents",
          copyText: "filename:doc OR filename:docx"
        },
        {
          command: "filename:xls OR filename:xlsx",
          description: "Excel spreadsheets",
          copyText: "filename:xls OR filename:xlsx"
        },
        {
          command: "filename:jpg OR filename:png",
          description: "Images (JPG, PNG)",
          copyText: "filename:jpg OR filename:png"
        },
        {
          command: "filename:mp4 OR filename:mov",
          description: "Videos (MP4, MOV)",
          copyText: "filename:mp4 OR filename:mov"
        }
      ]
    },
    {
      title: "📏 Large Attachments",
      icon: <Paperclip className="w-5 h-5 text-orange-500" />,
      commands: [
        {
          command: "larger:10M",
          description: "More than 10 MB",
          copyText: "larger:10M"
        },
        {
          command: "larger:20M",
          description: "More than 20 MB",
          copyText: "larger:20M"
        }
      ]
    },
    {
      title: "🔗 Combined Filters",
      icon: <Search className="w-5 h-5 text-purple-500" />,
      commands: [
        {
          command: "filename:pdf larger:5M",
          description: "PDFs bigger than 5 MB",
          copyText: "filename:pdf larger:5M"
        },
        {
          command: "has:attachment older_than:6m",
          description: "Old emails with attachments",
          copyText: "has:attachment older_than:6m"
        }
      ]
    },
    {
      title: "🗑️ Delete Old Emails",
      icon: <Clock className="w-5 h-5 text-red-500" />,
      commands: [
        {
          command: "older_than:1y",
          description: "All emails older than 1 year",
          copyText: "older_than:1y"
        },
        {
          command: "older_than:6m",
          description: "All emails older than 6 months",
          copyText: "older_than:6m"
        },
        {
          command: "newer_than:30d",
          description: "Emails from last 30 days",
          copyText: "newer_than:30d"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-7 h-7 text-blue-600" />
            <h2 className="text-4xl text-gray-900">🔍 Gmail Search Commands</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Powerful search commands to quickly find and clean up your emails
          </p>
          <div className="mt-4 p-4 bg-blue-100 rounded-lg inline-block">
            <p className="text-blue-800">
              💡 <strong>Pro Tip:</strong> Click any command to copy it, then paste directly into Gmail's search bar!
            </p>
          </div>
        </div>
        
        {/* Command Categories */}
        <div className="space-y-8">
          {commandCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle className="text-xl text-gray-800">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.commands.map((command, commandIndex) => (
                    <div 
                      key={commandIndex} 
                      className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex flex-col gap-3">
                        <Badge 
                          variant="outline" 
                          className="font-mono text-sm bg-blue-50 text-blue-700 border-blue-200 self-start group-hover:bg-blue-100 transition-colors"
                        >
                          {command.command}
                        </Badge>
                        <p className="text-gray-700 text-sm">{command.description}</p>
                        <div className="flex justify-end">
                          <CopyButton text={command.copyText} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Instructions */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Search className="w-5 h-5" />
                How to Use Search Commands
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-green-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span>Click the search bar at the top of Gmail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span>Copy any command above and paste it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span>Press Enter to see filtered results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span>Select unwanted emails and delete them!</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Quick Cleanup Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-orange-700">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <p className="font-semibold">🎯 Start with attachments:</p>
                  <p className="text-sm">Use <code className="bg-orange-200 px-1 rounded">larger:10M</code> to find your biggest space wasters</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <p className="font-semibold">📅 Target old emails:</p>
                  <p className="text-sm">Use <code className="bg-orange-200 px-1 rounded">older_than:1y</code> for emails you likely don't need</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <p className="font-semibold">🔗 Combine for power:</p>
                  <p className="text-sm">Mix commands like <code className="bg-orange-200 px-1 rounded">filename:pdf larger:5M</code></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}