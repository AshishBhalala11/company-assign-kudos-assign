import React, {useEffect,useState} from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString();
  let seconds = new Date().getSeconds();
  const[date,setDate] = useState(time);

  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setDate(time);
    seconds = new Date().getSeconds();
  }

  setInterval(updateTime, 1000);

  return(
    <div className="clock">
      <div className="time">
        <span className={(seconds%2) == 0 ? 'time-span-black' : 'time-span-white' }>{date}</span>
      </div>
      <style>{ (seconds%2) == 0 ? 'body {background-color : black; color:white}' : 'body {background-color : white; color:black}' }</style>
    </div>

  )
}

export default App;

// class App extends Component{

//   constructor(props){
//     super(props)

//     this.state = {
//       date : new Date(),
//     }
//   }

//     componentDidMount(){
//       this.interval = setInterval(() => {
//         this.setState({date : new Date()})
//       }, 1000);
//     }
//     componentWillUnmount(){
//       clearInterval(this.interval);
//   }

//   render(){
//     return(
//       <div className="clock">
//         <h1 className="time">
//           {this.state.date.toLocaleTimeString()}
//         </h1>
//       </div>
//     )
//   }
// }

// export default App;
