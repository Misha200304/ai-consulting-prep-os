import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db/drizzle';
import { diagnosticSubmissions } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import {
  Brain,
  Calendar,
  GraduationCap,
  Mail,
  Target,
  User,
} from 'lucide-react';

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

export default async function AdminDiagnosticsPage() {
  const submissions = await db
    .select()
    .from(diagnosticSubmissions)
    .orderBy(desc(diagnosticSubmissions.createdAt));

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-8 shadow-[0_12px_0_#2563eb]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="rounded-md bg-[#dbeafe] px-3 py-1 text-sm font-bold text-[#111827]">
                Admin Panel
              </span>

              <h1 className="mt-6 text-5xl font-black text-[#111827]">
                Diagnostic Submissions
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Review submitted candidate diagnostics, understand their
                background, and later generate AI readiness reports from this
                data.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#111827] bg-[#dbeafe] px-6 py-5 shadow-[0_6px_0_#111827]">
              <p className="text-sm font-bold uppercase text-slate-500">
                Total submissions
              </p>
              <p className="mt-1 text-4xl font-black text-[#111827]">
                {submissions.length}
              </p>
            </div>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border-2 border-[#111827] bg-white p-10 text-center shadow-[0_8px_0_#111827]">
            <h2 className="text-3xl font-black text-[#111827]">
              No submissions yet.
            </h2>
            <p className="mt-4 text-slate-600">
              Submit the diagnostic form first, then come back here.
            </p>

            <Link href="/diagnostic" className="mt-8 inline-block">
              <Button className="rounded-xl border-2 border-[#111827] bg-[#111827] px-8 py-6 text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]">
                Go to Diagnostic Form
              </Button>
            </Link>
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {submissions.map((submission) => {
              const struggles = Array.isArray(submission.biggestStruggles)
                ? submission.biggestStruggles
                : [];

              return (
                <article
                  key={submission.id}
                  className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 shadow-[0_8px_0_#111827]"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
                          <User className="h-6 w-6" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-black text-[#111827]">
                            {submission.firstName} {submission.lastName}
                          </h2>
                          <p className="text-sm text-slate-500">
                            Submitted on {formatDate(submission.createdAt)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Mail className="h-4 w-4" />
                            Email
                          </div>
                          <p className="mt-2 break-words font-bold text-[#111827]">
                            {submission.email}
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
                          <p className="mt-1 text-sm text-slate-600">
                            {submission.fieldOfStudy || 'No major provided'}
                          </p>
                        </div>

                        <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Brain className="h-4 w-4" />
                            Consulting familiarity
                          </div>
                          <p className="mt-2 font-bold text-[#111827]">
                            {submission.consultingFamiliarity}
                          </p>
                        </div>

                        <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Target className="h-4 w-4" />
                            Target firms
                          </div>
                          <p className="mt-2 font-bold text-[#111827]">
                            {submission.targetFirms || 'Not provided'}
                          </p>
                        </div>

                        <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Target className="h-4 w-4" />
                            Target role
                          </div>
                          <p className="mt-2 font-bold text-[#111827]">
                            {submission.targetRole || 'Not provided'}
                          </p>
                        </div>

                        <div className="rounded-2xl border-2 border-[#111827] bg-[#f7f9fc] p-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Calendar className="h-4 w-4" />
                            Interview date
                          </div>
                          <p className="mt-2 font-bold text-[#111827]">
                            {formatDate(submission.interviewDate)}
                          </p>
                        </div>
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

                    <div className="min-w-[200px] rounded-2xl border-2 border-[#111827] bg-[#111827] p-5 text-white shadow-[0_6px_0_#2563eb]">
                      <p className="text-sm font-bold uppercase text-blue-200">
                        Status
                      </p>
                      <p className="mt-2 text-xl font-black">
                        {submission.status}
                      </p>

                      <Link href={`/admin/diagnostics/${submission.id}`}>
                        <Button className="mt-6 w-full rounded-xl border-2 border-white/20 bg-white px-4 py-3 text-sm font-bold text-[#111827] hover:bg-[#dbeafe]">
                          Open Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}