import { MacbookScroll } from './components/ui/macbook-scroll'
import ImageBackground from './assets/background.jpg'

function App() {

  return (
    <div className="App bg-slate-800">
      <MacbookScroll
        src={ImageBackground}
        showGradient={true}
        title="Ejemplo de Macbook Scroll"
        badge={<span className="badge">Demo</span>}
      />
    </div>
  )
}

export default App
