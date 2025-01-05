import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { useDebouncedCallback } from "use-debounce";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import { useToast } from "@/hooks/use-toast";
import { useStatus } from "@liveblocks/react";
import { LoaderIcon } from "lucide-react";

interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ id, title }: DocumentInputProps) => {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateDocumentById);

  const debounceUpdate = useDebouncedCallback((newValue: string) => {
    if (newValue === title) return;

    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => {
        toast({
          title: "Updated",
          description: "Document name updated",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      })
      .finally(() => setIsPending(false));
  }, 900);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debounceUpdate(newValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    mutate({ id, title: value })
      .then(() => {
        toast({
          title: "Updated",
          description: "Document name updated",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      })
      .finally(() => setIsPending(false));
  };

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <div>
          <form
            className="relative w-fit max-w[50ch]"
            onSubmit={handleSubmit}
          >
            <span className="invisible whitespace-pre px-1.5 text-lg">
              {value || ""}
            </span>
            <input
              className="absolute inset-0 text-lg to-black px-1.5 rounded-sm bg-transparent truncate"
              onChange={onChange}
              ref={inputRef}
              value={value}
            />
          </form>
        </div>
      ) : (
        <span
          className="text-lg px-1.5 cursor-pointer truncate"
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
        >
          {title}
        </span>
      )}
      {showError && <BsCloudSlash className="size-4" />}
      {!showError && !showLoader && <BsCloudCheck className="size-4" />}
      {showLoader && (
        <LoaderIcon className="size-4 animate-spin to-neutral-600" />
      )}
    </div>
  );
};
