// client/src/main.tsx
// If the page was served via a 404 page on GitHub Pages, 404.html will redirect to /#<original-path>
// Convert that hash back into a normal path so the SPA router can handle it.
if (typeof window !== "undefined") {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#/")) {
    // e.g. #/pricing -> /pricing
    const newPath = hash.slice(1); // keep leading '/'
    window.history.replaceState(null, "", newPath + window.location.search);
  }
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
