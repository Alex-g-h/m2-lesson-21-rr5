import { Redirect, Route, Switch } from "react-router-dom";
import UsersLayout from "./layouts/usersLayout";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          component={MainPage}
        />
        <Route
          path="/users/:userId?/:param?"
          component={UsersLayout}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
