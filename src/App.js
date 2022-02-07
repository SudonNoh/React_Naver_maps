import React from 'react';
import { NaverMap } from 'react-naver-maps';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      center: { y: 36.350833, x: 127.385 }
    }

    this.panToDaejeon = this.panToDaejeon.bind(this);
  }

  panToDaejeon() {
    this.setState({ center: { y: 36.350833, x: 127.385 }})
  }

  render() {
    return (
      <div>
        <button onClick={this.panToDaejeon}>Pan To Daejeon</button>
        <p>lat: {this.state.center.y || this.state.center.lat}</p>
        <p>len: {this.state.center.x || this.state.center.lng}</p>
        <NaverMap 
          id='maps-getting-started-controlled' 
          style={{width:"400px", height:'400px'}} 
          defaultZoon={10} 
          center={this.state.center} 
          onCenterChange={center => this.setState({ center })} 
          />
      </div>
    )
  }
}

export default App;
