import "./App.css";
import Header from "./layouts/header/Header";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Header />
      <div className="h-[100%] bg-gradient-to-b from-light-pink to-blue text-white">
        <Router />
      </div>
    </>
  );
}

export default App;
