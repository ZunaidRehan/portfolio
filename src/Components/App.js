
import './../App.scss';
import { Banner } from './Banner/Banner';
import { Educational } from './Educational/Educational';
import FamilyTree from './Family/FamilyTree';
import { PhotoGallery } from './PhotoGallery/PhotoGallery';
import { Professional } from './Professional/Professional';

function App() {
  return (
    <div className="App">
      <Banner />
      <Professional />
      <Educational />
      <PhotoGallery />
      <FamilyTree />
    </div>
  );
}

export default App;
