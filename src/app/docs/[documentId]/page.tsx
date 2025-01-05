import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { Toolbar } from "./toolbar";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({}: DocumentPageProps) => {
  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-neutral-50 print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-28 print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentPage;
