import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import LawsPage from "@/pages/laws";
import PrivacyPage from "@/pages/privacy";
import StandardsPage from "@/pages/standards";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LawsPage />} path="/laws" />
      <Route element={<PrivacyPage />} path="/privacy" />
      <Route element={<StandardsPage />} path="/standards" />

    </Routes>
  );
}

export default App;
