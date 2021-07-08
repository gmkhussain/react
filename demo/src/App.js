import './App.css';
import E17ifElse from './Comp/E17ifElse'
import E22Card from "./Comp/E22Card";

function App() {
  return (
    <div className="App">
      
      <E17ifElse />
      
      <E22Card head="Heading 1" content="Content 1" />
      <E22Card head="Heading 2" content="Content 2" />
      <E22Card />

    </div>
  );
}

export default App;
