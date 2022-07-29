import Navbar from "./component/Navbar"
import styled from "styled-components";
import Hero from "./component/Hero";
import Card from "./component/Card";


const AppContainer = styled.div`
    margin: 0px;
    padding: 0px;
 `


function App() {


  return (
    <AppContainer>
      <Navbar/>
      <Hero/>
      <Card/>
 
    </AppContainer>
  )
}

export default App
