import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  description?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "mobile";
}

export function ImagePlaceholder({ 
  title, 
  description, 
  className = "", 
  aspectRatio = "video" 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    mobile: "aspect-[9/16]"
  };

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 ${aspectClasses[aspectRatio]} ${className}`}>
      <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
      <div className="text-center">
        <p className="text-gray-600 font-medium mb-1">{title}</p>
        {description && (
          <p className="text-gray-500 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}