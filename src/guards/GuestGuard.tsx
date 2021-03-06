import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
// hooks
import { useAuth } from 'magic/components/AuthProvider';
// routes
import { PATH_ADMIN } from '../routes/paths';
// import { useRouter } from 'next/router';
// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isLoggedIn } = useAuth();
  // const { push } = useRouter();
  if (isLoggedIn) {
    // push(PATH_ADMIN.root);
    window.location.replace(PATH_ADMIN.root);
    // return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
