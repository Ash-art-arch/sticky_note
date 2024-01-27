import React from "react"


function Note ({
    tasks = []
}){
    return (
        <>
            <div className= "w-3/4 p-5 h-1/3 bg-orange-50 shadow-2xl shadow-gray-500 rounded-lg translate-x-1 translate-y-1/2 md:w-1/5">
                <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Note