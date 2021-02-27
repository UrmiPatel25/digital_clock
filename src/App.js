import React,{useState,useRef,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/counter/counter';
import Digiclock from './component/clock/digiclock';

function App() {
  /*const [obj, setcnt] = useState({ count: 0 ,mflag:true});
  //const [mflag, setflag] = useState(true);
  const inref = useRef(null);
  useEffect(() => {
    inref.current.focus();
  })

  console.log(obj);
  const clickHandler = () => {
    obj.count = obj.count + 1;
    setcnt({ ...obj,count: obj.count });
    //setflag(!mflag);
  }*/
  /*const flagHandler = () => {
    setflag(!mflag);
  }*/
  return (
   /* {< h1 > counter: { obj.count }</h1 >
      <h1>Flag:{obj.mflag + ''}</h1>
      <input type="text" ref={inref}></input>
      <button onClick={clickHandler}>increament</button>
      <button onClick={() => setcnt({ ...obj, mflag: !obj.mflag })}>toggle</button>}*/
    < div className = "App" >
      <Counter />
      
      <Digiclock />
    </div>  
  );
}

export default App;
