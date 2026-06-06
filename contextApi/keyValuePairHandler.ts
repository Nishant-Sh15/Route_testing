import { reqDataType } from "@/types/reqDataType";
import { createContext } from "react"

type keyValuePaieHandlerType={
    changeKey:Function,
    changeValue:Function,
    handleDelete:Function,
    reqData:reqDataType
}

const keyValuePairContext=createContext<keyValuePaieHandlerType|null>(null);
export default keyValuePairContext;