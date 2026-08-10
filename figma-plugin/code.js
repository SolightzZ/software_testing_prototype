// Trainly - Online Training Registration System (Thai prototype generator)
// Run once from Figma (Plugins > Development > Run). Creates a new page
// "Trainly · Prototype ไทย" with 8 screens + print previews and wires up
// prototype interactions. The existing pages are left untouched.

const C = {
  bg: '#EDEFF2',
  surface: '#FFFFFF',
  ink: '#1F242C',
  soft: '#39414D',
  muted: '#66707D',
  faint: '#98A1AE',
  line: '#E3E6EA',
  lineStrong: '#CFD5DC',
  graphite: '#272D35',
  graphiteHover: '#363E48',
  success: '#188A42',
  successBg: '#E8F6EE',
  pending: '#B45309',
  pendingBg: '#FCF3E4',
  review: '#1D4ED8',
  reviewBg: '#EAF0FE',
  danger: '#C02B2B',
  dangerBg: '#FCECEC',
  neutral: '#5B6570',
  neutralBg: '#EEF1F4',
  white: '#FFFFFF',
}

const SHADOW = [
  {
    type: 'DROP_SHADOW',
    color: { r: 0.05, g: 0.07, b: 0.1, a: 0.08 },
    offset: { x: 0, y: 3 },
    radius: 10,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL',
  },
]

