'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db/drizzle';
import { diagnosticSubmissions } from '@/lib/db/schema';

export async function submitDiagnostic(formData: FormData) {
  const firstName = String(formData.get('firstName') || '').trim();
  const lastName = String(formData.get('lastName') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const educationLevel = String(formData.get('educationLevel') || '').trim();
  const fieldOfStudy = String(formData.get('fieldOfStudy') || '').trim();
  const consultingFamiliarity = String(
    formData.get('consultingFamiliarity') || ''
  ).trim();
  const targetFirms = String(formData.get('targetFirms') || '').trim();
  const targetRole = String(formData.get('targetRole') || '').trim();
  const interviewDate = String(formData.get('interviewDate') || '').trim();
  const prepLevel = String(formData.get('prepLevel') || '').trim();
  const casesPracticed = String(formData.get('casesPracticed') || '').trim();
  const hardestPart = String(formData.get('hardestPart') || '').trim();

  const biggestStruggles = formData
    .getAll('biggestStruggles')
    .map((value) => String(value));

  if (
    !firstName ||
    !lastName ||
    !email ||
    !educationLevel ||
    !consultingFamiliarity ||
    !prepLevel ||
    !casesPracticed
  ) {
    throw new Error('Missing required diagnostic fields.');
  }

  await db.insert(diagnosticSubmissions).values({
    firstName,
    lastName,
    email,
    educationLevel,
    fieldOfStudy,
    consultingFamiliarity,
    targetFirms,
    targetRole,
    interviewDate: interviewDate || null,
    prepLevel,
    casesPracticed,
    biggestStruggles,
    hardestPart,
    status: 'submitted',
  });

  redirect('/diagnostic/success');
}