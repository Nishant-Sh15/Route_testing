"use client";
import InputBox from "./Input/inputBox"


import { useState } from "react";


import type { reqDataType } from "@/types/reqDataType";

export default function ReqHandler() {
    const [reqData,setReqData]=useState<reqDataType>({
        url:"",
        body:[{key:"",value:""}],
        headers:[{key:"",value:""}],
        params:[{key:"",value:""}]
    });
    return <>
        <div className="grid grid-rows-[1fr_1fr] bg-[#fdf8f0] ">
            <InputBox setReqData={setReqData} reqData={reqData}/>
        </div>
    </>
}