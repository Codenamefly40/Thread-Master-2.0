// Thread data - Unified (inches) and Metric (mm) standards
// Max sizes: 1" Unified, 25mm Metric

// Numbered series basic diameters (inches)
const NUMBERED_DIA = {
  0: 0.0600, 1: 0.0730, 2: 0.0860, 3: 0.0990, 4: 0.1120,
  5: 0.1250, 6: 0.1380, 8: 0.1640, 10: 0.1900, 12: 0.2160,
};

const FRAC = (n, d) => n / d;

// series: UNC, UNF, UNEF, UNS (special)
const u = (label, dia, tpi, series, sortKey) => ({
  id: `U-${label}`,
  system: 'unified',
  label,
  diameter: dia,         // inches
  tpi,
  pitch: 1 / tpi,        // inches
  series,
  sortKey,
});

export const UNIFIED_THREADS = [
  // Numbered
  u('#0-80 UNF', NUMBERED_DIA[0], 80, 'UNF', 0.0600),
  u('#1-64 UNC', NUMBERED_DIA[1], 64, 'UNC', 0.0730),
  u('#1-72 UNF', NUMBERED_DIA[1], 72, 'UNF', 0.0731),
  u('#2-56 UNC', NUMBERED_DIA[2], 56, 'UNC', 0.0860),
  u('#2-64 UNF', NUMBERED_DIA[2], 64, 'UNF', 0.0861),
  u('#3-48 UNC', NUMBERED_DIA[3], 48, 'UNC', 0.0990),
  u('#3-56 UNF', NUMBERED_DIA[3], 56, 'UNF', 0.0991),
  u('#4-40 UNC', NUMBERED_DIA[4], 40, 'UNC', 0.1120),
  u('#4-48 UNF', NUMBERED_DIA[4], 48, 'UNF', 0.1121),
  u('#5-40 UNC', NUMBERED_DIA[5], 40, 'UNC', 0.1250),
  u('#5-44 UNF', NUMBERED_DIA[5], 44, 'UNF', 0.1251),
  u('#6-32 UNC', NUMBERED_DIA[6], 32, 'UNC', 0.1380),
  u('#6-40 UNF', NUMBERED_DIA[6], 40, 'UNF', 0.1381),
  u('#8-32 UNC', NUMBERED_DIA[8], 32, 'UNC', 0.1640),
  u('#8-36 UNF', NUMBERED_DIA[8], 36, 'UNF', 0.1641),
  u('#10-24 UNC', NUMBERED_DIA[10], 24, 'UNC', 0.1900),
  u('#10-32 UNF', NUMBERED_DIA[10], 32, 'UNF', 0.1901),
  u('#12-24 UNC', NUMBERED_DIA[12], 24, 'UNC', 0.2160),
  u('#12-28 UNF', NUMBERED_DIA[12], 28, 'UNF', 0.2161),
  u('#12-32 UNEF', NUMBERED_DIA[12], 32, 'UNEF', 0.2162),

  // Fractional 1/4
  u('1/4-20 UNC', FRAC(1, 4), 20, 'UNC', 0.2500),
  u('1/4-28 UNF', FRAC(1, 4), 28, 'UNF', 0.2501),
  u('1/4-32 UNEF', FRAC(1, 4), 32, 'UNEF', 0.2502),
  u('1/4-36 UNS', FRAC(1, 4), 36, 'UNS', 0.2503),
  u('1/4-40 UNS', FRAC(1, 4), 40, 'UNS', 0.2504),

  // 5/16
  u('5/16-18 UNC', FRAC(5, 16), 18, 'UNC', 0.3125),
  u('5/16-24 UNF', FRAC(5, 16), 24, 'UNF', 0.3126),
  u('5/16-32 UNEF', FRAC(5, 16), 32, 'UNEF', 0.3127),

  // 3/8
  u('3/8-16 UNC', FRAC(3, 8), 16, 'UNC', 0.3750),
  u('3/8-24 UNF', FRAC(3, 8), 24, 'UNF', 0.3751),
  u('3/8-32 UNEF', FRAC(3, 8), 32, 'UNEF', 0.3752),

  // 7/16
  u('7/16-14 UNC', FRAC(7, 16), 14, 'UNC', 0.4375),
  u('7/16-20 UNF', FRAC(7, 16), 20, 'UNF', 0.4376),
  u('7/16-28 UNEF', FRAC(7, 16), 28, 'UNEF', 0.4377),

  // 1/2
  u('1/2-13 UNC', FRAC(1, 2), 13, 'UNC', 0.5000),
  u('1/2-20 UNF', FRAC(1, 2), 20, 'UNF', 0.5001),
  u('1/2-28 UNEF', FRAC(1, 2), 28, 'UNEF', 0.5002),

  // 9/16
  u('9/16-12 UNC', FRAC(9, 16), 12, 'UNC', 0.5625),
  u('9/16-18 UNF', FRAC(9, 16), 18, 'UNF', 0.5626),
  u('9/16-24 UNEF', FRAC(9, 16), 24, 'UNEF', 0.5627),

  // 5/8
  u('5/8-11 UNC', FRAC(5, 8), 11, 'UNC', 0.6250),
  u('5/8-18 UNF', FRAC(5, 8), 18, 'UNF', 0.6251),
  u('5/8-24 UNEF', FRAC(5, 8), 24, 'UNEF', 0.6252),

  // 11/16
  u('11/16-24 UNEF', FRAC(11, 16), 24, 'UNEF', 0.6875),

  // 3/4
  u('3/4-10 UNC', FRAC(3, 4), 10, 'UNC', 0.7500),
  u('3/4-16 UNF', FRAC(3, 4), 16, 'UNF', 0.7501),
  u('3/4-20 UNEF', FRAC(3, 4), 20, 'UNEF', 0.7502),

  // 13/16
  u('13/16-20 UNEF', FRAC(13, 16), 20, 'UNEF', 0.8125),

  // 7/8
  u('7/8-9 UNC', FRAC(7, 8), 9, 'UNC', 0.8750),
  u('7/8-14 UNF', FRAC(7, 8), 14, 'UNF', 0.8751),
  u('7/8-20 UNEF', FRAC(7, 8), 20, 'UNEF', 0.8752),

  // 15/16
  u('15/16-20 UNEF', FRAC(15, 16), 20, 'UNEF', 0.9375),

  // 1"
  u('1-8 UNC', 1.0, 8, 'UNC', 1.0000),
  u('1-12 UNF', 1.0, 12, 'UNF', 1.0001),
  u('1-14 UNS', 1.0, 14, 'UNS', 1.0002),
  u('1-20 UNEF', 1.0, 20, 'UNEF', 1.0003),
].sort((a, b) => a.sortKey - b.sortKey);

