import {
  AppShell as MantineAppShell,
  Burger,
  NavLink,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronRight, IconHome2 } from "@tabler/icons-react";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  const matchRoute = useMatchRoute();

  const navigate = useNavigate();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <MantineAppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </MantineAppShell.Header>

      <MantineAppShell.Navbar>
        <Stack justify="space-between" h="100%">
          <Stack gap={0}>
            <NavLink
              onClick={() => navigate({ to: "/" })}
              label="Dashboard"
              leftSection={<IconHome2 size="1rem" stroke={1.5} />}
              active={Boolean(matchRoute({ to: "/" })) || false}
            />
            <NavLink
              onClick={() => navigate({ to: "/about" })}
              label="About"
              leftSection={<IconHome2 size="1rem" stroke={1.5} />}
              active={Boolean(matchRoute({ to: "/about" })) || false}
            />
          </Stack>
          <UnstyledButton p="md">
            <Group>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                radius="xl"
              />

              <div style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  Harriette Spoonlicker
                </Text>

                <Text c="dimmed" size="xs">
                  hspoonlicker@outlook.com
                </Text>
              </div>

              <IconChevronRight
                style={{ width: rem(14), height: rem(14) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        </Stack>
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
}
