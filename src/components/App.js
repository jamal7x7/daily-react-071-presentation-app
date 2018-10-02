import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Presentation App</h1>
  </header>
)

const Main = (props) => (
  <div className='game'>

    

  </div>
)

const SideLight = () => (
  <div className='score'>

      

  </div>
)

const SideRight = () => (
  <div className='score'>

      

  </div>
)

class PresentationApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <SideLeft />
        <Main />
        <SideRight />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <PresentationApp />

  </div>
)

export default App

