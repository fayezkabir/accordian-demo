import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordian';

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Accordion title="Custom accordian closed state" defaultOpen={true}>
          <div>
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même.
          </div>
        </Accordion>
        {/* <Accordion title="Custom accordian" defaultOpen={false} fullWidth>
          <div>
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même.
          </div>
        </Accordion> */}
      </div>
    </div>
  );
}

export default App;
