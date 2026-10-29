import type { PageHeadingContent } from "@/types/common";
import { cn } from "@/lib/utils";

type PageHeadingProps = PageHeadingContent & { tightDivider?: boolean };

export function PageHeading({
  label,
  title,
  lead,
  tightDivider,
}: PageHeadingProps) {
  return (
    <>
      <header className="page-head">
        <p className="section-label">{label}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </header>
      <div className={cn("divider", tightDivider && "divider-tight")} />
    </>
  );
}
