import useReqMethod from "@/hooks/useReqMethod"

type propType = {
    type: "get" | "post" | "put" | "patch" | "delete" | "patch",
}


export default function Method({ type }: propType) {
    const {setReqMethod}=useReqMethod();
    function handleClick(){
        setReqMethod(type);
    }
    return <>
        <div className="w-full flex mt-1 hover:bg-[#f0e9dc] p-1 pl-4 text-xs cursor-pointer" onClick={handleClick}>
            {type == "get" ? <>
                <div className="text-[#2e7d32] px-2 bg-[#2e7d321a] rounded-md">
                    Get
                </div>
                <div className='mx-2'>
                    Get data
                </div>
            </>
                : <></>
            }
            {type == "post" ? <>
                <div className="text-[#b45309] px-2 bg-[#b453091a] rounded-md">
                    Post
                </div>
                <div className='mx-2'>
                    Post data
                </div>
            </>
                : <></>
            }
            {type == "put" ? <>
                <div className="text-[#1565c0] px-2 bg-[#1565c01a] rounded-md">
                    Put
                </div>
                <div className='mx-2'>
                    Update data
                </div>
            </>
                : <></>
            }
            {type == "delete" ? <>
                <div className="text-[#c62828] px-2 bg-[#c628281a] rounded-md">
                    Del
                </div>
                <div className='mx-2'>
                    Delete data
                </div>
            </>
                : <></>
            }
            {type == "patch" ? <>
                <div className="text-[#6a3ab2] px-2 bg-[#6a3ab21a] rounded-md">
                    Patch
                </div>
                <div className='mx-2'>
                    Patch data
                </div>
            </>
                : <></>
            }
        </div>
    </>
}