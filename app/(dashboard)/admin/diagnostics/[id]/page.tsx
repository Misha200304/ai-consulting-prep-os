import { db } from '@/lib/db/drizzle';
import { diagnosticSubmissions } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Brain,
  Calendar,
  FileText,
  GraduationCap,
  Mail,
  Target,
  User,
} from 'lucide-react';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatDate(value: Date | string | null) {
  if (!value) {
    return 'Not provided';
  }

  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default async function DiagnosticDetailPage({ params }: PageProps) {
  const { id } = await params;
  const submissionId = Number(id);

  if (!Number.isFinite(submissionId)) {
    notFound();
  }

  const [submission] = await db
    .select()
    .from(diagnosticSubmissions)
    .where(eq(diagnosticSubmissions.id, submissionId))
    .limit(1);

  if (!submission) {
    notFound();
  }

  const struggles = Array.isArray(submission.biggestStruggles)
    ? submission.biggestStruggles
    : [];

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link href="/admin/diagnostics">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-[#111827] bg-white px-5 py-5 text-[#111827] shadow-[0_4px_0_#111827] hover:bg-[#dbeafe]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to submissions
            </Button>
          </Link>
        </div>

        <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-8 shadow-[0_12px_0_#2563eb]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <span className="rounded-md bg-[#dbeafe] px-3 py-1 text-sm font-bold text-[#111827]">
                Diagnostic #{submission.id}
              </span>

              <h1 className="mt-6 text-5xl font-black text-[#111827]">
                {submission.firstName} {submission.lastName}
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Full diagnostic details for review. This page will become the
                starting point for generating the AI readiness report.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#111827] bg-[#111827] px-6 py-5 text-white shadow-[0_6px_0_#2563eb]">
              <p className="text-sm font-bold uppercase text-blue-200">
                Status
              </p>
              <p className="mt-1 text-3xl font-black">{submission.status}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 shadow-[0_8px_0_#111827]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
                  <User className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-black text-[#111827]">
                  Candidate Profile
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.email}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <Calendar className="h-4 w-4" />
                    Submitted
                  </div>
                  <p className="mt-2 font-bold text-[#111827]">
                    {formatDate(submission.createdAt)}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </div>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.educationLevel}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <GraduationCap className="h-4 w-4" />
                    Field of study
                  </div>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.fieldOfStudy || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 shadow-[0_8px_0_#111827]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
                  <Target className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-black text-[#111827]">
                  Consulting Goals
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Target firms
                  </p>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.targetFirms || 'Not provided'}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Target role
                  </p>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.targetRole || 'Not provided'}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Interview date
                  </p>
                  <p className="mt-2 font-bold text-[#111827]">
                    {formatDate(submission.interviewDate)}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Consulting familiarity
                  </p>
                  <p className="mt-2 font-bold text-[#111827]">
                    {submission.consultingFamiliarity}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 shadow-[0_8px_0_#111827]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
                  <Brain className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-black text-[#111827]">
                  Prep Status
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-[#111827] bg-[#dbeafe] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Current prep level
                  </p>
                  <p className="mt-2 font-black text-[#111827]">
                    {submission.prepLevel}
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#111827] bg-[#dbeafe] p-4">
                  <p className="text-sm font-bold uppercase text-slate-500">
                    Cases practiced
                  </p>
                  <p className="mt-2 font-black text-[#111827]">
                    {submission.casesPracticed}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-bold uppercase text-slate-500">
                  Biggest struggles
                </p>

                {struggles.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {struggles.map((struggle) => (
                      <span
                        key={struggle}
                        className="rounded-md border-2 border-[#111827] bg-[#dbeafe] px-3 py-1 text-sm font-bold text-[#111827]"
                      >
                        {struggle}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-slate-600">
                    No struggles selected.
                  </p>
                )}
              </div>

              <div className="mt-6 rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-5">
                <p className="text-sm font-bold uppercase text-slate-500">
                  What feels hardest right now
                </p>
                <p className="mt-3 leading-7 text-[#111827]">
                  {submission.hardestPart || 'No written answer.'}
                </p>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border-2 border-[#111827] bg-[#111827] p-6 text-white shadow-[0_8px_0_#2563eb]">
              <FileText className="h-10 w-10 text-blue-300" />

              <h2 className="mt-6 text-2xl font-black">
                AI report generation
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                This is where the admin will later generate a readiness score,
                weakness map, and prep roadmap from the candidate’s answers.
              </p>

              <button
                disabled
                className="mt-8 w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-4 font-bold text-white opacity-70"
              >
                Generate Report Soon
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}