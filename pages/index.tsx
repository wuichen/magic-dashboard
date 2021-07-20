// layouts
import MainLayout from 'layouts/main';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from 'components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
} from 'components/_external-pages/landing';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <MainLayout>
      <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
        <LandingHero />
        <ContentStyle>
          <LandingMinimal />
          <LandingHugePackElements />
          <LandingDarkMode />
          <LandingCleanInterfaces />
          <LandingAdvertisement />
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer', 'admin'])),
    },
  };
};
