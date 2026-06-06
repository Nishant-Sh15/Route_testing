import keyValuePairContext from "@/contextApi/keyValuePairHandler";
import { useContext } from "react";

export default function useKeyValuePairHandler() {
    const context = useContext(keyValuePairContext)
    if (!context) {
        console.log("i am inside hooks/useKeyValuePair.ts");
        throw Error("i am inside hooks/useKeyValuePair.ts");
    }
    else {
        return context;
    }
}