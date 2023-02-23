import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { CLoading } from '@others';
import { browserRouter } from '@routes';

import { getProfile, tryLogout } from './utils/axios';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(browserRouter);

function App() {
  //#region Data
  const { access_token, isLogined } = useSelector((state) => state.auth);

  const [isLoading, setLoading] = useState(true);
  //#endregion

  //#region Event
  //#endregion

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      try {
        if (access_token && isLogined) {
          await getProfile(access_token);
        } else {
          await tryLogout();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (isLoading) return <CLoading />;

  //#region Render
  return (
    <div className="App">
      <RouterProvider router={router} />

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={5}
        transition={Slide}
      />
    </div>
  );
  //#endregion
}

export default App;
