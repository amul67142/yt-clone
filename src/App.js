import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
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
          <Route path="/video/videoId" component={VideoPlayer} />
          <Route path="/video/*">
            {/* Handle invalid video URLs or redirect to appropriate page */}
            <Redirect to="/" />
            </Route>
        </Switch>
      </BrowserRouter>
    
    </>
  );
}

export default App;
