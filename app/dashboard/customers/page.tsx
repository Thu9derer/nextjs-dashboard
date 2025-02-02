import { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Button } from "@mantine/core";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return (
    <MantineProvider>
      <p>Customers Page</p>
      <Button>Click heare</Button>
    </MantineProvider>
  );
}
