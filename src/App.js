import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
function App() {

  const check = async () => {
    const axiosResponse = await axios.get("http://ec2-3-38-108-235.ap-northeast-2.compute.amazonaws.com/check",{
      withCredentials : true
    });
    return axiosResponse;
  }

  const login = async  () => {
      const axiosResponse = await axios.get("http://ec2-3-38-108-235.ap-northeast-2.compute.amazonaws.com/login",{
          withCredentials : true
      });
      return axiosResponse;
  }

  const addCookies = () => {
    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    cookie.save(
        'token',
        '1234',
        {
          path : "/",
          expires,
          httpOnly : true
        }
    )
  }

  const onClick = () => check()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <button onClick={login}>HTTPONLY 쿠키추가</button>
        <button onClick={onClick}>전송</button>
      </div>
    </div>
  );
}

export default App;
