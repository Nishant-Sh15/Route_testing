import type { reqMethodType } from "@/types/dataModeType"
import { createContext } from "react";
import type {historyCardType} from "../types/dataModeType"
import { reqDataType } from "@/types/reqDataType";
type reqMethodContextType={
    reqMethod: reqMethodType,
    setReqMethod:React.Dispatch<React.SetStateAction<reqMethodType>>,
    history:historyCardType[],
    setHistory:React.Dispatch<React.SetStateAction<historyCardType[]>>,
    reqData:reqDataType,
    setReqData:React.Dispatch<React.SetStateAction<reqDataType>>
}
const context=createContext<reqMethodContextType | null>(null);
export default context; 