"use client";
import InputBox from "./Input/inputBox"


import { useState } from "react";


import type { reqDataType } from "@/types/reqDataType";
import Output from "./output/output";
import { AxiosResponse } from "axios";

import ResponseDataContext from "@/contextApi/responseDataContext";

export default function ReqHandler() {
    const [responseData,setResponseData]=useState<AxiosResponse | null>(null);
    return <>
        <div className="flex flex-col bg-[#fdf8f0] min-w-0">
            <ResponseDataContext.Provider 
                value={{
                    responseData,
                    setResponseData
                }}
            >

            <InputBox  />
            <Output  />

            </ResponseDataContext.Provider>
        </div>
    </>
}