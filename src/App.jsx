import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/" element={<DropdownPage />}></Route>
        <Route path="/accordion" element={<AccordionPage />}></Route>
        <Route path="/button" element={<ButtonPage />}></Route>
        <Route path="/dropdown" element={<DropdownPage />}></Route>
      </div>
    </div>
  );
};

export default App;
