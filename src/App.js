
import './App.css';
import Billing from './Components/Business/Billing/Billing';
import Business from './Components/Business/Business';
import Company from './Components/Company/Company';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Header/Banner/Banner';
import Header from './Components/Header/Header';
import Service from './Components/Service/Service';


function App() {
  return (
    <div>
     <Header/>
     <Banner/>
   <Business/>
    <Billing/>
    <Company/>
    <Service/>
    <Footer/>
    </div>
  );
}

export default App;
