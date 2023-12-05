import MyButton from './components/MyButton';
import Info from './components/Info';
import './App.css';

const x ="Dont click me!";

function App() {
     return (
       <div>
        <h1 className="myCoolClass">Welcome to my app</h1>
        <p>{x}</p>
        <MyButton />
        <Info />

       
      </div>
  )
}

export default App
