import { HeaderLayout } from "./components/templates/HeaderLayout";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <HeaderLayout>
        <Router />
      </HeaderLayout>
    </div>
  );
}

export default App;
