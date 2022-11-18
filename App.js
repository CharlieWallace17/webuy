import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
}
