import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;

