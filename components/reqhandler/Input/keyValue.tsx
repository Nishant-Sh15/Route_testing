import useKeyValuePairHandler from "@/hooks/useKeyValuePairHandler";
import { dataModeType } from "@/types/dataModeType"

import { Trash } from 'lucide-react';


type propType = {
    dataMode: dataModeType,
}
export default function KeyValueWrapper({ dataMode }: propType) {
    const {reqData}=useKeyValuePairHandler();
    return <>
        <div className="overflow-auto h-[10rem] scrollbar scrollbar-thumb-[#f7f1e8] scrollbar-thin">
            {
                reqData[dataMode].map((item, index) => (
                    <KeyValue key={index} index={index} text={item.key} value={item.value} dataMode={dataMode}/>
                ))
            }
        </div>
    </>
}

type KeyValuePropType = {
    index: number,
    text: string,
    value: string,
    dataMode:dataModeType,
}

export function KeyValue({ index, text, value,dataMode }: KeyValuePropType) {
    const {changeKey,changeValue,handleDelete}=useKeyValuePairHandler();
    return <>
        <div className='flex justify-center py-2 text-[1rem] '>
            <input
                type="text"
                className='focus:outline-none border border-gray-300 w-[45%] rounded-sm mx-1 p-1 px-2'
                placeholder='Key'
                onChange={(e) => {
                    changeKey(index, e.target.value,dataMode)
                }}
                value={text}
            />
            <input
                type="text"
                className='focus:outline-none border border-gray-300 w-[45%] rounded-sm mx-1 p-1 px-2'
                placeholder='Value'
                onChange={(e)=>{
                    changeValue(index, e.target.value,dataMode)
                }}
                value={value}
            />

            <div className="p-2 rounded-md text-gray-300 cursor-pointer " onClick={(e)=>{
                handleDelete(index,dataMode);
            }}>
                <Trash className="h-4 w-4"/>
            </div>
        </div>
    </>
}