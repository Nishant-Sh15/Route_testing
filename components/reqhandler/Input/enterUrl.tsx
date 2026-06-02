import { reqDataType } from '@/types/reqDataType';
import { ChevronDown } from 'lucide-react';


type propType={
    setReqData:React.Dispatch<React.SetStateAction<reqDataType>>
}

export default function EnterUrl({setReqData}:propType){
    return <>
        <div className="flex flex-col border-b border-b-gray-300 p-3">
            <span className="text-[#8c7d68] text-[11px]">
                Method{" > "}<span className="text-black">
                    {"Get Post"}
                </span>
            </span>

            <div className="flex justify-between my-2">
                <div className=" p-2 flex justify-between bg-[#e8dfd0] rounded-md mr-2">
                    <span className="mr-4 text-[#2e7d32] font-black">
                        {"Del".padEnd(6," ")}
                    </span>

                    <ChevronDown className="h-4 w-4" />
                </div>
                <input type="text" 
                    placeholder='URL' 
                    className='border border-gray-300 rounded-md w-full px-2 focus:outline-none'
                    onChange={(e)=>{
                        setReqData((p)=>({
                            ...p,
                            url:e.target.value
                        }))
                    }}
                />

                <button className="text-[#fdf8f0] font-black bg-[#d4620a] rounded-md py-2 px-4 mx-2 cursor-pointer">
                    Send
                </button>

            </div>

        </div>
    </>
} 