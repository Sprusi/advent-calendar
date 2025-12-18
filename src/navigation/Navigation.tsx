import { Navigate, useRoutes } from "react-router-dom";
import { AdventCalendar } from "../pages/advent-calendar/AdventCalendar";

const Navigation = () => {
  const routes = [
    {
      path: "*",
      element: <Navigate replace to={"/"} />,
    },
    {
      index: true,
      path: "/",
      element: <AdventCalendar />,
    },
  ];

  return useRoutes(routes);
};

export default Navigation;
