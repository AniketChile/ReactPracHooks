import { useState } from 'react'
import './App.css'
import UseStateUsage from './components/UseStateUsage'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseMemoUsage from './components/UseMemoUsage'
import UseCallbackUsage from './components/UseCallbackUsage'
import Profile from './components/Profile'
import Footer from './components/Footer'
import UseContextUsage from './components/UseContextUsage'
import ContextProvider from './context/UserContext'

function App() {
  
  
  return (
    <ContextProvider>
      <UseContextUsage/>
    </ContextProvider>
    // <UseStateUsage/>
    // <UseEffect/>
    // <UseRef/>
    // <UseMemoUsage/>
    // <UseCallbackUsage/>
    
    
  )
}

export default App
