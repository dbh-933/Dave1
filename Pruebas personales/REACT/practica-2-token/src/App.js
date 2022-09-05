import RegisterForm from "./components/RegisterForm";
import { CustomTokenContextProvider } from "./contexts/TokenContext";
function App() {
  return (
    <div className="App">
      <CustomTokenContextProvider />
      <RegisterForm />
    </div>
  );
}

export default App;
