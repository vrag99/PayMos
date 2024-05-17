import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
