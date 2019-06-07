import React, { Component } from 'react';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// import * as Icons from "@fortawesome/fontawesome-free-solid"
import Square from './Square';
import Rolldice from './Rolldice';
import Button from './Button';
import './Home.css';
// import { StyleSheet, Text, View} from 'react-native';
class Home extends Component {
  state={
    start:"",
    value:0
  }
  repeat=()=>{
    const arr=[];
    for( var i=100;i>=1;i--){
      arr.push(<Square num={i} />);  
    }
    return arr;
  } 
  rollDice=()=>{
    const max=6;
    const roll=Math.ceil(Math.random()*max);
    console.log("roll=>",roll);
    if(roll===1){
      this.setState({
        start:true,
        value:roll
    });
    }
    else{
      this.setState({
        value:roll
      })
    }
  }
  // Canot provide inline styling for the moving round button.then according to the number in the dice we can decide the movements.
  // const styles=StyleSheet.create({
  //   buttonStyle:{
  //     border-radius:"50%"
  //     width: "50px"
  //     height: "50px"
  //     border: "1px solid blue"
  //   }
  // });
  render () {
    return(
      <div>
        <div className="squareContainer">{
          this.repeat()
        }
        </div>
        <Rolldice className="rollDice" value={this.state.value} onClick={this.rollDice}/>
        {this.state.start?<Button style={divStyle} className="roundButton"/>:null}
      </div>
    )
  }
}
export default Home;
const divStyle = {
  color: 'blue'
  // backgroundImage: 'url(' + imgUrl + ')',
};   


    










