import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/pages/Layout";
import NewsPage from "@/pages/NewsPage/NewsPage";
import NewsDetailsPage from "@/pages/NewsDetailsPage/NewsDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/page/1" />} />
        <Route path="page/:currentPage" element={<NewsPage />} />
        <Route path="item/:id" element={<NewsDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
