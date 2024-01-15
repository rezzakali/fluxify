import { Button } from '@/components/MTComponents/MTComponents';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="gradient" aria-disabled={pending}>
      {pending ? 'Loading...' : 'Sign Up'}
    </Button>
  );
};

export default SubmitButton;
