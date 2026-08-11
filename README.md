# Software Testing Prototype

Prototype สำหรับการทดสอบ software โดยใช้ React + Vite

## Technology Stack

- **React 19** + **ReactDOM** — UI framework
- **Vite 8** — bundler / dev server
- **MUI (Material UI 9)** + **@emotion/react**, **@emotion/styled** — UI component library และ styling
- **ESLint 10** พร้อม plugin `react-hooks` และ `react-refresh` — linting

## วิธีการรัน

```bash
npm install      # ติดตั้ง dependencies (ครั้งแรก)
npm run dev      # รัน dev server (HMR) เปิดที่ http://localhost:5173
npm run build    # build ไว้ใช้ production ไปที่ dist/
npm run preview  # preview build ที่ทำไว้
npm run lint     # ตรวจ lint
```
