import { useSelector } from "react-redux";
import { selectAllPosts } from "../store/features/posts/postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <article className="px-6 py-4 bg-white">
        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
        <p className="text-gray-700 text-base">{post.content}</p>
      </article>
    </div>
  ));

  return (
    <section className="bg-gray-200">
      <h2 className="p-10 text-3xl font-bold underline">Posts</h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {renderedPosts}
      </div>
    </section>
  );
};

export default PostsList;
