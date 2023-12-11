// import { Col, Flex, Row, Typography } from 'antd';
// import { PlasmicRootProvider, } from "@plasmicapp/loader-react";

import './App.css';
import 'react-chatbot-kit/build/main.css'
import ChatBot from './components/chatbot';
// import background from './assets/background_graphic.jpg'
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import { PLASMIC } from './components/plasmic-init';
// import { CatchAllPage } from './components/catchAllPages';


function App() {

  return (<>
    {/* <PlasmicRootProvider loader={PLASMIC}>
      <Router>
        <Routes>
          <Route path="/" Component={CatchAllPage} />
        </Routes>
      </Router>
    </PlasmicRootProvider> */}
      <ChatBot/>
      </>
  );
}

export default App;
