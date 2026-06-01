import { X } from "lucide-react"

type propType = {
    type: "get" | "post" | "put" | "patch" | "delete",
}

export default function Tab({ type }: propType) {
    return <>
        <div className="py-2 px-4  border-r border-r-gray-300 flex items-center ">
            <span className=" flex items-center text-[#8c7d68] text-sm">

                {type == "get" ? <>
                        <div className="text-[#2e7d32] px-2 bg-[#2e7d321a] rounded-md">
                            Get
                        </div>
                        <div className='mx-2'>
                            Get data
                        </div>
                    </>
                    :<></>
                }
                {type == "post" ? <>
                        <div className="text-[#b45309] px-2 bg-[#b453091a] rounded-md">
                            Post
                        </div>
                        <div className='mx-2'>
                            Post data
                        </div>
                    </>
                    :<></>
                }
                {type == "put" ? <>
                        <div className="text-[#1565c0] px-2 bg-[#1565c01a] rounded-md">
                            Put
                        </div>
                        <div className='mx-2'>
                            Update data
                        </div>
                    </>
                    :<></>
                }
                {type == "delete" ? <>
                        <div className="text-[#c62828] px-2 bg-[#c628281a] rounded-md">
                            Del
                        </div>
                        <div className='mx-2'>
                            Delete data
                        </div>
                    </>
                    :<></>
                }
                

                <X className="h-4 w-4" />
            </span>
        </div>
    </>
}