// Metric threads - Coarse, Fine, Extra Fine, Super Fine (per ISO 261/262)
// Convention: for each diameter the pitches listed largest→smallest map to:
//   1st = Coarse, 2nd = Fine, 3rd = Extra Fine, remainder = Super Fine.
//   If the diameter has no Coarse listing in the standard, the largest
//   remaining pitch is treated as Fine.
const SERIES_ORDER = ['Coarse', 'Fine', 'Extra Fine', 'Super Fine'];
const SERIES_RANK = { Coarse: 0, Fine: 1, 'Extra Fine': 2, 'Super Fine': 3 };

// Format pitch with at least 1 decimal place: 1 -> "1.0", 2.5 -> "2.5", 1.25 -> "1.25"
function fmtPitch(p) {
  return p % 1 === 0 ? p.toFixed(1) : p.toString();
}

const m = (dia, pitch, type) => ({
  id: `M${dia}x${pitch}`,
  system: 'metric',
  label: `M${dia} × ${fmtPitch(pitch)}`,
  diameter: dia,
  pitch,
  tpi: 25.4 / pitch,
  series: type,
  sortKey: dia + SERIES_RANK[type] * 0.001 - pitch * 0.000001,
});

// dia -> { coarse: pitch | null, pitches: pitch[] (largest→smallest, all available) }
const METRIC_TABLE = [
  { d: 1,    coarse: 0.25, others: [] },
  { d: 1.1,  coarse: 0.25, others: [] },
  { d: 1.2,  coarse: 0.25, others: [] },
  { d: 1.4,  coarse: 0.30, others: [] },
  { d: 1.6,  coarse: 0.35, others: [0.20] },
  { d: 1.8,  coarse: 0.35, others: [0.20] },
  { d: 2,    coarse: 0.40, others: [0.25] },
  { d: 2.2,  coarse: 0.45, others: [0.25] },
  { d: 2.5,  coarse: 0.45, others: [0.35] },
  { d: 3,    coarse: 0.50, others: [0.35] },
  { d: 3.5,  coarse: 0.60, others: [0.35] },
  { d: 4,    coarse: 0.70, others: [0.50] },
  { d: 4.5,  coarse: 0.75, others: [0.50] },
  { d: 5,    coarse: 0.80, others: [0.50] },
  { d: 5.5,  coarse: null, others: [0.50] },
  { d: 6,    coarse: 1.00, others: [0.75, 0.50] },
  { d: 7,    coarse: 1.00, others: [0.75, 0.50] },
  { d: 8,    coarse: 1.25, others: [1.00, 0.75, 0.50] },
  { d: 9,    coarse: null, others: [1.25, 1.00, 0.75, 0.50] },
  { d: 10,   coarse: 1.50, others: [1.25, 1.00, 0.75, 0.50] },
  { d: 11,   coarse: null, others: [1.50, 1.00, 0.75, 0.50] },
  { d: 12,   coarse: 1.75, others: [1.50, 1.25, 1.00, 0.75, 0.50] },
  { d: 14,   coarse: 2.00, others: [1.50, 1.25, 1.00] },
  { d: 15,   coarse: null, others: [1.50, 1.00] },
  { d: 16,   coarse: 2.00, others: [1.50, 1.00] },
  { d: 17,   coarse: null, others: [1.50, 1.00] },
  { d: 18,   coarse: 2.50, others: [2.00, 1.50, 1.00] },
  { d: 20,   coarse: 2.50, others: [2.00, 1.50, 1.00] },
  { d: 22,   coarse: 2.50, others: [2.00, 1.50, 1.00] },
  { d: 24,   coarse: 3.00, others: [2.00, 1.50, 1.00] },
  { d: 25,   coarse: null, others: [2.00, 1.50, 1.00] },
];

