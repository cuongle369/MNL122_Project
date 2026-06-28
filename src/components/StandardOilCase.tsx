import React, { useState } from 'react';
import { Award, Calendar, Link, CheckCircle, Flame, DollarSign, TrendingUp, ShieldAlert, ArrowRight, BookOpen } from 'lucide-react';
import { timelineEvents } from '../data';
import { TimelineEvent } from '../types';

export default function StandardOilCase() {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(2); // Default to 1882 Trust formation
  const activeEvent: TimelineEvent = timelineEvents[activeEventIndex];

  // Visual helper for categories
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'accumulation': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'monopoly': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'power': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'dissolution': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'accumulation': return 'Tích tụ & Tập trung';
      case 'monopoly': return 'Thủ đoạn độc quyền';
      case 'power': return 'Đỉnh cao thống trị';
      case 'dissolution': return 'Can thiệp nhà nước';
      default: return 'Lịch sử';
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* SECTION HEADER & INTRODUCTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-purple-500/10 text-purple-400">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Case Study điển hình</span>
              <h4 className="font-display text-xl font-black text-white mt-0.5">TẬP ĐOÀN STANDARD OIL (1870 - 1911)</h4>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mt-4">
            Đế chế dầu mỏ của vua dầu mỏ <strong className="text-purple-400 font-bold">John D. Rockefeller</strong> là minh chứng thực tế sống động nhất cho lý luận của Lênin. Cạnh tranh tự do đã thúc đẩy tích tụ và tập trung sản xuất đến đỉnh điểm, tạo dựng một tổ chức độc quyền thống lĩnh làm khuynh đảo chính trường Hoa Kỳ trước khi bị can thiệp bởi pháp luật chống độc quyền năm 1911.
          </p>
        </div>

        {/* CORE THESIS METRIC CARD */}
        <div className="lg:col-span-4 bg-slate-800/50 p-5 rounded-lg border border-slate-700/60 text-center flex flex-col justify-center h-full">
          <span className="text-[10px] font-mono text-slate-450 uppercase tracking-widest block mb-1">Mục tiêu lý luận cốt lõi</span>
          <span className="font-display text-xs font-bold text-slate-200 uppercase px-2 py-1.5 bg-[#0F172A] rounded border border-slate-800 leading-normal block">
            Cạnh tranh tự do <br/>
            <span className="text-purple-400">&darr; Tích tụ & Tập trung &darr;</span> <br/>
            Độc quyền tất yếu
          </span>
        </div>
      </div>

      {/* INTERACTIVE TIMELINE SELECTOR CONTROLS */}
      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-cols-5 gap-2 bg-[#0F172A] p-1.5 rounded border border-slate-800 text-center">
          {timelineEvents.map((ev, idx) => (
            <button
              id={`btn-time-${ev.year}`}
              key={ev.year}
              onClick={() => setActiveEventIndex(idx)}
              className={`py-3 rounded transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                activeEventIndex === idx
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <span className="font-display text-sm md:text-base tracking-tight font-black">{ev.year}</span>
              <span className="text-[9px] font-mono hidden md:inline uppercase tracking-wider text-slate-300/80">
                {getCategoryLabel(ev.category)}
              </span>
            </button>
          ))}
        </div>

        {/* ACTIVE TIMELINE CARD CONTAINER */}
        <div id="so-timeline-detail" className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900 p-6 rounded-lg border border-slate-750 shadow-2xl animate-fade-in">
          {/* Main info (left side of card) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold bg-[#0F172A] px-3 py-1 rounded border border-slate-800 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> Năm {activeEvent.year}
                </span>
                <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded border uppercase tracking-wider ${getCategoryColor(activeEvent.category)}`}>
                  {getCategoryLabel(activeEvent.category)}
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-white mt-4 leading-snug">{activeEvent.title}</h4>
              <p className="text-xs text-slate-500 mt-2 font-mono italic">Mô tả khái quát:</p>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{activeEvent.description}</p>

              {/* Specific details */}
              <div className="mt-5 space-y-3.5">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Chi tiết hoạt động & Thủ đoạn thực tế:</h5>
                {activeEvent.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Source Citations with standard secure referral rules */}
            {activeEvent.citationUrl && (
              <div className="border-t border-slate-800 pt-4 mt-2 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[10px] text-slate-500 font-mono">Dữ liệu được trích xuất từ nguồn chính thống:</span>
                </div>
                <a
                  id={`link-cite-${activeEvent.year}`}
                  href={activeEvent.citationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0F172A] hover:bg-slate-800 text-purple-400 hover:text-purple-300 text-xs font-mono font-semibold transition-all border border-slate-800 cursor-pointer"
                >
                  <Link className="w-3.5 h-3.5" /> {activeEvent.citationLabel}
                </a>
              </div>
            )}
          </div>

          {/* Graphical/Statistical Visualization of active era (right side of card) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-slate-800/60 pt-6 lg:pt-0 lg:pl-6 bg-slate-900/20 p-5 rounded border border-slate-800/20">
            {/* Stat callout */}
            {activeEvent.stats && (
              <div className="p-4 rounded bg-purple-950/10 border border-purple-500/20">
                <span className="text-[10px] text-purple-400 font-mono uppercase tracking-wider block font-bold">{activeEvent.stats.label}</span>
                <span className="font-display text-2xl font-black text-white block mt-1 tracking-tight">{activeEvent.stats.value}</span>
                <span className="text-[11px] text-slate-400 block mt-1">{activeEvent.stats.comparison}</span>
              </div>
            )}

            <div>
              {/* Graphic showing transition to Finance Capital (Đầu sỏ tài chính) */}
              <div className="p-4 rounded bg-[#0F172A] border border-slate-800">
                <h5 className="text-[10px] font-bold text-slate-350 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> SINH RA TƯ BẢN TÀI CHÍNH
                </h5>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Với siêu lợi nhuận lọc dầu (838 triệu USD), Rockefeller mua cổ phần chi phối các ngành đường sắt, khai khoáng, ngân hàng (như Chase Bank), chuyển đổi Độc quyền Công nghiệp thành <strong>Đầu sỏ Tài chính</strong> thống trị cả tài phiệt lẫn chính phủ Mỹ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION EXPLAINER: THE IRONIC DISSOLUTION (SỰ TRỚ TRÊU LỊCH SỬ) */}
      <div id="so-dissolution-explainer" className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-5 h-5 text-purple-400 animate-pulse" />
          <h4 className="font-display text-sm font-bold text-white tracking-widest uppercase">NGHỊCH LÝ GIẢI THỂ 1911: BẢN CHẤT KHÔNG ĐỔI</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-4 rounded bg-[#0F172A] border border-slate-800 space-y-2">
            <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wider block font-bold">1. Sức ép giải thể</span>
            <p className="text-slate-300 leading-relaxed">
              Dưới làn sóng phẫn nộ của dư luận về các hành vi thao túng tàn khốc của các nhà tài phiệt, Nhà nước tư sản buộc phải đại diện quyền lợi giai cấp chung để điều tiết mâu thuẫn xã hội. Tòa án Tối cao Mỹ sử dụng Luật chống độc quyền Sherman ra phán quyết lịch sử buộc Standard Oil phải chia tách thành 34 công ty độc lập.
            </p>
          </div>
          <div className="p-4 rounded bg-[#0F172A] border border-purple-900/30 space-y-2">
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">2. Cú hích tài sản nhân đôi</span>
            <p className="text-slate-300 leading-relaxed">
              Sự trớ trêu lịch sử: Việc phân tách khiến các công ty con (như Standard Oil of New Jersey tức Exxon sau này, Standard Oil of New York tức Mobil) hoạt động minh bạch, thu hút lượng vốn khổng lồ trên sàn chứng khoán. Cổ phiếu của các công ty tăng vọt gấp đôi. Rockefeller (nắm 25% cổ phần) bỗng nhiên <strong>nhân đôi tài sản ròng</strong>, trở thành người giàu nhất hành tinh với khối tài sản tương đương gần 2% GDP của nước Mỹ.
            </p>
          </div>
        </div>

        <div className="bg-purple-950/10 border border-purple-500/20 rounded p-4 mt-5 text-center">
          <span className="font-display text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Kiểm chứng lý luận Lênin</span>
          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Sự kiện 1911 chứng minh luận điểm Lênin: <strong>Độc quyền là quy luật khách quan không thể đảo ngược của Chủ nghĩa tư bản</strong>. Nhà nước tư sản có can thiệp xé nhỏ tập đoàn, nhưng bản chất tích tụ tư bản không đổi: các công ty con tiếp tục phát triển khổng lồ thành các siêu độc quyền năng động hơn (như ExxonMobil, Chevron ngày nay), vẫn khống chế sâu sắc nền chính trị tài chính toàn cầu.
          </p>
        </div>
      </div>
    </div>
  );
}
