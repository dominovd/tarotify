// Deprecated: thin wrapper that preserves the old import path. Prefer
// importing QuizClient from '@/components/QuizClient' with the pool prop
// in new code. Safe to delete once no other file references this module.

'use client'

import QuizClient from '@/components/QuizClient'

export default function MajorQuizClient() {
  return <QuizClient pool="major" />
}
