
import './App.css';

import DataBase from './DataContext/ObjectData';
import RouterComponent from './RouteComponent/RouterComponent';


function App() {
  return (
    <div className="App">
    
      <DataBase>
       <RouterComponent />
      </DataBase>
    </div>
  );
}

export default App;
