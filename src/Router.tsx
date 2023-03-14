import { Route, Routes } from "react-router-dom";
import { Create } from "./pages/Create";
import { Details } from "./pages/Details";


import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}