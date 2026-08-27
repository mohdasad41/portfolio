import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { ImmigrateOS } from "@/components/immigrateos";
import { immigrateos } from "@/lib/site";

export const metadata: Metadata = {
  title: immigrateos.name,
  description: immigrateos.card,
  openGraph: {
    title: `${immigrateos.name} — ${immigrateos.roleLine}`,
    description: immigrateos.card,
    type: "article",
  },
};

export default function ImmigrateOSPage() {
  return (
    <CaseStudyLayout>
      <ImmigrateOS />
    </CaseStudyLayout>
  );
}
