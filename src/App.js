import { useState, useEffect } from "react";
import {SiteProvider, AuthProvider} from './context';
import Home from "./Home";
function App() {
 

  return (
    <SiteProvider>
      <AuthProvider>
        <Home></Home>
      </AuthProvider>
    </SiteProvider>
  );
}
export default App;