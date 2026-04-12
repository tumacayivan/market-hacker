import { HACKER_FRAME_SRCS } from './hackerFrames.js'

/**
 * One narrative beat per frame — same order as HACKER_FRAME_SRCS.
 * `side` toggles copy panel on large screens (mobile uses bottom stack).
 */
// const BEATS = [
//   {
//     kicker: 'Chapter 01',
//     title: 'Surface calm',
//     body: 'Markets whisper before they shout. We read the quiet tension between bid and ask — the first hint of intent.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 02',
//     title: 'Signal discipline',
//     body: 'Noise is infinite; edge is rare. We filter chaos into repeatable structure — fewer trades, sharper conviction.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 03',
//     title: 'Data as terrain',
//     body: 'Price is not a line — it is topography. We map support, stress, and liquidity the way engineers map load.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 04',
//     title: 'Fractal structure',
//     body: 'The same geometry echoes from ticks to quarters. Multi-timeframe alignment is how narratives become probability.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 05',
//     title: 'Liquidity gravity',
//     body: 'Capital pools where stops cluster. We track where the market must move to rebalance — and position ahead of it.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 06',
//     title: 'Flow archaeology',
//     body: 'Every candle leaves residue. We reconstruct who accumulated, who distributed, and who is trapped.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 07',
//     title: 'Volatility regime',
//     body: 'Expansion and contraction are seasons. Strategy that ignores regime is strategy that dies quietly.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 08',
//     title: 'Risk architecture',
//     body: 'Survival is the only uncapped return. Position sizing and invalidation precede any thesis about direction.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 09',
//     title: 'Execution geometry',
//     body: 'Entry is geometry; exit is psychology. We engineer fills where slippage yields to intent.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 10',
//     title: 'Model + mind',
//     body: 'AI amplifies pattern recognition; humans anchor judgment. Fusion beats automation alone.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 11',
//     title: 'Protocol over impulse',
//     body: 'The edge is procedural — checklists, journals, and kill switches. Hackers automate discipline, not recklessness.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 12',
//     title: 'Microstructure pulse',
//     body: 'Order books breathe. We listen to imbalance and absorption — the pulse beneath the chart.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 13',
//     title: 'Narrative vs math',
//     body: 'Stories move crowds; math settles accounts. We trade where story and statistics briefly agree.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 14',
//     title: 'Smart footprints',
//     body: 'Institutions cannot hide size — only delay it. We follow footprints without worshipping idols.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 15',
//     title: 'Confluence hunting',
//     body: 'One signal lies; five aligned signals compound. Confluence is how probability hardens into plan.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 16',
//     title: 'Precision entries',
//     body: 'We do not chase momentum — we place bets where invalidation is cheap and payoff is asymmetric.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 17',
//     title: 'Portfolio topology',
//     body: 'Correlations shift under stress. We shape exposure so one regime cannot erase the whole stack.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 18',
//     title: 'Session awareness',
//     body: 'Open, overlap, and close carry different signatures. Time is a dimension of edge.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 19',
//     title: 'Liquidity voids',
//     body: 'Gaps are invitations — price accelerates where liquidity is thin. We respect velocity as a hazard and a tool.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 20',
//     title: 'Alpha decay',
//     body: 'Edges erode when crowds arrive. We iterate models the way systems patch vulnerabilities — continuously.',
//     side: 'right',
//   },
//   {
//     kicker: 'Chapter 21',
//     title: 'Systems thinking',
//     body: 'Market Hackers treat trading as infrastructure: observable, testable, and improvable — never mystical.',
//     side: 'left',
//   },
//   {
//     kicker: 'Chapter 22',
//     title: 'Enter the stack',
//     body: 'This is the posture of intent — calm, technical, relentless. Scroll on, then execute with the same clarity.',
//     side: 'right',
//   },
// ]

// const BEATS = [
//   {
//     kicker: 'Node 01',
//     title: 'Market system',
//     body: 'Trillions in motion. Millions connected. Endless data streams. Most try to trade it. We hack the market system.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 02',
//     title: 'Pattern scan',
//     body: 'Every move leaves traces. Patterns repeat. Behavior exposes structure.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 03',
//     title: 'Alpha exploit',
//     body: 'Every system has weaknesses. In markets, that weakness is alpha. We find it before it is obvious.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 04',
//     title: 'Price code',
//     body: 'Price is not random. It is structured behavior. We read it like source code.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 05',
//     title: 'Liquidity access',
//     body: 'Liquidity reveals intent. We track it. We position before the move.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 06',
//     title: 'No prediction',
//     body: 'No guessing. No opinions. Only structure, behavior, and execution.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 07',
//     title: 'Engineer mode',
//     body: 'We are not traders. We are system engineers. We build and control execution.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 08',
//     title: 'Process loop',
//     body: 'Observe. Test. Build. Refine. Repeat until the system becomes clear.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 09',
//     title: 'Entry protocol',
//     body: 'Every entry is calculated. Risk is defined before action.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 10',
//     title: 'Market behavior',
//     body: 'Price reacts to liquidity. Participants react to price. We observe both.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 11',
//     title: 'Strategy build',
//     body: 'Systems are constructed through testing, validation, and refinement.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 12',
//     title: 'Edge execution',
//     body: 'Edge is useless without execution. Precision turns insight into results.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 13',
//     title: 'Global markets',
//     body: 'Forex. Crypto. Indices. Markets run continuously. Data never stops.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 14',
//     title: 'Structure mapping',
//     body: 'Support. Resistance. Liquidity. Everything connects inside the system.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 15',
//     title: 'Adaptive system',
//     body: 'Markets evolve. Static thinking fails. Systems must adapt.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 16',
//     title: 'Flow awareness',
//     body: 'Every move has intent. We track flow, not noise.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 17',
//     title: 'Execution state',
//     body: 'Clarity leads to action. Action follows structure. No hesitation.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 18',
//     title: 'Network access',
//     body: 'Market Hackers is not solo. It is a network of shared intelligence.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 19',
//     title: 'System objective',
//     body: 'Understand the market. Build the system. Execute with discipline.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 20',
//     title: 'Core logic',
//     body: 'No shortcuts. No illusions. Only structure, process, and control.',
//     side: 'right',
//   },
//   {
//     kicker: 'Node 21',
//     title: 'Network growth',
//     body: 'Knowledge compounds. Systems improve. Edge strengthens.',
//     side: 'left',
//   },
//   {
//     kicker: 'Node 22',
//     title: 'Enter market',
//     body: 'You are inside the system now. Learn it. Adapt. Execute.',
//     side: 'right',
//   },
// ]

