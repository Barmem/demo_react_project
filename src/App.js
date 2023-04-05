import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  const [message, setMessage] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z,0-9]/gi, '');
    setMessage(result);
  };
  const [isShown, setIsSHown] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="message" name="message" type="text" value={message} onChange={handleChange}/>
        <input id="message" name="message" type={isShown ? "text" : "password"}/>
        <input id="checkbox" type="checkbox" checked={isShown} onChange={togglePassword}/>
      </header>
    </div>
  );
}

export default App;