import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { CheckCircle2 } from "lucide-react";

export function ChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(5).fill(false));
  
  const checklistItems = [
    "Unsubscribe from unwanted emails",
    "Label important emails",
    "Delete emails with big attachments",
    "Use Drive links instead of attachments",
    "Avoid Reply All unless necessary"
  ];

  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const completedCount = checkedItems.filter(Boolean).length;
  const progressPercentage = (completedCount / checklistItems.length) * 100;

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h2 className="text-3xl text-gray-900">Quick Checklist</h2>
          </div>
          <p className="text-gray-600">
            Essential cleanup steps
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Progress</span>
              <span className="text-sm text-gray-600">
                {completedCount} of {checklistItems.length} completed
              </span>
            </CardTitle>
            <Progress value={progressPercentage} className="w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Checkbox
                  id={`item-${index}`}
                  checked={checkedItems[index]}
                  onCheckedChange={() => handleCheck(index)}
                  className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <label
                  htmlFor={`item-${index}`}
                  className={`flex-1 cursor-pointer ${
                    checkedItems[index] 
                      ? 'line-through text-gray-500' 
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </label>
              </div>
            ))}
            
            {completedCount === checklistItems.length && (
              <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg text-center">
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-green-800">
                  🎉 Congratulations! You're on your way to a cleaner digital environment!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}