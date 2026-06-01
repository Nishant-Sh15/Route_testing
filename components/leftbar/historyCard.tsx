

type propType = {
    type: "get" | "post" | "put" | "patch" | "delete" | "patch",
    link: string,
}

export default function HistoryCard({ type, link }: propType) {
    return <>
        <div className="w-full flex mt-1 hover:bg-[#f0e9dc] p-1 pl-8 text-xs overflow-hidden">
            {type == "get" ? <>
                <div className="text-[#2e7d32] px-2 bg-[#2e7d321a] rounded-md">
                    Get
                </div>
            </>
                : <></>
            }
            {type == "post" ? <>
                <div className="text-[#b45309] px-2 bg-[#b453091a] rounded-md">
                    Post
                </div>
            </>
                : <></>
            }
            {type == "put" ? <>
                <div className="text-[#1565c0] px-2 bg-[#1565c01a] rounded-md">
                    Put
                </div>
            </>
                : <></>
            }
            {type == "delete" ? <>
                <div className="text-[#c62828] px-2 bg-[#c628281a] rounded-md">
                    Del
                </div>
            </>
                : <></>
            }
            {type == "patch" ? <>
                <div className="text-[#6a3ab2] px-2 bg-[#6a3ab21a] rounded-md">
                    Patch
                </div>
            </>
                : <></>
            }
            <div className='mx-2 w-[8rem] overflow-hidden'>
                {link}
            </div>

        </div>
    </>
}