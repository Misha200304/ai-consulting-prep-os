import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  FileText,
  Sparkles,
  UserCheck,
} from 'lucide-react';

type PageProps = {
  searchParams: Promise<{
    submissionId?: string;
  }>;
};

export default async function DiagnosticSuccessPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const submissionId = params.submissionId;

  const freeRoadmapHref = submissionId
    ? `/roadmap?submissionId=${submissionId}`
    : '/roadmap';

  const nextSteps = [
    {
      name: 'Free Basic Roadmap',
      price: '$0',
      description:
        'Get a simple recommended next step based on your diagnostic answers.',
      bestFor: 'Best if you are exploring and want direction first.',
      cta: 'Get Free Roadmap',
      href: freeRoadmapHref,
      icon: FileText,
      highlighted: false,
      features: [
        'Basic weakness category',
        'Suggested next action',
        'Good starting point',
      ],
    },
    {
      name: 'AI Diagnostic Report',
      price: '$49',
      description:
        'Get a full readiness score, weakness map, and focused 7-day prep plan.',
      bestFor: 'Best if you want clear feedback before your interview.',
      cta: 'Get Full Report',
      href: '/pricing',
      icon: Brain,
      highlighted: true,
      features: [
        'Readiness score',
        'Detailed weakness map',
        '7-day prep plan',
        'Recommended drills',
      ],
    },
    {
      name: 'AI + Human Review Sprint',
      price: '$199',
      description:
        'Get the AI report plus human-reviewed notes and a 14-day prep sprint.',
      bestFor: 'Best if your interview is soon and you need stronger feedback.',
      cta: 'Upgrade to Human Review',
      href: '/pricing',
      icon: UserCheck,
      highlighted: false,
      features: [
        'Everything in AI Report',
        'Human-reviewed notes',
        '14-day prep sprint',
        'Priority feedback',
      ],
    },
  ];

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
        <div className="rounded-[2rem] border-2 border-[#111827] bg-white p-8 text-center shadow-[0_12px_0_#2563eb] lg:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_6px_0_#111827]">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#dbeafe] px-3 py-1 text-sm font-bold text-[#111827]">
            <Sparkles className="h-4 w-4 text-[#2563eb]" />
            Diagnostic saved
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-tight text-[#111827] sm:text-6xl">
            Your diagnostic is submitted.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Your answers were saved. Now choose what you want next: a free basic
            roadmap, a full AI diagnostic report, or deeper human-reviewed
            feedback.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {nextSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.name}
                className={`card-hover rounded-[2rem] border-2 border-[#111827] p-8 shadow-[0_8px_0_#111827] ${
                  step.highlighted
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-white text-[#111827]'
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#111827] shadow-[0_4px_0_#111827] ${
                    step.highlighted
                      ? 'bg-white text-[#2563eb]'
                      : 'bg-[#dbeafe] text-[#2563eb]'
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-8 text-2xl font-black">{step.name}</h2>

                <p
                  className={`mt-4 text-5xl font-black ${
                    step.highlighted ? 'text-white' : 'text-[#111827]'
                  }`}
                >
                  {step.price}
                </p>

                <p
                  className={`mt-5 leading-7 ${
                    step.highlighted ? 'text-blue-100' : 'text-slate-600'
                  }`}
                >
                  {step.description}
                </p>

                <p
                  className={`mt-4 text-sm font-bold ${
                    step.highlighted ? 'text-white' : 'text-[#2563eb]'
                  }`}
                >
                  {step.bestFor}
                </p>

                <div className="mt-8 space-y-4">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 ${
                          step.highlighted ? 'text-white' : 'text-[#2563eb]'
                        }`}
                      />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <a href={step.href} className="mt-8 block">
                  <Button
                    className={`move-button w-full rounded-xl border-2 border-[#111827] py-6 text-base shadow-[0_6px_0_#111827] ${
                      step.highlighted
                        ? 'bg-white text-[#111827] hover:bg-[#dbeafe]'
                        : 'bg-[#111827] text-white hover:bg-[#1f2937]'
                    }`}
                  >
                    {step.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}