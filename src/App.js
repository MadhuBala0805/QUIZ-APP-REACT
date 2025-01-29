
// import React, { useState,useEffect } from 'react';
/*import './App.css';

function App() {
  // State to handle the form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation (you can expand this logic)
    if (username === '' || password === '') {
      setError('Please enter both username and password.');
    } else {
      setError('');
      alert(`Logged in as: ${username}`);
      // Here, you could make an API call to authenticate the user
    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;*/
// function HelloWorld(){

//   return <h1>717822I230- Hello World!</h1>;
// }
// export default HelloWorld
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//   <div>
//   <h1>{count}</h1>
//   <button onClick={() => setCount(count + 1)}>Increment</button>
//   <button onClick={() => setCount(count - 1)}>Decrement</button>
//   </div>
//   );
//   }
//   export default Counter;

// function RealTimeInput() {
//   const [input, setInput] = useState("");
//   return (
//   <div>
//   <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
//   <p>717822I230</p>
//     <p>{input}</p>
   
//     </div>
//     );
// }
// export default RealTimeInput;
// function List(){

//   const items=['Item 1','Item 2','Item 3'];
//   return(
    
//     <ul>
//       {items.map((items,index)=>(
//         <li key={index}>{index}</li>
//       ))}
//     </ul>
    
//   );
// }
//export default List;
// function ToggleSwitch(){
//   const[isOn,setIsOn]=useState(false);
//   return(
//     <div onClick={()=>setIsOn(!isOn)} style={{cursor:'pointer'}}>
//       {isOn ? 'ON' : 'OFF'}
//       <h1>717822I230</h1>
//     </div>
//   );
// }
// export default ToggleSwitch;

/*function APIDataFetch(){
  const[data,setData]=useState(null);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>response.json())
    .then((data)=>setData(data));
  },[]);
  if(!data)return <div>Loading...</div>;
  return(
    <div>
      <h1>717822I230</h1>
      <h1>Fetched data:</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}
export default APIDataFetch;*/

// function Calculator(){
//   const[input,setInput]=useState("");
//   const handleClick=(value)=>{
//     setInput(input+value);
//   };
//   const handleCalculate=()=>{
//     try{
//       setInput(eval(input));
//     }
//     catch(e){
//       setInput('Error');
//     }
//   };
//   return(
//     <div>
//       <p>MADHU 717822I230</p>
//         <input type="text" value={input} readOnly />
//       <div>
//         <button onClick={()=>handleClick('1')}>1</button>
//         <button onClick={()=>handleClick('2')}>2</button>
//         <button onClick={()=>handleClick('3')}>3</button>
//         <button onClick={()=>handleClick('+')}>+</button>
//       </div>
//       <div>
//         <button onClick={()=>handleClick('4')}>4</button>
//         <button onClick={()=>handleClick('5')}>5</button>
//         <button onClick={()=>handleClick('6')}>6</button>
//         <button onClick={()=>handleClick('-')}>-</button>
//       </div>
//       <div>
//         <button onClick={()=>handleClick('7')}>7</button>
//         <button onClick={()=>handleClick('8')}>8</button>
//         <button onClick={()=>handleClick('9')}>9</button>
//         <button onClick={()=>handleClick('')}></button>
//       </div>
//       <div>
//         <button onClick={()=>handleClick('0')}>0</button>
//         <button onClick={()=>handleClick('.')}>.</button>
//         <button onClick={()=>handleClick('=')}>=</button>
//         <button onClick={()=>handleClick('/')}>/</button>
//       </div>
//     </div>
//   );
// }
// export default Calculator
// function Timer(){
//   const[time,setTime]=useState(60);
//   useEffect(()=>{
//     if(time===0) return;
//     const timerId=setInterval(()=>setTime((prev)=>prev-1),1000);
//     return()=>clearInterval(timerId);
//   },[time]);
//   return (
//     <div>
//     <h1>717822i230</h1>
//     <h1>Time remaining: {time} seconds</h1>
//   </div>
//   )
// }
// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     setTasks([...tasks, input]);
//     setInput('');
//   };

//   const removeTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//     <h1>MADHU 717822I230</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task} <button onClick={() => removeTask(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

// function DynamicBackground() {
//   const [bgColor, setBgColor] = useState('lightblue');

//   const changeBackground = () => {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     setBgColor(randomColor);
//   };

//   return (
//     <div
    
//       style={{ width: '100%', height: '100vh', backgroundColor: bgColor }}
//       onClick={changeBackground}
//     >
//       <h1>MADHU 717822I230</h1>
//       Click to change background
//     </div>
//   );
// }

// export default DynamicBackgroun
// 
import React from "react";  
import Quiz from "./Quiz";  import "./style.css";  
function App() {  
  return (  
  <div className="App">  <h1>React Quiz App</h1>  <Quiz /> 
  </div> 
  );  
 }  
 export default App; 
 