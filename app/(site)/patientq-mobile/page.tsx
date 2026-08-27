import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { PatientQMobile } from "@/components/patientq-mobile";
import { patientqMobile } from "@/lib/site";

export const metadata: Metadata = {
  title: patientqMobile.name,
  description: patientqMobile.card,
  openGraph: {
    title: `${patientqMobile.name} — ${patientqMobile.roleLine}`,
    description: patientqMobile.card,
    type: "article",
  },
};

export default function PatientQMobilePage() {
  return (
    <CaseStudyLayout>
      <PatientQMobile />
    </CaseStudyLayout>
  );
}
