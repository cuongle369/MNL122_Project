import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  Layers, 
  ShieldCheck, 
  Coins, 
  Flame, 
  ShieldAlert, 
  Sparkles,
  Play,
  RotateCcw,
  Plus
} from 'lucide-react';
import { leninQuotes } from '../data';

export default function AccumulationConcentration() {
  // --- STATE FOR SECTION A: TÍCH TỤ TƯ BẢN ---
  const [accumCapital, setAccumCapital] = useState<number>(10000);
  const [accumSurplus, setAccumSurplus] = useState<number>(0);
  const [capitalistConsumption, setCapitalistConsumption] = useState<number>(0);
  const [reinvestRate, setReinvestRate] = useState<number>(70); // % of surplus to reinvest
  const [productionStatus, setProductionStatus] = useState<'idle' | 'producing' | 'produced'>('idle');
  const [lastSurplusGenerated, setLastSurplusGenerated] = useState<number>(0);
  const [cycleCount, setCycleCount] = useState<number>(0);
  const [accumLogs, setAccumLogs] = useState<string[]>([
    "Khởi đầu chu kỳ với $10,000 tư bản ban đầu. Hãy bấm 'Vận hành sản xuất' để bắt đầu tạo ra giá trị thặng dư."
  ]);

  const handleProduce = () => {
    setProductionStatus('producing');
    setLastSurplusGenerated(0);
    
    setTimeout(() => {
      // Surplus value is 25% of current capital
      const generated = Math.round(accumCapital * 0.25);
      setAccumSurplus(generated);
      setLastSurplusGenerated(generated);
      setProductionStatus('produced');
      setCycleCount(prev => prev + 1);
      
      setAccumLogs(prev => [
        `Chu kỳ ${cycleCount + 1}: Sản xuất hoàn tất! Tạo ra +$${generated.toLocaleString()} giá trị thặng dư (m).`,
        ...prev.slice(0, 4)
      ]);
    }, 1000); // 1s visual production simulation
  };

  const handleReinvest = () => {
    const toReinvest = Math.round(accumSurplus * (reinvestRate / 100));
    const toConsume = accumSurplus - toReinvest;

    setAccumCapital(prev => prev + toReinvest);
    setCapitalistConsumption(prev => prev + toConsume);
    setAccumSurplus(0);
    setProductionStatus('idle');

    setAccumLogs(prev => [
      `Phân bổ chu kỳ ${cycleCount}: Tích tụ vào tư bản +$${toReinvest.toLocaleString()} (${reinvestRate}%), tiêu dùng cá nhân +$${toConsume.toLocaleString()} (${100 - reinvestRate}%).`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleResetAccum = () => {
    setAccumCapital(10000);
    setAccumSurplus(0);
    setCapitalistConsumption(0);
    setReinvestRate(70);
    setProductionStatus('idle');
    setLastSurplusGenerated(0);
    setCycleCount(0);
    setAccumLogs([
      "Khởi đầu chu kỳ với $10,000 tư bản ban đầu. Hãy bấm 'Vận hành sản xuất' để bắt đầu tạo ra giá trị thặng dư."
    ]);
  };

  // Derived Factory Level
  const getAccumLevel = (capital: number) => {
    if (capital < 12000) return 1;
    if (capital < 16000) return 2;
    if (capital < 22000) return 3;
    if (capital < 30000) return 4;
    return 5;
  };
  const accumLevel = getAccumLevel(accumCapital);

  const getFactoryName = (level: number) => {
    switch (level) {
      case 1: return "Xưởng Thủ Công Nhỏ";
      case 2: return "Nhà Máy Bán Cơ Giới";
      case 3: return "Nhà Máy Cơ Giới Hóa";
      case 4: return "Tổ Hợp Xí Nghiệp Lớn";
      case 5: return "Siêu Tập Đoàn Công Nghiệp";
      default: return "Nhà Máy";
    }
  };

  // --- STATE FOR SECTION B: TẬP TRUNG TƯ BẢN (SIMPLIFIED) ---
  const [firms, setFirms] = useState([
    { id: 'A', name: 'Xí nghiệp Alpha (Bạn)', capital: 4000, active: true, status: 'normal' },
    { id: 'B', name: 'Xí nghiệp Beta', capital: 3000, active: true, status: 'normal' },
    { id: 'C', name: 'Xí nghiệp Gamma', capital: 2500, active: true, status: 'normal' },
    { id: 'D', name: 'Xí nghiệp Delta', capital: 2000, active: true, status: 'normal' },
  ]);
  const [compRound, setCompRound] = useState<number>(0);
  const [compLogs, setCompLogs] = useState<string[]>([
    "Thị trường đang ở trạng thái cạnh tranh tự do. Hãy bấm nút 'Hạ giá bán' để chèn ép đối thủ cạnh tranh!"
  ]);

  const handlePriceCut = () => {
    setFirms(prev => {
      return prev.map(f => {
        if (f.id === 'A') {
          // You gain some market share/capital from competitors
          return { ...f, capital: f.capital + 1000 };
        } else if (f.active) {
          // Competitors lose capital
          const nextCap = Math.max(0, f.capital - 1000);
          return { 
            ...f, 
            capital: nextCap,
            status: nextCap === 0 ? 'bankrupt' : nextCap <= 1500 ? 'weak' : 'normal'
          };
        }
        return f;
      });
    });
    setCompRound(prev => prev + 1);
    setCompLogs(prev => [
      `Vòng ${compRound + 1} (Hạ giá bán): Alpha giảm giá sản phẩm để thu hút khách hàng. Vốn của Alpha tăng +$1,000. Các đối thủ Beta, Gamma, Delta sụt giảm -$1,000 vốn do mất thị phần!`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleAcquire = (id: string) => {
    const target = firms.find(f => f.id === id);
    if (!target) return;

    const remainingCapital = target.capital;

    setFirms(prev => {
      return prev.map(f => {
        if (f.id === 'A') {
          // Absorb the competitor's remaining capital
          return { ...f, capital: f.capital + remainingCapital };
        } else if (f.id === id) {
          return { ...f, capital: 0, active: false, status: 'merged' };
        }
        return f;
      });
    });

    setCompLogs(prev => [
      `Sáp nhập thành công: Alpha chính thức thôn tính ${target.name}, gộp toàn bộ +$${remainingCapital.toLocaleString()} vốn còn lại của họ vào tổng tài sản của Alpha!`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleResetMerge = () => {
    setFirms([
      { id: 'A', name: 'Xí nghiệp Alpha (Bạn)', capital: 4000, active: true, status: 'normal' },
      { id: 'B', name: 'Xí nghiệp Beta', capital: 3000, active: true, status: 'normal' },
      { id: 'C', name: 'Xí nghiệp Gamma', capital: 2500, active: true, status: 'normal' },
      { id: 'D', name: 'Xí nghiệp Delta', capital: 2000, active: true, status: 'normal' },
    ]);
    setCompRound(0);
    setCompLogs([
      "Thị trường quay lại trạng thái cạnh tranh tự do ban đầu. Hãy bấm nút 'Hạ giá bán' để làm suy yếu đối thủ và tiến hành sáp nhập!"
    ]);
  };

  // Determine if monopoly is achieved
  const isMonopolyAchieved = firms.filter(f => f.id !== 'A' && f.active).length === 0;

  // Market share calculators
  const totalMarketCapital = firms.reduce((sum, f) => sum + f.capital, 0);
  const getShare = (capital: number) => {
    if (totalMarketCapital === 0) return 0;
    return Math.round((capital / totalMarketCapital) * 100);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Lenin Quote Panel */}
      <div className="bg-slate-800/50 border-l-4 border-amber-500 rounded-lg p-5 md:p-6 backdrop-blur-md">
        <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">Luận điểm cốt lõi của Lênin</span>
        <blockquote className="text-sm md:text-base text-slate-100 italic leading-relaxed mt-2">
          &quot;{leninQuotes[0].text}&quot;
        </blockquote>
        <div className="text-right text-xs text-slate-400 font-mono mt-2">
          — {leninQuotes[0].author}, <span className="text-slate-500">{leninQuotes[0].source}</span>
        </div>
      </div>

      {/* Side-by-Side Theory comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tich tu */}
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-black text-white">1. TÍCH TỤ TƯ BẢN (Accumulation)</h4>
            </div>
            
            <p className="text-[10px] font-mono mt-2 text-amber-500 uppercase tracking-widest font-bold">Tự lớn lên từ nội lực bên trong</p>
            
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              <strong>Khái niệm:</strong> Tích tụ tư bản là sự tăng thêm quy mô của tư bản cá biệt bằng cách <strong className="text-white">tư bản hóa giá trị thặng dư</strong>, tức là biến một phần lợi nhuận (m) trở lại làm vốn đầu tư mở rộng sản xuất.
            </p>
            
            <div className="bg-[#0F172A] p-3.5 rounded border border-slate-800 text-xs text-slate-400 mt-4 italic leading-relaxed">
              <strong>Ví dụ thực tế:</strong> Doanh nghiệp khai thác dầu thu lợi nhuận ròng 100.000 USD năm nay, quyết định giữ lại 70.000 USD để mua thêm 2 giàn khoan mới vào năm sau. Doanh nghiệp tự phát triển dựa trên chính nguồn tiền kiếm được của mình.
            </div>
          </div>
        </div>

        {/* Tap trung */}
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-black text-white">2. TẬP TRUNG TƯ BẢN (Concentration)</h4>
            </div>
            
            <p className="text-[10px] font-mono mt-2 text-amber-500 uppercase tracking-widest font-bold">Hợp nhất tư bản sẵn có bên ngoài</p>
            
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              <strong>Khái niệm:</strong> Tập trung tư bản là sự tăng thêm quy mô của tư bản cá biệt bằng cách <strong className="text-white">hợp nhất nhiều tư bản cá biệt nhỏ</strong> có sẵn trong xã hội thành một tư bản cá biệt lớn hơn.
            </p>
            
            <div className="bg-[#0F172A] p-3.5 rounded border border-slate-800 text-xs text-slate-400 mt-4 italic leading-relaxed">
              <strong>Ví dụ thực tế:</strong> Doanh nghiệp lọc dầu lớn thôn tính (M&A) hoặc sáp nhập với 3 nhà máy lọc dầu nhỏ của các đối thủ cạnh tranh yếu hơn để tạo thành một tập đoàn thống lĩnh. Tổng quy mô tư bản tăng vọt ngay lập tức mà không cần thời gian tích lũy.
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE VISUALIZER */}
      <div id="acc-visualizer" className="p-6 rounded-lg bg-slate-900 border border-slate-700/80 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
          <h4 className="font-display text-base font-black text-white uppercase tracking-wider">
            MÔ HÌNH TƯƠNG TÁC: CON ĐƯỜNG LỚN LÊN CỦA TƯ BẢN
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TICH TU ANIMATOR */}
          <div className="p-5 rounded-lg bg-slate-800/40 border border-slate-700 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-amber-500 uppercase font-bold tracking-wider">
                  TRÌNH MÔ PHỎNG TÍCH TỤ TƯ BẢN (TUẦN HOÀN G-H-G')
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/20 text-amber-400">
                  Lvl {accumLevel}: {getFactoryName(accumLevel)}
                </span>
              </div>
              
              <div className="mt-6 flex flex-col items-center">
                {/* Visual factory */}
                <div className="relative flex items-end justify-center h-28 w-full border-b border-slate-700 pb-1">
                  {/* Smoke stacks based on level */}
                  <div className="absolute bottom-12 flex gap-3 z-0">
                    {Array.from({ length: accumLevel }).map((_, i) => (
                      <div key={i} className="w-4 h-14 bg-slate-700 rounded-t relative border-t border-x border-slate-600">
                        {/* Animated smoke when producing */}
                        {productionStatus === 'producing' && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col gap-1 items-center">
                            <div className="w-2.5 h-2.5 bg-slate-400 rounded-full opacity-60 animate-ping" style={{ animationDuration: '1.5s', animationDelay: `${i * 0.25}s` }} />
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '1s', animationDelay: `${i * 0.15}s` }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Factory body */}
                  <div className={`z-10 bg-slate-800 border-x-2 border-t-2 border-slate-600 transition-all duration-500 rounded-t shadow-2xl flex flex-col items-center justify-center ${
                    accumLevel === 1 ? 'w-24 h-12' :
                    accumLevel === 2 ? 'w-32 h-16 border-rose-500/10' :
                    accumLevel === 3 ? 'w-40 h-20 bg-slate-700 border-rose-500/20' :
                    accumLevel === 4 ? 'w-48 h-24 bg-slate-600 border-rose-500/30' :
                    'w-56 h-26 bg-slate-500 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                  }`}>
                    <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">TƯ BẢN ĐẦU TƯ</span>
                    <span className="text-xs font-mono font-black text-white mt-0.5">${accumCapital.toLocaleString()}</span>
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-3 gap-2.5 w-full mt-6 text-center font-mono text-xs">
                  <div className="p-2 rounded bg-[#0F172A] border border-slate-800">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase">Tổng Tư Bản (G)</span>
                    <span className="text-xs font-bold text-white">${accumCapital.toLocaleString()}</span>
                  </div>
                  <div className="p-2 rounded bg-[#0F172A] border border-slate-800">
                    <span className="text-[9px] text-amber-500 block font-bold uppercase">Thặng Dư (m)</span>
                    <span className={`text-xs font-bold ${accumSurplus > 0 ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`}>
                      ${accumSurplus.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-[#0F172A] border border-slate-800">
                    <span className="text-[9px] text-emerald-500 block font-bold uppercase">Tiêu dùng tư bản</span>
                    <span className="text-xs font-bold text-emerald-400">${capitalistConsumption.toLocaleString()}</span>
                  </div>
                </div>

                {/* Slider for Reinvest rate only visible when surplus is waiting to be allocated */}
                {productionStatus === 'produced' && (
                  <div className="w-full mt-5 bg-slate-800/80 p-3 rounded border border-slate-700/50">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400">Tỷ lệ tái đầu tư tích lũy:</span>
                      <span className="font-mono font-bold text-amber-400">{reinvestRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      step="10"
                      value={reinvestRate}
                      onChange={(e) => setReinvestRate(Number(e.target.value))}
                      className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                      <span>Tái đầu tư: ${Math.round(accumSurplus * (reinvestRate / 100)).toLocaleString()}</span>
                      <span>Tiêu dùng: ${Math.round(accumSurplus * (1 - reinvestRate / 100)).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Logs Area */}
            <div className="mt-4 p-2 bg-[#0F172A] border border-slate-800/80 rounded h-16 overflow-y-auto">
              {accumLogs.map((log, index) => (
                <p key={index} className={`text-[10px] font-mono leading-relaxed ${index === 0 ? 'text-amber-300' : 'text-slate-500'}`}>
                  • {log}
                </p>
              ))}
            </div>

            {/* Interaction Buttons */}
            <div className="flex gap-2 mt-4">
              {productionStatus === 'idle' && (
                <button
                  id="btn-produce"
                  onClick={handleProduce}
                  className="flex-1 py-2.5 px-4 rounded bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5" /> 1. Vận Hành Sản Xuất (Sinh Thặng Dư)
                </button>
              )}

              {productionStatus === 'producing' && (
                <button
                  disabled
                  className="flex-1 py-2.5 px-4 rounded bg-slate-800 text-slate-500 font-display font-bold text-xs flex items-center justify-center gap-1.5 cursor-not-allowed"
                >
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Máy Móc Đang Hoạt Động...
                </button>
              )}

              {productionStatus === 'produced' && (
                <button
                  id="btn-reinvest-dist"
                  onClick={handleReinvest}
                  className="flex-1 py-2.5 px-4 rounded bg-amber-600 hover:bg-amber-500 text-white font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <TrendingUp className="w-3.5 h-3.5" /> 2. Phân Bổ & Tích Tụ Tư Bản
                </button>
              )}

              <button
                id="btn-reset-accum"
                onClick={handleResetAccum}
                className="py-2.5 px-3 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 transition-all cursor-pointer text-xs"
                title="Khởi động lại mô hình"
              >
                Reset
              </button>
            </div>
          </div>

          {/* TAP TRUNG ANIMATOR (SIMPLIFIED) */}
          <div className="p-5 rounded-lg bg-slate-800/40 border border-slate-700 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-rose-400 uppercase font-bold tracking-wider">
                  TRÌNH MÔ PHỎNG TẬP TRUNG TƯ BẢN (SÁP NHẬP & THÔN TÍNH)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {isMonopolyAchieved ? 'ĐỘC QUYỀN TUYỆT ĐỐI' : `Vòng đấu: ${compRound}`}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 mt-2 leading-normal">
                Bấm nút <strong className="text-rose-400">"Hạ giá bán"</strong> để làm hao mòn vốn đối thủ, sau đó bấm <strong className="text-amber-400">"Sáp nhập"</strong> để hợp nhất vốn của họ vào Alpha!
              </p>

              {/* Pure CSS Market Share Bar Chart */}
              <div className="mt-4">
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1">Cơ cấu thị phần (Tỷ lệ phân chia tư bản)</span>
                <div className="h-5 w-full rounded-md overflow-hidden flex bg-slate-800 border border-slate-700/50">
                  {firms.map((firm) => {
                    const share = getShare(firm.capital);
                    if (share === 0) return null;
                    
                    const colorClass = 
                      firm.id === 'A' ? 'bg-rose-600' :
                      firm.id === 'B' ? 'bg-amber-500' :
                      firm.id === 'C' ? 'bg-emerald-500' :
                      'bg-blue-500';

                    return (
                      <div 
                        key={firm.id}
                        style={{ width: `${share}%` }}
                        className={`${colorClass} h-full transition-all duration-500 flex items-center justify-center text-[9px] font-mono font-bold text-white truncate px-1`}
                        title={`${firm.name}: ${share}%`}
                      >
                        {share >= 10 ? `${firm.id}: ${share}%` : `${firm.id}`}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Competitors List */}
              <div className="mt-4 space-y-2">
                {firms.map((firm) => (
                  <div
                    key={firm.id}
                    className={`p-2.5 rounded border transition-all duration-500 flex justify-between items-center ${
                      firm.id === 'A'
                        ? 'border-rose-500/30 bg-rose-950/10'
                        : firm.active 
                          ? firm.status === 'weak'
                            ? 'border-amber-500/50 bg-amber-950/10 animate-pulse'
                            : 'border-slate-800 bg-[#0F172A]' 
                          : 'border-slate-800/30 bg-[#0F172A]/10 opacity-30 line-through'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Layers className={`w-3.5 h-3.5 ${
                        firm.id === 'A' ? 'text-rose-500' :
                        firm.id === 'B' ? 'text-amber-500' :
                        firm.id === 'C' ? 'text-emerald-500' : 'text-blue-500'
                      }`} /> 
                      <div className="flex flex-col truncate">
                        <span className="text-xs font-semibold text-slate-200">{firm.name}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">
                          {firm.id === 'A' ? 'Doanh nghiệp của bạn' : 
                           firm.status === 'weak' ? 'Suy yếu trầm trọng!' : 
                           firm.status === 'bankrupt' ? 'Phá sản hoàn toàn!' : 
                           firm.status === 'merged' ? 'Đã bị sáp nhập!' : 'Ổn định'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-slate-300">
                        {firm.active ? `$${firm.capital.toLocaleString()}` : '$0'}
                      </span>
                      
                      {/* Acquire Button specifically for the weak / bankrupt competitors */}
                      {firm.id !== 'A' && firm.active && (firm.status === 'weak' || firm.status === 'bankrupt') && (
                        <button
                          onClick={() => handleAcquire(firm.id)}
                          className="py-1 px-2.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-900 font-mono font-black text-[9px] transition-all flex items-center gap-1 shadow cursor-pointer uppercase animate-bounce"
                        >
                          <Plus className="w-2.5 h-2.5" /> Sáp nhập (M&A)
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logs Area */}
            <div className="mt-4 p-2 bg-[#0F172A] border border-slate-800/80 rounded h-16 overflow-y-auto">
              {compLogs.map((log, index) => (
                <p key={index} className={`text-[10px] font-mono leading-relaxed ${index === 0 ? 'text-rose-300' : 'text-slate-500'}`}>
                  • {log}
                </p>
              ))}
            </div>

            {/* Interaction Buttons */}
            <div className="flex gap-2 mt-4">
              {!isMonopolyAchieved ? (
                <button
                  id="btn-price-cut"
                  onClick={handlePriceCut}
                  className="flex-1 py-3 px-4 rounded bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  title="Hạ giá bán để hút khách từ đối thủ. Vốn Alpha tăng +$1,000, vốn đối thủ giảm -$1,000."
                >
                  <Flame className="w-3.5 h-3.5 text-white animate-pulse" /> Hạ Giá Bán (Chèn Ép Đối Thủ)
                </button>
              ) : (
                <div className="flex-1 py-3 px-4 rounded bg-rose-600/10 border border-rose-500/30 text-rose-400 font-display font-bold text-xs flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-rose-500 animate-spin" /> ĐÃ THIẾT LẬP ĐỘC QUYỀN TUYỆT ĐỐI (MegaCorp)!
                </div>
              )}
              <button
                id="btn-reset-merge"
                onClick={handleResetMerge}
                className="py-2.5 px-3 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 transition-all cursor-pointer text-xs"
                title="Khởi động lại mô hình"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DIALECTIC CONNECTION SECTION */}
      <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-md">
        <h4 className="font-display text-sm font-bold text-white tracking-widest uppercase mb-3">Mối Quan Hệ Giữa Cạnh Tranh & Tích Tụ, Tập Trung</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Cạnh tranh tự do vừa là nguyên nhân trực tiếp, vừa là kết quả tất yếu thúc đẩy quá trình tích tụ và tập trung sản xuất diễn ra nhanh chóng:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded bg-[#0F172A]/40 border border-slate-800">
            <h5 className="font-bold text-slate-200">1. Áp lực buộc tích lũy</h5>
            <p className="text-slate-400 mt-1.5 leading-relaxed">
              Cạnh tranh gay gắt buộc nhà tư bản phải liên tục cải tiến kỹ thuật và mở rộng quy mô sản xuất để giảm giá thành sản phẩm nhằm duy trì năng lực cạnh tranh. Quá trình này bắt buộc họ phải liên tục tích lũy giá trị thặng dư thành vốn mới.
            </p>
          </div>
          <div className="p-4 rounded bg-[#0F172A]/40 border border-slate-800">
            <h5 className="font-bold text-slate-200">2. Đào thải & Thôn tính</h5>
            <p className="text-slate-400 mt-1.5 leading-relaxed">
              Trong cuộc đấu tranh sinh tử của cạnh tranh tự do, kẻ mạnh có tiềm lực tài chính lớn sẽ thôn tính kẻ yếu (M&A) hoặc các doanh nghiệp vừa và nhỏ bị phá sản hàng loạt, làm lượng tư bản chuyển dời cực nhanh vào tay số ít nhà tư bản lớn thắng cuộc.
            </p>
          </div>
          <div className="p-4 rounded bg-[#0F172A]/40 border border-slate-800">
            <h5 className="font-bold text-slate-200">3. Điểm nút dẫn đến Độc quyền</h5>
            <p className="text-slate-400 mt-1.5 leading-relaxed">
              Tích tụ và tập trung sản xuất phát triển tới mức độ cao, số lượng xí nghiệp lớn nắm giữ huyết mạch nền kinh tế chỉ còn đếm trên đầu ngón tay. Các xí nghiệp này nhận thấy tiếp tục cạnh tranh khốc liệt sẽ gây lưỡng bại câu thương, nên xu hướng thỏa hiệp hình thành độc quyền ra đời.
            </p>
          </div>
        </div>

        <div className="bg-amber-950/10 border border-amber-500/20 rounded p-4 mt-5 text-center">
          <span className="font-display text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Kết luận lý luận</span>
          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tích tụ và tập trung tư bản là hai con đường khác nhau nhưng dẫn đến cùng một kết quả thực tế: <strong className="text-white">quy mô sản xuất ngày càng phình to, số lượng doanh nghiệp ngày càng co hẹp</strong>. Đây chính là bệ phóng kinh tế trực tiếp bẻ gãy cạnh tranh tự do và sinh ra tổ chức Độc quyền.
          </p>
        </div>
      </div>
    </div>
  );
}
