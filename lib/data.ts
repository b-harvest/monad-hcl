export interface CPU {
  id: string;
  manufacturer: string;
  model: string;
  baseClock: string;
  maxBoostClock: string;
  cores: number;
  threads: number;
  tdp: string;
  numaNodes: number;
  avgTemp?: string;
  recommended: boolean;
  category: 'desktop' | 'server' | 'hedt';
}

export interface Storage {
  id: string;
  manufacturer: string;
  model: string;
  interface: string;
  capacity: string;
  sequentialRead: string;
  sequentialWrite: string;
  randomRead: string;
  randomWrite: string;
  recommended: boolean;
  category: 'enterprise' | 'consumer' | 'datacenter';
  generation: 'gen3' | 'gen4' | 'gen5';
  notes?: string;
}

export interface BaselineRequirements {
  cpu: {
    cores: string;
    clockSpeed: string;
    architecture: string[];
    examples: string[];
  };
  ram: {
    minimum: string;
    recommended: string;
  };
  storage: {
    executionDisk: string;
    monadBftDisk: string;
    type: string;
    performance: string[];
    reliable: string[];
    unreliable: string[];
  };
}

export const cpuData: CPU[] = [
  {
    id: 'epyc-4584px',
    manufacturer: 'AMD',
    model: 'EPYC 4584PX',
    baseClock: '4.20 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '120W',
    numaNodes: 1,
    avgTemp: '70°C / avg 100TX',
    recommended: true,
    category: 'server'
  },
  {
    id: 'epyc-4564p',
    manufacturer: 'AMD',
    model: 'EPYC 4564P',
    baseClock: '4.50 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '170W',
    numaNodes: 1,
    avgTemp: '80°C',
    recommended: true,
    category: 'server'
  },
  {
    id: 'epyc-4585px',
    manufacturer: 'AMD',
    model: 'EPYC 4585PX',
    baseClock: '4.30 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 32,
    threads: 64,
    tdp: '280W',
    numaNodes: 1,
    avgTemp: '',
    recommended: true,
    category: 'server'
  },
  {
    id: 'epyc-4564p',
    manufacturer: 'AMD',
    model: 'EPYC 4564P',
    baseClock: '4.50 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '170W',
    numaNodes: 1,
    avgTemp: '',
    recommended: true,
    category: 'server'
  },
  {
    id: 'ryzen-7950x',
    manufacturer: 'AMD',
    model: 'Ryzen 9 7950X',
    baseClock: '4.50 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '170W',
    numaNodes: 1,
    avgTemp: '',
    recommended: true,
    category: 'desktop'
  },
  {
    id: 'ryzen-7950x3d',
    manufacturer: 'AMD',
    model: 'Ryzen 9 7950X3D',
    baseClock: '4.20 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '120W',
    numaNodes: 1,
    avgTemp: '',
    recommended: true,
    category: 'desktop'
  },
  {
    id: 'ryzen-9950x',
    manufacturer: 'AMD',
    model: 'Ryzen 9 9950X',
    baseClock: '4.30 GHz',
    maxBoostClock: '5.70 GHz',
    cores: 16,
    threads: 32,
    tdp: '170W',
    numaNodes: 1,
    avgTemp: '80°C / avg 2000TX - Need a high-performance water-cooled cooler',
    recommended: true,
    category: 'desktop'
  },
  {
    id: 'threadripper-7965wx',
    manufacturer: 'AMD',
    model: 'Threadripper PRO 7965WX',
    baseClock: '4.20 GHz',
    maxBoostClock: '5.30 GHz',
    cores: 24,
    threads: 48,
    tdp: '350W',
    numaNodes: 1,
    avgTemp: '65°C',
    recommended: true,
    category: 'hedt'
  }
];

export const storageData: Storage[] = [
  {
    id: 'samsung-980-pro',
    manufacturer: 'Samsung',
    model: '980 PRO',
    interface: 'PCIe 4.0 x4',
    capacity: '2TB',
    sequentialRead: '7,000 MB/s',
    sequentialWrite: '5,100 MB/s',
    randomRead: '1,000K IOPS',
    randomWrite: '1,000K IOPS',
    recommended: true,
    category: 'consumer',
    generation: 'gen4'
  },
  {
    id: 'samsung-990-pro',
    manufacturer: 'Samsung',
    model: '990 PRO',
    interface: 'PCIe 4.0 x4',
    capacity: '2TB',
    sequentialRead: '7,450 MB/s',
    sequentialWrite: '6,900 MB/s',
    randomRead: '1,200K IOPS',
    randomWrite: '1,550K IOPS',
    recommended: true,
    category: 'consumer',
    generation: 'gen4'
  },
  {
    id: 'samsung-9100-pro',
    manufacturer: 'Samsung',
    model: '9100 PRO',
    interface: 'PCIe 5.0 x4',
    capacity: '2TB',
    sequentialRead: '14,700 MB/s',
    sequentialWrite: '13,300 MB/s',
    randomRead: '1,850K IOPS',
    randomWrite: '2,600K IOPS',
    recommended: true,
    category: 'consumer',
    generation: 'gen5'
  },
  {
    id: 'samsung-pm9a1',
    manufacturer: 'Samsung',
    model: 'PM9A1',
    interface: 'PCIe 4.0 x4',
    capacity: '2TB',
    sequentialRead: '7,000 MB/s',
    sequentialWrite: '5,200 MB/s',
    randomRead: '1,000K IOPS',
    randomWrite: '850K IOPS',
    recommended: true,
    category: 'enterprise',
    generation: 'gen4',
    notes: 'Pretty good performance and stable under load'
  },
  {
    id: 'kioxia-cm7-v-sed',
    manufacturer: 'Kioxia',
    model: 'CM7-V SED',
    interface: 'PCIe 5.0, NVMe 2.0',
    capacity: '3.2TB',
    sequentialRead: '14,000 MB/s',
    sequentialWrite: '6,750 MB/s',
    randomRead: '2,700K IOPS',
    randomWrite: '600K IOPS',
    recommended: true,
    category: 'enterprise',
    generation: 'gen5',
    notes: ''
  },
  {
    id: 'micron-7450',
    manufacturer: 'Micron',
    model: '7450 PRO',
    interface: 'PCIe 4.0 x4',
    capacity: '1.92TB',
    sequentialRead: '5,000 MB/s',
    sequentialWrite: '2,400 MB/s',
    randomRead: '734K IOPS',
    randomWrite: '185K IOPS',
    recommended: false,
    category: 'enterprise',
    generation: 'gen4',
    notes: 'Has weird random slowdowns under heavy load'
  },
  {
    id: 'kioxia-xg8',
    manufacturer: 'Kioxia',
    model: 'KXG80ZNV2T04',
    interface: 'PCIe 4.0 x4',
    capacity: '2.05TB',
    sequentialRead: '7,000 MB/s',
    sequentialWrite: '5,800 MB/s',
    randomRead: '900K IOPS',
    randomWrite: '620K IOPS',
    recommended: true,
    category: 'consumer',
    generation: 'gen4',
    notes: 'Solid performance. Stable so far. Need to add these parameters to grun "default_ps_max_latency_us=500 blk-mq-nr-hctxs=16"'
  }
];

