import useReqMethod from '@/hooks/useReqMethod';
import { reqMethodType } from '@/types/dataModeType';
import { reqDataType } from '@/types/reqDataType';
import { ChevronDown } from 'lucide-react';


import { useState , useRef, useEffect} from 'react';

type propType = {
    onSend: Function,
}

export default function EnterUrl({  onSend }: propType) {
    let divRef=useRef<HTMLDivElement>(null);

    let {reqData,setReqData}=useReqMethod();
    const [showReqMethod, setShowReqMethod] = useState<boolean>(false);
    
    const { reqMethod, setReqMethod } = useReqMethod();

    function handleChangeMode(mode: reqMethodType) {
        setReqMethod(mode);
    }

    useEffect(()=>{
        function clickOutside(e :MouseEvent){
            // console.log("clicked");
            if(!showReqMethod){
                return;
            }
            if(!divRef.current?.contains(e.target as Node)){
                setShowReqMethod(false);
            }
        }
        document.addEventListener("mousedown",clickOutside);
        return ()=>{
            document.removeEventListener("mousedown",clickOutside);
        }
    },[showReqMethod,divRef])
    return <>
        <div className="flex flex-col border-b border-b-gray-300 p-3">
            <span className="text-[#8c7d68] text-[11px]">
                Method{" > "}<span className="text-black">
                    {
                        reqMethod=="get"?"fetch data"
                        :reqMethod=="post"?"add data"
                        :reqMethod=="delete"?"Delete data"
                        :reqMethod=="put"?"replace data"
                        :"modify data"

                    }
                </span>
            </span>

            <div className="flex justify-between my-2">
                <div className=" p-2 flex justify-between bg-[#e8dfd0] rounded-md mr-2 relative cursor-pointer"
                    ref={divRef}
                    onClick={() => {
                        setShowReqMethod((p) => {
                            return !p;
                        });
                    }}
                >
                    <span className="mr-4  font-black"
                        style={
                            reqMethod == "get" ? { color: "#2e7d32" }
                                : reqMethod == "post" ? { color: "#b45309" }
                                    : reqMethod == "delete" ? { color: "#c62828" }
                                        : reqMethod == "patch" ? { color: "#6a3ab2" }
                                            : reqMethod == "put" ? { color: "#1565c0" }
                                                : {}
                        }
                    >

                        {reqMethod.padEnd(6, " ").toUpperCase()}
                    </span>

                    <ChevronDown className="h-4 w-4" />
                    {showReqMethod &&
                        <div className='absolute top-8 left-0 flex flex-col bg-[#fdf8f0]  border border-gray-300 rounded-sm'>
                            <ChangeMode mode='get' handleClick={handleChangeMode} />
                            <ChangeMode mode='post' handleClick={handleChangeMode} />
                            <ChangeMode mode='put' handleClick={handleChangeMode} />
                            <ChangeMode mode='patch' handleClick={handleChangeMode} />
                            <ChangeMode mode='delete' handleClick={handleChangeMode} />
                        </div>
                    }
                </div>
                <input type="text"
                    placeholder='URL'
                    className='border border-gray-300 rounded-md w-full px-2 focus:outline-none'
                    onChange={(e) => {
                        setReqData((p) => ({
                            ...p,
                            url: e.target.value
                        }))
                    }}
                    value={reqData.url}
                />

                <button className="text-[#fdf8f0] font-black bg-[#d4620a] rounded-md py-2 px-4 mx-2 cursor-pointer"
                    onClick={() => {
                        onSend();
                    }}

                >
                    Send
                </button>

            </div>

        </div>
    </>
}

type changeModePropType = {
    mode: reqMethodType,
    handleClick: Function,
}
function ChangeMode({ mode, handleClick }: changeModePropType) {
    return <>
        <div className='border-b p-1 border-b-gray-300 w-[4rem] text-start text-[#d4620a] cursor-pointer hover:bg-[#f7f1e8]' onClick={() => handleClick(mode)}>
            {mode.padEnd(6).toUpperCase()}
        </div>
    </>
}