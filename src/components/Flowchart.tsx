import React from 'react';
import { ArrowRight, Flame, Layers, Award, TrendingUp, HelpCircle, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { AppSection } from '../types';

interface FlowchartProps {
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

export default function Flowchart({ activeSection, setActiveSection }: FlowchartProps) {
  const steps = [
    {
      id: 'competition' as AppSection,
      title: '1. Cạnh Tranh Tự Do',
      shortTitle: 'Cạnh Tranh Tự Do',
      subtitle: 'Quy luật khách quan',
      icon: Flame,
      themeColor: 'rose',
      colorClass: 'text-rose-400 border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40 hover:bg-rose-500/10',
      activeClass: 'border-rose-500 bg-rose-950/20 shadow-[0_0_15px_rgba(244,63,94,0.25)] text-rose-300'
    },
    {
      id: 'accumulation' as AppSection,
      title: '2. Tích Tụ & Tập Trung',
      shortTitle: 'Tích Tụ & Tập Trung',
      subtitle: 'Tăng quy mô tư bản',
      icon: TrendingUp,
      themeColor: 'amber',
      colorClass: 'text-amber-400 border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40 hover:bg-amber-500/10',
      activeClass: 'border-amber-500 bg-amber-950/20 shadow-[0_0_15px_rgba(245,158,11,0.25)] text-amber-300'
    },
    {
      id: 'monopoly' as AppSection,
      title: '3. Tổ Chức Độc Quyền',
      shortTitle: 'Tổ Chức Độc Quyền',
      subtitle: 'Liên kết Cartel - Trust',
      icon: Layers,
      themeColor: 'rose',
      colorClass: 'text-rose-400 border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40 hover:bg-rose-500/10',
      activeClass: 'border-rose-500 bg-rose-950/20 shadow-[0_0_15px_rgba(244,63,94,0.25)] text-rose-300'
    },
    {
      id: 'standard_oil' as AppSection,
      title: '4. Case Study: Standard Oil',
      shortTitle: 'Standard Oil',
      subtitle: 'Lịch sử độc quyền Mỹ',
      icon: Award,
      themeColor: 'emerald',
      colorClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10',
      activeClass: 'border-emerald-500 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.25)] text-emerald-300'
    },
    {
      id: 'critique_expansion' as AppSection,
      title: '5. Phản Biện & Mở Rộng',
      shortTitle: 'Phản Biện & Mở Rộng',
      subtitle: 'Standard Oil vs Big Tech',
      icon: Sparkles,
      themeColor: 'rose',
      colorClass: 'text-rose-400 border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40 hover:bg-rose-500/10',
      activeClass: 'border-rose-500 bg-rose-950/20 shadow-[0_0_15px_rgba(244,63,94,0.25)] text-rose-300'
    },
    {
      id: 'references' as AppSection,
      title: '6. Nguồn Tham Khảo',
      shortTitle: 'Nguồn Tham Khảo',
      subtitle: 'Danh mục tài liệu',
      icon: BookOpen,
      themeColor: 'indigo',
      colorClass: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40 hover:bg-indigo-500/10',
      activeClass: 'border-indigo-500 bg-indigo-950/20 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-indigo-300'
    }
  ];

  // Get index of the active step to render glowing connections
  const activeIdx = steps.findIndex(s => s.id === activeSection);

  return (
    <div className="w-full">
      {/* Container holding the logic pathway */}
      <div className="p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle background ambient mesh line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Pathway Header/Badge */}
          <div className="shrink-0 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-[9px] font-mono font-bold text-rose-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
              Lộ trình bài học
            </div>
            <h3 className="font-display text-base font-black tracking-tight text-white uppercase">
              Tiến trình Logic Lênin
            </h3>
            <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
              Bấm chọn từng nấc thang dưới đây để mở nội dung lý luận tương ứng.
            </p>
          </div>

          {/* Stepper Steps Wrapper - Horizontal Scroll on Mobile/Tablet to Prevent Bulky Wrapping */}
          <div className="flex-1 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent pb-1">
            <div className="flex items-center min-w-max gap-3 py-1 pr-4">
              
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeSection === step.id;
                const isPassed = activeIdx > idx;

                return (
                  <React.Fragment key={step.id}>
                    {/* STEP BUTTON */}
                    <button
                      id={`btn-flow-${step.id}`}
                      onClick={() => setActiveSection(step.id)}
                      className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer min-w-[210px] md:min-w-[230px] ${
                        isActive ? step.activeClass : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {/* Active glowing aura */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-500/5 to-transparent pointer-events-none"></div>
                      )}

                      {/* Icon with glowing status wrapper */}
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-slate-950 text-white shadow-inner' 
                          : isPassed 
                            ? 'bg-rose-950/20 text-rose-400' 
                            : 'bg-slate-800/40 text-slate-500 group-hover:text-slate-350'
                      }`}>
                        <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'animate-pulse' : ''}`} />
                      </div>

                      {/* Text content */}
                      <div className="flex flex-col min-w-0">
                        <span className={`font-display text-xs font-bold tracking-tight truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {step.title}
                        </span>
                        <span className="text-[10px] text-slate-500 tracking-tight group-hover:text-slate-400 truncate">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Micro Active indicator line */}
                      {isActive && (
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-rose-500 rounded-full shadow-[0_0_8px_#f43f5e]"></div>
                      )}
                    </button>

                    {/* Step Connecting Line (Sleek Dot/Arrow design instead of heavy block) */}
                    {idx < steps.length - 1 && (
                      <div className="flex items-center shrink-0">
                        <ChevronRight className={`w-4 h-4 ${isPassed ? 'text-rose-500/50' : 'text-slate-700'}`} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
