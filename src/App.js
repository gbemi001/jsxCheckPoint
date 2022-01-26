import gbemiYoloye from "./gbemiYoloye.jpg"
import './App.css';
import "./style.css"

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
       <h1 className="title">Yoloye Gbemi</h1>
       <br/>
       <img src= {gbemiYoloye} alt ="GbemiYoloye"/>
       <br/>
       <img src="/gbemiAndShola.jpeg" alt ="gbemiAndShola"/>
      </div>
      <iframe width="320" height="240" src="https://www.youtube.com/embed/5bbKnj1-mR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
