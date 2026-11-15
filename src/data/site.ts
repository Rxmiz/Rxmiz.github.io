// Every fact on the site comes from PRODUCT.md. Content rules: no em dashes,
// never the word "genuinely", % not "percent", nothing unconfirmed.

export type Band = 'process' | 'env' | 'design' | 'data';

export const person = {
  name: 'Rami Zaineh',
  line: 'Chemical engineer. Plant floor to data pipeline.',
  email: 'rami.eabuzaineh@gmail.com',
  phone: '+1 (416) 333-9467',
  phoneHref: 'tel:+14163339467',
  linkedin: 'https://www.linkedin.com/in/rami-zaineh/',
  github: 'https://github.com/Rxmiz',
  resume: '/Rami-Zaineh-Resume.pdf',
};

// Off-shift nameplate in the hero. Edit by hand; not live.
// To show cover art, put the image in public/img/ and set cover to its path, e.g. '/img/now-playing.jpg'.
export const nowPlaying: { title: string; cover?: string } = {
  title: 'Dark Souls Remastered',
};

export interface Segment {
  band: Band;
  metric: string;
  title: string;
  source: string;
}

export interface Line {
  id: string;
  service: string;
  plant: Segment;
  data: Segment;
  href: string;
}

// The hero rack: each plant job continues as data work across a tie-in.
export const rack: Line[] = [
  {
    id: 'L-101',
    service: 'Pilot reactor scale-up',
    plant: {
      band: 'process',
      title: 'Pilot reactor scale-up',
      metric: '480% increase in scale',
      source: 'Nfinite Nanotech',
    },
    data: {
      band: 'data',
      title: 'Test records',
      metric: 'backed $1M+ in investor funding reviews',
      source: 'DOE, version-controlled Excel',
    },
    href: '#nfinite',
  },
  {
    id: 'L-102',
    service: 'Environmental compliance',
    plant: {
      band: 'env',
      title: 'LDAR program expansion',
      metric: '300+ components added',
      source: 'Rain Carbon Canada',
    },
    data: {
      band: 'data',
      title: 'Python data processing',
      metric: 'monitoring data behind biweekly MOE reports',
      source: 'AAMR and AMLR data',
    },
    href: '#rain-carbon',
  },
  {
    id: 'L-103',
    service: 'Plant design',
    plant: {
      band: 'design',
      title: 'Biomass-to-hydrogen plant',
      metric: '1,000 kg/day at 99.99% H₂',
      source: 'Capstone design',
    },
    data: {
      band: 'data',
      title: 'Cash flow model',
      metric: '$19.3M NPV, 19.3% IRR over 20 years',
      source: 'CAPEX, OPEX, sensitivity',
    },
    href: '/projects/hydrogen-plant/',
  },
];

export interface Result {
  metric: string;
  text: string;
}

export interface Job {
  id: string;
  band: Band;
  company: string;
  role: string;
  place: string;
  dates: string;
  context: string;
  results: Result[];
}

export const jobs: Job[] = [
  {
    id: 'nfinite',
    band: 'process',
    company: 'Nfinite Nanotech',
    role: 'Process Development Intern',
    place: 'Waterloo, ON',
    dates: 'May 2024 to July 2025',
    context:
      'Sustainable thin-film barrier coatings for food packaging, made by spatial atomic layer deposition (SALD).',
    results: [
      {
        metric: '480%',
        text: 'Increase in scale and 300% increase in processing speed on a pilot-scale SALD reactor, led with senior engineers using design of experiments, while reducing process variability and out-of-spec results.',
      },
      {
        metric: '300%',
        text: 'Increase in uptime of frequently failing equipment, from maintenance procedures I wrote after tracing recurring failures to their root causes.',
      },
      {
        metric: '$1M+',
        text: 'In investor funding tied to outside reviews supported by my reviewed, version-controlled test records (WVTR, OTR, UV spectroscopy thickness, out-of-spec results and corrective actions).',
      },
      {
        metric: '700%',
        text: 'Growth in weekly order volume while I managed procurement and inventory of compressed gases and lab supplies, checking certificates of analysis and inspecting incoming cylinders.',
      },
      {
        metric: 'SOPs',
        text: "Wrote the team's first reviewed, approved, version-controlled SOPs and work instructions for a newly built SALD system, and trained new technicians on them.",
      },
      {
        metric: 'Commissioning',
        text: 'Helped design, assemble, install and commission SALD components and gas lines: line sizing and layout, mechanical assembly, pressure and leak testing with vendors.',
      },
      {
        metric: 'CFD',
        text: 'Validated CFD reactor simulations against real process data and reported the discrepancies that steered more targeted R&D testing.',
      },
      {
        metric: 'KPIs',
        text: 'Ran semi-weekly cross-functional meetings with leadership, operations, sales and business development, reporting uptime, test pass rates and order volume.',
      },
    ],
  },
  {
    id: 'rain-carbon',
    band: 'env',
    company: 'Rain Carbon Canada Inc.',
    role: 'Environmental Engineering Intern',
    place: 'Hamilton, ON',
    dates: 'May 2023 to Aug 2023',
    context: 'An operating industrial facility.',
    results: [
      {
        metric: '300+',
        text: 'Components added to the LDAR program through field assessments with MiniRAE3000 and TVA2020 analyzers; took part in environmental HAZOP studies.',
      },
      {
        metric: '~$100K/yr',
        text: 'Savings recognized by leadership for an initiative that included my excavation procedures and improved hazardous waste handling (222H), reducing on-site hazardous waste volumes.',
      },
      {
        metric: 'Biweekly',
        text: 'Wrote and finalized Ambient Air Quality Monitoring Reports and Above Measured Level Reports for the Ontario Ministry of the Environment, processing the monitoring data with Python scripts.',
      },
      {
        metric: 'P&IDs',
        text: 'Field-verified P&IDs, including instrument tags and control loops, against the plant, then redlined and revised them to as-built through formal change approval.',
      },
      {
        metric: 'Sampling',
        text: 'Collected contaminated soil samples and coordinated VOC, PAH and soil analysis with external labs under chain-of-custody.',
      },
    ],
  },
];

