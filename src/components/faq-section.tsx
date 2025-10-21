import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImagePlaceholder } from "./image-placeholder";
import unsubscribeImage from 'figma:asset/3915d4eb115ab850eee1b774caea64c202a8888e.png';

export function FAQSection() {
  const faqs = [
    {
      question: "How to unsubscribe email?",
      answer: (
        <div className="space-y-6">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800"><strong>⚠️ Important:</strong> Only unsubscribe if it is a promotional email. For suspicious emails, use Block/Spam instead.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-gray-600">Follow these steps to safely unsubscribe from <strong>promotional emails</strong>:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</div>
                  <p className="text-gray-600">Open the promotional email</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">2</div>
                  <p className="text-gray-600">Scroll to the bottom of the email</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">3</div>
                  <p className="text-gray-600">Look for "Unsubscribe" link at the right</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">4</div>
                  <p className="text-gray-600">Click the link and follow instructions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src={unsubscribeImage}
                alt="Unsubscribe process - showing unsubscribe button location"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg">Alternative: Delete Multiple Emails from Same Sender</h4>
            <div className="space-y-4">
              <p className="text-gray-600">
                Use the search method described in the tutorial section below to find and delete emails in bulk from specific senders.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "If I unsubscribe, will I miss important mails?",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-600"><strong>No, only promotions stop.</strong> Important mails (orders, results, selections) continue.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-green-800 mb-2">✅ Will Continue</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Order confirmations</li>
                <li>• Exam results</li>
                <li>• Selection notifications</li>
                <li>• Bank statements</li>
                <li>• Personal messages</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="text-red-800 mb-2">🛑 Will Stop</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Promotional emails</li>
                <li>• Marketing newsletters</li>
                <li>• Sale notifications</li>
                <li>• Spam emails</li>
                <li>• Unwanted subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What if the email looks suspicious?",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-600"><strong>Use Spam/Block option, don't unsubscribe.</strong></p>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 mb-3">⚠️ <strong>Never click unsubscribe on suspicious emails!</strong></p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">1</div>
                <p className="text-red-700">Select the suspicious email</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">2</div>
                <p className="text-red-700">Click "Report Spam" or "Block sender"</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">3</div>
                <p className="text-red-700">Delete the email immediately</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="faq-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Common questions about email management and digital hygiene
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}