import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";

import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Navbar from "./components/NAvbar";



//adding routes
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>                                                                           
         <Route path="/" exact> <VideoList /> </Route>
          <Route path="/video/:videoId"><VideoPlayer/></Route>
           <Route path="/video/*">
            {/* handle invalid url*/}
            <Redirect to="/" />
            </Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
