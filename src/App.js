import logo from './logo.svg';
import './App.css';
import Button from './component/Button/Button';
import Search from './component/Search/Search';
import Input from './component/Input/Input';
import Paragraph from './component/Paragraph/Paragraph';
import Card from './component/Card/Card';
import card from'./component/Card/card.jpg';
import Link  from './component/Link/Link';
import H1 from './component/H1/H1';
import H3 from './component/H3/H3';
import Header from './component/Header/Header';
import { Icon } from '@mui/material';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header imgURL={logo}></Header>
        
        <Button text={'Button component'}></Button>
        <Search placeholder={'Search component'}></Search>
        <Input placeholder={'Input comonent'}></Input>
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <Card imageUrl={card} body="this is my first vedio" />
        <Link linkUrl='https://www.google.com/'text='google' > </Link>
        <H1 text=" my name is ibrahim"></H1>
        <H3 text=" welcome to my first component practice "></H3>

        <Icon imUrl={logo}></Icon>
        
      </header>
      
    </div>
  );
}

export default App;
