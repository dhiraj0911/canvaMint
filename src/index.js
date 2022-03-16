import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// import NFTS from './components/NFTS';

ReactDOM.render(
  <Provider store={store}>
    <Navigation/>
    <App />
    {/* <NFTS/> */}
    <Footer/>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
