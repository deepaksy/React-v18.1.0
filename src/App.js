
import './App.css';
import AppRouter from './Routes';
import {Outlet} from './imports/Router'
function App() {
  return (
    <>

    <AppRouter/>
    <Outlet/>
    </>
  );
}

export default App;
