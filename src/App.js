import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
import cookie from 'react-cookies'

const URL = "https://test1.unlike.kr";

const Axios = axios.create({
    withCredentials : true,
    baseURL : URL
})

function App() {

  const check = async () => {
    const axiosResponse = await Axios.get(`/check`, {
        withCredentials : true,
    });
    return axiosResponse;
  }

  const login = async  () => {
      const axiosResponse = await Axios.post(`/login`, {
          withCredentials : true,
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
      <div>
        <button onClick={login}>HTTPONLY 쿠키추가</button>
        <button onClick={onClick}>전송</button>
      </div>
    </div>
  );
}

export default App;
