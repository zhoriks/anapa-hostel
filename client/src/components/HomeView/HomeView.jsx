import WhyWe from '../WhyWe/WhyWe.jsx';
import Ticker from '../Ticker/Ticker.jsx';
// import Benefits from '../Benefits/Benefits.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import StartScreen from '../StartScreen/StartScreen.jsx';
import BookingFormGuestData from '../BookingFormGuestData/BookingFormGuestData.jsx';

function HomeView() {
  return (
    <>
      <Navigation />
      <StartScreen />
      <Ticker />
      <WhyWe />
      <BookingFormGuestData />
    </>
  );
}

export default HomeView;
