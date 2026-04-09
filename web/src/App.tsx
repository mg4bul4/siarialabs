import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import SolutionsPage from "@/pages/SolutionsPage";
import { TopNavBar } from "@/components/layout/TopNavBar";

export default function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
