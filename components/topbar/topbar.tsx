import { Link, X ,Code , Plus } from 'lucide-react';

import Tab from "./tab";


export default function Topbar() {
    return <>
        <div className="flex flex-start  w-full border-b border-b-gray-300 items-center">
            <div className='w-full flex items-center border-r border-gray-300 relative'>

                <div className="py-2 px-4  border-r border-r-gray-300 flex items-center ">
                    <div className="rounded-md bg-[#d4620a] flex justify-center items-center">
                        <Link className='m-[4px] text-gray-300 h-4 w-4' />
                    </div>
                    <div className="font-semibold pl-2 text-md">
                        Route
                    </div>
                </div>
                
                <Tab type="delete" />
                <Tab type="get" />
                <Tab type="put" />
                <Tab type="post" />
                <Plus className='h-4 w-4 absolute right-0 m-2'/>
            </div>

            <a href="https://github.com/Nishant-Sh15/Route_testing" className='m-2'>
                <Code className="h-4 w-4" />
            </a>

            
        </div>
    </>
}