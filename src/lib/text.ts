/** Splits a heading around one accent-coloured phrase (must be an exact substring). */
export function splitAccent(heading: string, accentPhrase: string) {
  const idx = heading.indexOf(accentPhrase);
  if (idx === -1) return { before: heading, accent: '', after: '' };
  return {
    before: heading.slice(0, idx),
    accent: accentPhrase,
    after: heading.slice(idx + accentPhrase.length),
  };
}

/** Splits a heading around two accent-coloured phrases (each an exact substring, in order). */
export function splitDualAccent(heading: string, phraseA: string, phraseB: string) {
  const idxA = heading.indexOf(phraseA);
  if (idxA === -1) return { before: heading, accentA: '', middle: '', accentB: '', after: '' };
  const afterA = heading.slice(idxA + phraseA.length);
  const idxB = afterA.indexOf(phraseB);
  if (idxB === -1) return { before: heading.slice(0, idxA), accentA: phraseA, middle: afterA, accentB: '', after: '' };
  return {
    before: heading.slice(0, idxA),
    accentA: phraseA,
    middle: afterA.slice(0, idxB),
    accentB: phraseB,
    after: afterA.slice(idxB + phraseB.length),
  };
}

export function lucideIcon(name: string) {
  return `url('https://unpkg.com/lucide-static@0.400.0/icons/${name}.svg')`;
}
