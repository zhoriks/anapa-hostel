import WhyWe from '../WhyWe/WhyWe.jsx';
import Ticker from '../Ticker/Ticker.jsx';
import Benefits from '../Benefits/Benefits.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';

function HomeView() {
  return (
    <>
    <Navigation />
    <WhyWe />
    <Ticker/>
    <Benefits />
    <StartScreen />
    </>
  );
}

export default HomeView;
