import React,{ useState } from 'react' 

function App(){
  const [count,setCount]=useState(0)
  return <div>
    <div>{'测试'}{count}</div>
    <button onClick={()=>setCount(count+1)}>累加</button>
  </div>;
}
 
export default <App />