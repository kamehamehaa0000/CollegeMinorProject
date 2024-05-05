import Footer from './components/Footer'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Marque from './components/Shared/Marque'

function App() {
  return (
    <div className="w-screen h-screen font-[Gilroy] flex-col flex overflow-x-hidden">
      <Navbar />
      <Page1 />
      <Page2 />
      <Marque />
      <Footer />
    </div>
  )
}

export default App
