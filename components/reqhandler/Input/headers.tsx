import { Plus } from 'lucide-react';

import KeyValueWrapper from './keyValue';

import { reqDataType } from '@/types/reqDataType';

type propType = {
    reqData: reqDataType,
    setReqData: React.Dispatch<React.SetStateAction<reqDataType>>,
}

export default function Headers({ reqData, setReqData }: propType) {
    function changeKey(index: number, key: string) {
        setReqData((p) => {
            let newHeaders = [...p.headers];
            newHeaders[index] = {
                ...newHeaders[index],
                key: key
            }
            return {
                ...p,
                headers: newHeaders
            }
        })
    }
    function changeValue(index: number, value: string) {
        setReqData((p) => {
            let newHeaders = [...p.headers];
            newHeaders[index] = {
                ...newHeaders[index],
                value:value
            }
            return {
                ...p,
                headers: newHeaders
            }
        })
    }
    return <>
        <div className="flex flex-col text-[#5c4f3a]">
            <div className="w-full flex justify-between items-end px-4 py-2 border-b border-b-gray-300">
                <div>Header List</div>
                <div
                    className="p-1 rounded-md text-[#fdf8f0] bg-[#d4620a] cursor-pointer"
                    onClick={() => {
                        setReqData((p) => ({
                            ...p,
                            headers: [...p.headers, {
                                key: "",
                                value: ""
                            }]
                        }))
                    }}
                >
                    <Plus className='w-4 h-4' />
                </div>
            </div>

            <KeyValueWrapper dataMode='Headers' reqData={reqData} changeKey={changeKey} changeValue={changeValue}/>
        </div>
    </>
}

