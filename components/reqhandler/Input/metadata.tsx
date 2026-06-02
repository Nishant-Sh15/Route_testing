import { dataModeType } from "@/types/dataModeType"


type propType = {
    dataMode: dataModeType,
    setDataMode: React.Dispatch<React.SetStateAction<dataModeType>>
}

export default function MetaData({ dataMode, setDataMode }: propType) {
    return <>
        <div className="flex text-[#5c4f3a] px-4  bg-[#f7f1e8] border-b border-b-gray-300">
            <Cards text="Params" active={dataMode=="Params"} setDataMode={setDataMode}/>
            <Cards text="Body" active={dataMode=="Body"} setDataMode={setDataMode}/>
            <Cards text="Headers" active={dataMode=="Headers"} setDataMode={setDataMode} />
        </div>
    </>

}


type CardPropType = {
    text: dataModeType,
    active: Boolean,
    setDataMode: React.Dispatch<React.SetStateAction<dataModeType>>,
}

function Cards({ text, active,setDataMode }: CardPropType) {
    return <>
        <div className=" my-2 mr-8 cursor-pointer hover:text-black"
            style={active ? {
                color: "#d4620a",
                borderBottom: "2px solid #d4620a"
            } : {}}
            onClick={()=>{
                setDataMode(text);
            }}
        >
            {text}
        </div>
    </>
}