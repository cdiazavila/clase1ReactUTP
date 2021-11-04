import React, { Fragment } from "react";

function Header(props){


    return(
     <Fragment>
        <header className="contenido">
          <h3>Ejercio con React js</h3>
           {props.datos}
        </header>
    
     
     </Fragment>
    )
}

export default Header;