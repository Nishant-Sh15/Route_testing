"use client";

import useResponseData from "@/hooks/useResponseData"
import { AxiosResponse } from "axios"
import { Send } from "lucide-react"

import { useState } from "react";

import ResponseModes from "./responseModes";
import Raw from "./raw";
import Pretty from "./pretty";


type propType = {

}
export default function Output({ }: propType) {
    const { responseData } = useResponseData();
    const [responseMode,setResponseMode]=useState<responseModeType>("Pretty");
    {console.log(responseData)}
    return <>
        <div className="h-[100%] min-w-0 flex flex-col">

            {
                responseData ?
                    <>
                    <div className="flex flex-col ">

                        <div className="flex  p-1 bg-[#f7f1e8] text-xs text-[#5c4f3a]  border-b border-b-gray-300">
                            <div 
                                className="p-2 rounded-md flex bg-[#2e7d321a] text-[#2e7d32]" 
                                style={(responseData.status>=400 && responseData.status<600)?{backgroundColor:"#c628281a",color:"#c62828"}:{}}
                            >
                                <div className=" pr-2">
                                    {responseData.status}
                                </div>
                                <div>
                                    {responseData.statusText}
                                </div>
                            </div>
                        </div>
                        <ResponseModes mode={responseMode} setResponseMode={setResponseMode}/>
                        
                        {responseMode=="Raw" && <Raw /> }
                        {responseMode=="Pretty" && <Pretty />}
                    </div>

                    </>
                    : 
                    <>
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="flex flex-col items-center text-[#5c4f3a]">

                                <div className="p-2 rounded-md border border-gray-300 bg-[#f0e9dc]">
                                    <Send className=" h-5 w-5" />
                                </div>
                                <div className=" text-sm my-1">
                                    Send a request
                                </div>
                                <div className="text-xs">
                                    Enter a URL above and click Send
                                </div>
                            </div>

                        </div>

                    </>
            }
        </div>
    </>
}