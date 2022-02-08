import React from 'react';
import { Marker, NaverMap } from 'react-naver-maps';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      center: { y: 36.350833, x: 127.385 },
    };

    this.panToDaejeon = this.panToDaejeon.bind(this);
  }

  panToDaejeon() {
    this.setState({ center: { y: 36.350833, x: 127.385 } });
  }

  render() {
    const navermaps = window.naver.maps;
    return (
      <div>
        <button onClick={this.panToDaejeon}>Pan To Daejeon</button>
        <p>lat: {this.state.center.y || this.state.center.lat}</p>
        <p>len: {this.state.center.x || this.state.center.lng}</p>
        <NaverMap
          id="maps-getting-started-controlled"
          style={{ width: '800px', height: '800px' }}
          defaultZoom={15}
          center={this.state.center}
          onCenterChange={(center) => this.setState({ center })}
        >
          <Marker
            key={1}
            position={new navermaps.LatLng(36.350833, 127.385)}
            // animation은 0, 1, 2 등 3가지
            animation={2}
            // Marker 클릭시 동작
            onClick={() => {
              alert('여기는 시청역 입니다.');
            }}
          />
        </NaverMap>
      </div>
    );
  }
}

export default App;
