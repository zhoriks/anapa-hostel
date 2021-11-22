import Navigation from '../Navigation/Navigation.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';
import WhyWe from '../WhyWe/WhyWe.jsx';
import Ticker from '../Ticker/Ticker.jsx';
import PhotoBlock from '../PhotoBlock/PhotoBlock.jsx';
import HostelRooms from '../HostelRooms/HostelRooms.jsx';
import Benefits from '../Benefits/Benefits.jsx';
import ReviewTicker from '../ReviewTicker/ReviewTicker.jsx';
import BookingFormGuestData from '../BookingFormGuestData/BookingFormGuestData.jsx';
import LowerBlockWithStock from '../LowerBlockWithStock/LowerBlockWithStock.jsx';

function HomeView() {
  return (
    <>
      <Navigation />
      <StartScreen />
      <Ticker />
      <WhyWe />
      <HostelRooms />
      <Benefits />
      <PhotoBlock/>
      <ReviewTicker/>
      <BookingFormGuestData />
      <LowerBlockWithStock/>
    </>
  );
}

export default HomeView;
