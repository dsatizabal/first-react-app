import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card name="Diego" last_name="Satizabal" phone="093 556 707" />
      <Card name="Jesus" last_name="Ovalles" phone="093 XXX XXX" />
      <Card name="Fulano" last_name="de tal" phone="093 YYY YYY" />
      <Card name="Mengano" last_name="de tal2" phone="093 ZZZ ZZZ" />
      <Card name="Sustano" last_name="de tal 3" phone="093 WWW WWW" />
    </div>
  );
}

export default App;
