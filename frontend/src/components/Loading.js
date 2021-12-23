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