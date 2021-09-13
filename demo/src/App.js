import './App.css';
import E17ifElse from './Comp/E17ifElse'
import E22Card from "./Comp/E22Card";
import E23Array from './Comp/E23Array';
import sdata from './Comp/E23Array/data';
import E28SlotMachine from "./Comp/E28SlotMachine"

import GetInputValueOnChange from './Comp/Etc/GetInputValueOnChange'


  function App() {
    let ncard =  function ncard(val, idx){ console.log(idx); return ( 
        <E23Array key={idx}
              head={val.sname} />
    ); 
  };


  return (
    <div className="App">
        
        <GetInputValueOnChange/>

        <E28SlotMachine/>

        <div><h4>---</h4></div>


        <E17ifElse />        
        <E22Card head="Heading 1" content="Content 1" image="https://picsum.photos/80" />
        <E22Card head="Heading 2" content="Content 2" image="https://picsum.photos/70" />
        <E22Card  />
        
        <div> <h4>E 23</h4> </div>

        {/* <E23Array head={sdata[0].sname} content={sdata[0].content} image={sdata[0].link} /> */}

        <div>#1: with Fat Arrow</div>
        {sdata.map(ncard) }


        <div>#2: Normal Function</div>
        {sdata.map( function ncard(val,idx){ return (
          <E23Array key={idx}
              head={val.sname} />
        ); }) }

      <div>#3: with Fat Arrow</div>
      {sdata.map( (val, idx) => <E23Array key={idx} head={val.sname} idx={idx} /> ) }
        
      {/* E24 */}
      {/* E25 React Developer Tool */}
      {/* If Else */}

      {/* E5 Helloworld */}
    
    </div>
  );
}

export default App;
