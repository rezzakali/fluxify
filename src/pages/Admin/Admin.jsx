import AddPostForm from './AddPostForm';
import AdminPosts from './AdminPosts';

const Admin = () => {
  return (
    <div>
      Admin
      <AddPostForm />
      <hr />
      <AdminPosts />
    </div>
  );
};

export default Admin;
