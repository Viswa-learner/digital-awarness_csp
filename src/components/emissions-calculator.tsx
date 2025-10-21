import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";
import { Trash2, UserX, RotateCcw } from "lucide-react";

export function EmissionsCalculator() {
  const [emails, setEmails] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateImpact = () => {
    const emailCount = parseInt(emails) || 0;
    const dayCount = parseInt(days) || 0;
    
    if (emailCount > 0 && dayCount > 0) {
      setIsCalculating(true);
      
      // Show loading effect briefly for better UX
      setTimeout(() => {
        setShowResults(true);
        setIsCalculating(false);
        
        // Scroll to results
        setTimeout(() => {
          const resultsSection = document.getElementById('emissions-results');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }, 500);
    } else {
      setShowResults(false);
      setIsCalculating(false);
      // Show validation message
      alert("⚠️ Please enter valid numbers for both emails and days to calculate your environmental impact!");
    }
  };

  // Helper function to check if inputs are valid
  const isValidInput = () => {
    const emailCount = parseInt(emails) || 0;
    const dayCount = parseInt(days) || 0;
    return emailCount > 0 && dayCount > 0;
  };

  const getCalculations = () => {
    const emailCount = parseInt(emails) || 0;
    const dayCount = parseInt(days) || 0;
    
    // Calculate CO2 based on both email count AND storage time
    // Base CO2 per email (0.004kg) multiplied by time factor
    // The longer emails sit in storage, the more cumulative energy they consume
    const timeMultiplier = Math.max(1, dayCount / 30); // Every 30 days increases impact
    const co2Kg = emailCount * 0.004 * timeMultiplier;
    const electricityKwh = co2Kg / 0.9;
    const fanHours = electricityKwh / 0.075;
    const bulbHours = electricityKwh / 0.01;
    
    // Convert fan/bulb hours to practical units
    // For fans: assume multiple fans running for fewer hours
    const numFans = Math.max(1, Math.round(fanHours / 3)); // Assume 3 hours per fan
    const hoursPerFan = fanHours / numFans;
    const fanDays = hoursPerFan / 24;
    
    // For bulbs: assume fewer bulbs running for more hours
    const numBulbs = Math.max(1, Math.round(bulbHours / 100)); // Assume ~100 hours per bulb
    const hoursPerBulb = bulbHours / numBulbs;
    const bulbDays = hoursPerBulb / 24;
    
    return {
      co2Kg: co2Kg.toFixed(0),
      electricityKwh: electricityKwh.toFixed(2),
      fanHours: Math.round(fanHours),
      bulbHours: Math.round(bulbHours),
      numFans,
      hoursPerFan: Math.round(hoursPerFan),
      fanDays: fanDays.toFixed(1),
      numBulbs,
      hoursPerBulb: Math.round(hoursPerBulb),
      bulbDays: bulbDays.toFixed(1),
      emailCount,
      dayCount
    };
  };

  const scrollToTutorial = () => {
    const tutorialSection = document.getElementById('tutorial-section');
    if (tutorialSection) {
      tutorialSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 relative overflow-hidden">
      {/* Environmental Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🌍</div>
        <div className="absolute top-20 right-20 text-4xl">🌱</div>
        <div className="absolute bottom-20 left-20 text-5xl">⚡</div>
        <div className="absolute bottom-10 right-10 text-3xl">💡</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">🌿</div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
            ⚡ Your Emails = CO₂ Emissions + Electricity Waste
          </h1>
          
          {/* Quote in green box */}
          <Alert className="bg-green-100 border-green-300 max-w-2xl mx-auto mb-12 shadow-xl">
            <AlertDescription className="text-green-800 text-lg">
              🌱 <strong>Delete unnecessary mails. Save energy, cut CO₂, and protect the Earth.</strong>
            </AlertDescription>
          </Alert>
        </div>

        {/* Input Section */}
        <Card className="mb-8 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-gray-800">
              🌍 Calculate Your Environmental Impact
            </CardTitle>
            <p className="text-gray-600 mt-2">Enter your email details to see how much energy you're wasting</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* First Input */}
              <div className="space-y-4">
                <Label htmlFor="emails" className="text-xl text-gray-800 block">
                  📧 Please enter the number of emails you have in your inbox
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  💡 <strong>Rough estimates:</strong> Light user (500-2,000) | Regular user (2,000-8,000) | Heavy user (8,000+)
                </p>
                <Input
                  id="emails"
                  type="number"
                  placeholder="e.g., 3,500 emails"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  className="text-xl h-16 border-4 border-gray-300 rounded-xl shadow-inner bg-gradient-to-br from-gray-50 to-white focus:border-green-500 focus:shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                  style={{
                    boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
              {/* Second Input */}
              <div className="space-y-4">
                <Label htmlFor="days" className="text-xl text-gray-800 block">
                  ⏳ How many days since your last inbox cleanup?
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  💡 <strong>Common scenarios:</strong> Weekly cleanup (7 days) | Monthly cleanup (30 days) | Never cleaned (365+ days)
                </p>
                <Input
                  id="days"
                  type="number"
                  placeholder="e.g., 90 days ago"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="text-xl h-16 border-4 border-gray-300 rounded-xl shadow-inner bg-gradient-to-br from-gray-50 to-white focus:border-green-500 focus:shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
                  style={{
                    boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
            
            <div className="text-center mt-10">
              {/* Input Validation Status */}
              {emails && days && (
                <div className="mb-4">
                  {isValidInput() ? (
                    <p className="text-green-600 text-lg">
                      ✅ Ready to calculate impact for <strong>{parseInt(emails)} emails</strong> over <strong>{parseInt(days)} days</strong>
                    </p>
                  ) : (
                    <p className="text-red-500 text-lg">
                      ⚠️ Please enter valid positive numbers for both fields
                    </p>
                  )}
                </div>
              )}
              
              <Button 
                onClick={calculateImpact}
                disabled={isCalculating || !isValidInput()}
                size="lg"
                className={`px-12 py-4 text-xl rounded-full shadow-2xl transform transition-all duration-300 ${
                  isValidInput() 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white hover:scale-105' 
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                } ${isCalculating ? 'animate-pulse' : ''}`}
                style={{
                  boxShadow: isValidInput() ? '0 8px 25px rgba(239, 68, 68, 0.4)' : '0 4px 12px rgba(156, 163, 175, 0.3)'
                }}
              >
                {isCalculating ? '🔄 Calculating...' : '🌍 Calculate My Environmental Impact'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Display */}
        {showResults && (
          <>
            <Card id="emissions-results" className="mb-8 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-red-700">🚨 Your Environmental Impact Report</CardTitle>
                <p className="text-center text-gray-600 mt-2">This is the hidden cost of your digital habits</p>
              </CardHeader>
              <CardContent>
                {(() => {
                  const calc = getCalculations();
                  return (
                    <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200 shadow-inner">
                      <div className="space-y-6">
                        <p className="text-xl text-center text-gray-800 p-4 bg-white/80 rounded-lg shadow-sm">
                          ✉️ <strong>Inbox of {calc.emailCount} emails</strong> not cleaned for <strong>{calc.dayCount} days</strong> →
                        </p>
                        
                        {/* CO2 Impact */}
                        <div className="p-6 bg-red-100 rounded-xl border-2 border-red-300 text-center shadow-lg">
                          <p className="text-3xl text-red-700 mb-2">
                            🌍 <strong>{calc.co2Kg} kg CO₂</strong>
                          </p>
                          <p className="text-red-600">Carbon emissions produced</p>
                        </div>
                        
                        {/* Energy Equivalents */}
                        <div className="space-y-4">
                          <p className="text-center text-gray-700 text-lg">
                            💡 <strong>This energy waste is equivalent to:</strong>
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 relative">
                            <div className="p-6 bg-yellow-100 rounded-xl border-4 border-yellow-400 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                              <p className="text-xl text-yellow-800 mb-2">🔌 <strong>FANS</strong></p>
                              <div className="p-4 bg-white/90 rounded-lg border-2 border-yellow-300">
                                <p className="text-2xl text-yellow-700">
                                  <strong>{calc.numFans} fans for {calc.hoursPerFan} hrs</strong>
                                </p>
                                <p className="text-yellow-600 mt-1">({calc.fanDays} days)</p>
                              </div>
                            </div>
                            
                            {/* OR divider */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:block hidden">
                              <div className="bg-white border-4 border-gray-300 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
                                <span className="text-gray-700 text-xl font-bold">OR</span>
                              </div>
                            </div>
                            
                            {/* Mobile OR divider */}
                            <div className="md:hidden text-center my-4">
                              <div className="bg-white border-4 border-gray-300 rounded-full w-16 h-16 flex items-center justify-center shadow-xl mx-auto">
                                <span className="text-gray-700 text-xl font-bold">OR</span>
                              </div>
                            </div>
                            
                            <div className="p-6 bg-orange-100 rounded-xl border-4 border-orange-400 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                              <p className="text-xl text-orange-800 mb-2">💡 <strong>LIGHT BULBS</strong></p>
                              <div className="p-4 bg-white/90 rounded-lg border-2 border-orange-300">
                                <p className="text-2xl text-orange-700">
                                  <strong>{calc.numBulbs} bulbs for {calc.hoursPerBulb} hrs</strong>
                                </p>
                                <p className="text-orange-600 mt-1">({calc.bulbDays} days)</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                            <p className="text-blue-700">
                              ℹ️ <strong>Note:</strong> These are two different ways to understand the <u>same energy waste</u> from your emails.
                              You could power EITHER the fans OR the light bulbs for this duration.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Calculation Formulas - Now Below Results */}
            <Card className="mb-8 bg-white/90 border-2 border-green-200 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-center text-gray-800">🧮 How We Calculate Environmental Impact</CardTitle>
                <p className="text-center text-gray-600 mt-2">The science behind your digital carbon footprint</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-base">
                  <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800"><strong>Time Factor</strong> = Days ÷ 30 (min 1.0)</p>
                    <p className="text-green-800"><strong>CO₂ (kg)</strong> = Emails × 0.004 × Time Factor</p>
                    <p className="text-green-800"><strong>Electricity (kWh)</strong> = CO₂ ÷ 0.9</p>
                    <p className="text-green-600 text-sm mt-2">⏰ <strong>Time matters:</strong> Emails consume storage energy continuously. The longer they sit unused, the more cumulative energy they waste!</p>
                  </div>
                  <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800"><strong>Fan Energy</strong> = Electricity ÷ 0.075 kW</p>
                    <p className="text-blue-800"><strong>Bulb Energy</strong> = Electricity ÷ 0.01 kW</p>
                    <p className="text-blue-600 text-sm mt-2">💡 Real household appliances to help you visualize the energy waste</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="p-8 bg-white/90 rounded-xl shadow-xl backdrop-blur-sm">
            <h3 className="text-xl text-gray-800 mb-6">🌱 Ready to Make a Difference?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToTutorial}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                🧹 Clean Inbox
              </Button>
              <Button 
                onClick={scrollToFAQ}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <UserX className="w-5 h-5 mr-2" />
                🚫 Unsubscribe
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                🔄 Think Before "Reply All"
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}