export const baselineRequirements: BaselineRequirements = {
  cpu: {
    cores: '16 cores or more',
    clockSpeed: '4.5GHz base clock speed or faster',
    architecture: ['AMD Zen 4 or newer', 'Intel Raptor Lake or newer'],
    examples: ['AMD Ryzen 7950x', 'Ryzen 9950x', 'EPYC 4584PX', 'EPYC 4585PX']
  },
  ram: {
    minimum: '32 GB',
    recommended: '64 GB'
  },
  storage: {
    executionDisk: '2 TB Dedicated disk for TrieDB (Execution)',
    monadBftDisk: '2 TB Disk for MonadBFT / OS',
    type: 'PCIe Gen4x4 NVMe SSD or better',
    performance: [
      'Samsung 980 / 990 PRO - PCIe 4.0, top class performance',
      'Samsung PM9A1 - PCIe 4.0, pretty good performance and stable under load',
      'Micron 7450 - PCIe 4.0, pretty good performance BUT has weird random slowdowns'
    ],
    reliable: ['Samsung 980 PRO', 'Samsung 990 PRO', 'Samsung PM9A1'],
    unreliable: ['Nextorage SSDs - can become unresponsive under load due to overheating']
  }
};

export interface EnterpriseServer {
  id: string;
  manufacturer: string;
  model: string;
  cpu: string;
  memory: string;
  storage: string;
  notes: string;
  recommended: boolean;
}

export interface CustomServer {
  id: string;
  cpu: string;
  motherboard: string;
  memory: string;
  storage: string;
  network: string;
  notes: string;
  recommended: boolean;
}

export const enterpriseServers: EnterpriseServer[] = [
  {
    id: 'supermicro-as1015a-mt',
    manufacturer: 'Supermicro',
    model: 'AS-1015A-MT',
    cpu: '1x AMD EPYC 4584PX\n16C/32T 120W',
    memory: '2x DDR5-4800\n32GB ECC UDIMM',
    storage: 'Samsung PM9A3\nSSD 1.9TB',
    notes: '+ 990 PRO 4TB\n10GbE NIC',
    recommended: true
  },
  {
    id: 'gooxi-rmc2112-695-hs-nv',
    manufacturer: 'Gooxi',
    model: 'RMC2112-695-HS-NV',
    cpu: '1x AMD EPYC 4584P\n16C/32T 170W',
    memory: '4x DDR5-4800\n32GB ECC UDIMM',
    storage: 'Kioxia CM7-V SED\nSSD 3.2TB',
    notes: '+ 990 PRO 4TB\n10GbE NIC',
    recommended: true
  }
];

export const customServers: CustomServer[] = [
  {
    id: 'ryzen-9950x-asrock',
    cpu: 'AMD Ryzen 9 9950X',
    motherboard: 'ASRock B650M\nPro X3D',
    memory: 'SK Hynix DDR5-5600\n32GB × 2',
    storage: 'Samsung 990 PRO\n2TB × 2',
    network: 'Intel X540-T2\n10GbE NIC',
    notes: 'High-end desktop\nbuild',
    recommended: true
  },
  {
    id: 'threadripper-7965wx-asus',
    cpu: 'AMD Threadripper\nPRO 7965WX',
    motherboard: 'ASUS PRO WS\nWRX90E-SAGE SE',
    memory: 'Samsung DDR5-5600\n64GB × 2',
    storage: 'Samsung 9100 PRO\n2TB NVMe × 4',
    network: 'Intel X540-T2\n10GbE NIC',
    notes: 'Workstation\nbuild',
    recommended: true
  }
];

export const softwareRequirements = {
  os: 'Ubuntu 24.04+',
  kernel: 'v6.8.0.60-generic or higher',
  warning: 'There is a known bug affecting Linux kernel versions v6.8.0.56-generic - v6.8.0.59-generic that causes Monad clients to hang'
};
