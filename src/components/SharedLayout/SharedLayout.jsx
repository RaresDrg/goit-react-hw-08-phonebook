import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import AppBar from 'components/AppBar/AppBar';
import FallbackLoader from 'components/common/FallbackLoader/FallbackLoader';
import Notify from 'components/common/Notify/Notify';
import useAuth from 'hooks/useAuth';

const SharedLayout = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Notify />

      <div className={styles.container}>
        {isLoading ? (
          <FallbackLoader>Loading...</FallbackLoader>
        ) : (
          <>
            <AppBar />

            <main>
              <Suspense
                fallback={<FallbackLoader>Loading page...</FallbackLoader>}
              >
                <Outlet />
              </Suspense>
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default SharedLayout;
