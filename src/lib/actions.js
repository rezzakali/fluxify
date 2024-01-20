'use server';

import dbConnect from '@/config/dbConnect';
import Post from '@/models/postSchema';
import User from '@/models/userSchema';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import slugify from 'slugify';
import { auth, signIn, signOut } from './auth';

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc } = Object.fromEntries(formData);
  // console.log(slugify(title), { lower: true });
  const session = await auth();
  const { user } = session || {};

  try {
    await dbConnect();
    const slug = slugify(title, { lower: true });
    console.log('🚀 ~ addPost ~ slug:', slug);
    const newPost = new Post({
      title,
      desc,
      // slug,
      userId: user?.id,
    });

    console.log('🚀 ~ addPost ~ newPost:', newPost);
    console.log('🚀 ~ addPost ~ slug:', newPost.slug);

    await newPost.save();
    console.log('saved to db');
    revalidatePath('/blogs');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();

    await Post.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    dbConnect();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log('saved to db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const handleGoogleLogin = async () => {
  'use server';
  await signIn('google');
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut({ redirect: true, redirectTo: '/login' });
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  try {
    dbConnect();

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return { error: 'User already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    return { error: 'Something went wrong!' };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err) {
    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw err;
  }
};
