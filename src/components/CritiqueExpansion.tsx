import React, { useState } from 'react';
import { Sparkles, MessageSquare, ShieldAlert, Users, TrendingUp, Cpu, Globe, ArrowRight, ExternalLink, Scale, ArrowDown } from 'lucide-react';

export default function CritiqueExpansion() {
  const [activeTab, setActiveTab] = useState<'all' | 'theory' | 'conflict' | 'bigtech'>('all');

  const comparisons = [
    {
      metric: 'Tài nguyên cốt lõi',
      standardOil: 'Dầu thô và Mỏ dầu vật lý',
      bigTech: 'Dữ liệu người dùng và Hành vi số',
      desc: 'Dữ liệu được mệnh danh là "dầu mỏ thế kỷ XXI" - nguyên liệu của kinh tế tri thức.'
    },
    {
      metric: 'Hạ tầng kiểm soát',
      standardOil: 'Mạng lưới đường ống (20.000 dặm) & Đường sắt',
      bigTech: 'Hệ điều hành di động (Android, iOS) & Công cụ tìm kiếm',
      desc: 'Nền tảng mà mọi đối thủ bắt buộc phải đi qua để tiếp cận khách hàng.'
    },
    {
      metric: 'Thủ đoạn thôn tính',
      standardOil: 'Thâu tóm cưỡng bức (Cleveland Massacre), Phá giá',
      bigTech: 'Mua đứt startup tiềm năng (Acquire-to-kill hoặc sáp nhập)',
      desc: 'Mua lại đối thủ khi họ còn nhỏ để triệt tiêu nguy cơ lật đổ trong tương lai.'
    },
    {
      metric: 'Phản ứng của Nhà nước',
      standardOil: 'Giải thể thành 34 công ty (1911) theo Luật Sherman',
      bigTech: 'Các vụ kiện chống độc quyền của Mỹ & EU, phạt hành chính cực lớn',
      desc: 'Nhà nước can thiệp để bảo vệ cạnh tranh và trật tự kinh tế thị trường.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 animate-fade-in text-slate-200">
      
      {/* SECTION BANNER */}
      <div className="bg-slate-900 border border-slate-750 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(244,63,94,0.06),transparent_50%)]"></div>
        <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
        <div className="space-y-1 relative z-10">
          <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">Phần 5 - Học thuyết mở rộng</span>
          <h3 className="font-display text-2xl font-black text-white">PHẢN BIỆN & MỞ RỘNG BIỆN CHỨNG</h3>
          <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
            Nghiên cứu sâu sắc lý thuyết của Lênin về mối quan hệ giữa độc quyền và cạnh tranh, sự can thiệp của Nhà nước tư sản qua Case Study Standard Oil (1911) và liên hệ thực tế các tập đoàn Big Tech thế kỷ XXI.
          </p>
        </div>
      </div>

      {/* TABS SELECTOR */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-2">Lọc nội dung:</span>
        {(['all', 'theory', 'conflict', 'bigtech'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === tab
                ? 'bg-rose-950/30 border border-rose-500/30 text-rose-400'
                : 'bg-[#0F172A] border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {tab === 'all' && 'Tất Cả'}
            {tab === 'theory' && 'Lý luận Độc quyền - Cạnh tranh'}
            {tab === 'conflict' && 'Vì sao Khốc liệt hơn?'}
            {tab === 'bigtech' && 'Standard Oil thế kỷ XXI (Big Tech)'}
          </button>
        ))}
      </div>

      {/* TAB CONTENT: THEORY (QUY LUẬT KHÁCH QUAN & SỰ KIỆN 1911) */}
      {(activeTab === 'all' || activeTab === 'theory') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-amber-500 h-full">
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest font-bold">1. Bối cảnh Lịch sử</span>
              <h4 className="font-display text-base font-bold text-white mt-1">Sự kiện giải thể Standard Oil (1911)</h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-3">
                Standard Oil do John D. Rockefeller sáng lập là minh chứng điển hình cho hình thức <strong>Trust</strong> – một tổ chức độc quyền cao cấp mà ở đó các xí nghiệp thành viên mất hoàn toàn tính độc lập về sản xuất và pháp lý. Đến cuối thế kỷ XIX, đế chế này kiểm soát gần <strong>90% thị phần dầu mỏ</strong> tại Mỹ thông qua các chiến lược thâu tóm và tích tụ tư bản mãnh liệt.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                Sự thống trị tuyệt đối này tạo ra các khuyết tật nghiêm trọng của độc quyền: áp đặt giá cao vô lý, hạn chế sản lượng ảo để giữ giá, và bóp nghẹt mọi đối thủ gia nhập. Để duy trì trật tự xã hội và cứu vãn nền kinh tế, Chính phủ Mỹ vận dụng Luật Sherman buộc giải thể Standard Oil thành <strong>34 công ty con độc độc lập</strong> năm 1911. Sự kiện này thể hiện vai trò điều tiết khách quan của Độc quyền Nhà nước đối với kinh tế tư bản.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 bg-slate-900 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 mb-3">
                <Users className="w-5 h-5" />
                <h4 className="font-display text-sm font-bold text-white">Tại sao Độc quyền không xóa bỏ Cạnh tranh?</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Theo lý luận biện chứng của V.I. Lênin, độc quyền sinh ra từ cạnh tranh tự do nhưng <strong>không triệt tiêu cạnh tranh</strong>. Ngược lại, nó bóp méo, nâng cấp và làm cho cạnh tranh trở nên gay gắt, tàn khốc hơn bao giờ hết. Trong trạng thái kinh tế độc quyền, luôn tồn tại song song 3 loại hình cạnh tranh khốc liệt:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4">
                <div className="p-3.5 rounded bg-[#0F172A] border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">Ngoại bộ liên minh</span>
                  <h5 className="text-xs font-bold text-white">Độc quyền vs Ngoài độc quyền</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Tập đoàn sử dụng ưu thế tuyệt đối về vốn, công nghệ và phân phối để dồn ép, thôn tính hoặc bức tử các doanh nghiệp nhỏ lẻ.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#0F172A] border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Giữa các ông lớn</span>
                  <h5 className="text-xs font-bold text-white">Độc quyền vs Độc quyền</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Các siêu tập đoàn đấu tranh khốc liệt để chia lại thị phần toàn cầu, độc chiếm nguồn nguyên liệu thô và các khu vực ảnh hưởng kinh tế.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#0F172A] border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Nội bộ liên minh</span>
                  <h5 className="text-xs font-bold text-white">Cạnh tranh trong nội bộ</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Các xí nghiệp trong cùng liên minh (Cartel, Syndicate) ngấm ngầm đấu tranh giành tỷ lệ cổ phần khống chế, chia lợi nhuận và ghế lãnh đạo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: CONFLICT (TẠI SAO CẠNH TRANH KHỐC LIỆT HƠN) */}
      {(activeTab === 'all' || activeTab === 'conflict') && (
        <div className="p-6 bg-slate-900 rounded-lg border border-slate-750">
          <div className="flex items-center gap-2 text-rose-400 mb-4">
            <TrendingUp className="w-5 h-5" />
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest">3 Lý do khiến Cạnh tranh trong thời kỳ độc quyền trở nên khốc liệt hơn</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-4 rounded-lg bg-[#0F172A] border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono font-bold text-sm">
                1
              </div>
              <h5 className="font-display text-sm font-bold text-white">Sức mạnh kinh tế tập trung quá lớn</h5>
              <p className="text-slate-300 leading-relaxed">
                Các tổ chức độc quyền nắm giữ phần lớn tư liệu sản xuất và sản lượng tiêu thụ. Họ có quyền năng <strong>định đoạt giá cả bán ra, giá mua nguyên liệu đầu vào</strong> và áp đặt luật chơi khắt khe ép buộc các đối thủ yếu hơn phải tuân thủ hoặc bị hủy diệt.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0F172A] border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
                2
              </div>
              <h5 className="font-display text-sm font-bold text-white">Sự lũng đoạn của Tư bản Tài chính</h5>
              <p className="text-slate-300 leading-relaxed">
                Sự dung hợp giữa độc quyền ngân hàng và độc quyền công nghiệp tạo nên <strong>Tư bản Tài chính</strong>. Các đầu sỏ tài phiệt chi phối cả huyết mạch kinh tế và cơ cấu quyền lực nhà nước, khiến cạnh tranh không chỉ ở chất lượng hàng hóa mà nâng tầm thành cuộc chiến tranh giành ảnh hưởng chính trị.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0F172A] border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                3
              </div>
              <h5 className="font-display text-sm font-bold text-white">Kìm hãm / Thúc đẩy đột phá công nghệ</h5>
              <p className="text-slate-300 leading-relaxed">
                Để bảo vệ siêu lợi nhuận độc quyền hiện hữu, các tập đoàn có xu hướng <strong>kìm hãm ứng dụng công nghệ mới</strong> nếu nó đe dọa các tài sản cũ của họ. Điều này buộc các đối thủ nhỏ hơn phải nỗ lực tạo ra các phát minh sáng tạo mang tính hủy diệt (disruptive innovation) để lật đổ gọng kìm độc quyền.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: EXPANSION - BIG TECH CONTEMPORARY STUDY */}
      {(activeTab === 'all' || activeTab === 'bigtech') && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 rounded-lg border border-slate-750 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-rose-400">
                <Cpu className="w-5 h-5 animate-pulse" />
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest">MỞ RỘNG: BIG TECH - NHỮNG &quot;STANDARD OIL&quot; THẾ KỶ XXI</h4>
              </div>
              <span className="text-[10px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-1 rounded">
                Liên hệ thực tiễn kinh tế số hiện đại
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Lịch sử kinh tế chính trị đang lặp lại rõ nét ở kỷ nguyên số. Các tập đoàn công nghệ khổng lồ như <strong>Google, Apple, Meta (Facebook), Amazon</strong> đang vận dụng chính xác các quy luật thâu tóm, kiểm soát độc quyền giống hệt Standard Oil thế kỷ trước, nhưng dưới những công cụ tinh vi hơn:
            </p>

            {/* THREE DETAILED BIG TECH EXEMPLARS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
              {/* META ACQUISITION CASE */}
              <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 flex flex-col justify-between h-full hover:border-rose-500/20 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-rose-400 uppercase font-bold tracking-wider">Thâu tóm startup</span>
                    <span className="text-[9px] text-slate-500 font-mono">Ví dụ tiêu biểu</span>
                  </div>
                  <h5 className="font-display text-sm font-bold text-white">Meta (Facebook) Thâu Tóm Đối Thủ</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Giống như cách Rockefeller áp dụng chiến thuật " Cleveland Massacre" mua lại các đối thủ nhỏ để độc chiếm thị trường, Meta đã thực hiện <strong>hơn 90 vụ thâu tóm</strong> kể từ khi thành lập. Hai thương vụ kinh điển là mua lại <strong>Instagram (2012)</strong> và <strong>WhatsApp (2014)</strong> nhằm triệt tiêu ngay lập tức các mối đe dọa cạnh tranh tiềm tàng.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Nguồn: Ủy ban Thương mại Liên bang Mỹ (FTC)</span>
                  <a
                    id="link-ftc-meta"
                    href="https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0134-facebook-inc-ftc-v-ftc-v-meta-platforms-inc"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="p-1 rounded bg-slate-800 text-rose-400 hover:bg-slate-700 transition-all cursor-pointer"
                    title="Xem vụ kiện FTC kiện Meta"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* GOOGLE DATA DOMINANCE */}
              <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 flex flex-col justify-between h-full hover:border-amber-500/20 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-amber-400 uppercase font-bold tracking-wider">Độc quyền dữ liệu</span>
                    <span className="text-[9px] text-slate-500 font-mono">Nguyên liệu mới</span>
                  </div>
                  <h5 className="font-display text-sm font-bold text-white">Google Kiểm Soát Tìm Kiếm Toàn Cầu</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sức mạnh độc quyền của Big Tech ngày nay dựa trên dữ liệu người dùng – một loại "nguyên thô của thời đại số", hệt như cách Standard Oil khống chế dầu thô và đường sắt. Google hiện chiếm khoảng <strong>90.39% thị phần tìm kiếm toàn cầu</strong>, cho phép họ nắm độc quyền thông tin và định đoạt giá quảng cáo số.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Thị phần: ~90.39% (Statcounter)</span>
                  <a
                    id="link-statcounter-google"
                    href="https://gs.statcounter.com/search-engine-market-share"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="p-1 rounded bg-slate-800 text-amber-400 hover:bg-slate-700 transition-all cursor-pointer"
                    title="Xem thị phần tìm kiếm toàn cầu"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* EU COMMISSION ANTI-TRUST */}
              <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 flex flex-col justify-between h-full hover:border-emerald-500/20 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold tracking-wider">Can thiệp nhà nước</span>
                    <span className="text-[9px] text-slate-500 font-mono">Điều tiết thị trường</span>
                  </div>
                  <h5 className="font-display text-sm font-bold text-white">EU Phạt Google 4.34 Tỷ Euro Vụ Android</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tương tự phán quyết năm 1911 buộc Standard Oil giải thể, Độc quyền Nhà nước ngày nay buộc phải can thiệp để chống lũng đoạn xã hội. Ủy ban Châu Âu đã phạt Google kỷ lục <strong>4.34 tỷ euro</strong> vì hành vi ép buộc các nhà sản xuất điện thoại cài đặt sẵn Google Search và Chrome trên Android để khóa chặt thị trường.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Phạt kỷ lục: 4.34 tỷ Euro (EU)</span>
                  <a
                    id="link-eu-google"
                    href="https://ec.europa.eu/commission/presscorner/detail/en/ip_18_4581"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="p-1 rounded bg-slate-800 text-emerald-400 hover:bg-slate-700 transition-all cursor-pointer"
                    title="Xem thông cáo báo chí EU phạt Google"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* HISTORICAL COMPARISON MATRIX TABLE */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-slate-800/40 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-display font-bold text-white uppercase tracking-wider">
                  Bảng so sánh: Standard Oil (Trust thế kỷ XIX) vs Big Tech (Thế kỷ XXI)
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">Cơ chế thâu tóm lặp lại</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 font-mono uppercase tracking-wider text-[10px] border-b border-slate-800">
                    <th className="p-4 font-bold">Khía cạnh so sánh</th>
                    <th className="p-4 font-bold text-purple-400">Standard Oil (1870-1911)</th>
                    <th className="p-4 font-bold text-rose-400">Các Tập Đoàn Big Tech Ngày Nay</th>
                    <th className="p-4 font-bold hidden md:table-cell">Bản chất biện chứng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {comparisons.map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-all">
                      <td className="p-4 font-bold text-white">{c.metric}</td>
                      <td className="p-4 text-slate-300">{c.standardOil}</td>
                      <td className="p-4 text-slate-300">{c.bigTech}</td>
                      <td className="p-4 text-slate-400 italic hidden md:table-cell">{c.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION SUMMARY VERDICT */}
      <div className="p-5 rounded-lg bg-rose-950/10 border border-rose-500/20 text-center space-y-2">
        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-widest block">LUẬN ĐIỂM KẾT LUẬN CHUYÊN ĐỀ</span>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Độc quyền là một <strong>giai đoạn tất yếu</strong> khách quan của sự vận động tư bản chủ nghĩa, nhưng nó luôn chứa đựng những mâu thuẫn nội tại sâu sắc không thể tự giải quyết. Việc hiểu rõ mối quan hệ biện chứng giữa độc quyền và cạnh tranh, cùng với việc nhận diện mô thức vận động của các Big Tech hiện đại giúp chúng ta thấu hiểu một cách thực tế và sâu sắc nhất bản chất khách quan của kinh tế thị trường thế kỷ XXI.
        </p>
      </div>

    </div>
  );
}
