import { Container, Typography } from '@material-ui/core';
// layouts
import DashboardLayout from 'layouts/dashboard';
// components
import Kanban from 'src/views/dashboard/Kanban';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

export default function PageThree() {
  return (
    <DashboardLayout>
      <Kanban />
    </DashboardLayout>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer', 'admin'])),
    },
  };
};
