import { AxiosResponse } from "axios"
import { createContext } from "react"


type responseDataContextType={
    responseData:AxiosResponse|null,
    setResponseData:React.Dispatch<React.SetStateAction<AxiosResponse |null>>
}
const responseDataContext=createContext<responseDataContextType |null>(null);
export default responseDataContext