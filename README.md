# 🎓 OTM Kirish Ballari 2025-2026

O'zbekistondagi barcha OTM (Oliy Ta'lim Muassasalari) uchun **2025-2026** o'quv yili kirish ballari, kvotalar va kontrakt narxlari — bir joyda.

**Loyiha egasi:** KRYZENSYS · 100% bepul

## ✨ Imkoniyatlar

- 📚 **50+ OTM** — davlat va xususiy
- 📋 **Barcha yo'nalishlar** — bakalavr va magistr
- 🔍 **Qidiruv** — yo'nalish, universitet, viloyat bo'yicha
- 🔀 **Taqqoslash** — 2-4 ta yo'nalishni yonma-yon solishtirish
- 📊 **2024 vs 2025** — o'zgarishlarni ko'rish
- 💰 **Kontrakt narxlari** — yillik to'lov
- 🎯 **Grant kvotalari** — davlat granti o'rinlari
- 🌍 **3 til** — o'zbek, rus, ingliz

## 🚀 Texnologiyalar

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Vercel** (deploy)

## 🛠 O'rnatish

```bash
git clone https://github.com/KRYZENSYS/otm-kirish-ballari.git
cd otm-kirish-ballari
npm install
npm run dev
```

Brauzer: http://localhost:3000

## 📂 Tuzilma

```
app/
 ├── page.tsx                    # Bosh sahifa
 ├── universities/               # OTMlar
 │   ├── page.tsx                # ro'yxat
 │   └── [id]/page.tsx           # batafsil
 ├── directions/                 # Yo'nalishlar
 │   ├── page.tsx                # ro'yxat (jadval)
 │   └── [id]/page.tsx           # batafsil
 ├── compare/page.tsx            # taqqoslash
 └── about/page.tsx              # ma'lumot

lib/
 ├── data/
 │   ├── universities.ts         # 50+ OTM
 │   └── directions.ts           # barcha yo'nalishlar
 └── types.ts
```

## 📜 License

MIT © 2026 KRYZENSYS
