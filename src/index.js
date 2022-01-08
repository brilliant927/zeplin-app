import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rectangle from './Rectangle.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Popups : [
              { 
                img : "./9C314F43-C02E-494B-AEC3-AE0C844240D0.png", 
                content : "Are you sure you want to delete guest Barbara Harris?",
                regularContent : "Lorem ipsum dolor sit amet.",
                buttons : [
                  {label: "No, cancel", selected: false}, 
                  {label: "Yes,delete", selected: true}
                ] 
              },
              { 
                img : "./7049BEB8-6A74-483E-B049-8085BDC59466.png", 
                content : "One more on the board!",
                regularContent : "Charlotte Davis was successfully added as a guest.",
                buttons : [
                  {label: "Close", selected: true}
                ] 
              },
              { 
                img : "./7049BEB8-6A74-483E-B049-8085BDC59466.png", 
                content : "One more on the board!",
                regularContent : "Charlotte Davis filled in your request form and was added as a guest.",
                buttons : [
                  {label: "Close", selected: true}
                ] 
              },
              { 
                img : "./FEA699E8-F248-4C1B-8F8D-9ECDA06A7256.png", 
                content : 'Are you sure you want to delete "Our Wedding" Moment?',
                regularContent : "This action cannot be undone.",
                buttons : [
                {label: "No, cancel", selected: false}, 
                {label: "Yes,delete", selected: true}
               ] 
              },
              { 
                img : "./6AB831DE-1523-45B4-9C46-DBB8F9694259.png", 
                content : "Invitations on the way!",
                regularContent : "14 invitations were successfully sent to your guests.",
                buttons : [
                  {label: "Close", selected: true}
                ] 
              }
            ]
        };
    }
    render(){
      return (
        
        <div className="w-1440 h-2354 bg-[#f4f7f6] pt-141 pl-218 pb-701  flex flex-wrap ">
          {
              this.state.Popups.map(Popup => {
              return <Rectangle source={Popup.img}
              content = {Popup.content}
              regularContent = {Popup.regularContent}
              buttons={Popup.buttons} />
            })
          }
          </div>
    )
  }
}

  //////////////////////---------------
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);