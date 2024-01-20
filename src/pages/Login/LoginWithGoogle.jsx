import { Button } from '@/components/MTComponents/MTComponents';
import { handleGoogleLogin } from '@/lib/actions';

const LoginWithGoogle = () => {
  return (
    <Button
      size="sm"
      onClick={() => handleGoogleLogin()}
      className="capitalize"
      fullWidth
    >
      Sign In With Google
    </Button>
  );
};

export default LoginWithGoogle;
