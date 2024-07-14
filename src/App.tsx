import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { getScreenSize } from './modules/helpers';
import MultiRoute from './MultiRoute';
import MultiRouteHome from './MultiRoute/routes/Home';
import MultiRouteA from './MultiRoute/routes/RouteA';
import MultiRouteB from './MultiRoute/routes/RouteB';

const { NODE_ENV } = process.env;

function App() {
  const [breakpoint, setBreakpoint] = useState(getScreenSize());
  const debounceTimeout = useRef(0);

  const handleResize = useRef(() => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = window.setTimeout(() => {
      setBreakpoint(getScreenSize());
    }, 250);
  });

  useEffect(() => {
    const { current } = handleResize;

    window.addEventListener('resize', current);

    return () => {
      window.removeEventListener('resize', current);
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Basic breakpoint={breakpoint} />} path="/" /> */}
        <Route element={<MultiRoute />} path="/">
          <Route element={<MultiRouteHome />} index />
          <Route element={<MultiRouteA />} path="a" />
          <Route element={<MultiRouteB />} path="b" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
