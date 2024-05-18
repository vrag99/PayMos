import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import Transac from "@/pages/transac";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/transac" element={<Transac />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
