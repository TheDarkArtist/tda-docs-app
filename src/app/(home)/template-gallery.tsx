"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { templates } from "@/data/templates";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const TemplateGallery = () => {
  const router = useRouter();
  const createDocument = useMutation(api.documents.createDocument);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const onTemplateClick = (title: string, initialContent: string) => {
    setIsCreating(true);
    createDocument({ title, initialContent })
      .then((documentId) => {
        router.push(`/docs/${documentId}`);
        toast({
          title: "Success",
          description: "Document created",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  return (
    <div className="bg-neutral-100">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="font-medium">Start a new Document</h3>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent className="-ml-4">
            {templates.map(({ id, label, imageUrl }) => (
              <CarouselItem
                key={id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
              >
                <div
                  className={cn(
                    "aspect-[3/4] flex flex-col gap-y-2.5",
                    isCreating && "pointer-events-none opacity-50",
                  )}
                >
                  <button
                    className="size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    disabled={isCreating}
                    onClick={() => onTemplateClick(label, "")} // TODO: Add initialContent
                  />
                  <p className="text-sm font-medium truncate">{label}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
