import { Navigate } from "react-router-dom";

// The pathway overview lives on the home page now; /course stays as a
// redirect so old links and bookmarks keep working.
export default function CoursePage() {
  return <Navigate to="/" replace />;
}
