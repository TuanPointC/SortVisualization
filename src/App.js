import { Switch, Route } from 'react-router-dom'
import ViewEnterInfo from './Pages/ViewEnterInfo';
import ViewChoosingSort from './Pages/ViewChoosingSort';
import ViewVisual from './Pages/VIewVisual';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <ViewEnterInfo />
      </Route>
      <Route path='/ViewChoosingSort'>
        <ViewChoosingSort />
      </Route>
      <Route path='/ViewVisual'>
        <ViewVisual />
      </Route>
    </Switch>
  );
}

export default App;
