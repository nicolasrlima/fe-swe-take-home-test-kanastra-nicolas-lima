import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <p>Not found</p>,
  beforeLoad: () => {
    if (location.pathname === "/") {
      redirect({
        to: "/characters",
        from: "/",
        throw: true,
        search: {
          page: 1,
        },
      });
    }
  },
});
