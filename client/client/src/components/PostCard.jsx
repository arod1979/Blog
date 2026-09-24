import { Link } from "react-router";

export default function PostCard({ id, title, body }) {
  return (
    <>
      <div class="card" key={id}>
        <div class="card-header">{title}</div>
        <div class="card-body">
          <div class="card-preview-text">{body}</div>
        </div>
        <div class="card-footer">
          <Link className="btn" to={`/posts/${id}`}>
            View
          </Link>
        </div>
      </div>
    </>
  );
}
