import useResponseData from "@/hooks/useResponseData"


export default function Raw() {
    const { responseData } = useResponseData();
    return <>
        <pre className="
            max-h-[33rem]
            w-[97%]
            overflow-auto
            whitespace-pre-wrap
            break-all
            scrollbar
            border
            rounded-md
            border-gray-300
            ml-2
            text-sm
            text-[#5c4f3a]
            p-2
            
        ">
            {typeof responseData?.data === "string"
                ? responseData.data
                : JSON.stringify(responseData?.data, null, 2)}
        </pre>
    </>
}