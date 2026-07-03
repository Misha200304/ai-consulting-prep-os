import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const logos = ['MBB Prep', 'Big 4', 'STEM', 'MBA', 'Consulting', 'Strategy'];

const services = [
  {
    title: 'Case Diagnostic',
    description:
      'Identify your weakest skills before wasting another week on random case practice.',
    icon: Search,
    variant: 'light',
  },
  {
    title: 'AI Feedback',
    description:
      'Get structured feedback on your case structure, math, synthesis, and business logic.',
    icon: Brain,
    variant: 'blue',
  },
  {
    title: 'Business Intuition',
    description:
      'Train how to think in revenue, margins, customers, markets, and strategic tradeoffs.',
    icon: BarChart3,
    variant: 'dark',
  },
  {
    title: 'Prep Plan',
    description:
      'Receive a focused 7–14 day sprint based on your actual weaknesses.',
    icon: Target,
    variant: 'light',
  },
  {
    title: 'Mock Case Review',
    description:
      'Practice with AI mock cases and get scored across a real consulting rubric.',
    icon: MessageSquare,
    variant: 'blue',
  },
  {
    title: 'Final Report',
    description:
      'Get a clear readiness score, weakness map, and next actions before the interview.',
    icon: FileText,
    variant: 'light',
  },
];

const process = [
  {
    step: '01',
    title: 'Complete your diagnostic',
    description:
      'Tell us your target firms, interview date, background, and current case-prep struggles.',
  },
  {
    step: '02',
    title: 'Get your weakness map',
    description:
      'See exactly where you lose points: structure, math, business intuition, synthesis, or communication.',
  },
  {
    step: '03',
    title: 'Follow a focused sprint',
    description:
      'Receive a practical plan with drills matched to the skills blocking your interview readiness.',
  },
  {
    step: '04',
    title: 'Practice and improve',
    description:
      'Use mock cases, feedback, and readiness tracking to stop confusing effort with progress.',
  },
];

