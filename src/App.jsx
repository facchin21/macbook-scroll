import { AnimatedTestimonials } from './components/ui/Animated-testimonials';
import { MacbookScroll } from './components/ui/macbook-scroll';
import { testimonialsData } from './data/testimonialsData';
import ImageBackground from './assets/background.jpg';

function App() {

  return (
    <div className="App bg-slate-800 overflow-x-hidden 
    min-h-screen p-4 ">
      <div className='mb-96'>
        <MacbookScroll
          src={ImageBackground}
          showGradient={true}
          // title="Fermin Facchin Quiroga - Frontend Developer💻"
          title="MacBook efecto scroll"
        />
      </div>
      {/* <div className="flex justify-between flex-col pt-44">
        <AnimatedTestimonials testimonials={testimonialsData} 
        autoplay={false} />
      </div> */}
    </div>
  )
}

export default App
