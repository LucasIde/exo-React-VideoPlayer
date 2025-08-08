import './App.css'
import Header from './features/header/header'
import Footer from './features/footer/footer'
import Main from './features/main/mainPart'

function App() {

  return (
    <>
      <div className='page_container'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
