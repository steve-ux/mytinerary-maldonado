import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div className="divPadre">
      <div className="divHijo">
        <Spinner color="primary" className="spinnerReactstrap"/>
      </div>
    </div>
  );
}

export default Loading;


//Pegar en cities o donde use el spinner

// import React, {useState} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Loading from '';

// function App(){
//     const [loading, setLoading] = useState(true);

//     const cambiarEstado=()=>{
//         setLoading(true);
//     }
//     if(loading){
//         return(
//             <Loading />
//         )
//     } else{
//         return(
//             <div>
//                 <button className="btn btn-primary" onClick={()=>cambiarEstado}>Cargar página</button>
//             </div>
//         )
//     }
// }

// export default App;