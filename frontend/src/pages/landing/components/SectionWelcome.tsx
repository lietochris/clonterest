import { useMediaQuery } from "usehooks-ts";
import { SectionWelcomeLg } from "./SectionWelcomeLg";
import { SectionWelcomeSm } from "./SectionWelcomeSm";
import { lg } from "../../../utils/breakpoints";

export function SectionWelcome() {
  const matches = useMediaQuery(lg);

  if (matches) {
    return <SectionWelcomeLg />;
  }

  return <SectionWelcomeSm />;
}
