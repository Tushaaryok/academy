import React from "react";
import Navbar from "@/components/Navbar";
import { Search, Star, Clock, Users, ArrowRight, Filter } from "lucide-react";

export default function CoursesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative 3D Shapes */}
        <div className="absolute -top-10 -right-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side Filter Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 neo-out rounded-3xl bg-surface-container-lowest">
                <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                </h2>
                
                {/* Search Bar */}
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

                {/* Categories */}
                <div className="mb-8">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 ml-1">Category</label>
                  <div className="flex flex-col gap-3">
                    {["Science & Tech", "Humanities", "Business", "Arts & Design"].map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-6 h-6 neo-in rounded-lg flex items-center justify-center text-primary transition-all group-hover:scale-110">
                          {cat === "Science & Tech" && <div className="w-3 h-3 bg-primary rounded-sm" />}
                        </div>
                        <span className="text-on-surface">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Promo Card */}
              <div className="p-8 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Academic Excellence</h3>
                  <p className="text-sm opacity-90 mb-4">Enroll today and get access to exclusive library resources.</p>
                  <button className="bg-white text-amber-600 px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Course Grid Content */}
          <section className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
              <div>
                <h1 className="text-5xl font-bold text-on-background mb-2">Available Courses</h1>
                <p className="text-on-surface-variant text-lg">Explore our selection of premium academic programs.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <CourseCard 
                title="Advanced Quantum Physics & Mechanics"
                category="Science"
                price="₹12,499"
                rating="4.9"
                duration="12 Weeks"
                students="150+"
              />
              <CourseCard 
                title="Modern Literary Analysis & Criticism"
                category="Humanities"
                price="₹8,999"
                rating="4.8"
                duration="8 Weeks"
                students="85+"
              />
              <CourseCard 
                title="Digital Entrepreneurship Masterclass"
                category="Business"
                price="₹15,000"
                rating="5.0"
                duration="16 Weeks"
                students="210+"
              />
              <CourseCard 
                title="Visual Arts: Foundations of Modernism"
                category="Arts"
                price="₹6,499"
                rating="4.7"
                duration="6 Weeks"
                students="50+"
              />
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
