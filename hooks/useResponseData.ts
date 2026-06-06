import { useContext } from "react";

import responseDataContext from "../contextApi/responseDataContext"

export default function useResponseData(){
    const context=useContext(responseDataContext);
    if(!context){
        console.log("i am inside hooks/useResponseData.ts");
        throw Error("i am inside hooks/useResponseData.ts");
    }
    return context;
}