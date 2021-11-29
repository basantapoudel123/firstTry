// import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import TextForm from './TextForm';
// import Welcome from './welcome';

function App() {
  return (
    <>
    {/* <Navbar title="Navbar" aboutus ="About Us"/> */}
    <Navbar />
    <div className="container my-3">
    <TextForm heading="Write Comment in box below"/>
    </div>
    
</>
  );
}

export default App;