export interface Project {
  slug?: string;
  band: Band;
  title: string;
  metric: string;
  summary: string;
  tools: string;
}

export const projects: Project[] = [
  {
    slug: 'hydrogen-plant',
    band: 'design',
    title: 'Biomass-to-hydrogen plant feasibility study',
    metric: '99.99% H₂',
    summary:
      'Capstone design of a 1,000 kg/day plant. I sized the 4-bed PSA system per ASME BPVC and co-developed the economics: $18.0M CAPEX, $19.3M NPV.',
    tools: 'Aspen, Excel, AutoCAD Plant 3D',
  },
  {
    slug: 'cstr-mpc',
    band: 'data',
    title: 'Reactor modelling and MPC',
    metric: 'R² 0.982',
    summary:
      'Modelled an exothermic CSTR from 7,500 process samples with VARMAX, derived a state-space model, checked its stability and designed a constrained MPC on coolant flow.',
    tools: 'Python, statsmodels, PyTorch, cvxpy',
  },
  {
    slug: 'band-gap',
    band: 'data',
    title: 'Crystal band gap prediction',
    metric: '79,068 records',
    summary:
      'A PyTorch neural network predicting band gap from crystal structure, tested against a random forest baseline. An honest write-up of what worked and what did not.',
    tools: 'Python, PyTorch, NumPy',
  },
  {
    slug: 'gold-forecasting',
    band: 'data',
    title: 'Gold price forecasting',
    metric: 'R² 0.867',
    summary:
      'SARIMAX, random forest and ANN models against the US Dollar Index. Lagged and rolling features took R² from negative to 0.867 on a time-ordered test set.',
    tools: 'Python',
  },
  {
    band: 'design',
    title: 'Knee brace redesign',
    metric: 'Client project',
    summary:
      'Managed from scoping through design testing against client requirements to delivery of a brace that reduces slippage, on a Gantt-chart schedule.',
    tools: 'Gantt chart',
  },
  {
    band: 'process',
    title: 'P&IDs and control narratives',
    metric: 'Course project',
    summary:
      'Drafted P&IDs in AutoCAD, wrote control narratives and control logic, prepared instrument data sheets, and kept a line list consistent with the P&ID.',
    tools: 'Control Systems',
  },
  {
    band: 'process',
    title: 'Aspen process simulations',
    metric: 'Simulation',
    summary:
      'Distillation, water regeneration and other processes in Aspen HYSYS and Aspen Plus, some with heat balances.',
    tools: 'Aspen HYSYS, Aspen Plus',
  },
  {
    band: 'process',
    title: 'Unit operations labs',
    metric: 'Wet lab',
    summary:
      'Operated and analyzed distillation columns, titrations and analytical instrumentation, with documented lab reports.',
    tools: 'Lab instrumentation',
  },
];

export const skills = [
  {
    band: 'data' as Band,
    service: 'Programming and AI',
    contents:
      'Python (PyTorch, NumPy, scikit-learn, statsmodels), R, SQL, VBA, JavaScript, HTML, CSS, Git and GitHub, agentic AI workflows (Claude, ChatGPT)',
  },
  {
    band: 'data' as Band,
    service: 'Data and analysis software',
    contents: 'MATLAB, Excel, Power BI, SharePoint',
  },
  {
    band: 'design' as Band,
    service: 'Process and design software',
    contents:
      'Aspen HYSYS, Aspen Plus, AutoCAD (2D, Plant 3D), Onshape, Visio, Adobe Acrobat (P&ID markup)',
  },
  {
    band: 'process' as Band,
    service: 'Engineering methods',
    contents:
      'DOE, root cause analysis, calibration, commissioning, P&IDs, instrument data sheets, line lists, model predictive control (MPC), system identification, LDAR, HAZOP and HAZID, CFD model validation, FTIR, UV spectroscopy, CAPEX and OPEX, hydraulic and equipment sizing, 3D printing',
  },
];
