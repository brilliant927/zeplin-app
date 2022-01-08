import React from 'react';
import ReactDOM from 'react-dom';
import './Rectangle.css';
class Image extends React.Component {
    render(){
        const source=this.props.source;
        return(
            <div className="w-120  h-120 bg-[#f9f9fc] rounded-50">
                <img className = "ml-1" src={source}>
                </img>
            </div>
        );
    }
}
class BoldText extends React.Component {
    render(){
        const content=this.props.content;
        return(
            <div className="text-18 text-center font-bold font-['Nunito'] w-332 h-57 mt-37 mb-14">
                {content}
            </div>
        );
    }
}
class RegularText extends React.Component {
    render(){
        const regularContent=this.props.regularContent;
        return(
            <div className="text-14 font-['Nunito']  text-center w-332 h-19">
                {regularContent}
            </div>
        );
    }
}
class Button extends React.Component {
    render(){
        const label=this.props.label;
        const selected=this.props.selected;
        console.log(this.props);
        return(
            <div className={((selected) ? "bg-[#008b74] " :" ")+" rounded-50 border border-[#008b74] border-solid border-10 h-48 w-160 flex justify-items-center grid content-center"}>
                <span className={(selected) ? 'text-white' : 'text-black'}>{label}</span>
            </div>
        );
    }
}
class Rectangle extends React.Component {
    render(){
        const buttons =this.props.buttons.slice();
        return ( 
            <div className="h-460 w-460 pt-66 pb-40 bg-white rounded-10 mr-100 mb-66 shadow-[0_0_20px_0_rgba(0,0,0,0.1)] flex flex-col grid justify-items-center">
               <Image source={this.props.source} />
               <BoldText content={this.props.content} />
               <RegularText regularContent={this.props.regularContent} />
               <div className="flex h-48 mt-59 space-x-12">
               {
                buttons.map(button => {
                   return <Button label={button.label} selected={button.selected}/>
                })
               }
               </div>
            </div>
        );
    };
}
export default Rectangle;