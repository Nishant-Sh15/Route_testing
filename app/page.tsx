
import LeftBar from "@/components/leftbar/leftbar";
import ReqHandler from "@/components/reqhandler/reqbox";
import Topbar from "@/components/topbar/topbar";


export default function Home() {
  return <>
    <div className="flex flex-col h-full w-full bg-[#f7f1e8]">
          <Topbar />

          <div className=" w-full h-full flex-1 grid grid-cols-[1fr_7fr] ">
              <LeftBar />

              <ReqHandler />

          </div>
    </div>
  </>
}
