import Navigation from '../Navigation/Navigation.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';
import WhyWe from '../WhyWe/WhyWe.jsx';
import Ticker from '../Ticker/Ticker.jsx';
import HostelRooms from '../HostelRooms/HostelRooms.jsx';
import Benefits from '../Benefits/Benefits.jsx';

function HomeView() {
  return (
    <>
      <Navigation />
      <StartScreen />
      <Ticker />
      <WhyWe />
      <HostelRooms/>
      <Benefits/>
    </>
  );
}

export default HomeView;
