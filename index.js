import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CenterForm extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {position: null};
    this.state = {positionArr: [], pixelArr: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mainBackground = React.createRef();
    this.circle1 = React.createRef();
  }

  /*componentDidMount(){
    var arrCircle = [];
    for(var i = 0; i < 4; ++i){
      arrCircle.push({top: Math.random() * this.mainBackground.current.offsetHeight, 
        left: Math.random() * this.mainBackground.current.offsetWidth});
    }
    this.setState({positionArr: arrCircle});
  }*/

  componentDidMount(){
    var arrCircle = [];
    for(var i = 0; i < 4; ++i){
      arrCircle.push({top: Math.random() * this.mainBackground.current.offsetHeight, 
        left: Math.random() * this.mainBackground.current.offsetWidth});
    }
    this.setState({positionArr: arrCircle});

    var pArr = [];
    for(var j = 0; j < 1; ++j){ // change the 1 to number of circles on page, iterate through circles
      var num = this.circle1.current.offsetHeight/2;
      var factor = .3;
      var signFlag = true;
      var prop = {};

      for(var i = 0; i < 20; ++i){
        //alert('A name was submitted: ' + this.circle1.current.offsetHeight);
        if(signFlag)
          prop = {top: this.circle1.current.offSetTop + ((Math.random() * -num)*factor),
          left: this.circle1.current.offSetTop + ((Math.random() * -num)*factor),
          height: 1,
          width: 1,
          backgroundColor: 'red',
          position: 'absolute',
          animation: 'backLight1',
          animationDuration: 5,
          animationDelay: 1,
          animationIterationCount: 'infinite'};
        else
          prop = {top: this.circle1.current.offSetTop - ((Math.random() * -num)*factor),
          left: this.circle1.current.offSetTop - ((Math.random() * -num)*factor),
          height: 1,
          width: 1,
          backgroundColor: 'red',
          position: 'absolute',
          animation: 'backLight1',
          animationDuration: 5,
          animationDelay: 1,
          animationIterationCount: 'infinite'};

        signFlag = !signFlag;
        const comp = React.createElement('div', prop);
        pArr.push(comp);
      }

      this.setState({pixelArr: pArr});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // Method to initialize animation after pressing submit button, make submit button transparent
  // then put background animation to make it look like a white star, after they press it
  // the white star disappears and the lights appear in the background
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const elements = this.state.pixelArr[0];
    return (
      <div class="mainDiv" ref={this.mainBackground}>

        <div class="circle1" ref={this.circle1} style={this.state.positionArr[0]}>
          {this.state.pixelArr[0]}
        </div>
        <div class="circle2" style={this.state.positionArr[1]}></div>
        <div class="circle3" style={this.state.positionArr[2]}></div>
        <div class="circle4" style={this.state.positionArr[3]}></div>

        <form class="centerForm" onSubmit={this.handleSubmit}>
          <label>
            <input class="mainInput" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <CenterForm />,
  document.getElementById('root')
);
