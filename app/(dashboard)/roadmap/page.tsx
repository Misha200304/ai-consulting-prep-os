import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db/drizzle';
import { diagnosticSubmissions } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import {
  ArrowRight,
  Brain,
  Calculator,
  CheckCircle2,
  FileLock2,
  Flame,
  GraduationCap,
  LineChart,
  Target,
  Trophy,
} from 'lucide-react';

type PageProps = {
  searchParams: Promise<{
    submissionId?: string;
  }>;
};

const roadmapTemplates = {
  beginner: {
    name: 'Beginner Foundation Roadmap',
    label: 'Recommended for your starting point',
    icon: GraduationCap,
    description:
      'This roadmap is designed for candidates who are new to consulting or have not yet practiced many cases.',
    why:
      'Your diagnostic suggests that the best first step is to build the foundations before moving into advanced case practice.',
    focus: [
      'Understand how consulting case interviews work',
      'Learn basic business vocabulary',
      'Practice simple case structures',
      'Start market sizing fundamentals',
    ],
    sevenDayPlan: [
      'Day 1: Learn the case interview format and common case types.',
      'Day 2: Learn revenue, cost, profit, margin, and market size basics.',
      'Day 3: Practice simple issue trees for profitability and market entry.',
      'Day 4: Do 3 market sizing drills without time pressure.',
      'Day 5: Practice one beginner profitability case.',
      'Day 6: Review mistakes and rewrite your case structure.',
      'Day 7: Do one mock case and summarize your top 3 weaknesses.',
    ],
  },
  earlyPractice: {
    name: 'Early Case Practice Roadmap',
    label: 'Recommended for early case practice',
    icon: Target,
    description:
      'This roadmap is designed for candidates who understand the basics but need more structured case practice.',
    why:
      'Your diagnostic suggests that you should move from learning concepts into practicing structured cases more consistently.',
    focus: [
      'Stop memorizing frameworks',
      'Build custom issue trees',
      'Improve case openings',
      'Start synthesis drills',
    ],
    sevenDayPlan: [
      'Day 1: Review 3 common case types and write custom issue trees.',
      'Day 2: Practice opening the case clearly in under 90 seconds.',
      'Day 3: Do one profitability case and focus only on structure.',
      'Day 4: Do one market entry case and focus only on hypothesis.',
      'Day 5: Practice 10 short synthesis statements.',
      'Day 6: Redo a previous case and compare your new structure.',
      'Day 7: Complete one full timed mock case.',
    ],
  },
  sprint: {
    name: 'Interview Sprint Roadmap',
    label: 'Recommended because your timeline looks urgent',
    icon: Flame,
    description:
      'This roadmap is designed for candidates who need high-impact preparation in a short period of time.',
    why:
      'Your diagnostic suggests that your preparation should prioritize the skills most likely to affect interview performance quickly.',
    focus: [
      'Prioritize highest-risk weaknesses',
      'Practice timed cases',
      'Strengthen math and synthesis',
      'Prepare behavioral stories',
    ],
    sevenDayPlan: [
      'Day 1: Identify your top 2 weakest case skills.',
      'Day 2: Complete one timed case and review only major mistakes.',
      'Day 3: Do 30 minutes of mental math and chart interpretation.',
      'Day 4: Complete one mock case focused on communication.',
      'Day 5: Prepare 4 behavioral / PEI stories.',
      'Day 6: Complete one full mock case under interview conditions.',
      'Day 7: Review all mistakes and build your final interview checklist.',
    ],
  },
  finalRound: {
    name: 'Advanced / Final Round Readiness Roadmap',
    label: 'Recommended for advanced preparation',
    icon: Trophy,
    description:
      'This roadmap is designed for candidates who are preparing for final rounds or advanced case interviews.',
    why:
      'Your diagnostic suggests that you may need to focus less on basic frameworks and more on communication, judgment, and executive-level thinking.',
    focus: [
      'Sharper synthesis',
      'Executive communication',
      'Creative brainstorming',
      'Pressure-tested recommendations',
    ],
    sevenDayPlan: [
      'Day 1: Review previous case feedback and isolate recurring mistakes.',
      'Day 2: Practice partner-style follow-up questions.',
      'Day 3: Do one case focused on creativity and brainstorming.',
      'Day 4: Practice concise final recommendations.',
      'Day 5: Prepare leadership and conflict stories.',
      'Day 6: Complete one advanced mock case.',
      'Day 7: Practice final-round communication under pressure.',
    ],
  },
  business: {
    name: 'Business Intuition Roadmap',
    label: 'Recommended for business understanding',
    icon: Brain,
    description:
      'This roadmap is designed for candidates who need to improve commercial thinking and business logic.',
    why:
      'Your diagnostic suggests that business intuition may be one of the biggest areas holding back your case performance.',
    focus: [
      'Revenue models',
      'Cost structures',
      'Margins and profitability',
      'Customers, pricing, and market dynamics',
    ],
    sevenDayPlan: [
      'Day 1: Learn revenue, cost, profit, and margin with examples.',
      'Day 2: Compare business models: SaaS, retail, airlines, restaurants.',
      'Day 3: Practice identifying revenue drivers in 10 companies.',
      'Day 4: Practice identifying cost drivers in 10 companies.',
      'Day 5: Do one profitability case slowly and explain the business logic.',
      'Day 6: Read 3 business news articles and summarize the economics.',
      'Day 7: Complete one case and focus only on commercial insight.',
    ],
  },
  math: {
    name: 'Case Math Recovery Roadmap',
    label: 'Recommended for quantitative improvement',
    icon: Calculator,
    description:
      'This roadmap is designed for candidates who lose confidence when case math, percentages, charts, or market sizing appear.',
    why:
      'Your diagnostic suggests that quantitative confidence may be one of your most important improvement areas.',
    focus: [
      'Mental math',
      'Percentages and ratios',
      'Market sizing calculations',
      'Chart reading and sanity checks',
    ],
    sevenDayPlan: [
      'Day 1: Practice addition, multiplication, division, and rounding.',
      'Day 2: Practice percentages, margins, and growth rates.',
      'Day 3: Complete 10 market sizing calculation drills.',
      'Day 4: Practice reading charts and extracting insights.',
      'Day 5: Do one case math section without a full case.',
      'Day 6: Complete one full case and slow down only at math points.',
      'Day 7: Review errors and build a personal math checklist.',
    ],
  },
};

