import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server"



export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        // console.log("-----------------------------------");
        // console.log(body);
        let data: any = {
            method: body.method,
            url: body.url,
            params: body.params,
            headers: body.headers,
        };
        if (body.method != "get") {
            data.data = body.data;
        }
        
        
        const response = await axios(data);
        const res={
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        }
        // console.log(res);
        return NextResponse.json(res)
    }
    catch(e:any){
        console.log(e.response);
        const res={
            data: "bad request",
            status: 400,
            statusText: "bad request",
            headers: []
        }
        return NextResponse.json(res);
    }

}