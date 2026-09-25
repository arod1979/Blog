import { useLoaderData, Link, Form } from "react-router";
import { getPosts } from "../../../../api/posts";
import { useEffect, useRef } from "react";
import PostCard from "../components/PostCard";
import { getUsers } from "../../../../api/users";

export default function Posts() {
  const {
    posts,
    params: { query, userId },
    users,
  } = useLoaderData();
  const queryRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
    userRef.current.value = userId || "";
  }, [query, userId]);

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
          <div className="form-group">
            <label htmlFor="userId">Users</label>

            <select type="search" id="userId" name="userId" ref={userRef}>
              <option value="">All Users</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
  const userId = searchParams.get("userId");
  const filterParams = { q: query };
  if (userId !== "") filterParams.userId = userId;

  const posts = await getPosts({ signal, params: filterParams });
  const users = await getUsers({ signal });
  return { posts, params: { query, userId }, users };
}

export const postListRoute = {
  loader,
  element: <Posts />,
};
