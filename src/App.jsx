import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <div className='md:min-h-[calc(100vh-64px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
