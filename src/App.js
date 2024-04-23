
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost';
import { Actions,Orginals } from './Urls';
function App() {
  return (
    <div className='body'>
     <Navbar/>
     <Banner/>
     <Rowpost url={Actions} title='Netflix Orginals'/>
     <Rowpost url={Orginals} title = 'Action' isSmall/>
    </div>
  );
}

export default App;
