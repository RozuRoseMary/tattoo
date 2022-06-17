import Header from "./layouts/header/Header";
import Router from "./routes/Router";
import "tw-elements";
import { useAuth } from "./context/AuthContext";
import AlertTop from "./components/ui/AlertTop";
import { useError } from "./context/ErrorContext";
import { useUser } from "./context/UserContext";
import Alert from "./components/ui/Alert";

function App() {
  const { error, setError } = useError();
  const { user } = useAuth();
  const { myPayments } = useUser();

  const isSeller = user?.role === "TATTOOER" || user?.role === "TATTOOIST";
  const notHavePayment = myPayments?.length === 0;

  return (
    <>
      <Header />
      <div className="h-[100%] min-h-[100vh] bg-gradient-to-b from-light-pink to-blue text-white">
        {isSeller && notHavePayment ? (
          <AlertTop
            color={"danger"}
            title="Require Payment"
            detail="You not have payment in your profile. Please go to your profile and click 'Statement' and then 'QR Payment' to add your payment.
            "
          />
        ) : (
          <></>
        )}
        {error && (
          <Alert
            title={error}
            icon="fa-solid fa-circle-exclamation"
            onCLick={() => setError(false)}
          />
        )}
        <Router />
      </div>
    </>
  );
}

export default App;
