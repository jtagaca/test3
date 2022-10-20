import { ThemeProvider, BaseStyles } from '@primer/react'

import React, { useState, useEffect } from 'react';
import Playground from './Playground'
import ColorModeSwitcher from './ColorModeSwitcher'


function App() {
    useEffect(() => {
        // Update the document title using the browser API
        debugger;
    console.log('hello');
      });
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <Playground />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
