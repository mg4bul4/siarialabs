import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import SolutionsPage from "@/pages/SolutionsPage";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
