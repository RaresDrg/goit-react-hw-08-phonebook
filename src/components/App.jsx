import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RestrictedContactsPage = lazy(() =>
  import('pages/ContactsPage/RestrictedContactsPage/RestrictedContactsPage')
);
const RestrictedRegisterPage = lazy(() =>
  import('pages/RegisterPage/RestrictedRegisterPage/RestrictedRegisterPage')
);
const RestrictedLoginPage = lazy(() =>
  import('pages/LoginPage/RestrictedLoginPage/RestrictedLoginPage')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />\
        <Route path="contacts" element={<RestrictedContactsPage />} />
        <Route path="register" element={<RestrictedRegisterPage />} />
        <Route path="login" element={<RestrictedLoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
