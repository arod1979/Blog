import { createBrowserRouter, Navigate } from "react-router";
import Todos from "./pages/Todos";
import Master from "./layouts/master";
import { postListRoute } from "./pages/Posts";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { userListRoute } from "./pages/Users";
import { todosRoute } from "./pages/Todos";
import { useRouteError } from "react-router";
import { newPostRoute } from "./pages/NewPost";
import { editPostRoute } from "./pages/EditPost";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              { path: "new", ...newPostRoute },
              {
                path: ":postId",
                ...postRoute,
              },
              {
                path: ":postId/edit",
                ...editPostRoute,
              },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...todosRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);
function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
