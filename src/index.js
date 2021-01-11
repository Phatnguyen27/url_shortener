import React from 'react';
import {render} from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './style';
import Homepage from "../container/homepage";
import  { Provider } from "react-redux";
import * as redux from "../configureStore";
import { createStore } from 'redux';

const store = createStore(redux.reducer)


const App = () => {
    return <ThemeProvider theme={theme.globalTheme}>
        <Provider store={store}>
        <Homepage/>
        </Provider>
        </ThemeProvider>
};

render(<App />,document.getElementById('root'));