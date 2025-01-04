"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: ReactNode;
}

export const RenameDialog = ({
  documentId,
  initialTitle,
  children,
}: RenameDialogProps) => {
  const renameDocument = useMutation(api.documents.updateDocumentById);
  const [isRenaming, setIsRenaming] = useState(false);
  const { toast } = useToast();

  const [title, setTitle] = useState(initialTitle);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRenaming(true);

    renameDocument({
      id: documentId,
      title: title.trim() || "Untitled",
    })
      .then(() => {
        setOpen(false);
        toast({
          title: "Success",
          description: "Document renamed",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      })
      .finally(() => setIsRenaming(false));
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger
        className="w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename Document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Document Name"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              disabled={isRenaming}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isRenaming}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Chnage
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
