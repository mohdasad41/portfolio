import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { PatientQ } from "@/components/patientq";
import { patientq } from "@/lib/site";

export const metadata: Metadata = {
  title: patientq.name,
  description: patientq.card,
  openGraph: {
    title: `${patientq.name} — ${patientq.roleLine}`,
    description: patientq.card,
    type: "article",
  },
};

export default function PatientQPage() {
  return (
    <CaseStudyLayout>
      <PatientQ />
    </CaseStudyLayout>
  );
}
