import { MainLayout } from "./layout/main-layout";
import { Routes, Route } from "react-router-dom";
import { pages } from "./routes/main-route";
import { UserLayout } from "./layout/user-layout";
import { User } from "./pages/user";
import { Address } from "./pages/adsress";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {pages.map((route) => (
          <Route
            index={route.path ? false : true}
            path={route.path}
            element={route.element}
            key={route.id}
          />
        ))}
        <Route path="user" element={<UserLayout />}>
          <Route index element={<User />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
