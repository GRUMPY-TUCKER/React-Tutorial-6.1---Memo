import React, {useState} from 'react'
import Newcomp from './Newcomp';

const Memo = () => {
    const [count,setcount] = useState(0);
    const [input,setinput] = useState('');
    const handleInput = (ele) => {
        setinput(ele.target.value);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Click ME</button>
        <br/>
        <input type='text' value={input} onChange={handleInput}/>
        <hr/>
        <Newcomp newCount={count}/>
    </div>
  )
}

export default Memo