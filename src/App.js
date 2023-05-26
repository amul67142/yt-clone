import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";


import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/NAvbar";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Switch>
      
          <Route exact path="/" component={VideoList} />
          <Route  path="/video/:videoId" component={VideoPlayer} />
          {/* <Route path="/video/">
          
            <Redirect to="/" />
            </Route> */}
        </Switch>
      </BrowserRouter>
    
    </>
  );
}

export default App;
