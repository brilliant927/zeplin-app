import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar.js';
import TopBar from './TopBar.js';
class App extends React.Component {
   
    render(){
      return (
        <div className="w-1440 h-1024 bg-[#f4f7f6] flex-none">
          <TopBar />
          <MenuBar />
        </div>
    )
  }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);