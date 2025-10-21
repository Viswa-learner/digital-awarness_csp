import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Shield, Mail } from "lucide-react";

export function SafetySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Alert className="bg-red-50 border-red-200 p-8">
          <Shield className="h-6 w-6 text-red-600" />
          <div className="ml-4">
            <h3 className="text-xl text-red-800 mb-4">🛡️ Safety Reminder</h3>
            <AlertDescription className="text-red-700 text-lg leading-relaxed">
              <strong>For suspicious emails: always use Spam/Block — never click unknown links.</strong>
              <br />
              When in doubt, ask a teacher or parent before taking any action on unfamiliar emails.
            </AlertDescription>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Mail className="w-4 h-4 mr-2" />
                Contact Teacher
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Learn More About Email Safety
              </Button>
            </div>
          </div>
        </Alert>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 rounded-xl">
            <h4 className="text-lg text-green-800 mb-3">✅ Safe Email Practices</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Use official unsubscribe links from trusted senders</li>
              <li>• Check sender addresses carefully</li>
              <li>• Report suspicious emails to IT support</li>
              <li>• Keep your email password secure</li>
            </ul>
          </div>
          
          <div className="p-6 bg-red-50 rounded-xl">
            <h4 className="text-lg text-red-800 mb-3">⚠️ Warning Signs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Urgent language or threats</li>
              <li>• Requests for personal information</li>
              <li>• Suspicious attachments</li>
              <li>• Poor spelling and grammar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}