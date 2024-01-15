'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from '@/components/MTComponents/MTComponents';
import { login } from '@/lib/actions';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';
import LoginWithGithub from './LoginWithGithub';
import LoginWithGoogle from './LoginWithGoogle';
import SubmitButton from './SubmitButton';

const Login = () => {
  const [state, dispatch] = useFormState(login, undefined);

  return (
    <React.Fragment>
      <div className="flex items-center justify-center m-auto">
        <Card className="lg:w-1/2 md:w-1/2 sm:w-full">
          <CardHeader
            variant="gradient"
            color="gray"
            shadow={false}
            className="mb-4 grid h-28 place-items-center"
            floated={false}
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody>
            <form action={dispatch} className="flex flex-col gap-4">
              <Input label="Username" name="username" size="md" required />
              <Input label="Password" name="password" size="md" required />
              {state?.error}
              <SubmitButton />
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <hr />
            <div className="flex mt-3 items-center justify-evenly gap-x-4">
              <LoginWithGithub />
              <LoginWithGoogle />
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link href="/register" className="ml-1 font-bold">
                Sign up
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;
