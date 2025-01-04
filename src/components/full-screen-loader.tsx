import { LoaderIcon } from "lucide-react";
import React from "react";

interface FullScreenLoaderProps {
  label?: string;
  className?: string;
}

export const FullScreenLoader = ({ label }: FullScreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <LoaderIcon className="size-6 text-neutral-600 animate-spin" />
      {label && <p className="text-sm text-neutral-600">{label}</p>}
    </div>
  );
};
