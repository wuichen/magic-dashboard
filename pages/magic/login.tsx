import Login from 'src/magic/components/Login';
import dynamic from 'next/dynamic';

const DynamicModalContainer = dynamic(() => import('src/magic/components/Modal/ModalContainer'));

export default function LoginPage() {
  return (
    <>
      <Login />
      <DynamicModalContainer />
    </>
  );
}
