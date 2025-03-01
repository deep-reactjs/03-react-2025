import logo from "./logo.svg";

function App() {
  return (
    <h1 className="font-bold text-center text-red-500">Hello Desire-React</h1>
  );
}

export default App;

// Component lifecycle using class components

// class Child extends React.Component {
//   componentWillUnmount() {
//     console.log("Child removed from dom");
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am a child component</h1>
//       </div>
//     );
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   componentDidMount() {
//     console.log("App component loaded to DOM");
//   }
//   shouldComponentUpdate(props, state) {
//     console.log("Should component update called", state);
//     if (state.count > 3) {
//       return false;
//     }
//     return true;
//   }
//   componentDidUpdate() {
//     console.log("Component updated");
//   }
//   componentWillUnmount() {
//     console.log("Component unmounted");
//   }
//   handleIncreaseCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <p>My first React component!</p>
//         count: {this.state.count}
//         {this.state.count < 3 && <Child />}
//         <button onClick={() => this.handleIncreaseCount()}>
//           Increase count
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

// React Life cycle using functional components
// const Child = () => {
//   useEffect(() => {
//     console.log("Child component mounted");
//     return () => {
//       console.log("Child component removed from dom");
//     };
//   }, []);
//   return <div>Child component</div>;
// };
// function App() {
//   const [count, setCount] = useState(0);
//   // Component did mount
//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);
//   // should component update
//   useEffect(() => {
//     if (count > 2) {
//       console.log("no update");
//       return;
//     }
//     console.log("Component updated");
//   }, [count]);
//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>Hello world: {count}</h1>
//       {count < 3 && <Child />}
//       <button onClick={handleIncrease}>Increase count</button>
//     </div>
//   );
// }
// export default App;
