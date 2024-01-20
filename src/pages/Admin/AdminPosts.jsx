import { getPosts } from '@/lib/data';

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post._id} className="border-b border-black">
              <p className="font-semibold">
                {' '}
                {post.title} ({post?.slug}){' '}
              </p>
              <span className="text-xs">{post.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminPosts;
