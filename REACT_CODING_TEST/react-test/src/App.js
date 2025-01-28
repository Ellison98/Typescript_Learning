import './App.css';

function Counter(props) {
  return (
    <div>
      <h1>{props.title} Counter</h1>
      <button>+</button> {props.initValue}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue="10"/>
    </div>
  );
}

export default App;