const PLUGIN_VERSION = 'v7'
let FONT = 'Prompt'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const COURSES = [
  { name: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', tag: 'DATA', date: '4 – 5 กันยายน 2569', loc: 'อบรม ณ เดอะควอเตอร์ ลาดพร้าว กรุงเทพฯ', online: false, price: '2,900 บาท', seats: 'เหลือ 15 ที่นั่ง', status: 'เปิดรับสมัคร', color: 'success' },
  { name: 'AI สำหรับงานประจำวัน', tag: 'AI', date: '19 สิงหาคม 2569', loc: 'อบรมออนไลน์ (Zoom)', online: true, price: '1,900 บาท', seats: 'เหลือ 8 ที่นั่ง', status: 'เปิดรับสมัคร', color: 'success' },
  { name: 'สาระสำคัญของการวิจัย UX', tag: 'UX', date: '12 กันยายน 2569', loc: 'อบรม ณ มหาวิทยาลัยเชียงใหม่', online: false, price: '2,500 บาท', seats: 'เต็มแล้ว', status: 'เต็ม', color: 'pending' },
  { name: 'ความมั่นคงปลอดภัยไซเบอร์เบื้องต้น', tag: 'SEC', date: '26 – 27 สิงหาคม 2569', loc: 'อบรมออนไลน์ (Zoom)', online: true, price: '2,200 บาท', seats: 'เหลือ 20 ที่นั่ง', status: 'เปิดรับสมัคร', color: 'success' },
  { name: 'การบริหารโครงการมืออาชีพ', tag: 'PM', date: '2 – 3 ตุลาคม 2569', loc: 'อบรม ณ โรงแรมเซ็นทารา แกรนด์', online: false, price: '3,200 บาท', seats: 'ปิดรับสมัคร', status: 'ปิดรับสมัคร', color: 'neutral' },
  { name: 'การออกแบบฐานข้อมูลและ SQL', tag: 'DB', date: '9 – 10 ตุลาคม 2569', loc: 'อบรมออนไลน์ (Zoom)', online: true, price: '2,400 บาท', seats: 'เหลือ 12 ที่นั่ง', status: 'เปิดรับสมัคร', color: 'success' },
]

const REGS = [
  { no: 'REG-2026-0001', name: 'สมชาย ใจดี', course: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', regDate: '01 ส.ค. 2569', trainDate: '04 ก.ย. 2569', pay: 'รอชำระเงิน', payColor: 'pending', status: 'รอชำระเงิน', statusColor: 'pending' },
  { no: 'REG-2026-0002', name: 'วิภา ศรีสุวรรณ', course: 'AI สำหรับงานประจำวัน', regDate: '01 ส.ค. 2569', trainDate: '19 ส.ค. 2569', pay: 'ชำระเงินแล้ว', payColor: 'success', status: 'ยืนยันแล้ว', statusColor: 'success' },
  { no: 'REG-2026-0003', name: 'ณัฐวุฒิ แสงทอง', course: 'การบริหารโครงการมืออาชีพ', regDate: '02 ส.ค. 2569', trainDate: '02 ต.ค. 2569', pay: 'รอตรวจสอบ', payColor: 'review', status: 'รอตรวจสอบ', statusColor: 'review' },
  { no: 'REG-2026-0004', name: 'มณีรัตน์ วงศ์วิเศษ', course: 'ความมั่นคงปลอดภัยไซเบอร์เบื้องต้น', regDate: '02 ส.ค. 2569', trainDate: '26 ส.ค. 2569', pay: 'ชำระเงินแล้ว', payColor: 'success', status: 'ยืนยันแล้ว', statusColor: 'success' },
  { no: 'REG-2026-0005', name: 'อนุชา พลตรี', course: 'สาระสำคัญของการวิจัย UX', regDate: '03 ส.ค. 2569', trainDate: '12 ก.ย. 2569', pay: 'ชำระเงินแล้ว', payColor: 'success', status: 'ยืนยันแล้ว', statusColor: 'success' },
  { no: 'REG-2026-0006', name: 'พัชรา กลิ่นหอม', course: 'การออกแบบฐานข้อมูลและ SQL', regDate: '03 ส.ค. 2569', trainDate: '09 ต.ค. 2569', pay: 'ยกเลิก', payColor: 'danger', status: 'ยกเลิก', statusColor: 'danger' },
  { no: 'REG-2026-0007', name: 'กิตติพงษ์ ทรัพย์มาก', course: 'AI สำหรับงานประจำวัน', regDate: '04 ส.ค. 2569', trainDate: '19 ส.ค. 2569', pay: 'รอชำระเงิน', payColor: 'pending', status: 'รอชำระเงิน', statusColor: 'pending' },
  { no: 'REG-2026-0008', name: 'นริศรา แสงจันทร์', course: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', regDate: '04 ส.ค. 2569', trainDate: '04 ก.ย. 2569', pay: 'รอตรวจสอบ', payColor: 'review', status: 'รอตรวจสอบ', statusColor: 'review' },
]

const PAYMENTS = [
  { no: 'REG-2026-0001', name: 'สมชาย ใจดี', course: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', amount: '2,900 บาท', due: '20 ส.ค. 2569', status: 'รอชำระเงิน', color: 'pending', method: 'โอนเงินผ่านธนาคาร' },
  { no: 'REG-2026-0002', name: 'วิภา ศรีสุวรรณ', course: 'AI สำหรับงานประจำวัน', amount: '1,900 บาท', due: '15 ส.ค. 2569', status: 'ชำระเงินแล้ว', color: 'success', method: 'โอนเงินผ่านธนาคาร' },
  { no: 'REG-2026-0003', name: 'ณัฐวุฒิ แสงทอง', course: 'การบริหารโครงการมืออาชีพ', amount: '3,200 บาท', due: '18 ส.ค. 2569', status: 'รอตรวจสอบ', color: 'review', method: 'บัตรเครดิต' },
  { no: 'REG-2026-0004', name: 'มณีรัตน์ วงศ์วิเศษ', course: 'ความมั่นคงปลอดภัยไซเบอร์เบื้องต้น', amount: '2,200 บาท', due: '10 ส.ค. 2569', status: 'ชำระเงินแล้ว', color: 'success', method: 'พร้อมเพย์' },
  { no: 'REG-2026-0006', name: 'พัชรา กลิ่นหอม', course: 'การออกแบบฐานข้อมูลและ SQL', amount: '2,400 บาท', due: '—', status: 'ยกเลิก', color: 'danger', method: '—' },
  { no: 'REG-2026-0007', name: 'กิตติพงษ์ ทรัพย์มาก', course: 'AI สำหรับงานประจำวัน', amount: '1,900 บาท', due: '22 ส.ค. 2569', status: 'รอชำระเงิน', color: 'pending', method: 'พร้อมเพย์' },
]

const REPORT = [
  { course: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', count: 62, paid: 54, rate: '87%', revenue: '179,800 บาท' },
  { course: 'AI สำหรับงานประจำวัน', count: 48, paid: 42, rate: '88%', revenue: '91,200 บาท' },
  { course: 'สาระสำคัญของการวิจัย UX', count: 35, paid: 30, rate: '86%', revenue: '87,500 บาท' },
  { course: 'ความมั่นคงปลอดภัยไซเบอร์เบื้องต้น', count: 40, paid: 33, rate: '83%', revenue: '88,000 บาท' },
  { course: 'การบริหารโครงการมืออาชีพ', count: 33, paid: 28, rate: '85%', revenue: '105,600 บาท' },
  { course: 'การออกแบบฐานข้อมูลและ SQL', count: 30, paid: 24, rate: '80%', revenue: '72,000 บาท' },
]

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

function hex(h) {
  const v = h.replace('#', '')
  return { r: parseInt(v.substr(0, 2), 16) / 255, g: parseInt(v.substr(2, 2), 16) / 255, b: parseInt(v.substr(4, 2), 16) / 255 }
}

function add(parent, ...nodes) {
  nodes.forEach((n) => parent.appendChild(n))
  return parent
}

function rect(x, y, w, h, o = {}) {
  const n = figma.createRectangle()
  n.name = o.name || 'rect'
  n.x = x
  n.y = y
  n.resize(w, h)
  n.fills = o.fill === null ? [] : [{ type: 'SOLID', color: hex(o.fill || C.surface) }]
  n.strokes = o.stroke ? [{ type: 'SOLID', color: hex(o.stroke) }] : []
  n.strokeWeight = o.strokeWeight || 1
  if (o.radius) {
    if (typeof o.radius === 'number') {
      n.cornerRadius = o.radius
    } else {
      n.topLeftRadius = o.radius.topLeft || 0
      n.topRightRadius = o.radius.topRight || 0
      n.bottomLeftRadius = o.radius.bottomLeft || 0
      n.bottomRightRadius = o.radius.bottomRight || 0
    }
  }
  if (o.opacity !== undefined) n.opacity = o.opacity
  return n
}

function line(parent, x, y, w, color) {
  return add(parent, rect(x, y, w, 1, { fill: color || C.line, name: 'divider' }))
}

function frame(name, x, y, w, h, o = {}) {
  const n = figma.createFrame()
  n.name = name
  n.x = x
  n.y = y
  n.resize(w, h)
  n.fills = o.fill === null ? [] : [{ type: 'SOLID', color: hex(o.fill || C.surface) }]
  n.strokes = o.stroke ? [{ type: 'SOLID', color: hex(o.stroke) }] : []
  n.strokeWeight = o.strokeWeight || 1
  n.clipsContent = o.clips !== false
  if (o.radius) {
    if (typeof o.radius === 'number') {
      n.cornerRadius = o.radius
    } else {
      n.topLeftRadius = o.radius.topLeft || 0
      n.topRightRadius = o.radius.topRight || 0
      n.bottomLeftRadius = o.radius.bottomLeft || 0
      n.bottomRightRadius = o.radius.bottomRight || 0
    }
  }
  if (o.shadow) n.effects = SHADOW
  if (o.opacity !== undefined) n.opacity = o.opacity
  n.layoutMode = 'NONE'
  return n
}

function txt(str, o = {}) {
  const n = figma.createText()
  n.name = o.name || String(str).slice(0, 24)
  n.fontName = { family: FONT, style: pickStyle(o.weight) }
  n.characters = str
  n.fontSize = o.size || 14
  n.fills = [{ type: 'SOLID', color: hex(o.color || C.ink) }]
  if (o.letter) n.letterSpacing = { value: o.letter, unit: 'PIXELS' }
  n.lineHeight = { value: o.lh || Math.round((o.size || 14) * 1.45), unit: 'PIXELS' }
  if (o.w) {
    n.textAutoResize = 'HEIGHT'
    n.width = o.w
  } else {
    n.textAutoResize = 'WIDTH_AND_HEIGHT'
  }
  if (o.align) n.textAlignHorizontal = o.align
  if (o.x !== undefined) n.x = o.x
  if (o.y !== undefined) n.y = o.y
  if (o.opacity !== undefined) n.opacity = o.opacity
  return n
}

function button(label, o = {}) {
  const w = o.w || 160
  const h = o.h || 44
  const kind = o.kind || 'primary'
  const bg = kind === 'danger' ? C.danger : kind === 'secondary' ? C.white : kind === 'ghost' ? C.surface : o.color || C.graphite
  const textColor = kind === 'primary' || kind === 'danger' ? '#FFFFFF' : o.ink || C.ink
  const f = frame(o.name || 'btn_' + label, o.x || 0, o.y || 0, w, h, {
    fill: bg,
    radius: o.radius || 10,
    stroke: kind === 'secondary' || kind === 'ghost' ? C.lineStrong : null,
    shadow: o.shadow,
  })
  const t = txt(label, { size: o.fontSize || 15, weight: 'SemiBold', color: textColor, align: 'CENTER', w })
  t.y = (h - t.height) / 2
  f.appendChild(t)
  return f
}

function badge(label, o = {}) {
  const map = {
    success: [C.success, C.successBg],
    pending: [C.pending, C.pendingBg],
    review: [C.review, C.reviewBg],
    danger: [C.danger, C.dangerBg],
    neutral: [C.neutral, C.neutralBg],
  }
  const [fg, bg] = map[o.variant || 'neutral']
  const t = txt(label, { size: o.size || 12.5, weight: 'SemiBold', color: fg })
  const w = t.width + (o.padX || 16)
  const f = frame(o.name || 'badge_' + label, o.x || 0, o.y || 0, w, o.h || 26, { fill: bg, radius: 13 })
  t.x = (w - t.width) / 2
  t.y = ((o.h || 26) - t.height) / 2
  f.appendChild(t)
  return f
}

function pill(label, x, y, o = {}) {
  const t = txt(label, { size: o.size || 12.5, weight: 'SemiBold', color: o.color || C.graphite, letter: 0.4 })
  const w = t.width + (o.padX || 24)
  const f = frame(o.name || 'pill_' + label, x, y, w, o.h || 30, { fill: o.fill || C.surface, radius: 15, stroke: o.stroke || C.lineStrong })
  t.x = (w - t.width) / 2
  t.y = ((o.h || 30) - t.height) / 2
  f.appendChild(t)
  return f
}

function field(parent, o) {
  const x = o.x, y = o.y, w = o.w || 380, h = o.h || 44
  add(parent, txt(o.label, { x, y, size: 13, weight: 'SemiBold', color: C.soft }))
  const box = rect(x, y + 24, w, h, { fill: o.disabled ? C.bg : C.white, radius: 10, stroke: o.error ? C.danger : C.lineStrong, name: 'input_' + o.label })
  const v = txt(o.value || o.placeholder, { x: x + 14, y: y + 24, size: 14, color: o.value ? C.ink : C.faint })
  v.y = y + 24 + (h - v.height) / 2
  add(parent, box, v)
  if (o.suffix) add(parent, txt(o.suffix, { x: x + w - 14 - (o.suffix.length > 1 ? 30 : 10), y: y + 24, size: 14, color: C.ink }))
  if (o.chevron) {
    const cy = y + 24 + h / 2
    const l = rect(x + w - 18, cy - 1, 8, 2, { fill: C.muted, name: 'chev_l' })
    const r = rect(x + w - 12, cy - 1, 8, 2, { fill: C.muted, name: 'chev_r' })
    l.rotation = -45
    r.rotation = 45
    add(parent, l, r)
  }
  if (o.hint) add(parent, txt(o.hint, { x, y: y + 24 + h + 4, size: 12, color: C.muted }))
  if (o.error) add(parent, txt(o.error, { x, y: y + 24 + h + 4, size: 12, color: C.danger }))
}

function statCard(x, y, w, h, o) {
  const f = frame('stat_' + o.label, x, y, w, h, { fill: C.surface, radius: 14, stroke: C.line, shadow: true })
  add(f, txt(o.value, { x: 20, y: 16, size: 30, weight: 'ExtraBold', color: o.valueColor || C.ink }))
  add(f, txt(o.label, { x: 20, y: 60, size: 13.5, color: C.muted }))
  if (o.delta) add(f, txt(o.delta, { x: 20, y: 78, size: 12.5, weight: 'SemiBold', color: o.up ? C.success : C.danger }))
  return f
}

function linkTo(source, dest, transition) {
  if (!source || !dest) return
  try {
    source.reactions = [
      {
        trigger: { type: 'ON_CLICK', delay: 0 },
        action: {
          type: 'NODE',
          destinationId: dest.id,
          navigation: 'NAVIGATE',
          transition: { type: transition || 'DISSOLVE', duration: 240, easing: 'EASE_IN_AND_OUT' },
        },
      },
    ]
  } catch (e) {
    throw new Error(`เชื่อม ${source.name} -> ${dest.name} ไม่สำเร็จ: ${e.message}`)
  }
}

// ---------------------------------------------------------------------------
// Shared chrome
// ---------------------------------------------------------------------------

function logo(x, y, size, nameSize, o = {}) {
  const box = rect(x, y, size, size, { fill: C.graphite, radius: Math.round(size / 3), name: 'logo_box' })
  const t = txt('T', { x: x + (size - 13) / 2, y: y + size * 0.14, size: Math.round(size * 0.6), weight: 'ExtraBold', color: '#FFFFFF' })
  const n = txt(o.name || 'Trainly', { x: x + size + 12, y: y + (size - (nameSize || 20) * 1.45) / 2, size: nameSize || 20, weight: 'Bold', color: o.color || C.ink })
  return [box, t, n]
}

function publicNav(parent, a, active) {
  const nav = frame('nav', 0, 0, 1440, 76, { fill: C.surface, stroke: C.line })
  add(parent, nav)
  add(nav, ...logo(40, 18, 40, 20))
  const items = [['หน้าหลัก', 'home'], ['หลักสูตร', 'courses'], ['การสมัครของฉัน', 'myReg'], ['ช่วยเหลือ', 'help']]
  let x = 270
  for (const [label, key] of items) {
    const t = txt(label, { x, y: 29, size: 14.5, weight: key === active ? 'Bold' : 'Regular', color: key === active ? C.graphite : C.muted })
    add(nav, t)
    if (key === active) add(nav, rect(x - 4, 72, t.width + 8, 3, { fill: C.graphite, radius: 2, name: 'nav_underline' }))
    x += t.width + 40
    if (key === 'courses') a.courses = t
    if (key === 'myReg') a.myReg = t
    if (key === 'help') a.help = t
  }
  const search = rect(700, 18, 300, 40, { fill: C.bg, radius: 20, name: 'search' })
  add(nav, search, txt('ค้นหาหลักสูตร...', { x: 722, y: 31, size: 13.5, color: C.faint }))
  if (!active) {
    a.login = button('เข้าสู่ระบบ', { x: 1075, y: 17, w: 132, h: 42, kind: 'secondary', name: 'btn_login' })
    a.register = button('สมัครสมาชิก', { x: 1220, y: 17, w: 150, h: 42, name: 'btn_register' })
    add(nav, a.login, a.register)
  } else {
    const av = rect(1220, 18, 40, 40, { fill: C.graphite, radius: 20, name: 'avatar' })
    add(nav, av, txt('สจ', { x: 1230, y: 27, size: 13, weight: 'SemiBold', color: '#FFFFFF' }), txt(active, { x: 1276, y: 31, size: 13.5, color: C.soft }))
  }
}

function adminSidebar(parent, a, active) {
  const sb = frame('sidebar', 0, 0, 240, 900, { fill: C.surface, stroke: C.line })
  add(parent, sb)
  add(sb, ...logo(24, 22, 40, 19))
  add(sb, txt('เมนูผู้ดูแลระบบ', { x: 24, y: 92, size: 11.5, weight: 'SemiBold', letter: 0.6, color: C.faint }))
  const items = [['ภาพรวม', 'dashboard', 'D'], ['การสมัคร', 'registrations', 'R'], ['การชำระเงิน', 'payments', 'P'], ['รายงาน', 'reports', 'R']]
  let y = 122
  for (const [label, key, letter] of items) {
    const sel = key === active
    const row = frame('menu_' + key, 16, y, 208, 48, { fill: sel ? C.graphite : null, radius: 12 })
    add(sb, row)
    const ic = rect(24, y + 12, 24, 24, { fill: sel ? '#FFFFFF22' : C.bg, radius: 7, name: 'menu_icon' })
    add(sb, ic, txt(letter, { x: 31, y: y + 17, size: 12, weight: 'Bold', color: sel ? '#FFFFFF' : C.muted }))
    add(sb, txt(label, { x: 62, y: y + 15, size: 14, weight: sel ? 'Bold' : 'Regular', color: sel ? '#FFFFFF' : C.soft }))
    if (key === 'payments') a.payments = row
    if (key === 'reports') a.reports = row
    if (key === 'registrations') a.registrations = row
    if (key === 'dashboard') a.dashboard = row
    y += 58
  }
  const foot = frame('sidebar_foot', 16, 760, 208, 104, { fill: C.bg, radius: 14 })
  add(sb, foot, txt('ผู้ดูแลระบบ', { x: 32, y: 776, size: 13.5, weight: 'Bold', color: C.ink }), txt('admin@trainly.ac.th', { x: 32, y: 796, size: 12, color: C.muted }))
  add(sb, rect(32, 826, 40, 40, { fill: C.graphite, radius: 20, name: 'admin_av' }), txt('อ', { x: 44, y: 835, size: 14, weight: 'SemiBold', color: '#FFFFFF' }))
  add(sb, txt('ออกจากระบบ', { x: 86, y: 839, size: 12.5, color: C.muted }))
  add(sb, rect(0, 899, 240, 1, { fill: C.line, name: 'sb_border' }))
}

function contentWrap(parent, x, y, w, h) {
  return frame('content', x, y, w, h, { fill: C.bg })
}

function pageHeader(parent, title, subtitle, x = 40) {
  add(parent, txt(title, { x, y: 96, size: 28, weight: 'Bold', color: C.ink }))
  if (subtitle) add(parent, txt(subtitle, { x, y: 134, size: 14.5, color: C.muted }))
}

// ---------------------------------------------------------------------------
// 1. Home
// ---------------------------------------------------------------------------

function buildHome() {
  const a = {}
  const page = frame('01 · หน้าหลัก (Home)', 0, 0, 1440, 1560, { fill: C.bg })
  const nav = frame('nav', 0, 0, 1440, 76, { fill: C.surface, stroke: C.line })
  add(page, nav)
  add(nav, ...logo(40, 18, 40, 20))
  const items = [['หน้าหลัก', 'home'], ['หลักสูตร', 'courses'], ['การสมัครของฉัน', 'myReg'], ['ช่วยเหลือ', 'help']]
  let nx = 270
  for (const [label, key] of items) {
    const t = txt(label, { x: nx, y: 29, size: 14.5, weight: key === 'home' ? 'Bold' : 'Regular', color: key === 'home' ? C.graphite : C.muted })
    add(nav, t)
    if (key === 'home') add(nav, rect(nx - 4, 72, t.width + 8, 3, { fill: C.graphite, radius: 2, name: 'nav_underline' }))
    nx += t.width + 40
    if (key === 'myReg') a.myReg = t
    if (key === 'courses') a.courses = t
  }
  add(nav, rect(700, 18, 300, 40, { fill: C.bg, radius: 20, name: 'search' }), txt('ค้นหาหลักสูตร...', { x: 722, y: 31, size: 13.5, color: C.faint }))
  a.login = button('เข้าสู่ระบบ', { x: 1075, y: 17, w: 132, h: 42, kind: 'secondary', name: 'btn_login' })
  a.register = button('สมัครสมาชิก', { x: 1220, y: 17, w: 150, h: 42, name: 'btn_register' })
  add(nav, a.login, a.register)

  // hero
  const hero = frame('hero', 0, 76, 1440, 340, { fill: C.surface })
  add(page, hero)
  add(hero, pill('ระบบลงทะเบียนฝึกอบรมออนไลน์', 40, 76, { fill: C.bg, color: C.graphite }))
  add(hero, txt('พัฒนาทักษะ ต่อยอดอาชีพ\nไปกับ Trainly', { x: 40, y: 118, size: 40, weight: 'ExtraBold', color: C.ink, lh: 58 }))
  add(hero, txt('ค้นหาหลักสูตรอบรมจากสถาบันชั้นนำ ทั่วประเทศไทย', { x: 40, y: 244, size: 15.5, color: C.muted }))
  a.browse = button('ดูหลักสูตรทั้งหมด', { x: 40, y: 290, w: 190, h: 48, name: 'btn_browse' })
  const how = button('วิธีใช้งาน', { x: 244, y: 290, w: 140, h: 48, kind: 'secondary', name: 'btn_how' })
  add(hero, a.browse, how)
  const card = frame('hero_card', 820, 80, 560, 260, { fill: C.bg, radius: 20, shadow: true })
  add(hero, card)
  add(card, txt('ภาพรวมหลักสูตร ณ เดือนสิงหาคม 2569', { x: 32, y: 24, size: 15, weight: 'Bold', color: C.ink }))
  add(card, rect(32, 66, 150, 76, { fill: C.graphite, radius: 14, name: 'hc_1' }), txt('12', { x: 42, y: 80, size: 26, weight: 'ExtraBold', color: '#FFFFFF' }), txt('หลักสูตรอบรม', { x: 42, y: 112, size: 12, color: '#C7CDD5' }))
  add(card, rect(196, 66, 150, 76, { fill: C.surface, radius: 14, stroke: C.line, name: 'hc_2' }), txt('3,240+', { x: 206, y: 80, size: 26, weight: 'ExtraBold', color: C.ink }), txt('ผู้เข้าอบรม', { x: 206, y: 112, size: 12, color: C.muted }))
  add(card, rect(360, 66, 168, 76, { fill: C.surface, radius: 14, stroke: C.line, name: 'hc_3' }), txt('96%', { x: 370, y: 80, size: 26, weight: 'ExtraBold', color: C.success }), txt('ความพึงพอใจ', { x: 370, y: 112, size: 12, color: C.muted }))
  const bars = [36, 52, 44, 70, 58, 82, 66]
  let bx = 32
  add(card, txt('สถิติการสมัครรายเดือน', { x: 32, y: 166, size: 12.5, weight: 'SemiBold', color: C.muted }))
  for (const h of bars) {
    add(card, rect(bx, 236 - h, 24, h, { fill: h === 82 ? C.graphite : C.lineStrong, radius: 5, name: 'bar' }))
    bx += 30
  }
  add(card, txt('ม.ค. – ส.ค.', { x: 32, y: 240, size: 11, color: C.faint }))

  // courses
  add(page, txt('หลักสูตรอบรมยอดนิยม', { x: 40, y: 452, size: 24, weight: 'Bold', color: C.ink }))
  add(page, txt('ดูหลักสูตรทั้งหมด  →', { x: 1250, y: 460, size: 14, weight: 'SemiBold', color: C.graphite }))
  const cards = []
  COURSES.forEach((c, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const cx = 40 + col * 460
    const cy = 504 + row * 340
    const card = frame('course_' + i, cx, cy, 430, 316, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
    add(page, card)
    const banner = rect(0, 0, 430, 96, { fill: C.graphite, radius: { topLeft: 16, topRight: 16, bottomLeft: 0, bottomRight: 0 }, name: 'banner' })
    add(card, banner)
    add(card, badge(c.tag, { x: 24, y: 20, variant: 'neutral', padX: 18 }))
    add(card, txt('หลักสูตรอบรม · ประกาศนียบัตรรับรอง', { x: 24, y: 120, size: 12, color: C.faint }))
    add(card, txt(c.name, { x: 24, y: 140, size: 18, weight: 'Bold', color: C.ink }))
    add(card, txt('วันที่อบรม :  ' + c.date, { x: 24, y: 176, size: 13, color: C.muted }))
    add(card, txt('สถานที่   :  ' + c.loc, { x: 24, y: 198, size: 13, color: C.muted }))
    add(card, txt('ที่นั่ง    :  ' + c.seats, { x: 24, y: 220, size: 12.5, color: C.faint }))
    add(card, line(card, 24, 246, 382))
    add(card, badge(c.status, { x: 24, y: 260, variant: c.color }))
    add(card, txt(c.price, { x: 430 - 24 - 120, y: 262, size: 16, weight: 'Bold', color: C.graphite }))
    const btn = button('สมัครอบรม', { x: 24, y: 296, w: 382, h: 42, name: 'btn_reg_' + i, color: c.color === 'success' ? C.graphite : C.neutral })
    add(card, btn)
    cards.push(btn)
  })
  a.courseButtons = cards

  // info strip
  const info = frame('info', 40, 1184, 1360, 160, { fill: C.surface, radius: 18, stroke: C.line })
  add(page, info)
  const cols = [
    ['ใครสมัครได้บ้าง?', 'บุคลากร นักศึกษา และบุคคลทั่วไปที่สนใจพัฒนาทักษะการทำงาน'],
    ['ขั้นตอนการสมัคร', 'สมัครสมาชิก → เลือกหลักสูตร → กรอกข้อมูล → ยืนยันการชำระเงิน'],
    ['การชำระเงิน', 'โอนเงินผ่านธนาคาร / พร้อมเพย์ / บัตรเครดิต พร้อมรับใบเสร็จออนไลน์'],
  ]
  cols.forEach(([t, s], i) => {
    const x = 48 + i * 440
    add(info, rect(x, 28, 34, 34, { fill: C.bg, radius: 9, name: 'info_ic' }), txt(String(i + 1), { x: x + 11, y: 34, size: 13, weight: 'Bold', color: C.graphite }))
    add(info, txt(t, { x: x + 48, y: 30, size: 15.5, weight: 'Bold', color: C.ink }))
    add(info, txt(s, { x: x, y: 76, size: 13, color: C.muted, w: 360, lh: 20 }))
  })

  // footer
  const foot = frame('footer', 0, 1376, 1440, 184, { fill: C.graphite })
  add(page, foot)
  add(foot, rect(48, 0, 40, 40, { fill: '#FFFFFF1E', radius: 12, name: 'foot_logo' }), txt('T', { x: 59, y: 5, size: 22, weight: 'ExtraBold', color: '#FFFFFF' }), txt('Trainly', { x: 100, y: 10, size: 18, weight: 'Bold', color: '#FFFFFF' }))
  add(foot, txt('ระบบลงทะเบียนฝึกอบรมออนไลน์ เพื่อการพัฒนาบุคลากรอย่างยั่งยืน', { x: 48, y: 64, size: 13, color: '#AEB6C1', w: 420 }))
  add(foot, txt('ลิงก์ด่วน', { x: 620, y: 28, size: 14, weight: 'Bold', color: '#FFFFFF' }))
  const fl = ['หน้าหลัก', 'หลักสูตรอบรม', 'การสมัครของฉัน', 'คำถามที่พบบ่อย']
  fl.forEach((s, i) => add(foot, txt(s, { x: 620, y: 60 + i * 26, size: 13, color: '#AEB6C1' })))
  add(foot, txt('ติดต่อเรา', { x: 900, y: 28, size: 14, weight: 'Bold', color: '#FFFFFF' }))
  const fc = ['โทรศัพท์ : 02-123-4567', 'อีเมล : contact@trainly.ac.th', 'เวลาทำการ : จ.–ศ. 08.30–17.30 น.', 'สำนักงาน : ถนนพหลโยธิน กรุงเทพฯ']
  fc.forEach((s, i) => add(foot, txt(s, { x: 900, y: 60 + i * 26, size: 13, color: '#AEB6C1' })))
  add(foot, txt('© 2569 Trainly – ระบบลงทะเบียนฝึกอบรมออนไลน์. สงวนลิขสิทธิ์.', { x: 48, y: 152, size: 12, color: '#7E8794' }))

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 2. Login
// ---------------------------------------------------------------------------

function buildLogin() {
  const a = {}
  const page = frame('02 · เข้าสู่ระบบ (Login)', 0, 0, 1440, 900, { fill: C.surface })
  const left = frame('login_visual', 0, 0, 620, 900, { fill: C.graphite })
  add(page, left)
  add(left, ...logo(48, 48, 44, 22, { color: '#FFFFFF' }))
  add(left, pill('ยินดีต้อนรับกลับ', 48, 150, { fill: '#FFFFFF14', color: '#D6DBE2', stroke: null }))
  add(left, txt('เรียนรู้ได้ทุกที่\nก้าวหน้าได้ทุกวัน', { x: 48, y: 196, size: 38, weight: 'ExtraBold', color: '#FFFFFF', lh: 54 }))
  add(left, txt('เข้าสู่ระบบเพื่อจัดการการอบรม ตรวจสอบสถานะ', { x: 48, y: 314, size: 15, color: '#B8C0CB', w: 480 }))
  add(left, txt('ติดตามสถานะการอบรมของคุณ', { x: 48, y: 372, size: 14, color: '#D6DBE2' }))
  add(left, txt('ตรวจสอบการชำระเงินได้แบบเรียลไทม์', { x: 48, y: 398, size: 14, color: '#D6DBE2' }))
  add(left, txt('ดาวน์โหลดใบเสร็จและใบรับรองได้ทันที', { x: 48, y: 424, size: 14, color: '#D6DBE2' }))
  const prog = frame('progress', 48, 500, 480, 120, { fill: '#FFFFFF12', radius: 16 })
  add(left, prog, txt('ความคืบหน้าการอบรมของคุณ', { x: 24, y: 20, size: 13.5, weight: 'Bold', color: '#FFFFFF' }))
  add(left, txt('2 จาก 3 หลักสูตรที่ลงทะเบียนแล้วเสร็จ', { x: 24, y: 48, size: 12.5, color: '#B8C0CB' }))
  add(left, rect(24, 82, 432, 8, { fill: '#FFFFFF1E', radius: 4, name: 'track' }))
  add(left, rect(24, 82, 280, 8, { fill: C.amber || '#F5A623', radius: 4, name: 'progress' }))

  const form = frame('form', 700, 60, 660, 780, { fill: C.surface })
  add(page, form)
  add(form, txt('เข้าสู่ระบบ', { x: 40, y: 16, size: 28, weight: 'Bold', color: C.ink }))
  add(form, txt('เข้าสู่ระบบเพื่อจัดการการอบรมของคุณ', { x: 40, y: 56, size: 14, color: C.muted }))
  const err = frame('error', 40, 96, 580, 46, { fill: C.dangerBg, radius: 10 })
  add(form, err, txt('อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง', { x: 60, y: 113, size: 13, weight: 'SemiBold', color: C.danger }))
  field(form, { label: 'อีเมล', placeholder: 'you@example.com', value: 'somchai@example.com', x: 40, y: 166, w: 580 })
  field(form, { label: 'รหัสผ่าน', placeholder: '••••••••', value: '', x: 40, y: 250, w: 580 })
  const cb = rect(40, 350, 18, 18, { fill: C.graphite, radius: 5, name: 'remember' })
  add(form, cb, txt('✓', { x: 43, y: 352, size: 12, weight: 'Bold', color: '#FFFFFF' }), txt('จดจำฉันไว้ในระบบ', { x: 68, y: 350, size: 13.5, color: C.soft }))
  add(form, txt('ลืมรหัสผ่าน?', { x: 500, y: 350, size: 13.5, weight: 'SemiBold', color: C.graphite }))
  a.signin = button('เข้าสู่ระบบ', { x: 40, y: 394, w: 580, h: 50, name: 'btn_signin' })
  add(form, a.signin)
  line(form, 40, 474, 580)
  add(form, txt('หรือดำเนินการต่อด้วย', { x: 285, y: 486, size: 12.5, color: C.faint }))
  a.admin = button('เข้าสู่ระบบในฐานะผู้ดูแลระบบ', { x: 40, y: 512, w: 580, h: 48, kind: 'secondary', name: 'btn_admin' })
  add(form, a.admin)
  line(form, 40, 590, 580)
  add(form, txt('ยังไม่มีบัญชีผู้ใช้?', { x: 40, y: 616, size: 14, color: C.muted }))
  a.signup = button('สมัครสมาชิก', { x: 168, y: 604, w: 452, h: 48, name: 'btn_signup' })
  add(form, a.signup)
  add(form, txt('การสมัครใช้เวลาไม่ถึง 2 นาที และไม่เสียค่าใช้จ่าย', { x: 40, y: 672, size: 12, color: C.faint }))
  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 3. Registration Form
// ---------------------------------------------------------------------------

function buildRegister() {
  const a = {}
  const page = frame('03 · แบบฟอร์มสมัครอบรม (Registration)', 0, 0, 1440, 900, { fill: C.bg })
  const nav = frame('nav', 0, 0, 1440, 76, { fill: C.surface, stroke: C.line })
  add(page, nav)
  add(nav, ...logo(40, 18, 40, 20))
  add(nav, txt('หน้าหลัก', { x: 270, y: 29, size: 14.5, color: C.muted }), txt('หลักสูตร', { x: 334, y: 29, size: 14.5, color: C.muted }))
  a.myReg = txt('การสมัครของฉัน', { x: 398, y: 29, size: 14.5, weight: 'Bold', color: C.graphite })
  add(nav, a.myReg, txt('ช่วยเหลือ', { x: 524, y: 29, size: 14.5, color: C.muted }))
  add(nav, rect(700, 18, 300, 40, { fill: C.bg, radius: 20, name: 'search' }), txt('ค้นหาหลักสูตร...', { x: 722, y: 31, size: 13.5, color: C.faint }))
  const av = rect(1220, 18, 40, 40, { fill: C.graphite, radius: 20, name: 'avatar' })
  add(nav, av, txt('สจ', { x: 1230, y: 27, size: 13, weight: 'SemiBold', color: '#FFFFFF' }), txt('สมชาย ใจดี', { x: 1276, y: 31, size: 13.5, color: C.soft }))

  pageHeader(page, 'สมัครอบรมหลักสูตร', 'กรอกข้อมูลให้ครบถ้วน เพื่อยืนยันการลงทะเบียนของคุณ')

  // stepper
  const steps = [['1', 'ข้อมูลผู้สมัคร', true], ['2', 'เลือกหลักสูตร', false], ['3', 'ยืนยันการสมัคร', false]]
  let sx = 40
  for (const [num, label, done] of steps) {
    const c = rect(sx, 178, 34, 34, { fill: done ? C.graphite : C.lineStrong, radius: 17, name: 'step_' + num })
    add(page, c, txt(num, { x: sx + 11, y: 185, size: 15, weight: 'Bold', color: '#FFFFFF' }))
    add(page, txt(label, { x: sx + 46, y: 187, size: 14.5, weight: 'SemiBold', color: done ? C.ink : C.muted }))
    sx += 300
    if (num !== '3') add(page, rect(sx - 34, 194, 40, 2, { fill: done ? C.lineStrong : C.line, name: 'step_line' }))
  }

  const form = frame('form_card', 40, 240, 900, 600, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(page, form)
  add(form, txt('ข้อมูลผู้สมัคร', { x: 32, y: 24, size: 16, weight: 'Bold', color: C.ink }))
  field(form, { label: 'ชื่อ', placeholder: 'ชื่อ', value: 'สมชาย', x: 32, y: 56, w: 404 })
  field(form, { label: 'นามสกุล', placeholder: 'นามสกุล', value: 'ใจดี', x: 464, y: 56, w: 404 })
  field(form, { label: 'อีเมล', placeholder: 'you@example.com', value: 'somchai@example.com', x: 32, y: 134, w: 404 })
  field(form, { label: 'หมายเลขโทรศัพท์', placeholder: '08X-XXX-XXXX', value: '081-234-5678', x: 464, y: 134, w: 404 })
  field(form, { label: 'หน่วยงาน / บริษัท / สถาบัน', placeholder: 'หน่วยงาน', value: 'บริษัท เทคโนโลยีไทย จำกัด', x: 32, y: 212, w: 404 })
  field(form, { label: 'ตำแหน่ง', placeholder: 'ตำแหน่ง', value: 'นักวิเคราะห์ระบบ', x: 464, y: 212, w: 404 })
  field(form, { label: 'หลักสูตรที่ต้องการอบรม', value: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', x: 32, y: 290, w: 404, chevron: true })
  field(form, { label: 'วันที่อบรม', value: '4 – 5 กันยายน 2569', x: 464, y: 290, w: 404, chevron: true })
  add(form, txt('ข้อมูลเพิ่มเติม (ถ้ามี)', { x: 32, y: 372, size: 13, weight: 'SemiBold', color: C.soft }))
  const ta = rect(32, 396, 836, 76, { fill: C.white, radius: 10, stroke: C.lineStrong, name: 'textarea' })
  add(form, ta, txt('ความต้องการพิเศษ อาหาร อุปกรณ์ช่วยฟัง ฯลฯ', { x: 46, y: 416, size: 13.5, color: C.faint }))
  const cbb = rect(32, 496, 18, 18, { fill: C.graphite, radius: 5, name: 'agree' })
  add(form, cbb, txt('✓', { x: 35, y: 498, size: 12, weight: 'Bold', color: '#FFFFFF' }))
  add(form, txt('ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้องครบถ้วน', { x: 60, y: 497, size: 13.5, color: C.soft }))
  add(form, txt('โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยันการสมัคร', { x: 60, y: 522, size: 12, color: C.danger }))
  a.cancel = button('ยกเลิก', { x: 32, y: 540, w: 130, h: 44, kind: 'secondary', name: 'btn_cancel' })
  a.submit = button('ยืนยันการสมัคร', { x: 178, y: 540, w: 200, h: 44, name: 'btn_submit' })
  add(form, a.cancel, a.submit)

  const sum = frame('summary', 970, 240, 430, 600, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(page, sum)
  add(sum, txt('สรุปการสมัคร', { x: 28, y: 24, size: 16, weight: 'Bold', color: C.ink }))
  line(sum, 28, 62, 374)
  add(sum, txt('หลักสูตรที่เลือก', { x: 28, y: 84, size: 13, color: C.muted }))
  add(sum, txt('การวิเคราะห์ข้อมูลขั้นประยุกต์', { x: 28, y: 106, size: 15, weight: 'SemiBold', color: C.ink, w: 320 }))
  add(sum, txt('วันที่อบรม', { x: 28, y: 150, size: 13, color: C.muted }))
  add(sum, txt('4 – 5 กันยายน 2569', { x: 28, y: 172, size: 15, weight: 'SemiBold', color: C.ink }))
  add(sum, txt('รูปแบบการอบรม', { x: 28, y: 216, size: 13, color: C.muted }))
  add(sum, txt('อบรมในสถานที่ (Onsite)', { x: 28, y: 238, size: 15, weight: 'SemiBold', color: C.ink }))
  line(sum, 28, 280, 374)
  add(sum, txt('ค่าลงทะเบียน', { x: 28, y: 302, size: 13, color: C.muted }))
  add(sum, txt('2,900 บาท', { x: 28, y: 324, size: 16, weight: 'Bold', color: C.ink }))
  add(sum, txt('ยอดรวมที่ต้องชำระ', { x: 28, y: 368, size: 13, color: C.muted }))
  add(sum, txt('2,900 บาท', { x: 28, y: 390, size: 24, weight: 'ExtraBold', color: C.graphite }))
  line(sum, 28, 438, 374)
  const pay = frame('pay_info', 28, 462, 374, 96, { fill: C.bg, radius: 12 })
  add(pay, txt('การชำระเงิน', { x: 20, y: 16, size: 13, weight: 'SemiBold', color: C.ink }))
  add(pay, txt('ชำระเงินภายใน 7 วัน หลังยืนยันการสมัคร', { x: 20, y: 44, size: 12.5, color: C.muted }))
  add(pay, txt('ช่องทาง : โอนเงิน / พร้อมเพย์ / บัตรเครดิต', { x: 20, y: 64, size: 12.5, color: C.muted }))
  add(sum, pay)

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 4. Registration Detail
// ---------------------------------------------------------------------------

function buildDetail() {
  const a = {}
  const page = frame('04 · รายละเอียดการสมัคร (Detail)', 0, 0, 1440, 900, { fill: C.bg })
  const nav = frame('nav', 0, 0, 1440, 76, { fill: C.surface, stroke: C.line })
  add(page, nav)
  add(nav, ...logo(40, 18, 40, 20))
  add(nav, txt('หน้าหลัก', { x: 270, y: 29, size: 14.5, color: C.muted }), txt('หลักสูตร', { x: 334, y: 29, size: 14.5, color: C.muted }))
  a.myReg = txt('การสมัครของฉัน', { x: 398, y: 29, size: 14.5, weight: 'Bold', color: C.graphite })
  add(nav, a.myReg, txt('ช่วยเหลือ', { x: 524, y: 29, size: 14.5, color: C.muted }))
  add(nav, rect(700, 18, 300, 40, { fill: C.bg, radius: 20, name: 'search' }), txt('ค้นหาหลักสูตร...', { x: 722, y: 31, size: 13.5, color: C.faint }))
  const av = rect(1220, 18, 40, 40, { fill: C.graphite, radius: 20, name: 'avatar' })
  add(nav, av, txt('สจ', { x: 1230, y: 27, size: 13, weight: 'SemiBold', color: '#FFFFFF' }), txt('สมชาย ใจดี', { x: 1276, y: 31, size: 13.5, color: C.soft }))

  add(page, txt('รายละเอียดการสมัคร', { x: 40, y: 96, size: 28, weight: 'Bold', color: C.ink }))
  add(page, txt('REG-2026-0001', { x: 40, y: 140, size: 18, weight: 'SemiBold', color: C.graphite }))
  add(page, badge('รอชำระเงิน', { x: 196, y: 140, variant: 'pending' }))
  a.edit = button('แก้ไขข้อมูล', { x: 1030, y: 126, w: 140, h: 44, kind: 'secondary', name: 'btn_edit' })
  a.pay = button('ชำระเงิน', { x: 1182, y: 126, w: 140, h: 44, name: 'btn_pay' })
  a.print = button('พิมพ์ใบสมัคร', { x: 1010, y: 126, w: 140, h: 44, kind: 'ghost', name: 'btn_print' })
  add(page, a.print, a.edit, a.pay)

  const info = frame('info_card', 40, 210, 900, 430, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(page, info)
  add(info, txt('หลักสูตรที่สมัคร', { x: 32, y: 26, size: 16, weight: 'Bold', color: C.ink }))
  add(info, badge('การวิเคราะห์ข้อมูล', { x: 32, y: 60, variant: 'neutral', padX: 18 }))
  add(info, txt('การวิเคราะห์ข้อมูลขั้นประยุกต์', { x: 32, y: 96, size: 20, weight: 'Bold', color: C.ink }))
  add(info, txt('4 – 5 กันยายน 2569   |   อบรม ณ เดอะควอเตอร์ ลาดพร้าว กรุงเทพฯ', { x: 32, y: 132, size: 13.5, color: C.muted }))
  line(info, 32, 172, 836)
  add(info, txt('ข้อมูลผู้สมัคร', { x: 32, y: 192, size: 16, weight: 'Bold', color: C.ink }))
  const rows = [
    ['ชื่อ-นามสกุล', 'นายสมชาย ใจดี', 'วันที่สมัคร', '01 สิงหาคม 2569'],
    ['อีเมล', 'somchai@example.com', 'เบอร์โทรศัพท์', '081-234-5678'],
    ['หน่วยงาน', 'บริษัท เทคโนโลยีไทย จำกัด', 'ตำแหน่ง', 'นักวิเคราะห์ระบบ'],
  ]
  rows.forEach((r, i) => {
    const y = 228 + i * 44
    add(info, txt(r[0], { x: 32, y, size: 13, color: C.muted }))
    add(info, txt(r[1], { x: 150, y, size: 13.5, weight: 'SemiBold', color: C.ink }))
    add(info, txt(r[2], { x: 470, y, size: 13, color: C.muted }))
    add(info, txt(r[3], { x: 588, y, size: 13.5, weight: 'SemiBold', color: C.ink }))
  })
  line(info, 32, 366, 836)
  add(info, txt('สถานะการสมัคร', { x: 32, y: 388, size: 13, color: C.muted }))
  add(info, badge('ยืนยันแล้ว', { x: 130, y: 384, variant: 'success' }))
  add(info, txt('ค่าลงทะเบียน', { x: 32, y: 340, size: 13, color: C.muted }))
  add(info, txt('2,900 บาท', { x: 130, y: 336, size: 16, weight: 'Bold', color: C.ink }))

  const payCard = frame('pay_card', 970, 210, 430, 430, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(page, payCard)
  add(payCard, txt('การชำระเงิน', { x: 28, y: 24, size: 16, weight: 'Bold', color: C.ink }))
  add(payCard, badge('รอชำระเงิน', { x: 28, y: 60, variant: 'pending' }))
  add(payCard, txt('ยอดชำระ', { x: 28, y: 110, size: 13, color: C.muted }))
  add(payCard, txt('2,900 บาท', { x: 28, y: 132, size: 26, weight: 'ExtraBold', color: C.graphite }))
  add(payCard, txt('ครบกำหนดชำระภายใน : 20 สิงหาคม 2569', { x: 28, y: 176, size: 12.5, color: C.muted }))
  line(payCard, 28, 210, 374)
  add(payCard, txt('ขั้นตอนถัดไป', { x: 28, y: 232, size: 14, weight: 'Bold', color: C.ink }))
  const steps = [['✓', 'ยืนยันการสมัคร', true], ['2', 'ชำระเงิน', false], ['3', 'เข้าอบรม', false]]
  steps.forEach(([ic, label, done], i) => {
    const y = 268 + i * 48
    const c = rect(28, y, 26, 26, { fill: done ? C.graphite : C.bg, radius: 13, name: 'step2_' + i })
    add(payCard, c, txt(ic, { x: 35, y: y + 3, size: 12, weight: 'Bold', color: done ? '#FFFFFF' : C.muted }))
    add(payCard, txt(label, { x: 68, y: y + 4, size: 13.5, weight: done ? 'Bold' : 'Regular', color: done ? C.ink : C.muted }))
  })
  const bill = frame('bill', 28, 356, 374, 48, { fill: C.bg, radius: 10 })
  add(payCard, bill, txt('REG-2026-0001 — โปรดแจ้งเลขนี้ในวันอบรม', { x: 16, y: 15, size: 12.5, color: C.muted }))

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 5. Edit Registration
// ---------------------------------------------------------------------------

function buildEdit() {
  const a = {}
  const page = frame('05 · แก้ไขข้อมูลการสมัคร (Edit)', 0, 0, 1440, 900, { fill: C.bg })
  const nav = frame('nav', 0, 0, 1440, 76, { fill: C.surface, stroke: C.line })
  add(page, nav)
  add(nav, ...logo(40, 18, 40, 20))
  add(nav, txt('หน้าหลัก', { x: 270, y: 29, size: 14.5, color: C.muted }), txt('หลักสูตร', { x: 334, y: 29, size: 14.5, color: C.muted }))
  a.myReg = txt('การสมัครของฉัน', { x: 398, y: 29, size: 14.5, weight: 'Bold', color: C.graphite })
  add(nav, a.myReg, txt('ช่วยเหลือ', { x: 524, y: 29, size: 14.5, color: C.muted }))
  add(nav, rect(700, 18, 300, 40, { fill: C.bg, radius: 20, name: 'search' }), txt('ค้นหาหลักสูตร...', { x: 722, y: 31, size: 13.5, color: C.faint }))
  const av = rect(1220, 18, 40, 40, { fill: C.graphite, radius: 20, name: 'avatar' })
  add(nav, av, txt('สจ', { x: 1230, y: 27, size: 13, weight: 'SemiBold', color: '#FFFFFF' }), txt('สมชาย ใจดี', { x: 1276, y: 31, size: 13.5, color: C.soft }))

  pageHeader(page, 'แก้ไขข้อมูลการสมัคร', 'REG-2026-0001 · แก้ไขข้อมูลของคุณแล้วกดบันทึก')

  const ok = frame('success', 40, 178, 1360, 52, { fill: C.successBg, radius: 12 })
  add(page, ok, txt('บันทึกข้อมูลเรียบร้อยแล้ว — ระบบได้อัปเดตข้อมูลการสมัครของคุณ', { x: 64, y: 17, size: 13.5, weight: 'SemiBold', color: C.success }))
  add(page, txt('✓', { x: 48, y: 18, size: 15, weight: 'Bold', color: C.success }))

  const form = frame('form_card', 40, 258, 1360, 500, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(page, form)
  add(form, txt('ข้อมูลผู้สมัคร', { x: 32, y: 24, size: 16, weight: 'Bold', color: C.ink }))
  field(form, { label: 'ชื่อ', placeholder: 'ชื่อ', value: 'สมชาย', x: 32, y: 60, w: 320 })
  field(form, { label: 'นามสกุล', placeholder: 'นามสกุล', value: 'ใจดี', x: 372, y: 60, w: 320 })
  field(form, { label: 'อีเมล', placeholder: 'you@example.com', value: 'somchai@example.com', x: 712, y: 60, w: 320 })
  field(form, { label: 'หมายเลขโทรศัพท์', placeholder: '08X-XXX-XXXX', value: '081-234-5678', x: 1052, y: 60, w: 276 })
  field(form, { label: 'หน่วยงาน / บริษัท / สถาบัน', placeholder: 'หน่วยงาน', value: 'บริษัท เทคโนโลยีไทย จำกัด', x: 32, y: 140, w: 320 })
  field(form, { label: 'ตำแหน่ง', placeholder: 'ตำแหน่ง', value: 'นักวิเคราะห์ระบบ', x: 372, y: 140, w: 320 })
  field(form, { label: 'หลักสูตรที่ต้องการอบรม', value: 'การวิเคราะห์ข้อมูลขั้นประยุกต์', x: 712, y: 140, w: 320, chevron: true })
  field(form, { label: 'วันที่อบรม', value: '4 – 5 กันยายน 2569', x: 1052, y: 140, w: 276, chevron: true })
  line(form, 32, 232, 1296)
  add(form, txt('ข้อมูลเพิ่มเติม', { x: 32, y: 256, size: 13, weight: 'SemiBold', color: C.soft }))
  const ta = rect(32, 280, 1296, 80, { fill: C.white, radius: 10, stroke: C.lineStrong, name: 'textarea' })
  add(form, ta, txt('ขอรับประทานอาหารเจ ในวันที่ 4 กันยายน 2569', { x: 46, y: 300, size: 13.5, color: C.ink }))
  const cbb = rect(32, 384, 18, 18, { fill: C.graphite, radius: 5, name: 'agree' })
  add(form, cbb, txt('✓', { x: 35, y: 386, size: 12, weight: 'Bold', color: '#FFFFFF' }))
  add(form, txt('ข้าพเจ้ายืนยันว่าข้อมูลที่แก้ไขถูกต้องครบถ้วน', { x: 60, y: 385, size: 13.5, color: C.soft }))
  a.cancel = button('ยกเลิก', { x: 32, y: 430, w: 130, h: 44, kind: 'secondary', name: 'btn_cancel' })
  a.save = button('บันทึกการแก้ไข', { x: 178, y: 430, w: 190, h: 44, name: 'btn_save' })
  add(form, a.cancel, a.save)

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 6. Payment
// ---------------------------------------------------------------------------

function buildPayment() {
  const a = {}
  const page = frame('06 · การชำระเงิน (Payment)', 0, 0, 1440, 900, { fill: C.bg })
  adminSidebar(page, a, 'payments')
  const cx = 264
  const content = frame('content', cx, 0, 1176, 900, { fill: C.bg })
  add(page, content)
  pageHeader(content, 'การชำระเงิน', 'ตรวจสอบและยืนยันการชำระเงินจากผู้สมัครทุกท่าน', 24)
  a.reports = button('ไปหน้ารายงาน', { x: 1024, y: 96, w: 128, h: 40, kind: 'secondary', name: 'btn_goto_report' })
  add(content, a.reports)

  const stats = [
    ['18', 'รอชำระเงิน', C.pending, true, '+2 วันนี้'],
    ['6', 'รอตรวจสอบ', C.review, false, ''],
    ['211', 'ชำระเงินแล้ว', C.success, false, ''],
    ['624,100', 'ยอดชำระรวม (บาท)', C.graphite, false, ''],
  ]
  stats.forEach((s, i) => {
    const card = statCard(24 + i * 285, 170, 269, 96, { value: s[0], label: s[1], valueColor: s[2], delta: s[4], up: s[3] })
    add(content, card)
  })

  const filter = frame('filter', 24, 288, 1128, 64, { fill: C.surface, radius: 14, stroke: C.line })
  add(content, filter)
  add(filter, txt('ค้นหา :', { x: 24, y: 25, size: 13, color: C.muted }))
  const fb = rect(96, 14, 260, 36, { fill: C.bg, radius: 9, name: 'f_search' })
  add(filter, fb, txt('ค้นหาผู้สมัคร...', { x: 110, y: 25, size: 13, color: C.faint }))
  add(filter, txt('หลักสูตร :', { x: 396, y: 25, size: 13, color: C.muted }))
  const fd = rect(472, 14, 200, 36, { fill: C.bg, radius: 9, name: 'f_course' })
  add(filter, fd, txt('ทุกหลักสูตร', { x: 486, y: 25, size: 13, color: C.soft }))
  add(filter, txt('สถานะ :', { x: 712, y: 25, size: 13, color: C.muted }))
  const fs = rect(772, 14, 180, 36, { fill: C.bg, radius: 9, name: 'f_status' })
  add(filter, fs, txt('ทุกสถานะ', { x: 786, y: 25, size: 13, color: C.soft }))
  add(filter, button('กรองข้อมูล', { x: 968, y: 14, w: 136, h: 36, name: 'btn_apply', fontSize: 13.5 }))

  const table = frame('table', 24, 372, 1128, 452, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(content, table)
  add(table, txt('รายการชำระเงิน', { x: 24, y: 18, size: 16, weight: 'Bold', color: C.ink }))
  const heads = ['ผู้สมัคร', 'เลขที่สมัคร', 'หลักสูตร', 'จำนวนเงิน', 'วันครบกำหนด', 'สถานะ', 'จัดการ']
  const headX = [24, 210, 330, 640, 760, 890, 1010]
  const headW = [180, 110, 290, 110, 110, 110, 140]
  heads.forEach((h, i) => add(table, txt(h, { x: headX[i], y: 58, size: 12.5, weight: 'SemiBold', color: C.muted })))
  line(table, 24, 84, 1104)
  PAYMENTS.forEach((p, i) => {
    const y = 98 + i * 56
    add(table, txt(p.name, { x: 24, y, size: 13.5, weight: 'SemiBold', color: C.ink }))
    add(table, txt(p.no, { x: 210, y, size: 13, color: C.muted }))
    add(table, txt(p.course, { x: 330, y, size: 13, color: C.soft }))
    add(table, txt(p.amount, { x: 640, y, size: 13.5, weight: 'SemiBold', color: C.graphite }))
    add(table, txt(p.due, { x: 760, y, size: 13, color: C.muted }))
    add(table, badge(p.status, { x: 890, y: y - 6, variant: p.color }))
    const act = p.status === 'รอชำระเงิน' ? 'ยืนยันการชำระ' : p.status === 'ยกเลิก' ? 'ดูรายละเอียด' : 'ใบเสร็จ'
    add(table, button(act, { x: 1010, y: y - 8, w: 132, h: 34, kind: p.status === 'รอชำระเงิน' ? 'primary' : 'secondary', name: 'pay_act_' + i, fontSize: 12.5 }))
    if (i < PAYMENTS.length - 1) line(table, 24, y + 42, 1104)
  })

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 7. Admin Dashboard
// ---------------------------------------------------------------------------

function buildDashboard() {
  const a = {}
  const page = frame('07 · แดชบอร์ดผู้ดูแล (Dashboard)', 0, 0, 1440, 900, { fill: C.bg })
  adminSidebar(page, a, 'dashboard')
  const cx = 264
  const content = frame('content', cx, 0, 1176, 900, { fill: C.bg })
  add(page, content)
  pageHeader(content, 'ภาพรวม', 'ข้อมูลการสมัครทั้งหมด ประจำเดือนสิงหาคม 2569', 24)
  add(content, pill('สิงหาคม 2569', 1004, 96, { fill: C.white, color: C.ink, stroke: C.line }))

  const stats = [
    ['248', 'จำนวนผู้สมัครทั้งหมด', C.graphite, '+12%', true],
    ['18', 'รอชำระเงิน', C.pending, '', false],
    ['211', 'ชำระเงินแล้ว', C.success, '', false],
    ['12', 'จำนวนหลักสูตร', C.review, '', false],
    ['210', 'จำนวนผู้เข้าอบรม', C.soft, '', false],
  ]
  stats.forEach((s, i) => {
    const card = statCard(24 + i * 229, 170, 217, 96, { value: s[0], label: s[1], valueColor: s[2], delta: s[3], up: s[4] })
    add(content, card)
  })

  const filter = frame('filter', 24, 288, 1128, 64, { fill: C.surface, radius: 14, stroke: C.line })
  add(content, filter)
  const fb = rect(24, 14, 170, 36, { fill: C.bg, radius: 9, name: 'f_search' })
  add(filter, fb, txt('ค้นหาผู้สมัคร...', { x: 38, y: 25, size: 13, color: C.faint }))
  const fds = [['วันที่ :', 'ทุกวัน', 220], ['หลักสูตร :', 'ทุกหลักสูตร', 430], ['สถานะสมัคร :', 'ทุกสถานะ', 640], ['สถานะชำระ :', 'ทุกสถานะ', 850]]
  fds.forEach(([l, v, x]) => {
    add(filter, txt(l, { x, y: 25, size: 13, color: C.muted }))
    const b = rect(x + 50, 14, 130, 36, { fill: C.bg, radius: 9, name: 'f_' + l })
    add(filter, b, txt(v, { x: x + 62, y: 25, size: 13, color: C.soft }))
  })
  add(filter, txt('เรียงลำดับ', { x: 1042, y: 25, size: 13, weight: 'SemiBold', color: C.graphite }))

  const table = frame('table', 24, 372, 1128, 452, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(content, table)
  add(table, txt('รายการสมัครทั้งหมด (248 รายการ)', { x: 24, y: 18, size: 16, weight: 'Bold', color: C.ink }))
  add(table, txt('แสดง 1 – 8 จาก 248', { x: 940, y: 24, size: 12, color: C.faint }))
  const heads = ['เลขที่สมัคร', 'ชื่อผู้สมัคร', 'หลักสูตร', 'วันที่สมัคร', 'วันที่อบรม', 'สถานะชำระ', 'สถานะสมัคร', 'จัดการ']
  const headX = [24, 130, 260, 500, 610, 730, 870, 984]
  heads.forEach((h, i) => add(table, txt(h, { x: headX[i], y: 58, size: 12, weight: 'SemiBold', color: C.muted })))
  line(table, 24, 84, 1104)
  const rowActs = []
  REGS.forEach((r, i) => {
    const y = 96 + i * 42
    add(table, txt(r.no, { x: 24, y, size: 12.5, weight: 'SemiBold', color: C.graphite }))
    add(table, txt(r.name, { x: 130, y, size: 12.5, weight: 'SemiBold', color: C.ink }))
    add(table, txt(r.course, { x: 260, y, size: 12, color: C.soft }))
    add(table, txt(r.regDate, { x: 500, y, size: 12, color: C.muted }))
    add(table, txt(r.trainDate, { x: 610, y, size: 12, color: C.muted }))
    add(table, badge(r.pay, { x: 730, y: y - 7, variant: r.payColor, size: 11.5, padX: 10, h: 22 }))
    add(table, badge(r.status, { x: 870, y: y - 7, variant: r.statusColor, size: 11.5, padX: 10, h: 22 }))
    const view = button('ดู', { x: 984, y: y - 9, w: 38, h: 28, kind: 'ghost', name: 'row_view_' + i, fontSize: 12 })
    const edit = button('แก้ไข', { x: 1028, y: y - 9, w: 46, h: 28, kind: 'ghost', name: 'row_edit_' + i, fontSize: 12 })
    const del = button('ลบ', { x: 1080, y: y - 9, w: 42, h: 28, kind: 'ghost', name: 'row_del_' + i, fontSize: 12, ink: C.danger })
    add(table, view, edit, del)
    rowActs.push({ view, edit, del })
    if (i < REGS.length - 1) line(table, 24, y + 34, 1104)
  })
  a.viewRows = rowActs.map((r) => r.view)
  a.editRows = rowActs.map((r) => r.edit)

  // pagination
  add(content, txt('ก่อนหน้า', { x: 24, y: 844, size: 13, color: C.graphite }))
  for (let p = 1; p <= 6; p++) {
    const sel = p === 1
    const bx = 110 + (p - 1) * 40
    add(content, rect(bx, 838, 34, 34, { fill: sel ? C.graphite : C.white, radius: 8, name: 'pg_' + p, stroke: sel ? null : C.line }))
    add(content, txt(String(p), { x: bx + 12, y: 847, size: 13, weight: sel ? 'Bold' : 'Regular', color: sel ? '#FFFFFF' : C.muted }))
  }
  add(content, txt('ถัดไป', { x: 382, y: 844, size: 13, color: C.graphite }))

  // delete modal overlay
  const scrim = rect(264, 0, 1176, 900, { fill: '#0B0E13', opacity: 0.55, name: 'scrim' })
  add(page, scrim)
  const modal = frame('delete_modal', 582, 230, 540, 330, { fill: C.white, radius: 20, shadow: true })
  add(page, modal)
  const warn = rect(238, 40, 64, 64, { fill: C.dangerBg, radius: 32, name: 'warn_icon' })
  add(modal, warn, txt('!', { x: 262, y: 56, size: 32, weight: 'ExtraBold', color: C.danger }))
  add(modal, txt('ยืนยันการลบข้อมูลการสมัคร', { x: 40, y: 126, size: 20, weight: 'Bold', color: C.ink, align: 'CENTER', w: 460 }))
  add(modal, txt('คุณต้องการลบรายการ REG-2026-0006 (นางพัชรา กลิ่นหอม) ใช่หรือไม่?', { x: 40, y: 162, size: 13.5, color: C.muted, align: 'CENTER', w: 460, lh: 21 }))
  add(modal, txt('การลบข้อมูลนี้ไม่สามารถย้อนกลับได้ และผู้สมัครจะไม่สามารถเข้าอบรมได้', { x: 40, y: 190, size: 12, color: C.faint, align: 'CENTER', w: 460 }))
  const noBtn = button('ยกเลิก', { x: 120, y: 240, w: 130, h: 44, kind: 'secondary', name: 'modal_no' })
  const yesBtn = button('ยืนยันการลบ', { x: 266, y: 240, w: 150, h: 44, kind: 'danger', name: 'modal_yes' })
  add(modal, noBtn, yesBtn)

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 8. Report
// ---------------------------------------------------------------------------

function buildReport() {
  const a = {}
  const page = frame('08 · รายงาน (Report)', 0, 0, 1440, 900, { fill: C.bg })
  adminSidebar(page, a, 'reports')
  const cx = 264
  const content = frame('content', cx, 0, 1176, 900, { fill: C.bg })
  add(page, content)
  pageHeader(content, 'รายงาน', 'สรุปข้อมูลการสมัครเพื่อการพิมพ์หรือส่งออก', 24)
  a.print = button('พิมพ์รายงาน', { x: 880, y: 96, w: 130, h: 40, name: 'btn_print' })
  a.export = button('Export PDF', { x: 1022, y: 96, w: 130, h: 40, kind: 'secondary', name: 'btn_export' })
  add(content, a.print, a.export)

  const filter = frame('filter', 24, 170, 1128, 84, { fill: C.surface, radius: 14, stroke: C.line })
  add(content, filter)
  const opts = [['ช่วงวันที่', '1 – 31 สิงหาคม 2569'], ['หลักสูตร', 'ทุกหลักสูตร'], ['สถานะการสมัคร', 'ทุกสถานะ'], ['สถานะการชำระเงิน', 'ทุกสถานะ']]
  opts.forEach(([l, v], i) => {
    const x = 24 + i * 276
    add(filter, txt(l, { x: x + 4, y: 18, size: 12, weight: 'SemiBold', color: C.muted }))
    const b = rect(x, 38, 262, 34, { fill: C.bg, radius: 9, name: 'r_' + l })
    add(filter, b, txt(v, { x: x + 12, y: 47, size: 12.5, color: C.soft }))
  })

  const stats = [
    ['248', 'จำนวนการสมัคร', C.graphite, ''],
    ['211', 'ยอดชำระสำเร็จ', C.success, ''],
    ['85%', 'อัตราการชำระเงิน', C.review, ''],
    ['624,100', 'ยอดชำระรวม (บาท)', C.soft, ''],
  ]
  stats.forEach((s, i) => {
    const card = statCard(24 + i * 285, 274, 269, 88, { value: s[0], label: s[1], valueColor: s[2] })
    add(content, card)
  })

  const table = frame('table', 24, 382, 1128, 420, { fill: C.surface, radius: 16, stroke: C.line, shadow: true })
  add(content, table)
  add(table, txt('สรุปตามหลักสูตร (สิงหาคม 2569)', { x: 24, y: 18, size: 16, weight: 'Bold', color: C.ink }))
  const heads = ['หลักสูตร', 'จำนวนสมัคร', 'ชำระเงินแล้ว', 'อัตราการชำระ', 'รายได้รวม']
  const headX = [24, 400, 560, 720, 900]
  heads.forEach((h, i) => add(table, txt(h, { x: headX[i], y: 58, size: 12.5, weight: 'SemiBold', color: C.muted })))
  line(table, 24, 84, 1104)
  REPORT.forEach((r, i) => {
    const y = 98 + i * 40
    add(table, txt(r.course, { x: 24, y, size: 13, weight: 'SemiBold', color: C.ink }))
    add(table, txt(String(r.count), { x: 400, y, size: 13, color: C.soft }))
    add(table, txt(String(r.paid), { x: 560, y, size: 13, color: C.soft }))
    add(table, txt(r.rate, { x: 720, y, size: 13, color: C.success, weight: 'SemiBold' }))
    add(table, txt(r.revenue, { x: 900, y, size: 13, color: C.graphite, weight: 'SemiBold' }))
    const bar = rect(752, y + 7, Math.min(1, r.paid / 60) * 120, 8, { fill: C.graphite, radius: 4, name: 'rate_bar' })
    add(table, bar)
    if (i < REPORT.length - 1) line(table, 24, y + 32, 1104)
  })
  line(table, 24, 338, 1104)
  const totals = REPORT.reduce((acc, r) => ({ c: acc.c + r.count, p: acc.p + r.paid, rev: acc.rev + parseInt(r.revenue.replace(/[^\d]/g, ''), 10) }), { c: 0, p: 0, rev: 0 })
  add(table, txt('รวม', { x: 24, y: 352, size: 13.5, weight: 'Bold', color: C.ink }))
  add(table, txt(String(totals.c), { x: 400, y: 352, size: 13.5, weight: 'Bold', color: C.graphite }))
  add(table, txt(String(totals.p), { x: 560, y: 352, size: 13.5, weight: 'Bold', color: C.graphite }))
  add(table, txt('85%', { x: 720, y: 352, size: 13.5, weight: 'Bold', color: C.success }))
  add(table, txt(totals.rev.toLocaleString() + ' บาท', { x: 900, y: 352, size: 13.5, weight: 'Bold', color: C.graphite }))
  add(content, txt('หมายเหตุ : รายงานนี้สร้างโดยอัตโนมัติจากระบบลงทะเบียนอบรม Trainly', { x: 24, y: 822, size: 12, color: C.faint }))

  return { frame: page, a }
}

// ---------------------------------------------------------------------------
// 9. Print previews
// ---------------------------------------------------------------------------

function buildPrintPreview() {
  const page = frame('09 · ตัวอย่างการพิมพ์รายงาน (Print Preview)', 0, 0, 1440, 1020, { fill: C.bg })
  const sheet = frame('sheet', 80, 40, 1280, 940, { fill: C.white, radius: 8, shadow: true })
  add(page, sheet)
  add(sheet, rect(60, 52, 40, 40, { fill: C.graphite, radius: 12, name: 'logo' }), txt('T', { x: 72, y: 57, size: 21, weight: 'ExtraBold', color: '#FFFFFF' }), txt('Trainly', { x: 112, y: 60, size: 18, weight: 'Bold', color: C.ink }))
  add(sheet, txt('รายงานสรุปการสมัครอบรม', { x: 60, y: 128, size: 24, weight: 'Bold', color: C.ink }))
  add(sheet, txt('ช่วงวันที่ 1 – 31 สิงหาคม 2569', { x: 60, y: 164, size: 13.5, color: C.muted }))
  line(sheet, 60, 196, 1160)
  const heads = ['หลักสูตร', 'จำนวนสมัคร', 'ชำระเงินแล้ว', 'อัตราการชำระ', 'รายได้รวม']
  const hx = [60, 460, 620, 780, 960]
  heads.forEach((h, i) => add(sheet, txt(h, { x: hx[i], y: 224, size: 12.5, weight: 'Bold', color: C.ink })))
  REPORT.forEach((r, i) => {
    const y = 254 + i * 38
    add(sheet, txt(r.course, { x: 60, y, size: 13, color: C.ink }))
    add(sheet, txt(String(r.count), { x: 460, y, size: 13, color: C.soft }))
    add(sheet, txt(String(r.paid), { x: 620, y, size: 13, color: C.soft }))
    add(sheet, txt(r.rate, { x: 780, y, size: 13, color: C.ink }))
    add(sheet, txt(r.revenue, { x: 960, y, size: 13, color: C.ink }))
  })
  line(sheet, 60, 490, 1160)
  add(sheet, txt('รวม', { x: 60, y: 506, size: 13.5, weight: 'Bold', color: C.ink }))
  add(sheet, txt('248', { x: 460, y: 506, size: 13.5, weight: 'Bold', color: C.ink }))
  add(sheet, txt('211', { x: 620, y: 506, size: 13.5, weight: 'Bold', color: C.ink }))
  add(sheet, txt('85%', { x: 780, y: 506, size: 13.5, weight: 'Bold', color: C.ink }))
  add(sheet, txt('624,100 บาท', { x: 960, y: 506, size: 13.5, weight: 'Bold', color: C.ink }))
  add(sheet, txt('สรุปอื่น ๆ', { x: 60, y: 556, size: 15, weight: 'Bold', color: C.ink }))
  const srows = [
    ['จำนวนผู้สมัครทั้งหมด', '248 ราย', 'จำนวนหลักสูตร', '12 หลักสูตร'],
    ['ชำระเงินแล้ว', '211 ราย', 'รอชำระเงิน', '18 ราย'],
    ['ยอดชำระรวม', '624,100 บาท', 'ยกเลิก', '19 ราย'],
  ]
  srows.forEach((r, i) => {
    const y = 590 + i * 30
    add(sheet, txt(r[0], { x: 60, y, size: 13, color: C.muted }))
    add(sheet, txt(r[1], { x: 200, y, size: 13, weight: 'SemiBold', color: C.ink }))
    add(sheet, txt(r[2], { x: 460, y, size: 13, color: C.muted }))
    add(sheet, txt(r[3], { x: 590, y, size: 13, weight: 'SemiBold', color: C.ink }))
  })
  line(sheet, 60, 700, 1160)
  add(sheet, txt('ผู้จัดทำรายงาน', { x: 60, y: 730, size: 13, color: C.muted }))
  add(sheet, txt('________________________________', { x: 60, y: 776, size: 13, color: C.muted }))
  add(sheet, txt('(นางสาวปิยะดา วัฒนกุล)  เจ้าหน้าที่ทะเบียนและฝึกอบรม', { x: 60, y: 800, size: 12.5, color: C.soft }))
  add(sheet, txt('ผู้ตรวจสอบ', { x: 660, y: 730, size: 13, color: C.muted }))
  add(sheet, txt('________________________________', { x: 660, y: 776, size: 13, color: C.muted }))
  add(sheet, txt('(นายอานนท์ ศรีเมือง)  ผู้อำนวยการศูนย์ฝึกอบรม', { x: 660, y: 800, size: 12.5, color: C.soft }))
  add(sheet, txt('ออกโดยระบบอัตโนมัติ Trainly · 10 สิงหาคม 2569 08:30 น.', { x: 60, y: 870, size: 12, color: C.faint }))
  return page
}

function buildTicket() {
  const page = frame('10 · ใบสมัคร (ใบสมัครตัวอย่าง)', 0, 0, 768, 1080, { fill: C.bg })
  const sheet = frame('ticket_sheet', 34, 30, 700, 1020, { fill: C.white, radius: 8, shadow: true })
  add(page, sheet)
  add(sheet, rect(40, 40, 44, 44, { fill: C.graphite, radius: 13, name: 'logo' }), txt('T', { x: 54, y: 46, size: 23, weight: 'ExtraBold', color: '#FFFFFF' }))
  add(sheet, txt('Trainly', { x: 96, y: 46, size: 20, weight: 'Bold', color: C.ink }))
  add(sheet, txt('ใบสมัครอบรม', { x: 40, y: 120, size: 26, weight: 'Bold', color: C.ink }))
  add(sheet, txt('APPLICATION FORM · เลขที่ REG-2026-0001', { x: 40, y: 160, size: 13, letter: 0.4, color: C.muted }))
  add(sheet, rect(40, 196, 620, 1, { fill: C.line, name: 'rule' }))
  const rows = [
    ['ชื่อ-นามสกุล', 'นายสมชาย ใจดี'],
    ['อีเมล', 'somchai@example.com'],
    ['หมายเลขโทรศัพท์', '081-234-5678'],
    ['หน่วยงาน / บริษัท / สถาบัน', 'บริษัท เทคโนโลยีไทย จำกัด'],
    ['ตำแหน่ง', 'นักวิเคราะห์ระบบ'],
    ['หลักสูตรที่สมัคร', 'การวิเคราะห์ข้อมูลขั้นประยุกต์'],
    ['วันที่อบรม', '4 – 5 กันยายน 2569'],
    ['สถานที่อบรม', 'เดอะควอเตอร์ ลาดพร้าว กรุงเทพฯ'],
    ['วันที่สมัคร', '01 สิงหาคม 2569'],
  ]
  rows.forEach(([l, v], i) => {
    const y = 236 + i * 42
    add(sheet, txt(l, { x: 40, y, size: 13, color: C.muted }))
    add(sheet, txt(v, { x: 260, y, size: 13.5, weight: 'SemiBold', color: C.ink }))
    add(sheet, rect(40, y + 32, 620, 1, { fill: C.line, name: 'd_' + i }))
  })
  add(sheet, txt('ค่าลงทะเบียน', { x: 40, y: 656, size: 13, color: C.muted }))
  add(sheet, txt('2,900 บาท (สองพันเก้าร้อยบาทถ้วน)', { x: 260, y: 656, size: 13.5, weight: 'SemiBold', color: C.ink }))
  add(sheet, txt('เงื่อนไขการอบรม', { x: 40, y: 716, size: 15, weight: 'Bold', color: C.ink }))
  const terms = [
    '1. ผู้สมัครต้องชำระค่าลงทะเบียนภายใน 7 วันหลังยืนยันการสมัคร',
    '2. กรณียกเลิกก่อนวันอบรม 7 วัน จะคืนเงินร้อยละ 50 ของค่าลงทะเบียน',
    '3. ผู้เข้าอบรมต้องแสดงบัตรประชาชนและเลขที่สมัครในวันอบรม',
    '4. สถาบันสงวนสิทธิ์ในการเลื่อนหรือยกเลิกหลักสูตรหากมีผู้สมัครน้อยกว่า 10 คน',
  ]
  terms.forEach((t, i) => add(sheet, txt(t, { x: 40, y: 748 + i * 30, size: 13, color: C.soft })))
  line(sheet, 40, 878, 620)
  add(sheet, txt('ลายเซ็นผู้สมัคร', { x: 40, y: 906, size: 13, color: C.muted }))
  add(sheet, txt('________________________________', { x: 40, y: 948, size: 13, color: C.muted }))
  add(sheet, txt('(นายสมชาย ใจดี) วันที่ ....... เดือน ................ พ.ศ. ........', { x: 40, y: 974, size: 12.5, color: C.soft }))
  add(sheet, txt('รับทราบการสมัคร', { x: 440, y: 906, size: 13, color: C.muted }))
  add(sheet, txt('________________________________', { x: 440, y: 948, size: 13, color: C.muted }))
  add(sheet, txt('(เจ้าหน้าที่ทะเบียนและฝึกอบรม)', { x: 440, y: 974, size: 12.5, color: C.soft }))
  add(sheet, txt('ใบสมัครนี้สร้างจากระบบลงทะเบียนออนไลน์ Trainly', { x: 40, y: 1010, size: 11.5, color: C.faint }))
  return page
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const FONT_LOADED = new Set()

const WEIGHT_FALLBACK = {
  Regular: ['Regular'],
  Medium: ['Medium', 'Regular'],
  SemiBold: ['SemiBold', 'Bold', 'Medium', 'Regular'],
  Bold: ['Bold', 'SemiBold', 'Medium', 'Regular'],
  ExtraBold: ['ExtraBold', 'Bold', 'SemiBold', 'Medium', 'Regular'],
}

function pickStyle(weight) {
  const chain = WEIGHT_FALLBACK[weight] || ['Regular']
  for (const s of chain) {
    if (FONT_LOADED.has(FONT + ':' + s)) return s
  }
  return 'Regular'
}

async function pickFont() {
  const styles = ['Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold']
  for (const family of ['Prompt', 'Inter']) {
    for (const s of styles) {
      try {
        await figma.loadFontAsync({ family, style: s })
        FONT_LOADED.add(family + ':' + s)
      } catch (e) {}
    }
  }
  if (FONT_LOADED.has('Prompt:Regular')) FONT = 'Prompt'
  else if (FONT_LOADED.has('Inter:Regular')) FONT = 'Inter'
  else throw new Error('ไม่พบฟอนต์ Prompt หรือ Inter ในบัญชีนี้ กรุณาติดตั้งก่อนรันปลั๊กอิน')
}

async function run() {
  await pickFont()

  const PAGE_NAME = 'Trainly · Prototype ไทย'
  let page = figma.root.children.find((p) => p.name === PAGE_NAME)
  if (page) {
    try {
      while (page.children.length > 0) page.children[0].remove()
    } catch (e) {
      try {
        page = figma.createPage()
        page.name = PAGE_NAME
      } catch (e2) {
        figma.closePlugin(`ไม่สามารถเตรียมหน้าได้: ${e.message}`)
        return
      }
    }
  } else {
    page = figma.createPage()
    page.name = PAGE_NAME
  }
  figma.currentPage = page

  const builders = {
    home: ['01 · หน้าแรก (Home)', buildHome],
    login: ['02 · เข้าสู่ระบบ (Login)', buildLogin],
    register: ['03 · สมัครอบรม (Registration)', buildRegister],
    detail: ['04 · รายละเอียดการสมัคร (Detail)', buildDetail],
    edit: ['05 · แก้ไขข้อมูลสมัคร (Edit)', buildEdit],
    payment: ['06 · การชำระเงิน (Payment)', buildPayment],
    dashboard: ['07 · แดชบอร์ดผู้ดูแล (Dashboard)', buildDashboard],
    report: ['08 · รายงาน (Report)', buildReport],
    printPreview: ['09 · ตัวอย่างการพิมพ์ (Print Preview)', buildPrintPreview],
    ticket: ['10 · ใบสมัคร (Ticket)', buildTicket],
  }

  const screens = {}
  const failures = {}
  let yOff = 0

  for (const [key, [label, fn]] of Object.entries(builders)) {
    let built = null
    try {
      built = fn()
      const f = built && (built.frame || built)
      if (!f || typeof f.appendChild !== 'function') throw new Error('ฟังก์ชันสร้างหน้าจอไม่คืน frame ที่ถูกต้อง')
      f.x = 0
      f.y = yOff
      page.appendChild(f)
      screens[key] = built
      yOff += f.height + 160
    } catch (e) {
      failures[key] = e.message
      try {
        const ef = frame('ERROR · ' + label, 0, yOff, 1440, 260, { fill: C.dangerBg, stroke: C.danger })
        page.appendChild(ef)
        add(ef, txt('หน้าจอ "' + label + '" สร้างไม่สำเร็จ', { x: 40, y: 32, size: 22, weight: 'Bold', color: C.danger }))
        add(ef, txt(e.message || 'unknown error', { x: 40, y: 92, size: 15, weight: 'SemiBold', color: C.danger, w: 1360 }))
        const stackLine = (e.stack || '').split('\n')[1] || ''
        add(ef, txt(stackLine, { x: 40, y: 130, size: 11, color: C.soft, w: 1360 }))
        yOff += 260 + 80
      } catch (e2) {}
    }
  }

  const ok = (k) => !!screens[k]

  try {
    if (ok('home') && ok('login')) linkTo(screens.home.a.login, screens.login.frame)
    if (ok('home') && ok('register')) {
      linkTo(screens.home.a.register, screens.register.frame)
      linkTo(screens.home.a.browse, screens.register.frame)
      screens.home.a.courseButtons.forEach((b) => linkTo(b, screens.register.frame))
    }
    if (ok('home') && ok('detail')) linkTo(screens.home.a.myReg, screens.detail.frame)

    if (ok('login') && ok('register')) {
      linkTo(screens.login.a.signin, screens.register.frame)
      linkTo(screens.login.a.signup, screens.register.frame)
    }
    if (ok('login') && ok('dashboard')) linkTo(screens.login.a.admin, screens.dashboard.frame)

    if (ok('register') && ok('detail')) {
      linkTo(screens.register.a.submit, screens.detail.frame)
      linkTo(screens.register.a.myReg, screens.detail.frame)
    }
    if (ok('register') && ok('home')) linkTo(screens.register.a.cancel, screens.home.frame)

    if (ok('detail')) {
      if (ok('edit')) linkTo(screens.detail.a.edit, screens.edit.frame)
      if (ok('payment')) linkTo(screens.detail.a.pay, screens.payment.frame)
      if (ok('ticket')) linkTo(screens.detail.a.print, screens.ticket)
      linkTo(screens.detail.a.myReg, screens.detail.frame)
    }

    if (ok('edit') && ok('detail')) {
      linkTo(screens.edit.a.save, screens.detail.frame)
      linkTo(screens.edit.a.cancel, screens.detail.frame)
      linkTo(screens.edit.a.myReg, screens.detail.frame)
    }

    if (ok('payment')) {
      if (ok('dashboard')) linkTo(screens.payment.a.dashboard, screens.dashboard.frame)
      if (ok('report')) linkTo(screens.payment.a.reports, screens.report.frame)
    }

    if (ok('dashboard')) {
      if (ok('payment')) linkTo(screens.dashboard.a.payments, screens.payment.frame)
      if (ok('report')) linkTo(screens.dashboard.a.reports, screens.report.frame)
      linkTo(screens.dashboard.a.registrations, screens.dashboard.frame)
      if (ok('detail')) screens.dashboard.a.viewRows.forEach((b) => linkTo(b, screens.detail.frame))
    }

    if (ok('report')) {
      if (ok('dashboard')) linkTo(screens.report.a.dashboard, screens.dashboard.frame)
      if (ok('payment')) linkTo(screens.report.a.payments, screens.payment.frame)
      if (ok('printPreview')) {
        linkTo(screens.report.a.print, screens.printPreview)
        linkTo(screens.report.a.export, screens.printPreview)
      }
    }
  } catch (e) {
    failures.interactions = e.message
  }

  if (ok('home')) {
    try {
      figma.setFlowStartingPoint(screens.home.frame)
      figma.currentPage.selection = [screens.home.frame]
    } catch (e) {}
  }

  const allFrames = Object.keys(builders)
    .map((k) => (screens[k] && (screens[k].frame || screens[k])) || null)
    .filter(Boolean)
  if (allFrames.length > 0) {
    try {
      figma.viewport.scrollAndZoomIntoView(allFrames)
    } catch (e) {}
  }

  const total = Object.keys(builders).length
  const done = Object.keys(builders).filter((k) => ok(k)).length
  const errCount = Object.keys(failures).length
  const msg = errCount === 0
    ? `สร้าง Prototype ครบ ${done} หน้าจอ (${PLUGIN_VERSION}) ✨`
    : `สร้าง ${done}/${total} หน้าจอ มีข้อผิดพลาด ${errCount} จุด (${PLUGIN_VERSION})`
  try {
    figma.notify(msg)
  } catch (e) {}

  if (errCount > 0) {
    const detail = Object.entries(failures).map(([k, v]) => `${k}: ${v}`).join(' | ')
    figma.closePlugin(`${msg}\n${detail}`)
  }
}

run().catch((e) => {
  figma.closePlugin(`(${PLUGIN_VERSION}) ${e.message}`)
})
