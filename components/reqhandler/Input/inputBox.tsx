"use client";

import prettier from "prettier/standalone";
import htmlParser from "prettier/plugins/html";

import EnterData from "./enterData";
import EnterUrl from "./enterUrl";
import MetaData from "./metadata";

import { useState } from "react";

import type { reqDataType } from "@/types/reqDataType";
import { dataModeType, historyCardType } from "@/types/dataModeType";

import keyValuePairContext from "@/contextApi/keyValuePairHandler";
import axios, { AxiosResponse } from "axios";
import useReqMethod from "@/hooks/useReqMethod";
import useResponseData from "@/hooks/useResponseData";

type propType = {

}


export default function InputBox({ }: propType) {
    const { setResponseData } = useResponseData();
    const { reqMethod, setHistory, reqData, setReqData } = useReqMethod();
    const [dataMode, setDataMode] = useState<dataModeType>("params");
    function changeKey(index: number, key: string, mode: dataModeType) {
        setReqData((p) => {
            let newData = [...p[mode]];
            newData[index] = {
                ...newData[index],
                key: key
            }
            return {
                ...p,
                [mode]: newData
            }
        })
    }
    function changeValue(index: number, value: string, mode: dataModeType) {
        setReqData((p) => {
            let newData = [...p[mode]];
            newData[index] = {
                ...newData[index],
                value: value
            }
            return {
                ...p,
                [mode]: newData
            }
        })
    }
    function handleDelete(index: number, mode: dataModeType) {
        setReqData((p) => {
            return {
                ...p,
                [mode]: p[mode].filter((h, i) => i != index)
            }
        })
    }

    function onSend() {
        if (!reqData.url) {
            return;
        }
        (async () => {
            try {
                let arg = {
                    method: reqMethod,
                    url: reqData.url,
                    data: Object.fromEntries(
                        reqData.body.filter(p => p.key.trim() != "").map(p => [p.key, p.value])
                    ),
                    params: Object.fromEntries(
                        reqData.params.filter(p => p.key.trim() != "").map(p => [p.key, p.value])
                    ),
                    headers: Object.fromEntries(
                        reqData.headers.filter(p => p.key.trim() != "").map(h => [h.key, h.value])
                    ),
                }
                let response = await axios({
                    method: "POST",
                    url: "http://localhost:3000/routes",
                    data: arg
                });
                response = response.data;
                console.log(response.status)
                let data = response.data;
                if (!(response.status >= 400 && response.status < 600)) {
                    let newHistory: historyCardType = {
                        ...reqData,
                        method: reqMethod
                    }
                    setHistory((p) => [...p, newHistory]);
                }
                try {
                    if (response.headers["content-type"]?.toString().includes("html") && !(response.status >= 400 && response.status < 600)) {
                        data = await prettier.format(
                            data,
                            {
                                parser: "html",
                                plugins: [htmlParser]
                            }
                        )
                        // console.log(response);
                    }
                    setResponseData({
                        ...response,
                        data
                    });
                }
                catch {
                    setResponseData({ ...response });
                }
                // console.log(response);
                // console.log(responseData)
            }
            catch (e) {
                console.log(e)
                // setResponseData(...)
            }
        })();
    }
    return <>
        <div className="flex flex-col text-xs border-b border-b-gray-300"
            onKeyDown={(e) => {
                console.log(e.key)
                if (e.key == "Enter" && reqData.url != "") {
                    onSend();
                }
            }}
        >
            <EnterUrl  onSend={onSend} />
            <MetaData dataMode={dataMode} setDataMode={setDataMode} />
            <keyValuePairContext.Provider
                value={{
                    changeKey,
                    changeValue,
                    handleDelete,
                    reqData
                }}>
                <EnterData dataMode={dataMode}  />
            </keyValuePairContext.Provider>
        </div>
    </>
}