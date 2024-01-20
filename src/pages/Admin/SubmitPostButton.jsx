import { Button } from '@/components/MTComponents/MTComponents';
import { useFormStatus } from 'react-dom';

const SubmitPostButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Loading...' : 'Add Post'}
    </Button>
  );
};

export default SubmitPostButton;
