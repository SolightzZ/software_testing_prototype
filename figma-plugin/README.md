# Trainly Thai Prototype — Figma Plugin

Generates a complete Thai-language, gray–graphite interactive prototype for the
**Trainly — Online Training Registration System** inside your existing Figma file.

It creates a brand-new page named **`Trainly · Prototype ไทย`** with 8 screens
plus 2 print previews, wired together with Figma Prototype interactions.
Your existing pages (including the teacher/instructor Use Case diagram) are
**left completely untouched**.

## What it creates

| Frame | Screen |
| --- | --- |
| 01 · หน้าหลัก (Home) | Landing page: nav, hero, course cards, info strip, footer |
| 02 · เข้าสู่ระบบ (Login) | Login with validation error example, register / forgot-password links |
| 03 · แบบฟอร์มสมัครอบรม (Registration) | Full applicant + course + payment form with summary card |
| 04 · รายละเอียดการสมัคร (Detail) | Reg number, status badges, payment steps, print / edit / pay buttons |
| 05 · แก้ไขข้อมูลการสมัคร (Edit) | Pre-filled editable form + success banner |
| 06 · การชำระเงิน (Payment) | Admin payment records with statuses and confirm actions |
| 07 · แดชบอร์ดผู้ดูแล (Dashboard) | Stats, filters, registration table, pagination, delete-confirmation modal |
| 08 · รายงาน (Report) | Filters, summary stats, per-course table, totals |
| 09 · ตัวอย่างการพิมพ์รายงาน | Print-ready report layout |
| 10 · ใบสมัครตัวอย่าง | A4-style application form for "พิมพ์ใบสมัคร" |

## How to run

1. Open your Trainly file in the **Figma desktop app** (or figma.com).
2. Go to **Menu → Plugins → Development → Import plugin from manifest…**
3. Select this folder's **`manifest.json`**.
4. The plugin appears under **Plugins → Development → Trainly Thai Prototype**.
5. Run it. A new page `Trainly · Prototype ไทย` is created with all frames and
   prototype connections.

If the message "ไม่พบฟอนต์" appears, install the **Prompt** font (Google Fonts)
or enable it in your Figma account fonts; the plugin falls back to Inter.

## Prototype connections included

- Home → Login / Registration / Registration Detail
- Login → Registration (member) / Admin Dashboard (admin link)
- Register → Registration Detail (submit), Home (cancel)
- Detail → Edit / Payment / Application form (print)
- Edit → Detail (save / cancel)
- Dashboard → Payment / Report / Registration Detail (row view)
- Report → Print Preview (print / Export PDF)

> Tip: to preview interactions, press **⌘P / Ctrl+Alt+P** (Present) with the
> flow starting point on frame 01 · หน้าหลัก.

## Files

- `manifest.json` — plugin manifest (id: `trainly-thai-prototype-0001`)
- `code.js` — generator logic (design system, 10 frames, interactions)

No network access is used; all data is embedded in the plugin.
