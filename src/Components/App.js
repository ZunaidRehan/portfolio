
import './../App.scss';
import { Banner } from './Banner/Banner';
import { Educational } from './Educational/Educational';
import { Professional } from './Professional/Professional';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='container'>
        <Professional />
        <Educational />
      </div>
    </div>
  );
}

export default App;
