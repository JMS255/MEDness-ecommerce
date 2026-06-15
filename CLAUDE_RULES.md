# Claude Code Rules — Medness Co Website

## Surgical Edit Policy
- **Minimal diffs only.** Never rewrite a full file for a small fix. Touch only the exact lines causing the issue.
- **25-line cap.** If a fix requires changing more than 25 lines, stop and enter Plan Mode for approval before writing any code.
- **Zero scope creep.** Fix the precise bug. Do not refactor, optimize, or clean up adjacent code unless explicitly asked.
- **One sentence explanations.** Let the diff speak. No long preambles.

## General Rules
- **TypeScript:** Never use `any` or `@ts-ignore`. Write a proper interface or type.
- **Vercel:** Match import paths with exact casing. Case mismatches cause silent build failures on Linux.
- **CSS:** Prefer adding a targeted class or inline style over rewriting a stylesheet section. Never touch unrelated CSS rules.

## Mobile-First
- **Touch targets:** All interactive elements must be at least 44px tall.
- **Responsive font sizes:** Never hardcode a large `px` size without a smaller mobile counterpart.
- **Input keyboards:** Always set `inputMode` on inputs — `tel` for phone, `email` for email, `numeric` for numbers.
- **No horizontal overflow:** Test every new layout at 360px width mentally.

## Workflow
- Read only the files relevant to the task before editing.
- Build check before every commit.
- One commit per fix — small, descriptive message.

## Debugging Escalation
- If the same error persists after 2 fix attempts, **stop and tell James to Google or search Stack Overflow for the exact error message**. Do not keep guessing blindly.
