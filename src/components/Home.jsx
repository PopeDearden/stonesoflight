import '../App.scss'
import Hero from './sections/Hero'
import Mission from './sections/Mission'

import Solution from './sections/Solution'
import Impact from './sections/Impact'
import Contact from './sections/Contact'
import GoodAlways from './GoodAlways'

function Home() {
  return (
    <div className="Home">
        <Hero />
        <Mission id="Mission"/>
        <Solution id="Solution" />
        <Impact id="Impact"/>
        <GoodAlways id="GoodAlways"/>
        <Contact id="Contact"/>
    </div>
  );
}

export default Home;
