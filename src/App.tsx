import { useState } from 'react';
import { Layers, Quote, BookOpen, Award, HelpCircle, Building2, Flame, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { AppSection } from './types';
import Flowchart from './components/Flowchart';
import FreeCompetition from './components/FreeCompetition';
import AccumulationConcentration from './components/AccumulationConcentration';
import MonopolyTheory from './components/MonopolyTheory';
import StandardOilCase from './components/StandardOilCase';
import CritiqueExpansion from './components/CritiqueExpansion';
import References from './components/References';
import { leninQuotes } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('overview');

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 flex flex-col font-sans selection:bg-rose-600/30 selection:text-rose-200">
      
      {/* HEADER SECTION */}
      <header id="app-header" className="border-b border-slate-700 bg-[#0F172A]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-rose-500 font-mono text-xs tracking-[0.3em] uppercase mb-1 font-bold">Học Thuyết Kinh Tế Chính Trị</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white font-display">
              TỪ CẠNH TRANH TỰ DO ĐẾN ĐỘC QUYỀN
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                id="btn-nav-overview"
                onClick={() => setActiveSection('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                  activeSection === 'overview'
                    ? 'bg-rose-950/20 border-rose-500/30 text-rose-400'
                    : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                Tổng Quan Học Thuyết
              </button>
              <div className="h-4 w-px bg-slate-700"></div>
              <span className="text-[10px] font-mono bg-slate-800/80 text-slate-400 border border-slate-700 px-2 py-1 rounded">
                Chuyên đề: Độc Quyền
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION / BANNER (Shows only on Overview) */}
      {activeSection === 'overview' && (
        <section id="hero-banner" className="relative border-b border-slate-800 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-900/50 via-[#0F172A] to-[#0F172A]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.04),transparent_75%)]"></div>
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/5 border border-rose-500/10 text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest mx-auto animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> Học thuyết kinh tế Lênin vĩ đại
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-none">
              SỰ BIẾN ĐỔI BIỆN CHỨNG <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600">
                TỪ CẠNH TRANH SANG ĐỘC QUYỀN
              </span>
            </h2>

            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Khám phá con đường vận động khách quan của chủ nghĩa tư bản thông qua sơ đồ logic, mô phỏng thị trường tương tác, cấu trúc độc quyền (Cartel - Syndicate - Trust) và Case Study Standard Oil (1870-1911).
            </p>

            {/* Core Quote presentation card */}
            <div className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700 p-6 md:p-8 rounded-xl text-left relative mt-8 shadow-2xl backdrop-blur-md border-l-4 border-l-rose-500">
              <div className="absolute top-4 right-4 text-slate-800">
                <Quote className="w-16 h-16 opacity-10 rotate-180" />
              </div>
              <span className="text-[10px] font-mono text-rose-500 tracking-widest uppercase font-bold">Luận điểm then chốt</span>
              <p className="text-sm md:text-base text-slate-200 italic leading-relaxed mt-2 relative z-10 font-sans">
                &quot;{leninQuotes[0].text}&quot;
              </p>
              <div className="mt-4 border-t border-slate-700 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-mono text-slate-400">— {leninQuotes[0].author}</span>
                <span className="text-[10px] font-mono text-slate-500">{leninQuotes[0].source}</span>
              </div>
            </div>

            {/* Explore trigger CTA */}
            <div className="pt-6">
              <button
                id="btn-start-explore"
                onClick={() => setActiveSection('competition')}
                className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-sm transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)] inline-flex items-center gap-2 cursor-pointer"
              >
                Bắt Đầu Khám Phá Bài Học <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CORE PROGRESSION FLOWCHART / NAVIGATION BAR */}
      <section className="py-5 bg-[#0F172A] border-b border-slate-800/85 relative z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Flowchart activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </section>

      {/* INTERACTIVE WORKSPACE/DISPLAY SCREEN */}
      <main className="flex-1 py-10 md:py-14 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {activeSection === 'overview' ? (
            /* OVERVIEW MAIN PORTAL */
            <div className="text-center py-12 max-w-2xl mx-auto space-y-5 animate-fade-in">
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Học thuyết Kinh tế chính trị của V.I. Lênin vạch rõ con đường vận động khách quan dẫn từ Cạnh tranh tự do đến Độc quyền. Hãy lựa chọn các chủ đề ở sơ đồ Tiến trình logic ở trên để bắt đầu nghiên cứu chi tiết từng nội dung bài học.
              </p>
              <div className="inline-flex gap-3 justify-center">
                <button
                  id="btn-start-learning"
                  onClick={() => setActiveSection('competition')}
                  className="px-5 py-2.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Bắt đầu học ngay
                </button>
              </div>
            </div>
          ) : activeSection === 'competition' ? (
            <FreeCompetition />
          ) : activeSection === 'accumulation' ? (
            <AccumulationConcentration />
          ) : activeSection === 'monopoly' ? (
            <MonopolyTheory />
          ) : activeSection === 'standard_oil' ? (
            <StandardOilCase />
          ) : activeSection === 'critique_expansion' ? (
            <CritiqueExpansion />
          ) : (
            <References />
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer id="app-footer" className="border-t border-slate-800 bg-[#0F172A] py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Kinh tế chính trị Mác-Lênin | Chuyên đề: Độc quyền
            </span>
          </div>

          <div className="flex gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            <span>Ref: Supreme Court Case 221 U.S. 1</span>
            <span>Visual Presentation v1.1</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
