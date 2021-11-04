import { Fragment,useState } from 'react';
const Login = ({setdatos}) => {

   const [nombre, setnombre] = useState('');
   const [ape, setape] = useState('')

  function capturnombre(e){
      setnombre(e.target.value);
    
   }

   const capturarApe=e=>{
       setape(e.target.value)
  
   }
   function enviar(e){
    e.preventDefault();
      setdatos(nombre+" "+ape);
   }
  

    return (
        <Fragment>
     
            <div className="login ">
                <h3>Formulario</h3>
                <form>
                    <div className="col-md-3">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" onChange={capturnombre}/>
                    </div>

                    <div className="col-md-3 ">
                    <label for="ape" className="form-label">Edad</label>
                    <input type="number" className="form-control" onChange={capturarApe}/>
                     </div>
                     <div className="col-md-3 mt-3">
                      <button className="btn btn-primary form-control" onClick={enviar}>Enviar</button>
                     </div>

                    
                </form>
               
            </div>
        

        </Fragment>

    );
}

export default Login;