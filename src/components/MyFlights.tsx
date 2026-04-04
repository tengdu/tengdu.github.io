"use client";

import FlightMap from "./FlightMap";

const airports: Record<string, { name: string; lat: number; lng: number }> = {
  SEA: { name: "西雅图", lat: 47.4502, lng: -122.3088 },
  NRT: { name: "东京成田", lat: 35.7653, lng: 140.3864 },
  HND: { name: "东京羽田", lat: 35.5494, lng: 139.7798 },
  CTS: { name: "札幌新千岁", lat: 42.7752, lng: 141.6922 },
  KIX: { name: "大阪关西", lat: 34.4273, lng: 135.244 },
  PKX: { name: "北京大兴", lat: 39.5098, lng: 116.4105 },
  PEK: { name: "北京首都", lat: 40.0799, lng: 116.6031 },
  AAT: { name: "阿勒泰", lat: 47.7499, lng: 88.0858 },
  XIY: { name: "西安咸阳", lat: 34.4471, lng: 108.7516 },
  CDG: { name: "巴黎戴高乐", lat: 49.0097, lng: 2.5479 },
  ORY: { name: "巴黎奥利", lat: 48.7233, lng: 2.3794 },
  SCL: { name: "圣地亚哥", lat: -33.393, lng: -70.7858 },
  PUQ: { name: "蓬塔阿雷纳斯", lat: -52.7359, lng: -70.8544 },
  FTE: { name: "埃尔卡拉法特", lat: -50.2803, lng: -72.0531 },
  USH: { name: "乌斯怀亚", lat: -54.8432, lng: -68.2958 },
  AEP: { name: "布宜诺斯艾利斯", lat: -34.5592, lng: -58.4156 },
  EZE: { name: "布宜诺斯艾利斯埃塞萨", lat: -34.8222, lng: -58.5358 },
  IGU: { name: "伊瓜苏", lat: -25.5962, lng: -54.4872 },
  GIG: { name: "里约热内卢", lat: -22.81, lng: -43.2506 },
  GRU: { name: "圣保罗", lat: -23.4356, lng: -46.4731 },
  JFK: { name: "纽约肯尼迪", lat: 40.6413, lng: -73.7781 },
  EWR: { name: "纽约纽瓦克", lat: 40.6895, lng: -74.1745 },
  LGA: { name: "纽约拉瓜迪亚", lat: 40.7769, lng: -73.874 },
  CPH: { name: "哥本哈根", lat: 55.6181, lng: 12.6561 },
  VCE: { name: "威尼斯", lat: 45.5053, lng: 12.3519 },
  IAD: { name: "华盛顿杜勒斯", lat: 38.9531, lng: -77.4565 },
  ORD: { name: "芝加哥奥黑尔", lat: 41.9742, lng: -87.9073 },
  PVG: { name: "上海浦东", lat: 31.1443, lng: 121.8083 },
  KMG: { name: "昆明长水", lat: 24.992, lng: 102.7433 },
  LJG: { name: "丽江三义", lat: 26.6803, lng: 100.246 },
  LAS: { name: "拉斯维加斯", lat: 36.084, lng: -115.1537 },
  DEN: { name: "丹佛", lat: 39.8561, lng: -104.6737 },
};

const f = (from: string, to: string) => ({
  from: airports[from],
  to: airports[to],
});

const flights = [
  // 2025-12
  f("NRT", "SEA"),
  f("CTS", "NRT"),
  f("KIX", "CTS"),
  f("PKX", "KIX"),
  f("AAT", "PKX"),
  f("XIY", "AAT"),
  f("PKX", "XIY"),
  // 2025-11 to 12
  f("CDG", "PEK"),
  f("SCL", "CDG"),
  f("PUQ", "SCL"),
  f("FTE", "USH"),
  f("AEP", "FTE"),
  // 2025-10
  f("IGU", "EZE"),
  f("GIG", "IGU"),
  f("JFK", "GRU"),
  // 2025-09
  f("SEA", "EWR"),
  f("JFK", "SEA"),
  f("CPH", "JFK"),
  f("VCE", "CPH"),
  // 2025-08
  f("CDG", "VCE"),
  f("EWR", "ORY"),
  f("IAD", "LGA"),
  f("SEA", "IAD"),
  // 2025-07
  f("ORD", "SEA"),
  f("SEA", "ORD"),
  // 2025-05
  f("PVG", "SEA"),
  f("PEK", "PVG"),
  f("KMG", "PEK"),
  f("XIY", "LJG"),
  f("NRT", "XIY"),
  // 2025-04
  f("SEA", "HND"),
  // 2025-03
  f("LAS", "SEA"),
  f("SEA", "LAS"),
  // 2025-01
  f("DEN", "SEA"),
  f("SEA", "DEN"),
];

export default function MyFlights() {
  return <FlightMap flights={flights} />;
}
