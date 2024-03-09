import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { AppShell } from "../components/app-shell";

export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider forceColorScheme="dark">
        <AppShell>
          <Outlet />
          <TanStackRouterDevtools />
        </AppShell>
      </MantineProvider>
    </>
  ),
});
