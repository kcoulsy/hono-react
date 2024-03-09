import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@mantine/core";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button variant="filled">Button</Button>
    </div>
  );
}
