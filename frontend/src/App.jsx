import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StudentsPage from "./pages/StudentsPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<StudentsPage />}
        />

        <Route
          path="/students/:id"
          element={
            <StudentDetailsPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;