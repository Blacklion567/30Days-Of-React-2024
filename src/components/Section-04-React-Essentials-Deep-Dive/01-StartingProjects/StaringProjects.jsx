import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header/Header';
import Examples from './components/Examples';
import './index.css';

const StaringProjects = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>

  );
};

export default StaringProjects;
