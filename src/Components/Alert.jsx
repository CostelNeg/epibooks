// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// function Alerta() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="primary" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>EPIBOOKS</Alert.Heading>
//         <p>
//          Benvenuti nella nostra biblioteca online. 
//         </p>
//       </Alert>
//     );
//   }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }

// export default Alerta;


import Alert from 'react-bootstrap/Alert';

function Alerta() {
   
  return (
    <Alert >
      <Alert.Heading>EPIBOOKS</Alert.Heading>
      <p>
    Benvenuti nella nostra biblioteca online
      </p>
      <hr />
      <p className="mb-0">
     Cerca il libro che vorresti aquistare e/o regalare
      </p>
    </Alert>
  );
}

export default Alerta;