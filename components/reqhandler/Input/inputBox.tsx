"use client";

import EnterData from "./enterData";
import EnterUrl from "./enterUrl";
import MetaData from "./metadata";

import { useState } from "react";

import type { reqDataType } from "@/types/reqDataType";
import { dataModeType } from "@/types/dataModeType";

type propType = {
    reqData: reqDataType,
    setReqData: React.Dispatch<React.SetStateAction<reqDataType>>,
}

export default function InputBox({ reqData, setReqData }: propType) {
    const [dataMode, setDataMode] = useState<dataModeType>("Params");
    return <>
        <div className="flex flex-col text-xs">
            <EnterUrl setReqData={setReqData}/>
            <MetaData dataMode={dataMode} setDataMode={setDataMode} />
            <EnterData dataMode={dataMode} reqData={reqData} setReqData={setReqData}/>
        </div>
    </>
}