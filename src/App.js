import './App.css';
import logo from './logo.png';

function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <div className="nav">
        <div>app</div>
      </div>
      
      <img src={logo}/>
    </div>
  );
}



export default App;
