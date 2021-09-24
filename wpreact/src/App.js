import { BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppProvider from "./components/context/AppProvider";

import ClientRoutes from "./Routes/ClientRoutes"
// import AdminRoutes from "./Routes/AdminRoutes";

function App() {
  return (
    <AppProvider>
      <Router>

        { /* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */ }
        <Switch>
          <ClientRoutes />
          {/* <AdminRoutes /> */}
        </Switch>

      </Router>
    </AppProvider>
  );
}

export default App;
