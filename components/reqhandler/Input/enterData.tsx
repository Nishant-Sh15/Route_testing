
import { dataModeType } from "@/types/dataModeType"
import { reqDataType } from "@/types/reqDataType"

import { Plus } from "lucide-react"
import KeyValueWrapper from "./keyValue"
import useReqMethod from "@/hooks/useReqMethod"


type propType = {
    dataMode: dataModeType,
}

export default function EnterData({ dataMode }: propType) {
    let {setReqData}=useReqMethod();
    return <>
        <div className="flex flex-col text-[#5c4f3a]">
            <div className="w-full flex justify-between items-end px-4 py-2 border-b border-b-gray-300">
                <div>{dataMode}</div>
                <div
                    className="p-1 rounded-md text-[#fdf8f0] bg-[#d4620a] cursor-pointer"
                    onClick={() => {
                        setReqData((p) => ({
                            ...p,
                            [dataMode]: [...p[dataMode], {
                                key: "",
                                value: ""
                            }]
                        }))
                    }}
                >
                    <Plus className='w-4 h-4' />
                </div>
            </div>

            <KeyValueWrapper dataMode={dataMode}  />
        </div>

    </>
}

