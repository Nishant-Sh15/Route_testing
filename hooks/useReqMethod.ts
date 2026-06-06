import {  useContext} from "react";
import reqMethodContext from "../contextApi/reqMethodContext"
export default function useReqMethod(){

    const context=useContext(reqMethodContext);
    if(!context){
        console.log("i am inside hooks/useReqMethod.ts");
        throw Error("i am inside hooks/useReqMethod.ts");
    }
    else{
        return context;
    }

}