import './App.css';
import Dropdown from'./Dropdown/Dropdown';
import DropdownMenu from './Dropdown/DropdownMenu/DropdownMenu';
import DropdownItem from './Dropdown/DropdownMenu/DropdownItem/DropdownItem'
import DropdownButton from './Dropdown/DropdownButton/DropdownButton';

function App() {
  return (
    <div className="App">
        <Dropdown>
          <DropdownButton>Button</DropdownButton>
          <DropdownMenu>
            <DropdownItem route="/Action">Action</DropdownItem>
            <DropdownItem route="/Another action">Another action</DropdownItem>
            <DropdownItem route="/Something else">Something else</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
