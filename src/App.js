import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './layouts/Dashboard.jsx';
import Navi from './layouts/Navi';
import React from 'react';

 

class App extends React.Component {

      state = {
          urunler : [],
      }

      
    async componentDidMount() {  /* Fake API'den JSON veri fetch edildi */ 
        const baseURL = "http://localhost:3003/urun";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({urunler:data});
      }
   
      render(){
        return (
          <div className="App">
            <Navi/>   
            <Dashboard        
              urunler={this.state.urunler}
            />
        </div>
        )
      }
  
}

export default App;
