import dbConnect from '@/config/dbConnect';
import Post from '@/models/postSchema';
import User from '@/models/userSchema';
import { noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    dbConnect();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug) => {
  try {
    dbConnect();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    dbConnect();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};
