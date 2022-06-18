import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FaceHamburger from "./containers/faceHamburger"
import RequestHamburger from "./containers/requesteHamburger"

function Routes (){


    return (
        <Router>
           <Switch>
               <Route exact path="/" component={FaceHamburger}/>
               <Route exact path="/Pedidos" component={RequestHamburger}/>
           </Switch>
        </Router>
    )
}

export default Routes