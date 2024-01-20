import dbConnect from '@/config/dbConnect';
import Post from '@/models/postSchema';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    dbConnect();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};
