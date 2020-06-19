import React from 'react'
import{BrowserRouter,Switch,Route} from 'react-router-dom'

import { REGISTER_ROUTE } from './constants'

import Home from './component/Home'

import Bebidas from './component/Bebidas'
 import Comidas from './component/Comidas'
 import Outros from './component/Outros'
 import Cadastro from './component/cadastro'

function Routes(){
    return(
        <BrowserRouter>
                 <Switch>
                <Route path="/"exact component={Home}
                />
                 <Route path="/Home"exact component={Home}
                />
                <Route path="/Bebidas" component={Bebidas}
                />
                <Route path="/Comidas" component={Comidas}
                />
                <Route path="/Outros" component={Outros}
                />
                <Route path={REGISTER_ROUTE} component={Cadastro}
                />
                </Switch>   
            
        </BrowserRouter>

    );
};

export default Routes
