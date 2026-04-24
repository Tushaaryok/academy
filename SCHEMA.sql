-- Krishna Academy Database Schema (Supabase)

-- 1. Profiles (Linked to Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role TEXT CHECK (role IN ('student', 'teacher', 'admin')) DEFAULT 'student',
  student_id TEXT UNIQUE, -- e.g. KA-2024-001
  batch_id UUID REFERENCES batches(id),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Courses
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- e.g. Science, Maths
  price DECIMAL NOT NULL,
  duration TEXT, -- e.g. 1 Year
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Batches
CREATE TABLE batches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- e.g. 2024 Evening Batch
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Attendance
CREATE TABLE attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  batch_id UUID REFERENCES batches(id) ON DELETE CASCADE,
  date DATE DEFAULT CURRENT_DATE,
  status TEXT CHECK (status IN ('present', 'absent', 'late', 'on_leave')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Fees
CREATE TABLE fees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount DECIMAL NOT NULL,
  status TEXT CHECK (status IN ('pending', 'paid', 'overdue')) DEFAULT 'pending',
  due_date DATE NOT NULL,
  payment_id TEXT, -- Razorpay Payment ID
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Lectures / Material
CREATE TABLE lectures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  batch_id UUID REFERENCES batches(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT, -- Storage or External Link
  material_url TEXT, -- PDF/Doc Link
  published_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE lectures ENABLE ROW LEVEL SECURITY;

-- Students can read their own profile, attendance, fees, and their batch's lectures
CREATE POLICY "Students can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Public can view published courses" ON courses FOR SELECT USING (is_published = true);
CREATE POLICY "Students can view own attendance" ON attendance FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can view own fees" ON fees FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can view lectures for their batch" ON lectures FOR SELECT 
  USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND batch_id = lectures.batch_id));

-- Admins have full access
CREATE POLICY "Admins have full access on profiles" ON profiles USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));
-- (Repeat for other tables for admin)
