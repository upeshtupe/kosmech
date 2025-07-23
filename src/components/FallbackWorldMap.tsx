
import React, { useState } from "react";

// User-uploaded world map (main image)
const PRIMARY_IMAGE = "/lovable-uploads/177bb562-4f4e-4ce7-b482-dc61c9d47e79.png";
// Unsplash as fallback
const SAFE_PLACEHOLDER =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
// Project's user-uploaded placeholder (if available)
const CUSTOM_FALLBACK = "/lovable-uploads/placeholder.svg";

export default function FallbackWorldMap() {
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0: primary, 1: unsplash fallback, 2: custom fallback

  const getImage = () => {
    if (step === 0) return PRIMARY_IMAGE;
    if (step === 1) return SAFE_PLACEHOLDER;
    return CUSTOM_FALLBACK;
  };

  const handleError = () => {
    console.log(`World map failed to load at ${getImage()} - trying next fallback`);
    setStep((prev) => (prev < 2 ? (prev + 1) as 1 | 2 : 2));
  };

  if (step === 2) {
    return (
      <div className="flex flex-col items-center justify-center h-72 w-full bg-gray-100 rounded-lg border border-gray-200 shadow-lg">
        <img
          src={CUSTOM_FALLBACK}
          alt="Placeholder World Map"
          className="h-32 w-32 object-contain mb-2 opacity-60"
        />
        <span className="text-gray-500 text-center text-sm mt-2">
          World map unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      src={getImage()}
      alt="World Map"
      className="rounded-lg shadow-lg border border-gray-200 max-w-full h-72 object-contain"
      onError={handleError}
      loading="lazy"
    />
  );
}
