import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList.js';
import axios, { isCancel, AxiosError } from 'axios';

function App() {
    return (
        <div ClassName="App">
            <PersonList />
        </div>
    )
}

export default App;
