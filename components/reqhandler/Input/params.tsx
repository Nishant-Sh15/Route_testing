import { Plus } from 'lucide-react';

import KeyValueWrapper from './keyValue';

import type { reqDataType } from '@/types/reqDataType';

type propType = {
    reqData: reqDataType,
    setReqData: React.Dispatch<React.SetStateAction<reqDataType>>,
}

export default function Params({ reqData, setReqData }: propType) {
    function changeKey(index:number,key:string){
        setReqData((p)=>{
            let newParams=[...p.params];
            newParams[index]={
                ...newParams[index],
                key:key
            }
            return {
                ...p,
                params:newParams
            }
        })
    }
    function changeValue(index:number,value:string){
        setReqData((p)=>{
            let newParams=[...p.params];
            newParams[index]={
                ...newParams[index],
                value:value
            }
            return {
                ...p,
                params:newParams
            }
        })
    }
    return <>
        <div className="flex flex-col text-[#5c4f3a]">
            <div className="w-full flex justify-between items-end px-4 py-2 border-b border-b-gray-300">
                <div>Query Parameters</div>
                <div
                    className="p-1 rounded-md text-[#fdf8f0] bg-[#d4620a] cursor-pointer"
                    onClick={() => {
                        setReqData((p) => ({
                            ...p,
                            params: [...p.params, {
                                key: "",
                                value: ""
                            }]
                        }))
                    }}
                >
                    <Plus className='w-4 h-4' />
                </div>
            </div>

            <KeyValueWrapper dataMode='Params' reqData={reqData} changeKey={changeKey} changeValue={changeValue}/>
        </div>
    </>
}

