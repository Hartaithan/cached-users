import { FC, Fragment } from "react";
import Header from "./components/Header";
import MainPage from "./pages/main";

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
    </Fragment>
  );
};

export default App;
