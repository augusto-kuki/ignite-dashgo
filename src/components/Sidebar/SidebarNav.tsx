import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink title="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Automação" icon={RiGitMergeLine} href="/automation" />
      </NavSection>
    </Stack>
  );
}
