"use client";
import LeftBar from "@/components/leftbar/leftbar";
import ReqHandler from "@/components/reqhandler/reqbox";
import Topbar from "@/components/topbar/topbar";

import { useState } from "react";

import ReqMethodContext from "../contextApi/reqMethodContext"
import { historyCardType, reqMethodType } from "@/types/dataModeType";
import { reqDataType } from "@/types/reqDataType";

export default function Home() {
	const [reqMethod, setReqMethod] = useState<reqMethodType>("get");
	const [history, setHistory] = useState<historyCardType[]>([]);
	const [reqData, setReqData] = useState<reqDataType>({
		url: "",
		body: [{ key: "", value: "" }],
		headers: [{ key: "", value: "" }],
		params: [{ key: "", value: "" }]
	});
	return <>
		<div className="flex flex-col h-full w-full bg-[#f7f1e8]">
			<Topbar />

			<div className=" w-full h-full flex-1 grid grid-cols-[1fr_7fr] ">
				<ReqMethodContext.Provider
					value={{
						reqMethod,
						setReqMethod,
						history,
						setHistory,
						reqData,
						setReqData
					}}
				>

					<LeftBar />

					<ReqHandler />

				</ReqMethodContext.Provider>

			</div>
		</div>
	</>
}
