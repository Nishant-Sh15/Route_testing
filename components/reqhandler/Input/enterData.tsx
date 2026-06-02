import Params from "./params"
import Headers from "./headers"
import { dataModeType } from "@/types/dataModeType"
import Body from "./body"
import { reqDataType } from "@/types/reqDataType"


type propType = {
    dataMode: dataModeType,
    reqData: reqDataType,
    setReqData: React.Dispatch<React.SetStateAction<reqDataType>>,
}

export default function EnterData({ dataMode, reqData, setReqData }: propType) {
    return <>
        {dataMode == "Params" ? <Params reqData={reqData} setReqData={setReqData}/> : null}
        {dataMode == "Headers" ? <Headers  reqData={reqData} setReqData={setReqData}/> : null}
        {dataMode == "Body" ? <Body reqData={reqData} setReqData={setReqData} /> : null}

    </>
}

