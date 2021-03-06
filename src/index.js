import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './components/main.css'
import { Provider }  from 'react-redux'
import configStore from './store/configStore'
const store = configStore()
store.subscribe(()=>{
    const notes = store.getState().notes
    localStorage.setItem('note',JSON.stringify(notes))

})
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
