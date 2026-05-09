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

// Metric threads - Coarse, Fine, Super Fine (per ISO 261/262)
const m = (dia, pitch, type) => ({
  id: `M${dia}x${pitch}`,
  system: 'metric',
  label: `M${dia} × ${pitch}`,
  diameter: dia,         // mm
  pitch,                 // mm
  tpi: 25.4 / pitch,
  series: type,          // 'Coarse' | 'Fine' | 'Super Fine'
  sortKey: dia + (type === 'Coarse' ? 0 : type === 'Fine' ? 0.001 : 0.002) + pitch * 0.0001,
});

export const METRIC_THREADS = [
  m(1, 0.25, 'Coarse'),
  m(1.2, 0.25, 'Coarse'),
  m(1.4, 0.3, 'Coarse'),
  m(1.6, 0.35, 'Coarse'),
  m(1.8, 0.35, 'Coarse'),
  m(2, 0.4, 'Coarse'),
  m(2, 0.25, 'Fine'),
  m(2.5, 0.45, 'Coarse'),
  m(2.5, 0.35, 'Fine'),
  m(3, 0.5, 'Coarse'),
  m(3, 0.35, 'Fine'),
  m(3.5, 0.6, 'Coarse'),
  m(3.5, 0.35, 'Fine'),
  m(4, 0.7, 'Coarse'),
  m(4, 0.5, 'Fine'),
  m(5, 0.8, 'Coarse'),
  m(5, 0.5, 'Fine'),
  m(6, 1.0, 'Coarse'),
  m(6, 0.75, 'Fine'),
  m(6, 0.5, 'Super Fine'),
  m(7, 1.0, 'Coarse'),
  m(7, 0.75, 'Fine'),
  m(8, 1.25, 'Coarse'),
  m(8, 1.0, 'Fine'),
  m(8, 0.75, 'Super Fine'),
  m(9, 1.25, 'Fine'),
  m(9, 1.0, 'Super Fine'),
  m(10, 1.5, 'Coarse'),
  m(10, 1.25, 'Fine'),
  m(10, 1.0, 'Super Fine'),
  m(10, 0.75, 'Super Fine'),
  m(11, 1.5, 'Fine'),
  m(11, 1.0, 'Super Fine'),
  m(12, 1.75, 'Coarse'),
  m(12, 1.5, 'Fine'),
  m(12, 1.25, 'Super Fine'),
  m(12, 1.0, 'Super Fine'),
  m(14, 2.0, 'Coarse'),
  m(14, 1.5, 'Fine'),
  m(14, 1.25, 'Super Fine'),
  m(14, 1.0, 'Super Fine'),
  m(15, 1.5, 'Fine'),
  m(15, 1.0, 'Super Fine'),
  m(16, 2.0, 'Coarse'),
  m(16, 1.5, 'Fine'),
  m(16, 1.0, 'Super Fine'),
  m(17, 1.5, 'Fine'),
  m(17, 1.0, 'Super Fine'),
  m(18, 2.5, 'Coarse'),
  m(18, 2.0, 'Fine'),
  m(18, 1.5, 'Super Fine'),
  m(18, 1.0, 'Super Fine'),
  m(20, 2.5, 'Coarse'),
  m(20, 2.0, 'Fine'),
  m(20, 1.5, 'Super Fine'),
  m(20, 1.0, 'Super Fine'),
  m(22, 2.5, 'Coarse'),
  m(22, 2.0, 'Fine'),
  m(22, 1.5, 'Super Fine'),
  m(22, 1.0, 'Super Fine'),
  m(24, 3.0, 'Coarse'),
  m(24, 2.0, 'Fine'),
  m(24, 1.5, 'Super Fine'),
  m(24, 1.0, 'Super Fine'),
  m(25, 2.0, 'Fine'),
  m(25, 1.5, 'Super Fine'),
  m(25, 1.0, 'Super Fine'),
].sort((a, b) => a.sortKey - b.sortKey);

export function getThreadById(id) {
  return UNIFIED_THREADS.find(t => t.id === id) || METRIC_THREADS.find(t => t.id === id);
}

export function getThreadsBySystem(system) {
  return system === 'unified' ? UNIFIED_THREADS : METRIC_THREADS;
}