const BEATS = [
  {
    kicker: 'Node 01',
    title: 'Market system',
    body: 'Trillions in motion. Millions connected. Endless data streams. Most try to trade it. We hack the market system.',
    side: 'left',
  },
  {
    kicker: 'Node 02',
    title: 'Pattern scan',
    body: 'Every move leaves traces. Patterns repeat. Behavior exposes structure.',
    side: 'right',
  },
  {
    kicker: 'Node 03',
    title: 'Alpha exploit',
    body: 'Every system has weaknesses. In markets, that weakness is alpha. We find it before it is obvious.',
    side: 'left',
  },
  {
    kicker: 'Node 04',
    title: 'Price code',
    body: 'Price is not random. It is structured behavior. We read it like source code.',
    side: 'right',
  },
  {
    kicker: 'Node 05',
    title: 'Liquidity access',
    body: 'Liquidity reveals intent. We track it. We position before the move.',
    side: 'left',
  },
  {
    kicker: 'Node 06',
    title: 'No prediction',
    body: 'No guessing. No opinions. Only structure, behavior, and execution.',
    side: 'right',
  },
  {
    kicker: 'Node 07',
    title: 'Engineer mode',
    body: 'We are not traders. We are system engineers. We build and control execution.',
    side: 'left',
  },
  {
    kicker: 'Node 08',
    title: 'Process loop',
    body: 'Observe. Test. Build. Refine. Repeat until the system becomes clear.',
    side: 'right',
  },
  {
    kicker: 'Node 09',
    title: 'Entry protocol',
    body: 'Every entry is calculated. Risk is defined before action.',
    side: 'left',
  },
  {
    kicker: 'Node 10',
    title: 'Market behavior',
    body: 'Price reacts to liquidity. Participants react to price. We observe both.',
    side: 'right',
  },
  {
    kicker: 'Node 11',
    title: 'Strategy build',
    body: 'Systems are constructed through testing, validation, and refinement.',
    side: 'left',
  },
  {
    kicker: 'Node 12',
    title: 'Edge execution',
    body: 'Edge is useless without execution. Precision turns insight into results.',
    side: 'right',
  },
  {
    kicker: 'Node 13',
    title: 'Global markets',
    body: 'Forex. Crypto. Indices. Markets run continuously. Data never stops.',
    side: 'left',
  },
  {
    kicker: 'Node 14',
    title: 'Structure mapping',
    body: 'Support. Resistance. Liquidity. Everything connects inside the system.',
    side: 'right',
  },
  {
    kicker: 'Node 15',
    title: 'Adaptive system',
    body: 'Markets evolve. Static thinking fails. Systems must adapt.',
    side: 'left',
  },
  {
    kicker: 'Node 16',
    title: 'Flow awareness',
    body: 'Every move has intent. We track flow, not noise.',
    side: 'right',
  },
  {
    kicker: 'Node 17',
    title: 'Execution state',
    body: 'Clarity leads to action. Action follows structure. No hesitation.',
    side: 'left',
  },
  {
    kicker: 'Node 18',
    title: 'Network access',
    body: 'Market Hackers is not solo. It is a network of shared intelligence.',
    side: 'right',
  },
  {
    kicker: 'Node 19',
    title: 'System objective',
    body: 'Understand the market. Build the system. Execute with discipline.',
    side: 'left',
  },
  {
    kicker: 'Node 20',
    title: 'Core logic',
    body: 'No shortcuts. No illusions. Only structure, process, and control.',
    side: 'right',
  },
  {
    kicker: 'Node 21',
    title: 'Network growth',
    body: 'Knowledge compounds. Systems improve. Edge strengthens.',
    side: 'left',
  },
  {
    kicker: 'Node 22',
    title: 'Enter market',
    body: 'You are inside the system now. Learn it. Adapt. Execute.',
    side: 'right',
  },
]

export const CINEMATIC_BEATS = HACKER_FRAME_SRCS.map((src, i) => ({
  src,
  ...BEATS[i],
}))

export const CINEMATIC_BEAT_COUNT = CINEMATIC_BEATS.length
