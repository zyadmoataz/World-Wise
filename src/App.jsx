import { lazy, Suspense } from "react";
// import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import TravelBlog from "./pages/TravelBlog";
// import Resources from "./pages/Resources";

// 1) Use Lazy Function
//with this lazy loading we will load each of these components when we need them
//We separsted our bundle into separate chunks
const Homepage = lazy(() => import("./pages/Homepage"));
const TravelBlog = lazy(() => import("./pages/TravelBlog"));
const Resources = lazy(() => import("./pages/Resources"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
//When we run this app > npm run build we got this bundle size
// dist/assets/index-a70d6895.css   32.22 kB │ gzip:   5.35 kB
//dist/assets/index-5c23051d.js   533.06 kB │ gzip: 150.62 kB

// 2) Display a loading spinner while we go from one loading spinner to other
//Suspense allow certain components to wait for something to happen > These lazy components will be suspended while they are loading
function App() {
  return (
    // it doesn't matter which one is the first it will matter if we need something from authroivder into citiesprovider
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path='travel-blog' element={<TravelBlog />} />
              <Route path='resources' element={<Resources />} />
              <Route path='login' element={<Login />} />

              <Route
                path='app'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* replace to be able to get back and we used navigate to select cities when we go to app*/}
                <Route index element={<Navigate replace to='cities' />} />

                <Route path='cities' element={<CityList />} />

                {/* 3 steps to use params, 1-create a route 2-make link in cityitem that has all cities 3-Use param hook to get that data from city component*/}
                <Route path='cities/:id' element={<City />} />

                <Route path='countries' element={<CountryList />} />

                <Route path='form' element={<Form />} />
              </Route>

              <Route path='*' element={<PageNotFound />} />
              {/* This will catch if these given routes didnt match then this page will be displayed */}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
