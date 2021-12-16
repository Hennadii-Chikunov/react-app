import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// данные с сервера
let postsData = [
    {id:1, message: 'Hi, How are you ?', likesCount: 18},
    {id:2, message: "Good and You ?", likesCount: 31},
    {id:3, message: "You are Best of the Best ?", likesCount: 1}
]
let dialogsData = [
    {id:1, name: 'Gera'},
    {id:2, name: 'Volt'},
    {id:3, name: 'Ell'},
    {id:4, name: 'Kit'},
    {id:5, name: 'Fill'}
];
let messagesData = [
    {id:1, message: 'Hi, Gera'},
    {id:2, message: "What's up"},
    {id:3, message: "Good, i crazy love strawberry"}
];

ReactDOM.render(
  <React.StrictMode>
           <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
