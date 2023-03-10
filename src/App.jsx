import { BrowserRouter } from 'react-router-dom';
import RouterView from '@router';
import { Provider } from 'react-redux';
import { persistor, store } from '@store/index';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={baseUrl}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="app">
            <RouterView />
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