const skillRoadmaps = [
  roadmapTemplates.math,
  roadmapTemplates.business,
  roadmapTemplates.earlyPractice,
  roadmapTemplates.finalRound,
];

const lockedFeatures = [
  'Personalized readiness score',
  'Skill-by-skill weakness ranking',
  'Firm-specific preparation advice',
  'Custom 7-day or 14-day plan',
  'Recommended drills based on your answers',
  'Downloadable prep report',
];

function includesAny(value: string, keywords: string[]) {
  const normalized = value.toLowerCase();

  return keywords.some((keyword) => normalized.includes(keyword));
}

function daysUntil(dateValue: Date | string | null) {
  if (!dateValue) {
    return null;
  }

  const interviewDate = new Date(dateValue);
  const today = new Date();

  if (Number.isNaN(interviewDate.getTime())) {
    return null;
  }

  const difference = interviewDate.getTime() - today.getTime();

  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

function getValidSubmissionId(value?: string) {
  if (!value) {
    return null;
  }

  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function selectRoadmap(submission: typeof diagnosticSubmissions.$inferSelect | null) {
  if (!submission) {
    return roadmapTemplates.beginner;
  }

  const struggles = Array.isArray(submission.biggestStruggles)
    ? submission.biggestStruggles.join(' ')
    : '';

  const combinedText = [
    submission.consultingFamiliarity,
    submission.prepLevel,
    submission.casesPracticed,
    submission.targetRole || '',
    submission.hardestPart || '',
    struggles,
  ]
    .join(' ')
    .toLowerCase();

  const interviewDays = daysUntil(submission.interviewDate);

  if (
    includesAny(combinedText, [
      'final round',
      'final-round',
      'advanced',
      'expert',
      'many cases',
      '10+ cases',
      '11-25 cases',
      '11–25 cases',
      '25+ cases',
      'partner round',
    ])
  ) {
    return roadmapTemplates.finalRound;
  }

  if (
    includesAny(combinedText, [
      'interview soon',
      'soon',
      'urgent',
      'this week',
      'next week',
    ]) ||
    (interviewDays !== null && interviewDays <= 21)
  ) {
    return roadmapTemplates.sprint;
  }

  if (
    includesAny(combinedText, [
      'math',
      'mental math',
      'quant',
      'calculation',
      'numbers',
      'chart',
      'charts',
      'market sizing',
      'percentages',
    ])
  ) {
    return roadmapTemplates.math;
  }

  if (
    includesAny(combinedText, [
      'business intuition',
      'business understanding',
      'commercial thinking',
      'industry logic',
      'market logic',
      'business sense',
    ])
  ) {
    return roadmapTemplates.business;
  }

  if (
    includesAny(combinedText, [
      'completely new',
      'new to consulting',
      'beginner',
      '0 cases',
      'zero cases',
      'no cases',
      'never practiced',
    ])
  ) {
    return roadmapTemplates.beginner;
  }

  return roadmapTemplates.earlyPractice;
}

export default async function RoadmapPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const submissionId = getValidSubmissionId(params.submissionId);

  const [submission] = submissionId
    ? await db
        .select()
        .from(diagnosticSubmissions)
        .where(eq(diagnosticSubmissions.id, submissionId))
        .limit(1)
    : [null];

  const selectedRoadmap = selectRoadmap(submission || null);
  const SelectedIcon = selectedRoadmap.icon;
  const fallbackMessage = !params.submissionId
    ? 'For a more accurate roadmap, complete the diagnostic first.'
    : !submission
      ? 'We could not find that diagnostic submission.'
      : null;
  const pricingHref = submissionId
    ? `/pricing?plan=ai-report&submissionId=${submissionId}`
    : '/pricing?plan=ai-report';

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

        .card-hover {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 0 #111827;
        }
      `}</style>

      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-8 shadow-[0_12px_0_#2563eb] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="rounded-md bg-[#dbeafe] px-3 py-1 text-sm font-bold text-[#111827]">
                Your Free Roadmap
              </span>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-[#111827] sm:text-6xl">
                A starting plan based on your diagnostic.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                This roadmap gives you a practical first direction for your case
                interview preparation. For deeper personalization, you can
                unlock the full AI Diagnostic Report.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#recommended-roadmap">
                  <Button className="move-button rounded-xl border-2 border-[#111827] bg-[#111827] px-8 py-6 text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]">
                    View My Roadmap
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <a href="#unlock">
                  <Button
                    variant="outline"
                    className="move-button rounded-xl border-2 border-[#111827] bg-white px-8 py-6 text-[#111827] shadow-[0_6px_0_#111827] hover:bg-[#dbeafe]"
                  >
                    See Full Report Preview
                  </Button>
                </a>
              </div>

              {fallbackMessage ? (
                <div className="mt-8 rounded-2xl border-2 border-[#111827] bg-[#dbeafe] p-5 shadow-[0_6px_0_#111827]">
                  <p className="font-bold text-[#111827]">{fallbackMessage}</p>

                  <Link href="/diagnostic" className="mt-4 inline-block">
                    <Button className="move-button rounded-xl border-2 border-[#111827] bg-white px-6 py-5 text-[#111827] shadow-[0_4px_0_#111827] hover:bg-[#f7f9fc]">
                      Complete Diagnostic
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="rounded-[2rem] border-2 border-[#111827] bg-[#dbeafe] p-8 shadow-[0_8px_0_#111827]">
              <LineChart className="h-12 w-12 text-[#2563eb]" />

              <h2 className="mt-6 text-3xl font-black text-[#111827]">
                Recommended next step
              </h2>

              <p className="mt-4 text-xl font-black text-[#111827]">
                {selectedRoadmap.name}
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                {selectedRoadmap.why}
              </p>
            </div>
          </div>
        </div>

        <article
          id="recommended-roadmap"
          className="mt-12 rounded-[2rem] border-2 border-[#111827] bg-[#2563eb] p-8 text-white shadow-[0_12px_0_#111827] lg:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="rounded-md bg-white px-3 py-1 text-sm font-bold text-[#111827]">
                {selectedRoadmap.label}
              </span>

              <h2 className="mt-6 text-4xl font-black">
                {selectedRoadmap.name}
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                {selectedRoadmap.description}
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 border-[#111827] bg-white text-[#2563eb] shadow-[0_4px_0_#111827]">
              <SelectedIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 text-[#111827]">
              <p className="text-sm font-bold uppercase text-slate-500">
                Main focus
              </p>

              <div className="mt-5 space-y-4">
                {selectedRoadmap.focus.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2563eb]" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 text-[#111827]">
              <p className="text-sm font-bold uppercase text-slate-500">
                7-day starter plan
              </p>

              <ol className="mt-5 space-y-3">
                {selectedRoadmap.sevenDayPlan.map((day) => (
                  <li
                    key={day}
                    className="rounded-xl border-2 border-[#111827] bg-[#f7f9fc] p-3 text-sm"
                  >
                    {day}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-4xl font-black text-[#111827]">
              Skill improvement roadmaps
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              You can also use these focused roadmaps if you already know which
              skill you want to improve next.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillRoadmaps.map((roadmap) => {
              const Icon = roadmap.icon;

              return (
                <article
                  key={roadmap.name}
                  className="card-hover rounded-[2rem] border-2 border-[#111827] bg-white p-8 shadow-[0_8px_0_#111827]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-black text-[#111827]">
                        {roadmap.name}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-600">
                        {roadmap.description}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#dbeafe] text-[#2563eb] shadow-[0_4px_0_#111827]">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {roadmap.focus.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2563eb]" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          id="unlock"
          className="mt-12 rounded-[2rem] border-2 border-[#111827] bg-[#111827] p-8 text-white shadow-[0_12px_0_#2563eb] lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 shadow-[0_4px_0_#2563eb]">
                <FileLock2 className="h-8 w-8 text-blue-300" />
              </div>

              <h2 className="mt-8 text-4xl font-black">
                Unlock your full AI Diagnostic Report
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Your free roadmap gives you a strong starting point. The full
                report goes deeper into your readiness, weaknesses, target
                firms, timeline, and recommended drills.
              </p>

              <Link href={pricingHref} className="mt-8 inline-block">
                <Button className="move-button rounded-xl border-2 border-white/20 bg-white px-8 py-6 text-[#111827] shadow-[0_6px_0_#2563eb] hover:bg-[#dbeafe]">
                  Unlock Full AI Report — $49
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="rounded-[2rem] border-2 border-white/20 bg-white/10 p-6">
              <p className="text-sm font-bold uppercase text-blue-200">
                Included in the full report
              </p>

              <div className="mt-6 space-y-4">
                {lockedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <FileLock2 className="h-5 w-5 shrink-0 text-blue-300" />
                    <p className="font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
