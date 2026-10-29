import type { PageHeadingContent } from "@/types/common";
import { cn } from "@/lib/utils";

type PageHeadingProps = PageHeadingContent & { tightDivider?: boolean };

export function PageHeading({ label, title, lead, tightDivider }: PageHeadingProps) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      <div className={cn("divider", tightDivider && "divider-tight")} />
    </>
  );
}
