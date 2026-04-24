# Final Production Stack & Deployment Plan

## ⚙️ Technology Stack
- **Frontend**: Next.js 16 (App Router)
- **UI Architecture**: Tailwind CSS (Styling) + Framer Motion (Animations) + Lucide (Icons)
- **Backend (Core Brain)**: 
  - **Supabase**: Authentication, PostgreSQL Database, Real-time sync.
  - **Middleware**: Edge-runtime subdomain routing.
- **Payments**: Razorpay (Fees & Course purchases).
- **Storage**: Supabase Storage (Materials, PDFs, Media).
- **Hosting**: **Vercel** (Optimized for Next.js, Edge Middleware, and Custom Domains).

## 🌍 Subdomain Mapping
- `krishnaacademy.com` → Marketing Site
- `app.krishnaacademy.com` → Student Portal
- `admin.krishnaacademy.com` → Admin Control Panel
- `api.krishnaacademy.com` → Serverless API Routes

## 🚀 Deployment Workflow
1. **Repository Setup**: Push the current codebase to GitHub.
2. **Vercel Project Creation**: Import the repository into Vercel.
3. **Environment Variables**: Configure `.env.local` variables in Vercel Dashboard:
   - `NEXT_PUBLIC_ROOT_DOMAIN`: `krishnaacademy.com`
   - `NEXT_PUBLIC_SUPABASE_URL`: [Your URL]
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: [Your Key]
   - `RAZORPAY_KEY_ID`: [Your ID]
   - `RAZORPAY_KEY_SECRET`: [Your Secret]
4. **Domain Setup**: Add the naked domain and wildcards (`*.krishnaacademy.com`) in Vercel Settings.
5. **Database Execution**: Run the provided `SCHEMA.sql` in the Supabase SQL Editor.

## ✅ Security & Optimization
- **RLS (Row Level Security)**: Enforced via Supabase to ensure students only see their own data.
- **Middleware Security**: Path protection for `/portal` and `/admin` based on user roles.
- **SEO**: Dynamic metadata for the marketing site and course pages.
