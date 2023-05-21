import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h3>Search for NPM Package</h3>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App;