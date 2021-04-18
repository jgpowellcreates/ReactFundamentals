import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from "../concepts/PropsDemo";
import Hooks2 from "../concepts/Hooks";
import TimePiecesApp from "../apps/timer-apps/TimePiecesApp";
import NytApp from "../apps/nyt-app/NytApp";
import MovieApp from "../apps/movie-app/MovieApp";
import Bitcoin from '../apps/bitcoin-api-app/Bitcoin';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/jsxrules">JSX Rules</Link></li>
                    <li><Link to="/state">State</Link></li>
                    <li><Link to="/effects">Effects</Link></li>
                    <li><Link to="/propsdemo">Props Demo</Link></li>
                    <li><Link to="/hooks">Hooks</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to="/nytAPI">NYT Search API</Link></li>
                    <li><Link to="/movieapp">Movie Poster API</Link></li>
                    <li><Link to="/bitcoinapi">Bitcoin API App</Link></li>
                    {/*Link tells react router dom where to go w/o redirecting and refreshing*/}
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    {/* <Route exact path="/home"><Home /></Route> */}
                    {/* 'exact' limits the path that can match this route to only the words shown*/} 
                    {/* 'path' defines the path where this component should be shown*/} 
                    {/* The component is declared between <Route> tags W/O EXCESS SPACES */} 
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/jsxrules"><JSXRules /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/state"><State /></Route>
                    <Route exact path="/effects"><Effects /></Route>
                    <Route exact path="/propsdemo"><PropsDemo /></Route>
                    <Route exact path="/hooks"><Hooks2 /></Route>
                    <Route exact path="/timer"><TimePiecesApp /></Route>
                    <Route exact path="/nytAPI"><NytApp /></Route>
                    <Route exact path="/movieapp"><MovieApp /></Route>
                    <Route exact path="/bitcoinapi"><Bitcoin /></Route>
                </Switch>
                {/*Switch acts like a vanilla JS switch - iterates over routes and only renders matching path
                   This makes it so that we'll only see one component at a time*/}
            </div>
        </div>
    );
};

export default Sidebar;