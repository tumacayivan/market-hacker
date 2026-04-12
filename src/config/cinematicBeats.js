import { HACKER_FRAME_SRCS } from './hackerFrames.js'

/**
 * One narrative beat per frame — same order as HACKER_FRAME_SRCS.
 * `side` toggles copy panel on large screens (mobile uses bottom stack).
 */
const BEATS = [
  {
    kicker: 'Chapter 01',
    title: 'Surface calm',
    body: 'Markets whisper before they shout. We read the quiet tension between bid and ask — the first hint of intent.',
    side: 'left',
  },
  {
    kicker: 'Chapter 02',
    title: 'Signal discipline',
    body: 'Noise is infinite; edge is rare. We filter chaos into repeatable structure — fewer trades, sharper conviction.',
    side: 'right',
  },
  {
    kicker: 'Chapter 03',
    title: 'Data as terrain',
    body: 'Price is not a line — it is topography. We map support, stress, and liquidity the way engineers map load.',
    side: 'left',
  },
  {
    kicker: 'Chapter 04',
    title: 'Fractal structure',
    body: 'The same geometry echoes from ticks to quarters. Multi-timeframe alignment is how narratives become probability.',
    side: 'right',
  },
  {
    kicker: 'Chapter 05',
    title: 'Liquidity gravity',
    body: 'Capital pools where stops cluster. We track where the market must move to rebalance — and position ahead of it.',
    side: 'left',
  },
  {
    kicker: 'Chapter 06',
    title: 'Flow archaeology',
    body: 'Every candle leaves residue. We reconstruct who accumulated, who distributed, and who is trapped.',
    side: 'right',
  },
  {
    kicker: 'Chapter 07',
    title: 'Volatility regime',
    body: 'Expansion and contraction are seasons. Strategy that ignores regime is strategy that dies quietly.',
    side: 'left',
  },
  {
    kicker: 'Chapter 08',
    title: 'Risk architecture',
    body: 'Survival is the only uncapped return. Position sizing and invalidation precede any thesis about direction.',
    side: 'right',
  },
  {
    kicker: 'Chapter 09',
    title: 'Execution geometry',
    body: 'Entry is geometry; exit is psychology. We engineer fills where slippage yields to intent.',
    side: 'left',
  },
  {
    kicker: 'Chapter 10',
    title: 'Model + mind',
    body: 'AI amplifies pattern recognition; humans anchor judgment. Fusion beats automation alone.',
    side: 'right',
  },
  {
    kicker: 'Chapter 11',
    title: 'Protocol over impulse',
    body: 'The edge is procedural — checklists, journals, and kill switches. Hackers automate discipline, not recklessness.',
    side: 'left',
  },
  {
    kicker: 'Chapter 12',
    title: 'Microstructure pulse',
    body: 'Order books breathe. We listen to imbalance and absorption — the pulse beneath the chart.',
    side: 'right',
  },
  {
    kicker: 'Chapter 13',
    title: 'Narrative vs math',
    body: 'Stories move crowds; math settles accounts. We trade where story and statistics briefly agree.',
    side: 'left',
  },
  {
    kicker: 'Chapter 14',
    title: 'Smart footprints',
    body: 'Institutions cannot hide size — only delay it. We follow footprints without worshipping idols.',
    side: 'right',
  },
  {
    kicker: 'Chapter 15',
    title: 'Confluence hunting',
    body: 'One signal lies; five aligned signals compound. Confluence is how probability hardens into plan.',
    side: 'left',
  },
  {
    kicker: 'Chapter 16',
    title: 'Precision entries',
    body: 'We do not chase momentum — we place bets where invalidation is cheap and payoff is asymmetric.',
    side: 'right',
  },
  {
    kicker: 'Chapter 17',
    title: 'Portfolio topology',
    body: 'Correlations shift under stress. We shape exposure so one regime cannot erase the whole stack.',
    side: 'left',
  },
  {
    kicker: 'Chapter 18',
    title: 'Session awareness',
    body: 'Open, overlap, and close carry different signatures. Time is a dimension of edge.',
    side: 'right',
  },
  {
    kicker: 'Chapter 19',
    title: 'Liquidity voids',
    body: 'Gaps are invitations — price accelerates where liquidity is thin. We respect velocity as a hazard and a tool.',
    side: 'left',
  },
  {
    kicker: 'Chapter 20',
    title: 'Alpha decay',
    body: 'Edges erode when crowds arrive. We iterate models the way systems patch vulnerabilities — continuously.',
    side: 'right',
  },
  {
    kicker: 'Chapter 21',
    title: 'Systems thinking',
    body: 'Market Hackers treat trading as infrastructure: observable, testable, and improvable — never mystical.',
    side: 'left',
  },
  {
    kicker: 'Chapter 22',
    title: 'Enter the stack',
    body: 'This is the posture of intent — calm, technical, relentless. Scroll on, then execute with the same clarity.',
    side: 'right',
  },
]

export const CINEMATIC_BEATS = HACKER_FRAME_SRCS.map((src, i) => ({
  src,
  ...BEATS[i],
}))

export const CINEMATIC_BEAT_COUNT = CINEMATIC_BEATS.length
