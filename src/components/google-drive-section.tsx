import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Share, Users, AlertTriangle } from "lucide-react";

export function GoogleDriveSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Google Drive & Email Etiquette</h2>
          <p className="text-gray-600">
            Smart file sharing and communication practices
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="w-5 h-5 text-blue-500" />
                Sharing Files with Google Drive
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</div>
                  <p className="text-gray-600">Upload your file to Google Drive</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">2</div>
                  <p className="text-gray-600">Right-click the file and select "Share"</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">3</div>
                  <p className="text-gray-600">Copy the shareable link and paste it in your email</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">4</div>
                  <p className="text-gray-600">Set appropriate permissions (view, comment, or edit)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                Reply All vs BCC Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm text-green-600 mb-2">Use Reply All when:</h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Everyone needs to see the response</li>
                  <li>• It's a group discussion or meeting</li>
                  <li>• Information affects all recipients</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-red-600 mb-2">Use BCC when:</h4>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Protecting recipient privacy</li>
                  <li>• Mass announcements</li>
                  <li>• Recipients don't know each other</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="mt-8 bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Email Tip:</strong> Add "Please do NOT reply all" to your emails when only you need responses. 
            This prevents inbox clutter for other recipients.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}