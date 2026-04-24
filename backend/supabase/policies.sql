-- Krishna Academy RLS Policies

-- Row Level Security (RLS) Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE lectures ENABLE ROW LEVEL SECURITY;

-- 1. Profiles
CREATE POLICY "Students can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Admins have full access on profiles" ON profiles USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- 2. Courses
CREATE POLICY "Public can view published courses" ON courses FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage courses" ON courses USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- 3. Attendance
CREATE POLICY "Students can view own attendance" ON attendance FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Admins can manage attendance" ON attendance USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- 4. Fees
CREATE POLICY "Students can view own fees" ON fees FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Admins can manage fees" ON fees USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- 5. Lectures
CREATE POLICY "Students can view lectures for their batch" ON lectures FOR SELECT 
  USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND batch_id = lectures.batch_id));
CREATE POLICY "Admins can manage lectures" ON lectures USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));
