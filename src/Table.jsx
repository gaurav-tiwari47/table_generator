import { useState } from "react";

export const Table = (props) => {
    const n = props.num;
    const [check,setCheck] = useState(false);
    function clickHandler() {
        setCheck(!check);
    }
    return (
        <div>
            <h1 className="text-2xl">Tabel of {n} : </h1>
            <button className="border-1-black text-center bg-indigo-500 rounded-lg px-2 py-1 ml-2 mb-4" onClick={() => clickHandler()}>Generate</button>
            <div className="border-solid border-2 border-sky-500 text-center p-4 px-8 ml-[-20px]">
                {
                    check ?
                    <div>
                        <p>{n} X 1 : <span className="text-indigo-500">{n*1}</span></p>
                        <p>{n} X 2 : <span className="text-indigo-500">{n*2}</span></p>
                        <p>{n} X 3 : <span className="text-indigo-500">{n*3}</span></p>
                        <p>{n} X 4 : <span className="text-indigo-500">{n*4}</span></p>
                        <p>{n} X 5 : <span className="text-indigo-500">{n*5}</span></p>
                        <p>{n} X 6 : <span className="text-indigo-500">{n*6}</span></p>
                        <p>{n} X 7 : <span className="text-indigo-500">{n*7}</span></p>
                        <p>{n} X 8 : <span className="text-indigo-500">{n*8}</span></p>
                        <p>{n} X 9 : <span className="text-indigo-500">{n*9}</span></p>
                        <p>{n} X 10 : <span className="text-indigo-500">{n*10}</span></p>
                    </div>
                    : 
                    <div className="text-5xl">
                        🤩
                    </div>
                }
            </div>
        </div>
    )
}