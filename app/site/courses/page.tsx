import React from "react";
import Navbar from "@/components/Navbar";
import { Search, Star, Clock, Users, ArrowRight, Filter } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .eq('is_published', true);

  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 neo-out rounded-3xl bg-surface-container-lowest">
                <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                </h2>
                
                <div className="mb-8">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3 ml-1">Search Course</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 neo-in bg-transparent border-none rounded-2xl focus:ring-2 focus:ring-primary-container/20" 
                      placeholder="Quantum Physics..." 
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-on-background mb-2">Available Courses</h1>
              <p className="text-on-surface-variant text-lg">Explore our selection of premium academic programs.</p>
            </div>

            {error && (
              <div className="p-6 bg-red-50 text-red-600 rounded-2xl mb-8">
                Error loading courses: {error.message}
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {courses && courses.length > 0 ? (
                courses.map((course: any) => (
                  <CourseCard 
                    key={course.id}
                    title={course.title}
                    category={course.category}
                    price={`₹${course.price.toLocaleString()}`}
                    rating="4.9"
                    duration={course.duration}
                    students="100+"
                  />
                ))
              ) : (
                <div className="col-span-full py-24 text-center">
                  <p className="text-on-surface-variant text-xl">No courses found. Add some in the Supabase SQL Editor!</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function CourseCard({ title, category, price, rating, duration, students }: any) {
  return (
    <div className="neo-out rounded-[40px] p-6 bg-surface-container-lowest flex flex-col group hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-64 w-full rounded-[32px] overflow-hidden mb-6 bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 glass-card px-4 py-1 rounded-full flex items-center gap-2 text-white text-sm">
          <Star className="w-4 h-4 fill-current text-yellow-400" /> {rating}
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-primary bg-primary-container/10 px-3 py-1 rounded-full uppercase tracking-widest">{category}</span>
          <span className="text-2xl font-bold text-primary-container">{price}</span>
        </div>
        <h3 className="text-2xl font-bold text-on-surface mb-3 leading-tight">{title}</h3>
        <div className="flex items-center gap-4 text-outline mb-8 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" /> {students} Students
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex-1 bg-primary-container text-on-primary-container py-4 rounded-2xl font-bold neo-out hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Buy Now</button>
          <button className="w-14 h-14 flex items-center justify-center rounded-2xl neo-out text-primary hover:bg-primary-container/5 transition-colors cursor-pointer">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
