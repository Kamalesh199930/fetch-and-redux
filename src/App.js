import "./App.css";

import CustomerAdd from "./CusomerAdd";

import { Provider } from "react-redux";
import { store } from "./store";
import CustomerView from "./CustomerView";
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CustomerAdd />
                <CustomerView />
                {/* <Fetch />
            <hr />
            <Axios />
            <hr />
            <UseFetch />
            <hr />

            <Query />
            <hr />
            <Swr />
            <hr /> */}
            </div>
        </Provider>
    );
}

export default App;
