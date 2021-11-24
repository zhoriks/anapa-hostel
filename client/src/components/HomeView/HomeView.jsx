import Navigation from '../Navigation/Navigation.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';
import WhyWe from '../WhyWe/WhyWe.jsx';
import Ticker from '../Ticker/Ticker.jsx';
import PhotoBlock from '../PhotoBlock/PhotoBlock.jsx';
import HostelRooms from '../HostelRooms/HostelRooms.jsx';
import Benefits from '../Benefits/Benefits.jsx';
import ReviewTicker from '../ReviewTicker/ReviewTicker.jsx';
import LowerBlockWithStock from '../LowerBlockWithStock/LowerBlockWithStock.jsx';
import Footer from '../Footer/Footer.jsx';

function HomeView() {
  return (
    <>
      <Navigation />
      <StartScreen />
      <Ticker />
      <WhyWe />
      <HostelRooms />
      <Benefits />
      <PhotoBlock />
      <ReviewTicker />
      <LowerBlockWithStock />
      <Footer/>
    </>
  );
}

export default HomeView;
