export interface IProduct {
  id?: number;
  img?: string;
  name?: string;
  description?: string;
  specification?: any;
  category?: string
}

export const products: IProduct[] = [
  {
    id: 1,
    img: "/assets/shop-image.png",
    name: `FC721-ZZ - Fire control panel (1-loop) in housing (Eco)`,
    description: `The FC721-ZZ is a compact fire control panel with integrated operating unit that can process signals from Cerberus™ PRO devices of up to 126 addresses.
    The fire control panel may be used as a stand-alone unit only.
    In addition, an Ethernet connection is available at each station. Via this fast Ethernet interface remote control service is possible. All detector lines are monitored for ground faults.
    The Cerberus-Engineering-Tool permits the system to be adapted to specific customers' requirements. Up to 2000 events can be stored according to various criteria. Automatic summer/winter change. Detection and automatic read-in (auto-configuration) of all C-NET devices, providing immediate simple operation. Stored data can be uploaded via Cerberus-Remote access.
    The FC721-ZZ is ideally suited for smaller applications, e.g. in workshops, hotels, etc.
    The expansion and accessories must be ordered separately.`,
    specification: [
      ['Detector compatibility ', 'Cerberus PRO FD720'],
      ['Number of addresses', '126'],
      ['Number of detector lines', '1 loop or 2 stub lines'],
      ['Programmable input/output', '4'],
      ['Power consumption', 'Alarm power: 4.68 W, Quiet power: 2.808 W'],
      ['Relay outputs', '1x RT alarm 1x RT fault'],
      ['Supervised output', '1x RT alarm , 1x RT fault , 1x Horn'],
      ['Mains voltage', 'AC 97...127 V / AC 196...253 V'],
      ['Operating voltage', 'DC 21…28.6 V'],
      ['Operating current', '2500 Ma'],
      ['Power supply', '70 W'],
      ['Bypass time for emergency power supply', '72 h'],
      ['Battery capacity', '2 x 12 V, 7 Ah'],
      ['Plug-in position', '1 -> for serial interface RS232 or RS485'],
      ['Operating temperature', '-8…42 °C'],
      ['Storage temperature', '-20…+60 °C'],
      ['Relative humidity', '≤95 % rel. (no condensation)'],
      ['Protection category', 'IP30'],
      ['Color housing/cover', 'Light grey, ~RAL 7035 / Gray, ~RAL 050 00 00'],
      ['Cabinet dimensions (W x H x D)', '430 x 398 x 80 mm'],
      ['Weight (net)', '8.8 kg']
    ],
    category: 'fire safety'
  },
  {
    id: 2,
    img: "/assets/shop-image.png",
    name: `FC722-ZZ - Fire control panel (2-loop) in housing (Standard)`,
    description: `The FC722-ZZ (2-loop, expandable to 4) is a compact fire control panel with an integrated operating unit that can process signals from Cerberus™ PRO devices of up to 252 addresses. The fire control panel can be used as a stand-alone version or networked. It can be programmed with a user-friendly Cerberus-Engineering-Tool to create a system with great versatility. Up to 32 fire control panels and fire terminals can be connected in a single cluster (C-WEB/SAFEDLINK network), or up to 16 panels when the cluster is connected to a danger management system. Using a fiber-optic backbone (C-WEB/LAN) up to 14 of these clusters with up to 16 panels each can be networked. This topology enables the construction of an EN 54-conform network with up to 64 fire control panels and fire terminals.
    All detector lines are monitored for ground faults.
    Adaptation of the user text directly on the terminal or with the Cerberus-Engineering-Tool. Up to 2000 events can be stored according to various criteria. Automatic summer/winter time change.
    Detection and automatic read-in (auto configuration) of all C-NET devices, providing immediate simple operation.
    Stored data can be uploaded via Cerberus-Remote access.
    The FC722-ZZ is ideally suited for medium-sized applications, e.g. in workshops, hotels, etc. or when networked as part of much larger applications. The FC722-ZZ with flexible cross-linking possibilities can also be used for extensive systems.
    The expansion and accessories must be ordered separately.`,
    specification: [
      ['Detector compatibility','Cerberus PRO FD720'],
      ['Number of addresses', '252'],
      ['Number of detector lines', '2 (4) loops or 4 (8) stub lines'],
      ['Programmable input/output', '8'],
      ['Relay outputs', '1x RT alarm , 1x RT fault'],
      ['Power consumption', 'Alarm power: 4.68 W, Quiet power: 2.808 W'],
      ['Supervised output', '1x RT alarm , 1x RT fault , 1x Horn'],
      ['Mains voltage', 'AC 97...127 V / AC 196...253 V'],
      ['Operating voltage', 'DC 21…28.6 V'],
      ['Operating current', '2500 mA'],
      ['Power supply', '70 W'],
      ['Bypass time for emergency power supply', '72 h'],
      ['Battery capacity', '2x 12 V, 7...12 Ah'],
      ['Plug-in position', '2 -> for serial interfaces RS232, RS485, 2 -> for network modules , 1 -> for loop extension (C-NET)'],
      ['Operating temperature', '-8…42 °C'],
      ['Storage temperature', '-20...+60 °C'],
      ['Relative humidity', '≤95 % rel. (no condensation)'],
      ['Protection category', 'IP30'],
      ['Color housing/cover', 'Light grey, ~RAL 7035 / Gray, ~RAL 050 00 00'],
      ['Cabinet dimensions(W x H x D)', '430 x 398 x 160 mm (without cover cap) 430 x 398 x 188 mm (with cover cap)']
    ],
    category: 'building automation'
  },
  {
    id: 3,
    img: "/assets/shop-image.png",
    name: "Product One",
    description: '',
    specification: '',
    category: 'access control'
  },
  {
    id: 4,
    img: "/assets/shop-image.png",
    name: "Product One",
    description: '',
    specification: '',
    category: 'access control'
  },
  {
    id: 5,
    img: "/assets/shop-image.png",
    name: "Product One",
    description: '',
    specification: '',
    category: 'access control'
  },
  {
    id: 6,
    img: "/assets/shop-image.png",
    name: "Product One",
    description: '',
    specification: '',
    category: 'building automation'
  },
]
