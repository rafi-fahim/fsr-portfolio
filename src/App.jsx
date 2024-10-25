import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Lifeline from "./components/Lifeline";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Lifeline />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div className="w-full p-4 flex items-center justify-center border-t-2 border-white bg-primary shadow-white shadow-md text-xl font-medium">
        All right reserved to FSR | Fahim Shakil ©2024
      </div>
    </BrowserRouter>
  );
}

export default App;
