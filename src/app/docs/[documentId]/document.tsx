"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";
import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { Toolbar } from "./toolbar";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDoc: Preloaded<typeof api.documents.getDocumentById>;
}

const Document = ({ preloadedDoc }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDoc);

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-neutral-50 print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-28 print:pt-0">
          <Editor initialContent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
};

export default Document;
