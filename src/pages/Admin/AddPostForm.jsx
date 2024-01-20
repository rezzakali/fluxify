'use client';

import { Input } from '@/components/MTComponents/MTComponents';
import { addPost } from '@/lib/actions';
import { useFormState } from 'react-dom';
import SubmitPostButton from './SubmitPostButton';

const AddPostForm = () => {
  const [state, dispatch] = useFormState(addPost, undefined);
  return (
    <div>
      <form action={dispatch}>
        <Input label="title" name="title" />
        <Input label="Description" name="desc" />
        <SubmitPostButton />
        {state?.error}
      </form>
    </div>
  );
};

export default AddPostForm;
