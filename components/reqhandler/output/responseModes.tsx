


type propType={
    mode:responseModeType
    setResponseMode:React.Dispatch<React.SetStateAction<responseModeType>>,
}
export default function ResponseModes({mode,setResponseMode}:propType){
    return <>
        <div className="flex pl-2">
            <Method active={mode=="Raw"} text="Raw"  setResponseMode={setResponseMode}/>
            <Method active={mode=="Pretty"} text="Pretty" setResponseMode={setResponseMode}/>
        </div>
    </>
}

type methodPropType={
    active:boolean,
    text:responseModeType,
    setResponseMode:React.Dispatch<React.SetStateAction<responseModeType>>,
}
function Method({active,text,setResponseMode}:methodPropType){
    return <>
        <div className=" my-2 mr-8 cursor-pointer text-[#5c4f3a] hover:text-black text-xs"
            style={active ? {
                color: "#d4620a",
                borderBottom: "2px solid #d4620a"
            } : {}}
            onClick={()=>{
                setResponseMode(text);
            }}
        >
            {text}
        </div>
    </>
}