function expandMetricRow(row) {
  // pitches sorted coarse(largest) → super fine(smallest)
  const all = row.coarse !== null ? [row.coarse, ...row.others] : [...row.others];
  // Ensure descending
  all.sort((a, b) => b - a);

  const tagged = [];
  let idx = 0;
  if (row.coarse !== null) {
    tagged.push({ d: row.d, pitch: row.coarse, type: 'Coarse' });
    idx = 1;
  }
  // remaining pitches (descending) -> Fine, Extra Fine, Super Fine, Super Fine, ...
  const remaining = all.slice(idx);
  remaining.forEach((p, i) => {
    const type = SERIES_ORDER[Math.min(i + 1, 3)];
    tagged.push({ d: row.d, pitch: p, type });
  });
  return tagged;
}

export const METRIC_THREADS = METRIC_TABLE
  .flatMap(expandMetricRow)
  .map(({ d, pitch, type }) => m(d, pitch, type))
  .sort((a, b) => a.sortKey - b.sortKey);

// NPT - National Pipe Thread (Tapered, ANSI/ASME B1.20.1)
// NPTF - Dryseal Pipe Thread (ANSI/ASME B1.20.3) - same physical sizes,
//        tighter tolerances and slightly smaller tap drill for sealing without
//        thread sealant.
// Sizes ≤ 1" only. Pipe threads have no class system; specs are absolute.
// L1 = hand-tight engagement length, L2 = effective thread length (inches).

// Single shared dataset; two exported lists distinguish NPT vs NPTF.
const PIPE_DATA = [
  { size: '1/16-27', od: 0.3125, tpi: 27,
    npt:  { name: 'D / 15/64', size: 0.2344 },
    nptf: { name: '#1',        size: 0.2280 },
    L1: 0.1600, L2: 0.2611, sortKey: 0.0625 },
  { size: '1/8-27', od: 0.4050, tpi: 27,
    npt:  { name: 'R / 11/32', size: 0.3390 },
    nptf: { name: 'Q',         size: 0.3320 },
    L1: 0.1615, L2: 0.2639, sortKey: 0.1250 },
  { size: '1/4-18', od: 0.5400, tpi: 18,
    npt:  { name: '7/16',      size: 0.4375 },
    nptf: { name: '27/64',     size: 0.4219 },
    L1: 0.2278, L2: 0.4018, sortKey: 0.2500 },
  { size: '3/8-18', od: 0.6750, tpi: 18,
    npt:  { name: '37/64',     size: 0.5781 },
    nptf: { name: '9/16',      size: 0.5625 },
    L1: 0.2400, L2: 0.4078, sortKey: 0.3750 },
  { size: '1/2-14', od: 0.8400, tpi: 14,
    npt:  { name: '23/32',     size: 0.7188 },
    nptf: { name: '45/64',     size: 0.7031 },
    L1: 0.3200, L2: 0.5337, sortKey: 0.5000 },
  { size: '3/4-14', od: 1.0500, tpi: 14,
    npt:  { name: '59/64',     size: 0.9219 },
    nptf: { name: '29/32',     size: 0.9063 },
    L1: 0.3390, L2: 0.5457, sortKey: 0.7500 },
  { size: '1-11.5', od: 1.3150, tpi: 11.5,
    npt:  { name: '1-5/32',    size: 1.1563 },
    nptf: { name: '1-9/64',    size: 1.1406 },
    L1: 0.4000, L2: 0.6828, sortKey: 1.0000 },
];

function makePipe(row, system) {
  const isNPTF = system === 'nptf';
  const seriesLabel = isNPTF ? 'NPTF' : 'NPT';
  return {
    id: `${seriesLabel}-${row.size}`,
    system,
    label: `${row.size} ${seriesLabel}`,
    diameter: row.od,
    pitch: 1 / row.tpi,
    tpi: row.tpi,
    series: seriesLabel,
    tapDrill: isNPTF ? row.nptf : row.npt,
    L1: row.L1,
    L2: row.L2,
    sortKey: row.sortKey,
  };
}

export const NPT_THREADS  = PIPE_DATA.map((r) => makePipe(r, 'npt'));
export const NPTF_THREADS = PIPE_DATA.map((r) => makePipe(r, 'nptf'));

export function getThreadById(id) {
  return UNIFIED_THREADS.find(t => t.id === id)
    || METRIC_THREADS.find(t => t.id === id)
    || NPT_THREADS.find(t => t.id === id)
    || NPTF_THREADS.find(t => t.id === id);
}

export function getThreadsBySystem(system) {
  if (system === 'metric') return METRIC_THREADS;
  if (system === 'npt') return NPT_THREADS;
  if (system === 'nptf') return NPTF_THREADS;
  return UNIFIED_THREADS;
}
