import useResponseData from "@/hooks/useResponseData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


export default function Pretty() {
    const { responseData } = useResponseData();
    // {console.log(responseData)}
    return <>
        <div className="max-h-[33rem] max-w-[100%]  border rounded-md border-gray-300 ml-2 text-sm">
            <SyntaxHighlighter
                language={
                        responseData?.headers["content-type"]?.toString().includes("html")?"html"
                        :responseData?.headers["content-type"]?.toString().includes("json")?"json"
                        :"html"
                }
                wrapLongLines
                customStyle={{
                    margin: 0,
                    maxHeight: "33rem",
                    background: "#f7f1e8",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "anywhere",
                }}
                PreTag={"div"}
                codeTagProps={{
                    style: {
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-all",
                    },
                }}
            >
                {typeof responseData?.data === "string"
                    ? responseData.data
                    : JSON.stringify(responseData?.data, null, 2)}
            </SyntaxHighlighter>
        </div>
    </>
}