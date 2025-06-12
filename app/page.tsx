import FileUpload from "./components/fileUpload";
import ChatComponent from "./components/chat";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex">
        <div className="w-[30vw] min-h-screen p-4 flex justify-center items-center">
          <FileUpload />
        </div>
        <Separator orientation="vertical" className="min-h-screen" />
        <div className="w-[70vw] min-h-screen max-h-screen overflow-y-scroll">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}
