import Signup from "./components/signup";
import Register from "./components/register";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navbar";
import PageHeader from "./components/common/pageHeader";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navInfo = {
    brand: "Yarin's CV",
    login: "Log In",
    register: "Register",
    logout: "Log Out",
  };
  const { brand, login, register, logout } = navInfo;
  return (
    <>
      <Navigation
        brand={brand}
        login={login}
        register={register}
        logout={logout}
      />
      <Switch>
        <Route exact path="/login">
          <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Signup />
            </div>
          </Container>
        </Route>
        <Route exact path="/register">
          <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Register />
            </div>
          </Container>
        </Route>
        <Route path="/home">
          <Container className="d-flex align-items-center justify-content-center"></Container>
          <PageHeader title="Home Page" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
