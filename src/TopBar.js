import React from 'react';
import ReactDOM from 'react-dom';

class TopBar extends React.Component {
    render(){
        
        return(
            <div className="w-1440  h-74 bg-white flex justify-between">
                <div className="ml-300 mt-17 w-161 h-41 text-30 font-bold font-['Nunito']">
                    Dashboard
                </div>
                <div className="w-24 h-24 mr-50 mt-25">
                    <img src="./icons-bell.svg" />
                </div>
            </div>
        );
    }
}
export default TopBar;