import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app" style={{ marginBottom: "2rem" }}>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
