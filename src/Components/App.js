
import './../App.scss';
import { Banner } from './Banner/Banner';
import { Educational } from './Educational/Educational';
import { Professional } from './Professional/Professional';

function App() {
  return (
    <div className="App">
      <Banner />
      <Professional />
      <Educational />
    </div>
  );
}

export default App;
