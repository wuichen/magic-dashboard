import { useState, ReactNode, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// hooks
import { useAuth } from 'magic/components/AuthProvider';
import { useRouter } from 'next/router';
import { PATH_AUTH, PATH_ADMIN } from 'routes/paths';
// import data from '@iconify/icons-ic/round-format-clear';
import { usePermissionQuery } from 'generated';
// pages
// import Login from '../pages/authentication/Login';

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isLoggedIn, init } = useAuth();
  const { push, pathname } = useRouter();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);
  const { data } = usePermissionQuery();
  if (!isLoggedIn && init) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    push(PATH_AUTH.passwordless);
    // return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    push(requestedLocation);
    // return <Navigate to={requestedLocation} />;
  }

  useEffect(() => {
    const adminRoute = pathname?.replace(PATH_ADMIN.root + '/', '').split('/')[0];
    if (isLoggedIn && typeof data?.permission?.admin === typeof adminRoute && data?.permission?.admin !== adminRoute) {
      window.location.replace(PATH_ADMIN.root);
    }
  }, [data]);

  return <>{children}</>;
}
