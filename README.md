# README — Next.js 15 + React 19 + Tailwind v4 Setup

> **فارسی**
>
> این README مخصوص همین پروژه با Next.js 15.5.2، React 19، TypeScript 5 و Tailwind CSS v4 نوشته شده.
>
> ---

## 📦 پیش‌نیازها

- Node.js نسخه LTS (حداقل 18)
- pnpm یا npm یا yarn (در اینجا مثال‌ها با pnpm زده میشه)
- Git

## 🚀 راه‌اندازی محلی / Local setup

1. کلون کردن ریپو:

```bash
git clone https://github.com/yousef-yaghoubi/test-task
cd test-task
```

2. نصب پکیج‌ها:

```bash
pnpm install
# یا npm install
# یا yarn
```

3. اجرای سرور توسعه (با Turbopack):

```bash
pnpm dev
```

حالا آدرس http://localhost:3000 رو باز کن.

## 🧩 بیلد و ران کردن در پروڈاکشن / Build & Start

```bash
pnpm build
pnpm start
```

## 🔧 اسکریپت‌ها

- `dev` → اجرای Next.js با Turbopack در حالت توسعه
- `build` → بیلد پروڈاکشن با Turbopack
- `start` → اجرای نسخهٔ بیلد شده
- `lint` → اجرای ESLint

## 🎨 استایل‌ها / Styling

- Tailwind CSS v4 نصب شده.
- فایل `postcss.config.js` و `tailwind.config.js` بساز برای مدیریت بهتر استایل.
- مثال ساده `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- مثال ساده `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## ✅ نکات / Tips

- از App Router در Next.js 15 استفاده کن.
- TypeScript فعال شده، همه‌ی فایل‌ها رو با `.tsx` بنویس.
- ESLint پیکربندی شده، برای فرمت کد پیشنهاد میشه Prettier هم اضافه کنی.

## 📞 تماس / Contact

برای سوالات بیشتر توی Issues مطرح کن.

---

# README — Next.js 15 + React 19 + Tailwind v4 Setup (English)

This README is tailored for this project running **Next.js 15.5.2**, **React 19**, **TypeScript 5**, and **Tailwind CSS v4**.

## 📦 Prerequisites

- Node.js (LTS >= 18)
- pnpm (preferred) / npm / yarn
- Git

## 🚀 Local setup

1. Clone repository:

```bash
git clone https://github.com/yousef-yaghoubi/test-task
cd test-task
```

2. Install dependencies:

```bash
pnpm install
# or npm install
# or yarn
```

3. Run dev server (with Turbopack):

```bash
pnpm dev
```

Now open http://localhost:3000.

## 🧩 Build & Start

```bash
pnpm build
pnpm start
```

## 🔧 Scripts

- `dev` → run Next.js dev server with Turbopack
- `build` → build production with Turbopack
- `start` → run built app
- `lint` → run ESLint

## 🎨 Styling

- Tailwind CSS v4 is installed.
- Create `postcss.config.js` and `tailwind.config.js` for better control.
- Example `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- Example `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## ✅ Tips

- Use Next.js 15 App Router.
- TypeScript is enabled, use `.tsx` files.
- ESLint is configured, consider adding Prettier for formatting.

## 📞 Contact

Raise an Issue for questions.

---
