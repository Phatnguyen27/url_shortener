import React from 'react';
import {render} from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './style';
import Homepage from "../container/homepage";

const App = () => {
    return <ThemeProvider theme={theme.globalTheme}>
        <Homepage/>
        </ThemeProvider>
};

render(<App />,document.getElementById('root'));