import { Button } from '@/components/MTComponents/MTComponents';
import { handleGithubLogin } from '@/lib/actions';

const LoginWithGithub = () => {
  return (
    <Button
      size="sm"
      onClick={() => handleGithubLogin()}
      className="capitalize"
      fullWidth
    >
      Sign In With Github
    </Button>
  );
};

export default LoginWithGithub;
