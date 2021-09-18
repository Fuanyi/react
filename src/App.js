import React, {Component} from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
class App extends Component {
  render(){
    return(
      <div className = "App">
        <Greet  name="Bruce" HeroName = 'Batman'>
          <p>Batman Had a Peri</p>
        </Greet>
        <Greet name ='Diana' HeroName = 'Wonder Woman' />
        <Welcome name="Bruce" HeroName = 'Batman'/>
        <Welcome  name ='Diana' HeroName = 'Wonder Woman'/>
       
      </div>
    );
  }
}

export default App;
