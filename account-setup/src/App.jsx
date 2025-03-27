import { ThemeProvider } from "./context/ThemeContext";
import AccountSetup from "./pages/AccountSetup";

function App() {
  return (
    <ThemeProvider>
      <AccountSetup />
    </ThemeProvider>
  );
}

export default App;