const pricing = [
  {
    name: 'Free Diagnostic',
    price: '$0',
    description: 'For candidates who want initial direction.',
    features: ['Basic weakness category', 'Recommended next step', 'Email summary'],
  },
  {
    name: 'AI Diagnostic Report',
    price: '$49',
    description: 'For candidates who want a serious prep plan.',
    features: [
      'Full readiness score',
      'Detailed weakness map',
      '7-day prep plan',
      'Recommended drills',
    ],
    highlighted: true,
  },
  {
    name: 'Human Review Sprint',
    price: '$199',
    description: 'For candidates who want deeper feedback.',
    features: [
      'Everything in AI Report',
      'Human-reviewed notes',
      '14-day prep sprint',
      'Priority feedback',
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111827]">
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
          box-shadow: 0 18px 0 #111827;
        }
      `}</style>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border-2 border-[#111827] bg-white p-5 shadow-[0_12px_0_#111827]">
          <header className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                CaseReady
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#services" className="hover:text-[#2563eb]">
                Services
              </a>
              <a href="#process" className="hover:text-[#2563eb]">
                Process
              </a>
              <a href="#pricing" className="hover:text-[#2563eb]">
                Pricing
              </a>
              <a href="/sample-report" className="hover:text-[#2563eb]">
                Sample
              </a>
            </nav>

            <a href="/diagnostic">
              <Button className="move-button rounded-xl border-2 border-[#111827] bg-white px-6 py-5 text-[#111827] shadow-[0_5px_0_#111827] hover:bg-[#dbeafe]">
                Request diagnostic
              </Button>
            </a>
          </header>

          <div className="grid gap-12 px-3 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex rounded-md bg-[#bfdbfe] px-3 py-1 text-sm font-bold">
                Consulting Interview Prep
              </div>

              <h1 className="mt-8 max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Navigating the case interview landscape for success
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                CaseReady OS helps smart candidates diagnose weak spots, build
                business intuition, and follow a focused prep sprint before
                their real consulting interview.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/diagnostic">
                  <Button className="move-button rounded-xl border-2 border-[#111827] bg-[#111827] px-7 py-6 text-base text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]">
                    Book a diagnostic
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <a href="/sample-report">
                  <Button
                    variant="outline"
                    className="move-button rounded-xl border-2 border-[#111827] bg-white px-7 py-6 text-base text-[#111827] shadow-[0_6px_0_#111827] hover:bg-[#dbeafe]"
                  >
                    View sample report
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-[#bfdbfe]" />
              <div className="absolute bottom-8 left-6 h-12 w-12 rounded-full bg-[#2563eb]" />
              <div className="absolute left-8 top-14 h-8 w-8 rounded-full bg-[#111827]" />

              <div className="relative w-full max-w-md rounded-[2rem] border-2 border-[#111827] bg-[#dbeafe] p-8 shadow-[0_12px_0_#111827]">
                <div className="rounded-[1.5rem] border-2 border-[#111827] bg-white p-6">
                  <p className="text-sm font-bold text-[#2563eb]">
                    Readiness Score
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-7xl font-black">62</span>
                    <span className="pb-3 text-xl font-bold text-slate-500">
                      /100
                    </span>
                  </div>

                  <div className="mt-6 h-4 rounded-full border-2 border-[#111827] bg-white">
                    <div className="h-full w-[62%] rounded-full bg-[#2563eb]" />
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="rounded-xl border-2 border-[#111827] bg-white p-4">
                      <p className="text-xs font-bold uppercase text-slate-500">
                        Top weakness
                      </p>
                      <p className="mt-1 font-bold">Generic structure</p>
                    </div>

                    <div className="rounded-xl border-2 border-[#111827] bg-[#111827] p-4 text-white">
                      <p className="text-xs font-bold uppercase text-blue-200">
                        Recommended sprint
                      </p>
                      <p className="mt-1 font-bold">
                        14-day profitability plan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_6px_0_#111827]">
                  <Target className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-[#111827] px-3 py-8 lg:px-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-center text-lg font-bold text-slate-500"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="rounded-md bg-[#bfdbfe] px-3 py-1 text-3xl font-bold">
                Services
              </span>
              <p className="mt-6 max-w-2xl text-slate-600">
                A focused prep system for candidates who need diagnosis,
                feedback, and a real improvement plan — not random motivational
                noise.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              const cardClass =
                service.variant === 'dark'
                  ? 'bg-[#111827] text-white'
                  : service.variant === 'blue'
                    ? 'bg-[#dbeafe] text-[#111827]'
                    : 'bg-white text-[#111827]';

              return (
                <div
                  key={service.title}
                  className={`card-hover rounded-[2rem] border-2 border-[#111827] p-8 shadow-[0_8px_0_#111827] ${cardClass}`}
                >
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="inline rounded-md bg-[#bfdbfe] px-2 text-2xl font-bold text-[#111827]">
                        {service.title}
                      </h3>

                      <p
                        className={`mt-6 leading-7 ${
                          service.variant === 'dark'
                            ? 'text-slate-300'
                            : 'text-slate-600'
                        }`}
                      >
                        {service.description}
                      </p>

                      <a
                        href="/diagnostic"
                        className="mt-8 inline-flex items-center gap-2 font-bold"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        Learn more
                      </a>
                    </div>

                    <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-[#111827] bg-white md:flex">
                      <Icon className="h-12 w-12 text-[#2563eb]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <span className="rounded-md bg-[#bfdbfe] px-3 py-1 text-3xl font-bold">
              Process
            </span>
            <p className="mt-6 max-w-2xl text-slate-600">
              Simple, direct, and built around execution. No bloated dashboard
              fantasy before the core pain is validated.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border-2 border-[#111827] bg-white p-6 shadow-[0_8px_0_#111827]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="text-5xl font-black text-[#2563eb]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.description}</p>
                  </div>
                  <div className="ml-auto hidden h-10 w-10 items-center justify-center rounded-full border-2 border-[#111827] md:flex">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-md bg-[#bfdbfe] px-3 py-1 text-3xl font-bold">
              Pricing
            </span>
            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Start free. Upgrade only when you want a deeper report or human
              review.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border-2 border-[#111827] p-8 shadow-[0_8px_0_#111827] ${
                  plan.highlighted ? 'bg-[#2563eb] text-white' : 'bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p
                  className={`mt-4 ${
                    plan.highlighted ? 'text-blue-100' : 'text-slate-600'
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-8 text-5xl font-black">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <a href="/diagnostic" className="mt-8 block">
                  <Button
                    className={`move-button w-full rounded-xl border-2 border-[#111827] py-6 shadow-[0_6px_0_#111827] ${
                      plan.highlighted
                        ? 'bg-white text-[#111827] hover:bg-[#dbeafe]'
                        : 'bg-[#111827] text-white hover:bg-[#1f2937]'
                    }`}
                  >
                    Choose plan
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border-2 border-[#111827] bg-[#111827] p-10 text-white shadow-[0_12px_0_#2563eb] lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-md bg-[#bfdbfe] px-3 py-1 text-2xl font-bold text-[#111827]">
                Let’s make progress measurable
              </span>
              <p className="mt-6 max-w-xl text-slate-300">
                Stop guessing if you are ready. Start with a diagnostic, find
                the actual weakness, and fix the highest-impact skill first.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a href="/diagnostic">
                <Button className="move-button rounded-xl bg-white px-8 py-6 text-[#111827] shadow-[0_6px_0_#2563eb] hover:bg-[#dbeafe]">
                  Get your free diagnostic
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}