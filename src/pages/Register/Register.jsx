'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from '@/components/MTComponents/MTComponents';
import { register } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';

const Register = () => {
  const [state, dispatch] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody>
            <form action={dispatch} className="flex flex-col gap-4">
              <Input
                label="Username"
                type="text"
                size="md"
                name="username"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                size="md"
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                size="md"
                required
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                size="md"
                required
              />
              {state?.error}
              <SubmitButton />
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link href="/login" className="ml-1 font-bold">
                Sign In
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Register;
