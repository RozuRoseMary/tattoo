import "./App.css";
import Header from "./components/Header";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-light-pink to-blue text-white">
        <Router />
      </div>
    </>
  );
}

export default App;
