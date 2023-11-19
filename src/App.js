import { useState } from 'react';
import { Table } from './Table'

function App() {
  const [num,setNum] = useState("");
  function inputHandler(event) {
      setNum(event.target.value);
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className='text-4xl font-bold m-4' >Table Generator</h1>
      <input onChange={inputHandler} className='w-[250px] focus:w-[300px] text-center border-b-4 border-indigo-500 outline-none duration-500' placeholder='Enter a numebr to generate table'/>
      <Table num={num}/>
    </div>
  );
}

export default App;
