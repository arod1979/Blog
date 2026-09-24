import { useLoaderData, Link, Form } from "react-router";
import { getPosts } from "../../../../api/posts";
import { useEffect, useRef } from "react";
import PostCard from "../components/PostCard";

export default function Posts() {
  const { posts, query } = useLoaderData();
  const queryRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">
            New
          </Link>
        </div>
      </h1>

      <Form className="search-form" method="get">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>

            <input type="search" id="query" name="query" ref={queryRef} />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      <p>Posts</p>

      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const posts = await getPosts({ signal }, query);
  return { posts, query };
}

export const postListRoute = {
  loader,
  element: <Posts />,
};
