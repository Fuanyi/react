import React, {Component} from 'react';
import './App.css';
import Message from './Components/Message';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
class App extends Component {
  render(){
    return(
      <div className = "App">
        <Counter />
        {/* <Message/> */}
        {/* <Greet  name="Bruce" HeroName = 'Batman'>
          <p>Batman Had a Peri</p>
        </Greet>
        <Greet name ='Diana' HeroName = 'Wonder Woman' city = 'ghug' />
        <Welcome name="Bruce" HeroName = 'Batman'/>
        <Welcome  name ='Diana' HeroName = 'Wonder Woman'/> */}
        
       
      </div>
    );
  }
}

export default App;
