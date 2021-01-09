import '../App.scss'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Impact from './sections/Impact'
import Contact from './sections/Contact'

function Home() {
  return (
    <div className="App">
        <Hero />
        <Mission />
        <Mission />
        <Mission />
        {/* <Problem /> */}
        <Solution />
        <Impact />
        <Contact />
    </div>
  );
}

export default Home;
