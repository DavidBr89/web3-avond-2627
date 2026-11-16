import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import EventsPage from "../features/events/pages/EventsPage";
import EventDetailPage from "../features/events/pages/EventDetailPage";
import RootLayout from "../shared/components/RootLayout";

import FavoritesPage from "../features/favorites/pages/FavoritesPage";
import FavoritesProvider from "../features/favorites/context/FavoritesProvider";

const queryClient = new QueryClient({});

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "events",
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: ":eventId/venues",
            element: <App />,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

const Providers = () => {
  return (
    // Stap 3: Uw app / component tree wrappen met uw provider
    <FavoritesProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={browserRouter} />
      </QueryClientProvider>
    </FavoritesProvider>
  );
};

export default Providers;
