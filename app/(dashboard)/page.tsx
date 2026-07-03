import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Diagnose weak spots',
    description: 'Find the exact case skills holding you back before you keep practicing blindly.',
  },
  {
    icon: Brain,
    title: 'Build business intuition',
    description: 'Train how to think in revenue, margin, customers, markets, and strategic tradeoffs.',
  },
  {
    icon: BarChart3,
    title: 'Track readiness',
    description: 'Get a clear score, weakness map, and focused 7–14 day prep sprint.',
  },
];

const pricing = [
  {
    name: 'Free Diagnostic',
    price: '$0',
    description: 'Basic weakness category and next step.',
  },
  {
    name: 'AI Report',
    price: '$49',
    description: 'Full readiness score, weakness map, and 7-day prep plan.',
  },
  {
    name: 'Human Review',
    price: '$199',
    description: 'AI report plus human-reviewed feedback and 14-day plan.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @keyframes blobFloatOne {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) rotate(8deg) scale(1.04); }
        }

        @keyframes blobFloatTwo {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(-22px, 18px, 0) rotate(-10deg) scale(1.06); }
        }

        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .blob-one {
          animation: blobFloatOne 7s ease-in-out infinite;
        }

        .blob-two {
          animation: blobFloatTwo 8s ease-in-out infinite;
        }

        .slow-spin {
          animation: slowSpin 18s linear infinite;
        }

        .interactive-button {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .interactive-button:hover {
          transform: translateY(-4px) scale(1.03);
        }

        .interactive-button:active {
          transform: translateY(1px) scale(0.97);
        }
      `}</style>

      <section className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#172554_0%,transparent_32%),radial-gradient(circle_at_bottom_right,#581c87_0%,transparent_30%),linear-gradient(135deg,#020617_0%,#000000_48%,#020617_100%)]" />

        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-fuchsia-500 opacity-90 blur-sm slow-spin" />

        <div className="blob-one pointer-events-none absolute left-8 top-72 h-64 w-72 rounded-[45%_55%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-700 to-fuchsia-500 opacity-90 blur-[1px]" />

        <div className="blob-two pointer-events-none absolute right-8 top-48 h-56 w-48 rounded-[55%_45%_40%_60%] bg-gradient-to-br from-cyan-300 via-blue-600 to-indigo-900 opacity-90 blur-[1px]" />

        <div className="blob-two pointer-events-none absolute bottom-4 right-20 h-80 w-[420px] rounded-[60%_40%_50%_50%] bg-gradient-to-br from-blue-700 via-cyan-400 to-fuchsia-600 opacity-90 blur-[1px]" />

        <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/70 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
          <header className="flex items-center justify-between px-6 py-6 lg:px-10">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Sparkles className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">
                  CaseReady
                </p>
                <p className="text-xs text-slate-400">AI Prep OS</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="/sample-report" className="hover:text-white">Sample</a>
              <a href="/sign-in" className="hover:text-white">Sign in</a>
            </nav>

            <a href="/diagnostic">
              <Button className="interactive-button rounded-full bg-fuchsia-500 px-6 text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400">
                Start
              </Button>
            </a>
          </header>

          <div className="mx-auto max-w-5xl px-6 pb-24 pt-14 text-center lg:px-10 lg:pb-32 lg:pt-20">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              AI consulting prep for underdog candidates
            </div>

            <h1 className="mt-10 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              Welcome.
            </h1>

            <p className="mt-3 text-2xl font-medium text-slate-300">
              Stop practicing cases blindly.
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Diagnose your consulting interview weaknesses, get a readiness
              score, and follow a focused prep plan before your real interview.
            </p>

            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-full border border-white/20 bg-black/50 p-2 shadow-2xl shadow-blue-950/30">
              <div className="flex flex-1 items-center gap-3 px-5 text-left text-slate-500">
                <Search className="h-5 w-5" />
                <span className="truncate">
                  What is blocking your consulting interview progress?
                </span>
              </div>
              <a href="/diagnostic">
                <Button className="interactive-button rounded-full bg-blue-600 px-6 py-5 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500">
                  Diagnose
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/diagnostic">
                <Button className="interactive-button rounded-full bg-blue-600 px-8 py-6 text-base text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500">
                  Get My Free Diagnostic
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a href="/sample-report">
                <Button
                  variant="outline"
                  className="interactive-button rounded-full border-white/20 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white"
                >
                  See Report
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative bg-black px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Product system
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Not more random practice. A real prep system.
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              More cases do not help if you repeat the same mistakes. CaseReady
              starts with diagnosis, then gives you targeted feedback.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-4 text-slate-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Pricing
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Start free. Upgrade when you need deeper feedback.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 transition hover:-translate-y-2 ${
                  index === 1
                    ? 'border-blue-400 bg-blue-600 shadow-2xl shadow-blue-600/25'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-slate-300">{plan.description}</p>
                <p className="mt-8 text-5xl font-black">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <p>Readiness direction</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <p>Weakness diagnosis</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <p>Next-step prep plan</p>
                  </div>
                </div>

                <a href="/diagnostic" className="mt-8 block">
                  <Button
                    className={`interactive-button w-full rounded-full py-6 ${
                      index === 1
                        ? 'bg-white text-blue-700 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-500'
                    }`}
                  >
                    Choose Plan
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}