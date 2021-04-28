import logo from './logo.svg';
import './App.css';
import MultiButton from'./cgu_multiButton'
import HelloCGU from'./cgu_hello'



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText=event.target.innerText+"被點了"
}

const multiButton=(num)=>{
	var output=[];
	for(let i=1;i<num+1;++i)
	output.push(<button onClick={changeText}>第{i}個按鍵</button>)
	return output;
} 

function App() {
  return (
    <div className="App">
      <div>
        { HelloCGU() }
      </div>
       <div>
          {MultiButton(10) }
        </div>
    </div>  
      );
}


export default App;
