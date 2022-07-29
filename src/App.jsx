import Navbar from "./component/Navbar"
import styled from "styled-components";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Contacts from "./component/Contacts";


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
      <Contacts/>
 
    </AppContainer>
  )
}

export default App
