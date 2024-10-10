import "./App.scss";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Authorization from "../components/Authorization/Authorization";
import Registration from "../components/Registration/Registration";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
        <Registration />
        <Authorization />
      </div>
    </>
  );
}

export default App;
