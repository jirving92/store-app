import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/menubar/MenuBar';
import styled from 'styled-components';

const InnerBox = styled.div`
  max-width: 1000px;
  height: 2000px;
  margin: auto;
  background-color: red;
`;

const OuterBox = styled.div`
background-color: green;
`;

class App extends Component {
  render() {
    return (
      <OuterBox>
        <InnerBox>
          <MenuBar />
        </InnerBox>
      </OuterBox>
    );
  }
}

export default App;
