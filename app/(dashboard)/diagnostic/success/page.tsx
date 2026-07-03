import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function DiagnosticSuccessPage() {
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
          Your answers were saved. Next, we will use this information to
          generate a structured consulting interview readiness report.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/">
            <Button className="rounded-xl border-2 border-[#111827] bg-[#111827] px-8 py-6 text-white shadow-[0_6px_0_#2563eb] hover:bg-[#1f2937]">
              Back to homepage
            </Button>
          </a>

          <a href="/dashboard">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-[#111827] bg-white px-8 py-6 text-[#111827] shadow-[0_6px_0_#111827] hover:bg-[#dbeafe]"
            >
              Go to dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}