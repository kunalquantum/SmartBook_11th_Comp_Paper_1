// ─────────────────────────────────────────────
//  UNIT META  — colours, ids, labels, emojis
// ─────────────────────────────────────────────
export const UNIT_META = [
  {
    id: 'numbers',
    num: '01',
    label: 'Number Systems',
    emoji: '🔢',
    color: 'var(--c1)',
    hex: '#00e5ff',
    desc: 'Binary, Octal, Hexadecimal conversions, arithmetic & coding systems.',
  },
  {
    id: 'program',
    num: '02',
    label: 'Program Analysis',
    emoji: '📐',
    color: 'var(--c2)',
    hex: '#ff7b54',
    desc: 'Dev cycle, flowcharts, algorithms, searching & sorting.',
  },
  {
    id: 'cpp',
    num: '03',
    label: 'Introduction to C++',
    emoji: '⚙️',
    color: 'var(--c3)',
    hex: '#a78bfa',
    desc: 'Data types, operators, control flow, functions & pointers.',
  },
  {
    id: 'vb',
    num: '04',
    label: 'Visual Basic',
    emoji: '🖼️',
    color: 'var(--c4)',
    hex: '#34d399',
    desc: 'IDE components, variables, event-driven programming & loops.',
  },
  {
    id: 'networking',
    num: '05',
    label: 'Networking & Internet',
    emoji: '🌐',
    color: 'var(--c5)',
    hex: '#fbbf24',
    desc: 'LAN/WAN, network types, protocols & internet applications.',
  },
];

// ─────────────────────────────────────────────
//  TOPIC REGISTRY  — per unit
// ─────────────────────────────────────────────
//  Each entry = { id, label, SimulatorComponent (lazy-loaded in routes) }
//  Components are injected at the router level to keep data pure.

export const TOPIC_META = {
  numbers: [
    { id: 'converter', label: 'Base Converter' },
    { id: 'arithmetic', label: 'Binary Arithmetic' },
    { id: 'complement', label: 'Complement Arithmetic' },
    { id: 'coding', label: 'Coding Systems' },
  ],
  program: [
    { id: 'devcycle', label: 'Development Cycle' },
    { id: 'flowchart', label: 'Algorithm & Flowchart' },
    { id: 'linearsearch', label: 'Linear Search' },
    { id: 'bubblesort', label: 'Bubble Sort' },
  ],
  cpp: [
    { id: 'datatypes', label: 'Data Types' },
    { id: 'operators', label: 'Operators Playground' },
    { id: 'controlflow', label: 'Control Flow' },
    { id: 'pointers', label: 'Functions & Pointers' },
  ],
  vb: [
    { id: 'ide', label: 'IDE Components' },
    { id: 'variables', label: 'Variables & Constants' },
    { id: 'events', label: 'Event-Driven Programming' },
    { id: 'loops', label: 'Loop Statements' },
  ],
  networking: [
    { id: 'nettypes', label: 'LAN vs WAN' },
    { id: 'topology', label: 'Network Topologies' },
    { id: 'protocols', label: 'Protocols & Ports' },
    { id: 'internetapps', label: 'Internet Applications' },
  ],
};