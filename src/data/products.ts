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
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FC721-ZZ_nyqzuo.jpg",
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
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518063/amaspace/FC722-ZZ_gj004d.jpg",
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
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FC723-ZA_zpcfy6.jpg",
    name: `FC723-ZA - Fire control panel FC723-ZA (modular)`,
    description: `The FC723-ZA is a modular, prefabricated, microprocessor-controlled fire control panel with an integrated user-friendly operating unit for up to max. 756 addresses that can process signals from various detector systems like FD720 devices of the Cerberus PRO series and SynoLOOP devices. The fire control panel can be used as stand-alone version or can be networked. Up to 64 stations (fire control panels and fire terminals) can be connected in one network.


    ·        Integrated degraded mode function
    ·        Redundant network node, degraded mode operation according to EN 54
    ·        Fast Ethernet interface for a heterogeneous network
    ·        Option of printer, key switches, LED displays
    ·        Slots for RS232, RS485 serial ports
    ·        Card cage for 2 extra cards
    ·        Line card C-NET (For migration)
    ·        SynoLOOP line card
    ·        Emergency power supply for emergency operating time of up to 72 hours
    ·        Detection and automatic reading in (auto configuration) of all Cerberus PRO devices, ready for operation immediately
    ·        Floor repeater devices, alarm devices and mimic displays in detector loop (C-NET)
    ·        Flexible programming of complex applications and controls`,
    specification: [
      ['Detector compatibility', 'Cerberus PRO FD720 (C-NET)'],
      ['Standard', 'EN 54-2 , EN 54-4'],
      ['Number of addresses', '756'],
      ['Number of detector lines',
      `Integrated lines:
      ·        C-NET loops: 2
      ·        With loop extension: 4
      Extra lines:
      ·        C-NET (4 loops per line card): Max. 8
      ·        SynoLOOP (4 loops per line card): Max. 8
      `],
      ['Programmable input/output', '12'],
      ['Relay outputs', '1x RT alarm, 1x RT fault'],
      ['Power consumption', 'Alarm power: 5.136 W, Quiet power: 3.264 W'],
      ['Supervised output', '1x RT alarm , 1x RT fault , 2x Horn'],
      ['Mains voltage', 'AC 98…127 V / AC 196…253 V'],
      ['Operating voltage', 'DC 21…28.6 V'],
      ['Operating current', '5000 mA'],
      ['Power supply', '150 W'],
      ['Bypass time for emergency power supply', '72 h'],
      ['Battery capacity', '2 x 12 V, 26 Ah'],
      ['Plug-in position', 'For RS232, RS485 serial ports: 2 , For network modules: 2 , For loop extension: 1'],
      ['Operating temperature', '-8…42 °C'],
      ['Storage temperature', '-20…+60 °C'],
      ['Relative humidity', '≤95 % rel. (no condensation)'],
      ['Protection category', 'IP30'],
      ['Color housing/cover', 'Gray, ~RAL 7035 / Gray, ~RAL 050 00 00'],
      ['Cabinet dimensions (W x H x D)', `430 x 796 x 160 mm (without cover cap) 430 x 796 x 188 mm (with cover cap)`]
    ],
    category: 'access control'
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FC726-ZA_wathgd.jpg",
    name: `FC726-ZA - Fire control panel (modular)`,
    description: `The FC726-ZA (4-loop, expandable to 28 loops) is a modular fire control panel with an integrated operating unit that can process signals from Cerberus™ PRO devices of up to 1512 addresses. A card cage in the basic fire control panel equipment is used for installation of additional line cards (C-NET) or I/O cards. A mix of up to 5 cards max. is possible. Line and I/O cards can be exchanged without removing power from control panel.
    The fire control panel can be used as a stand-alone version or networked. The control panel can be programmed with a user-friendly Cerberus-Engineering-Tool to create a system with great versatility.
    Up to 32 fire control panels and fire terminals can be connected in a single cluster (C-WEB/SAFEDLINK network), or up to 16 panels when the cluster is connected to a danger management system. Using a fiber-optic backbone (C-WEB/LAN) up to 14 of these clusters with up to 16 panels each can be networked. This topology enables the construction of an EN 54-conform network with up to 64 fire control panels and fire terminals. All detector lines are monitored for ground faults.
    Adaptation of the user text directly on the terminal or with the software engineering tool. Up to 2000 events can be stored according to various criteria. Automatic summer/winter time change. Detection and automatic read-in (auto configuration) of all C-NET devices‚ providing immediate simple operation. Stored data can be uploaded via remote access.
    The FC726 is ideally suited for very large and complex buildings, e.g. Office buildings, university campuses, etc. The FC726-ZA with flexible cross-linking possibilities can also be used for extensive systems. The expansion and accessories must be ordered separately.`,
    specification: [
      ['Detector compatibility', 'Cerberus PRO FD720'],
      ['Standard', `EN 54-2 , EN 54-4`],
      ['Number of addresses', '1512'],
      ['Number of detector lines',
      `Integrated lines:
      ·        C-NET loops: 4
      ·        With loop extension: 8
      Extra lines:
      ·        C-NET (4 loops per line card): Max. 20
      ·        SynoLOOP (4 loops per line card): Max. 20`],
      ['Programmable input/output', 'Max. 60 (12 per card)'],
      ['Relay outputs', '1x RT alarm; 1x RT fault'],
      ['Power consumption', 'Alarm power: 6.288 W, Quiet power: 3.888 W'],
      ['Supervised output', '1x RT alarm , 1x RT fault , 2x Horn'],
      ['Mains voltage', 'AC 230 V'],
      ['Operating voltage', 'DC 21…28.6 V'],
      ['Operating current', '5000 mA'],
      ['Power supply', '150 W'],
      ['Bypass time for emergency power supply', '72 h'],
      ['Battery capacity', '2x 12 V, 45 Ah'],
      ['Plug-in position', `2 -> for serial interfaces RS232, RS4852 , 2 -> for network modules , 1 -> for loop extension (C-NET) , 5 -> for line or I/O cards (card cage)`],
      ['Operating temperature', '-8…42 °C'],
      ['Storage temperature', '-20…+60 °C'],
      ['Relative humidity', '≤95 % rel. (no condensation)'],
      ['Protection category', 'IP30'],
      ['Color housing/cover', 'Light grey, ~RAL 7035 / Gray, ~RAL 050 00 00'],
      ['Cabinet dimensions (W x H x D)', '430 x 796 x 260 mm (without cover cap) 430 x 796 x 288 mm (with cover cap)']
    ],
    category: 'access control'
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FT724-ZZ_myhkww.jpg",
    name: `FT724-ZZ - Fire terminal`,
    description: `The FT724.. fire terminal is an operating panel remote from the central control panel that can be operated with its own power supply as well, as an option. The operating unit has installation slots for optional interfaces such as RS232, RS485, networking modules (SAFEDLINK) and a key switch. Up to 32 fire control panels and fire terminals can be connected in a single cluster (C-WEB/SAFEDLINK network), or up to 16 panels when the cluster is connected to a danger management system. Using a fiber-optic backbone (C-WEB/LAN) up to 14 of these clusters with up to 16 panels each can be networked. This topology enables the construction of an EN 54-conform network with up to 64 fire control panels and fire terminals.
    The optional power supply i.e. power supply kit (70 W) and batteries 2 x 12 V / 7 Ah must be ordered separately.`,
    specification: [
      ['Dimensions(W x H x D)', '430 x 398 x 103 mm'],
      ['Operating voltage', 'DC 21…28.6 V'],
      ['Power supply', '70 W (optional)'],
      ['Quiescent current', '125 mA'],
      ['Battery capacity', 'Max. 2x 12 V / 7 Ah (optional)'],
      ['Plug-in position', `2 -> for serial interfaces RS232, RS485 , 2 -> for network modules`],
      ['Operating temperature', '-8…+42 °C'],
      ['Storage temperature', '-20…+60 °C'],
      ['Relative humidity', `≤95 % rel. (no condensation)`],
      ['Protection category', 'IP30'],
      ['Color housing/cover', `Gray, ~RAL 7035 / Gray, ~RAL 050 00 00`],
      ['Cabinet dimensions (W x H x D)', `430 x 398 x 80 mm (without cover cap) 430 x 398 x 108 mm (with cover cap)`]
    ],
    category: 'access control'
  },
  {
    id: 6,
    img: "/assets/shop-image.png",
    name: `OP720 - Optical smoke detector`,
    description: `For the detection of smoke-generating flaming and smoldering fires.
    Works according to the scattered-light principle with an optical forward scattering sensor. Selectable detection behavior by different parameter sets.
    The base must be ordered separately.`,
    specification: [
      ['Standard', 'EN 54-7 , EN 54-17'],
      ['Protection category', 'IP40; IP42 with detector base seal'],
      ['Operating voltage', 'DC 12…33 V'],
      ['Operating temperature', '-10…55 °C'],
      ['Storage temperature', '-30...+70 °C'],
      ['Quiescent current', '~220 μA'],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', 'C-NET -> FS720'],
      ['Communication protocol', 'C-NET'],
      ['Relative humidity', '≤95 % rel.'],
      ['Permissible air speed', '5 m/s'],
      ['Color', 'Pure white, ~RAL 9010']
    ],
    category: 'building automation'
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518063/amaspace/DB721_lay2cr.jpg",
    name: `DB721 - Detector base with loop contact`,
    description: `Universal base with extra large mounting slots facilitates use with a wide variety of back boxes and other electrical accessories. Connecting terminals for cable diameter at 1.6 mm2. Place for auxiliary terminals 2x DBZ1190-AA and 2x DBZ1190-AB.
    For all point detectors in the series Cerberus PRO FD720.`,
    specification: [
      ['Cable capacity', '0.2...1.6 mm2'],
      ['Color', `Pure white, ~RAL 9010`],
      [`Dimensions`, `(Ø x H) 117 x 23 mm`]
    ],
    category: 'building automation'
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518065/amaspace/HI720_eseczw.jpg",
    name: `HI720 - Heat detector (static+RoR)`,
    description: `For use in areas where smoke detection is impractical due to high level of dust, dirt, steam and high humidity. Selectable parameter sets for rate of rise and fixed temperature.
    The base must be ordered separately.`,
    specification: [
      ['Standard', 'EN 54-5 , EN 54-17'],
      ['Protection category', `IP40; IP42 with detector base seal`],
      ['Operating voltage', `DC 12…33 V`],
      ['Operating temperature', `-10…55 °C`],
      ['Storage temperature', `-30...+70 °C`],
      ['Quiescent current', `~200 μA`],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', `C-NET -> FS720`],
      ['Communication protocol', 'C-NET'],
      ['Relative humidity', `≤95 % rel.`],
      ['Color', `Pure white, ~RAL 9010`]
    ],
    category: 'building automation'
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518065/amaspace/HI722_zi9yh1.jpg",
    name: `HI722 - Heat detector (static)`,
    description: `Suitable in areas, in which temporary high variations in temperature arise. Measures the operating temperature, when the maximum temperature is exceeded the detector sends a danger signal to the fire control panel.
    The base must be ordered separately.
    Scope of delivery
    Detector and dust cap`,
    specification: [
      ['Standard', ` EN 54-5 , EN 54-17`],
      ['Protection category', `IP40; IP42 with detector base seal`],
      ['Operating voltage', `DC 12…33 V`],
      ['Operating temperature', `-10…55 °C`],
      ['Storage temperature', `-30...+70 °C`],
      ['Quiescent current', '~200 μA'],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', `C-NET -> FS720`],
      ['Communication protocol', `C-NET`],
      ['Relative humidity', `≤95 % rel.`],
      ['Color', `Pure white, ~RAL 9010`]
    ],
    category: 'building automation'
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518065/amaspace/OH720_sqd7dy.jpg",
    name: `OH720 - Multi-sensor smoke detector`,
    description: `For the detection of flaming fires caused by the combustion of liquid and solid matters, as well as smoldering fires. For reliable fire detection in environments with deceptive phenomena.
    Works according to the scattered-light principle with an optical forward scattering sensor. An additional heat sensor increases the fire detector’s immunity to deceptive phenomena. Selectable detection behavior by different parameter sets. Immunity against transient false alarm causes.
    The base must be ordered separately.
    Scope of delivery
    Detector and dust cap`,
    specification: [
      ['Standard',  `CEA 4021 , EN 54-7 , EN 54-17`],
      ['Protection category', `IP40; IP42 with detector base seal`],
      ['Operating voltage', `DC 12…33 V`],
      ['Operating temperature', '-10…55 °C'],
      ['Storage temperature', `-30...+70 °C`],
      ['Quiescent current', '~230 μA'],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', `C-NET -> FS720`],
      ['Communication protocol', 'C-NET'],
      ['Relative humidity', `≤95 % rel.`],
      ['Permissible air speed', `5 m/s`],
      ['Color', `Pure white, ~RAL 9010`]
    ],
    category: 'building automation'
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518065/amaspace/OOH740_f5zgns.jpg",
    name: `OOH740 - Multi-sensor smoke detector, ASA`,
    description: `For the detection of flaming fires caused by the combustion of liquid and solid matters, as well as smoldering fires. For reliable fire detection in environments with deceptive phenomena.
    Works according to the scattered-light principle with two sensors, optical forward and backward scattering. Opto-electronic sampling chamber blocks disturbing extraneous light but optimally detects both dark and light smoke particles. Two additional heat sensors increase the fire detector’s immunity to deceptive phenomena.
    In the collective mode you have the possibility to choose between three parameter sets: Standard Plus (PS1), Suppression (PS5) and High Sensitive Fast (PS9).
    The base must be ordered separately.
    Scope of delivery
    Detector and dust cap`,
    specification: [
      ['Standard', `CEA 4021 , EN 54-5 , EN 54-7 , EN 54-17`],
      ['Protection category', `IP40; IP42 with detector base seal`],
      ['Operating voltage', `DC 12…33 V`],
      ['Operating current', '0.25 mA'],
      ['Operating temperature', '-25…55 °C'],
      ['Storage temperature', '-30...+70 °C'],
      ['Quiescent current', '~170...250 μA'],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', 'C-NET -> FS720'],
      ['Communication protocol', 'C-NET , Collective/Conventional'],
      ['Relative humidity', '≤95 % rel.'],
      ['Dimensions (Ø x H)', '106 x 43 mm'],
      ['Color', 'Pure white, ~RAL 9010']
    ],
    category: 'building automation'
  },
  {
    id: 12,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518065/amaspace/OOHC740_lhpkkw.jpg",
    name: `OOHC740 - Fire and CO detector, neural ASA`,
    description: `Fire and CO detector for very early and reliable detection of emerging fire, due to analysis of the three criteria smoke, heat and gas. Very fast response to all carbon monoxide (CO) generating fires and very early and reliable alarming in environments with deceptive phenomena. Works according to the scattered-light principle with two sensors, optical forward and backward scattering. Opto-electronic sampling chamber blocks disturbing extraneous light but optimally detects both dark and light smoke particles. Two additional heat sensors and an additional CO sensor increase the fire detector’s immunity to deceptive phenomena and the response characteristics of the fire detector. Selectable detection behavior by application-specific ASA parameter sets. The additional CO analysis makes it exceptionally fast and ideal for applications where the occupants make speed of detection critical (e.g. nursing homes, hospitals, sheltered accommodations, etc.). Additional detection channels for CO life safety detection and CO or thermal ambient condition monitoring.
    The base must be ordered separately.
    Scope of delivery
    Detector and dust cap`,
    specification: [
      ['Standard', 'CEA 4021 , EN 54-5 , EN 54-7 , EN 54-17 , VdS 2806'],
      ['Protection category', 'IP40; IP42 with detector base seal'],
      ['Operating voltage', 'DC 12…33 V'],
      ['Operating current', '0.38 mA'],
      ['Operating temperature', '-10…50 °C'],
      ['Storage temperature', '-20...+55 °C'],
      ['Quiescent current', '~300...380 μA'],
      ['Ext. alarm indicator', '2'],
      ['System compatibility', 'C-NET -> FS720'],
      ['Communication protocol', 'C-NET'],
      ['Relative humidity', '≤95 % rel.'],
      ['Dimensions (Ø x H)', '106 x 43 mm'],
      ['Color', 'Pure white, ~RAL 9010'],
    ],
    category: 'building automation'
  },
  {
    id: 13,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FCI2003-A1_q22ybt.jpg",
    name: `FCI2003-A1 - Loop extension (FDnet/C-NET)`,
    description: `With the loop extension, the number of connectable loops is doubled from 2 to 4. The number of FDnet/C-NET addresses per station remains unchanged.
    Plugged onto the periphery board of the control panel. Each integrated line can be equipped with one loop extension (exclude FC721)`,
    specification: [
      ['Cable capacity', '0.2...1.5 mm2'],
      ['Number of detector lines', '2 loops or 4 stub lines'],
      ['Dimensions (W x H x D)', '48 x 20 x 70 mm]'],
    ],
    category: 'building automation'
  },
  {
    id: 14,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FCI2025-A1_ftvvkq.jpg",
    name: `FCI2025-A1 - Loop extension (FDnet/C-NET, P)`,
    description: `With the loop extension, the number of connectable loops is doubled from 2 to 4. The number of FDnet/C-NET addresses per station remains unchanged.
    Plugged onto the periphery board of the control panel. The loop extension is only compatible with a 1.5A periphery board (FCI2023 or FCI2024). Each integrated line can be equipped with one loop extension.`,
    specification: [
      ['Cable capacity', '0.2...1.5 mm2'],
      ['Number of detector lines', '2 loops or 4 stub lines']
    ],
    category: 'building automation'
  },
  {
    id: 15,
    img: "https://res.cloudinary.com/mcjovial/image/upload/v1680518064/amaspace/FCL2008-A1_s4ckji.jpg",
    name: `FCL2008-A1 - Line card (FDnet/C-NET, P)`,
    description: `The line card is an additional card for integrated FDnet/C-NET lines, mounted in card cage of fire control panel (modular). It is used to expand the fire control panel (modular) with additional FDnet/C-NET lines. The line card supports FDnet/C-NET lines with 1.5 A. All FDnet or C-NET devices can be connected to the line card. The line card is designed for 4 loops or 8 stub lines.`,
    specification: [
      ['Number of detector lines', '4 loops or 8 stub lines'],
      ['Number of addresses', '252']
    ],
    category: 'building automation'
  },
]
