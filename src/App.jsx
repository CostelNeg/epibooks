import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import{ Container} from'react-bootstrap'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Alert from "./Components/Alert";
import AllTheBooks from "./Components/ALLTheBooks";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Alert />
        <AllTheBooks />
      </Container>
      <Footer />
    </>
  );
}

export default App;
