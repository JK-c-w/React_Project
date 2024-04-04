// WithContextApp.js
import React from 'react';
import { MyProvider } from './My.jsx';
import Counter from './Counter';
import Temp from './Temp.jsx';
function WithContextApp() {
  return (
    <>  <h1>HELLO</h1>
    <MyProvider>
        <Temp/>
      <div>
        <Counter />
      </div>
    </MyProvider>
    </>
  );
}

export default WithContextApp;
