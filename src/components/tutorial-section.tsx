import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Smartphone, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import emailCopyImage from 'figma:asset/6202afc1f07115c4a0856433123a1e0f70869c73.png';
import mobileDeleteImage from 'figma:asset/a39d9d7fd672b5871c0984946ff2cb78a8d39041.png';
import gmailRightClickImage from 'figma:asset/9a31e59b632ea72e930faad61dab490d0b4e0fa7.png';
import gmailSearchResultsImage from 'figma:asset/e48a5779a6cf1c7ccf9de441b9ca35625fdbf37f.png';

export function TutorialSection() {
  return (
    <section id="tutorial-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Step-by-Step Tutorials</h2>
          <p className="text-gray-600">
            Easy-to-follow guides for cleaning your inbox on different devices
          </p>
        </div>
        
        <Tabs defaultValue="phone" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Gmail App
            </TabsTrigger>
            <TabsTrigger value="laptop" className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Browser Gmail
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="phone">
            <div className="space-y-8">
              <h3 className="text-xl text-center">Delete emails on mobile device</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">1</Badge>
                        Open the mail
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Open any email from the sender you want to delete emails from. We can see from details → copy email address.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">2</Badge>
                        Search: from:paste email here
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Use Gmail search with "from:" followed by the email address to find all emails from that sender.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">3</Badge>
                        Select all → Tap Delete (🗑)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Select all emails from the search results and tap the delete button to remove them all at once.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img 
                      src={emailCopyImage}
                      alt="Mobile email copy process - showing copy option for email address"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Step 1: Copy email address from details</p>
                  </div>
                  <div className="space-y-2">
                    <img 
                      src={mobileDeleteImage}
                      alt="Mobile Gmail bulk delete - showing search results and delete options"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Step 2 & 3: Search results and bulk delete</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg text-blue-800 mb-2">For labeling emails:</h4>
                <p className="text-blue-700">Follow the same first 3 steps, then: Select all → 3 dots → Label as → Create new → type label name → Create</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="laptop">
            <div className="space-y-8">
              <h3 className="text-xl text-center">Delete emails on desktop</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">1</Badge>
                        Right-click any mail
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Right-click on any email from the sender you want to manage.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">2</Badge>
                        Find emails from sender
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Select "Find emails from sender" or search "from:email" in the search bar.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="secondary">3</Badge>
                        Select all → Click Delete (🗑)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Use "Select all" checkbox at the top, then click the delete button to remove all emails from that sender.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img 
                      src={gmailRightClickImage}
                      alt="Gmail right-click context menu showing 'Find emails from ConfirmTkt Support' option"
                      className="w-full rounded-lg shadow-md border"
                    />
                    <p className="text-sm text-gray-600 text-center">Step 1 & 2: Right-click and select "Find emails from sender"</p>
                  </div>
                  <div className="space-y-2">
                    <img 
                      src={gmailSearchResultsImage}
                      alt="Gmail search results showing filtered emails from specific sender with selection options"
                      className="w-full rounded-lg shadow-md border"
                    />
                    <p className="text-sm text-gray-600 text-center">Step 3: Search results ready for bulk deletion</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="text-lg text-green-800 mb-2">For labeling emails:</h4>
                <p className="text-green-700">Follow the same first 3 steps, then: Select all → Labels icon → Create new → type label name → Apply</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}