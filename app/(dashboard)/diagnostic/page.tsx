'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Target,
} from 'lucide-react';

const educationLevels = [
  'High school',
  'Undergraduate student',
  'Bachelor’s graduate',
  'Master’s student',
  'MBA student',
  'PhD student',
  'Working professional',
  'Other',
];

const consultingFamiliarity = [
  'I am completely new to consulting',
  'I understand consulting generally, but not case interviews',
  'I know what case interviews are, but have not practiced much',
  'I have practiced cases before',
  'I have already interviewed with consulting firms',
];

const targetRoles = [
  'Strategy consulting',
  'Management consulting',
  'Digital / AI consulting',
  'Data analytics consulting',
  'Big 4 advisory',
  'Corporate strategy',
  'Not sure yet',
];

const levels = [
  'I am just starting',
  'I know basic frameworks',
  'I have practiced a few cases',
  'I have interviews soon',
  'I am preparing for final rounds',
];

const casePractice = [
  '0 cases',
  '1–3 cases',
  '4–10 cases',
  '11–25 cases',
  '25+ cases',
];

const struggles = [
  'Case structure',
  'Mental math',
  'Business intuition',
  'Market sizing',
  'Chart interpretation',
  'Synthesis / recommendation',
  'Behavioral / PEI stories',
  'Finding good practice partners',
];

export default function DiagnosticPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f7f9fc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border-2 border-[#111827] bg-white p-10 text-center shadow-[0_12px_0_#2563eb]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_5px_0_#111827]">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-[#111827]">
            Diagnostic submitted
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Great. In the next version, this form will save your answers and
            generate a real AI diagnostic report. For now, the page flow works.
          </p>

          <a href="/" className="mt-8 inline-block">
            <Button className="rounded-xl border-2 border-[#111827] bg-[#111827] px-8 py-6 text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]">
              Back to homepage
            </Button>
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-4 py-12 sm:px-6 lg:px-8">
      <style>{`
        .move-button {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease;
        }

        .move-button:hover {
          transform: translateY(-4px);
        }

        .move-button:active {
          transform: translateY(2px) scale(0.98);
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <section className="rounded-[2rem] border-2 border-[#111827] bg-[#dbeafe] p-8 shadow-[0_12px_0_#111827]">
            <span className="rounded-md bg-white px-3 py-1 text-sm font-bold text-[#111827]">
              Free Diagnostic
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#111827]">
              Find out why you are not case-ready yet.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Answer a few questions about your consulting goals, education,
              target firms, prep level, and biggest struggles. This gives us
              enough context to generate a useful readiness report later.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#111827] bg-white">
                  <Target className="h-5 w-5 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="font-bold">Target-firm context</h3>
                  <p className="text-sm text-slate-600">
                    MBB, Big 4, boutiques, corporate strategy, or AI
                    consulting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#111827] bg-white">
                  <Brain className="h-5 w-5 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="font-bold">Skill weakness map</h3>
                  <p className="text-sm text-slate-600">
                    Structure, math, business intuition, synthesis, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#111827] bg-white">
                  <Calendar className="h-5 w-5 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="font-bold">Prep timeline</h3>
                  <p className="text-sm text-slate-600">
                    The closer the interview, the more focused the plan must
                    be.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border-2 border-[#111827] bg-white p-8 shadow-[0_12px_0_#111827]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827]">
                  Candidate Diagnostic
                </h2>
                <p className="text-sm text-slate-500">
                  Takes around 3–4 minutes.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    First name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Mykhailo"
                    className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Last name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Polishchuk"
                    className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#111827]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Highest education level
                  </label>
                  <select className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]">
                    {educationLevels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Field of study / major
                  </label>
                  <input
                    type="text"
                    placeholder="Data Science, Finance, Engineering..."
                    className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#111827]">
                  How new are you to consulting?
                </label>
                <select className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]">
                  {consultingFamiliarity.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Target firms
                  </label>
                  <input
                    type="text"
                    placeholder="McKinsey, BCG, Bain, Deloitte..."
                    className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Target role
                  </label>
                  <select className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]">
                    {targetRoles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Interview date
                  </label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-[#111827]">
                    Current prep level
                  </label>
                  <select className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]">
                    {levels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#111827]">
                  How many full cases have you practiced?
                </label>
                <select className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]">
                  {casePractice.map((amount) => (
                    <option key={amount}>{amount}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-[#111827]">
                  Biggest struggles
                </label>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {struggles.map((struggle) => (
                    <label
                      key={struggle}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#111827] bg-[#f7f9fc] px-4 py-3 hover:bg-[#dbeafe]"
                    >
                      <input type="checkbox" className="h-4 w-4" />
                      <span className="text-sm font-medium">{struggle}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#111827]">
                  Tell us what feels hardest right now
                </label>
                <textarea
                  rows={5}
                  placeholder="Example: I can understand the case, but I struggle to structure my thoughts and give a strong recommendation."
                  className="mt-2 w-full rounded-xl border-2 border-[#111827] bg-white px-4 py-3 outline-none focus:bg-[#dbeafe]"
                />
              </div>

              <Button
                type="submit"
                className="move-button w-full rounded-xl border-2 border-[#111827] bg-[#111827] py-6 text-base text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]"
              >
                Submit Diagnostic
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}