import { useState } from 'react';
import './Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementFunction(){
        setCount(count+1);

        console.log(count);
    }

  return (
    <div className='Counter'>
        <span className='count'>{count}</span><br/>
        <button  className='counterBtn' onClick={incrementFunction}>+1</button>
    </div>
  )
}

export default Counter