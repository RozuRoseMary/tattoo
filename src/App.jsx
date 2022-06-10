import "./App.css";
import Header from "./layouts/header/Header";
import Router from "./routes/Router";
import "tw-elements";

function App() {
  return (
    <>
      <Header />
      <div className="h-[100%] min-h-[100vh] bg-gradient-to-b from-light-pink to-blue text-white">
        <Router />
      </div>
    </>
  );
}

export default App;
