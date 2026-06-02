import Method from "./methods";
import HistoryCard from "./historyCard";


export default function LeftBar() {
    return <>
        <div className="flex flex-col h-full border-r border-r-gray-300 text-[#5c4f3a] ">
            <div className="flex flex-col  py-2 border-b border-b-gray-300 ">
                <div className="font-medium  pl-4 text-sm">
                    Methods
                </div>
                <Method type="get" />
                <Method type="delete" />
                <Method type="post" />
                <Method type="patch" />
                <Method type="put" />
            </div>

            <div className="flex flex-col flex-1  ">
                <div className="font-medium text-[#8c7d68] pl-4 text-sm text-[#8c7d68]">
                    History
                </div>

                <div className="py-2  max-h-[45rem] overflow-auto scrollbar scrollbar-thumb-[#f7f1e8] scrollbar-thin">
                    <div className="flex flex-col overflow-auto ">
 <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    <HistoryCard type="patch" link="/posts/1" />
                    <HistoryCard type="put" link="/posts/1" />
                    <HistoryCard type="post" link="/posts/1" />
                    <HistoryCard type="get" link="/posts/1" />
                    <HistoryCard type="delete" link="/posts/1" />
                    </div>
                </div>
            </div>
        </div>
    </>
}