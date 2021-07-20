import * as React from 'react';

import Button from './Button';
import { useAuth } from './AuthProvider';
// import graphql from 'src/client/graphql/queries';
import { useQuery } from 'react-query';

import styles from '../styles/Login.module.css';

export default function CheckEmailModal({ dismiss, jwtToken, phrase }) {
  const auth = useAuth();
  const [watch, setWatch] = React.useState(true);
  const approved = useQuery(
    'watchLoginRequest',
    async () => {
      const response = await fetch(`/api/magic/watch`, { method: 'POST', body: JSON.stringify(jwtToken) });
      if (response.status === 200) {
        const json = await response.json();
        console.log('watch json', json);
        return json;
      } else {
        return null;
      }
    },
    {
      refetchInterval: 3000,
      refetchIntervalInBackground: !auth?.isLoggedIn && watch,
    },
  );
  // const approved = graphql.watchLoginRequest(jwtToken);

  // stop watching request after 10 min
  const timeoutRef = React.useRef(null);
  React.useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setWatch(false);
    }, 600000);
  }, []);

  React.useEffect(async () => {
    if (approved?.data && !auth?.isLoggedIn) {
      await auth.actions.completeLogin();
    }
  }, [approved]);

  React.useEffect(() => {
    if (auth.isLoggedIn) {
      dismiss();
    }
  }, [auth.isLoggedIn]);

  async function handleCancel() {
    await auth.actions.logout();
    dismiss();
  }

  return (
    <div className={styles.checkEmailModal}>
      <div className={styles.checkEmailModalKeepThisTab}>Keep this tab open</div>
      <div>Use your phone to click the magic words in your email</div>
      <Button className={styles.magicWords}>{phrase}</Button>

      <Button simple onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
}
