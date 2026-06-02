import { dataModeType } from "@/types/dataModeType"
import { reqDataType } from "@/types/reqDataType"


type propType = {
    dataMode: dataModeType,
    reqData: reqDataType,
    changeKey: Function,
    changeValue: Function,
}
export default function KeyValueWrapper({ dataMode, reqData, changeKey, changeValue }: propType) {
    return <>
        <div className="overflow-auto h-[19rem] scrollbar scrollbar-thumb-[#f7f1e8] scrollbar-thin">
            {dataMode == "Headers" ?
                reqData.headers.map((item, index) => (
                    <KeyValue key={index} index={index} text={item.key} value={item.value} changeKey={changeKey} changeValue={changeValue}/>
                ))
                : null
            }
            {
                dataMode == "Params" ?
                    reqData.params.map((item, index) => (
                        <KeyValue key={index} index={index} text={item.key} value={item.value} changeKey={changeKey} changeValue={changeValue}/>
                    ))
                    : null

            }
            {
                dataMode == "Body" ?
                    reqData.body.map((item, index) => (
                        <KeyValue key={index} index={index} text={item.key} value={item.value} changeKey={changeKey} changeValue={changeValue}/>
                    ))
                    : null
            }
        </div>
    </>
}

type KeyValuePropType = {
    index: number,
    text: string,
    value: string,
    changeKey: Function,
    changeValue: Function,
}

export function KeyValue({ index, text, value, changeKey,changeValue }: KeyValuePropType) {
    return <>
        <div className='grid grid-cols-[1fr_1fr] py-2 text-[1rem] '>
            <input
                type="text"
                className='focus:outline-none border border-gray-300 rounded-sm mx-1 p-1 px-2'
                placeholder='Key'
                onChange={(e) => {
                    changeKey(index, e.target.value)
                }}
                value={text}
            />
            <input
                type="text"
                className='focus:outline-none border border-gray-300 rounded-sm mx-1 p-1 px-2'
                placeholder='Value'
                onChange={(e)=>{
                    changeValue(index, e.target.value)
                }}
                value={value}
            />
        </div>
    </>
}