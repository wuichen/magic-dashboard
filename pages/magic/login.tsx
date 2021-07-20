import * as React from 'react';
import Magic from 'views/authentication/Magic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GuestGuard from 'guards/GuestGuard';
import dynamic from 'next/dynamic';

const DynamicModalContainer = dynamic(() => import('magic/components/Modal/ModalContainer'));

const LoginPage = ({}) => {
  return (
    <GuestGuard>
      <Magic />
      <DynamicModalContainer />
    </GuestGuard>
  );
};

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer', 'admin'])),
    },
  };
};

export default LoginPage;
