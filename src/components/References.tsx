import React, { useState } from 'react';
import { BookOpen, Link, Search, ExternalLink, Bookmark, HelpCircle, FileText, Globe, GraduationCap } from 'lucide-react';

interface ReferenceItem {
  id: string;
  title: string;
  category: 'historical' | 'modern' | 'legal';
  source: string;
  url: string;
  description: string;
  relevance: string;
}

export default function References() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'historical' | 'modern' | 'legal'>('all');

  const referenceData: ReferenceItem[] = [
    {
      id: 'ref-britannica',
      title: 'Standard Oil Company - Overview and Legacy',
      category: 'historical',
      source: 'Encyclopædia Britannica',
      url: 'https://www.britannica.com/topic/Standard-Oil',
      description: 'Bài viết chi tiết của Britannica về lịch sử thành lập, hoạt động sản xuất, các thương vụ thâu tóm và vị thế độc quyền của Standard Oil dưới sự lãnh đạo của John D. Rockefeller.',
      relevance: 'Cung cấp cơ sở dữ liệu lịch sử cho các mốc phát triển ban đầu của Standard Oil từ năm 1870.'
    },
    {
      id: 'ref-cleveland',
      title: 'The Cleveland Massacre (1872)',
      category: 'historical',
      source: 'Wikipedia - Standard Oil History',
      url: 'https://en.wikipedia.org/wiki/Standard_Oil#The_Cleveland_Massacre',
      description: 'Tài liệu chi tiết về chiến dịch "Cleveland Massacre" năm 1872, nơi Standard Oil thâu tóm 22 trên tổng số 26 công ty lọc dầu đối thủ chỉ trong vòng chưa đầy hai tháng thông qua liên minh đường sắt.',
      relevance: 'Minh chứng lịch sử điển hình cho lý luận của Lênin về quá trình tích tụ tư bản cưỡng bức và thôn tính đối thủ.'
    },
    {
      id: 'ref-trust',
      title: 'The Standard Oil Trust Structure (1882)',
      category: 'historical',
      source: 'Wikipedia - Standard Oil Trust',
      url: 'https://en.wikipedia.org/wiki/Standard_Oil#The_Trust',
      description: 'Phân tích về cách thiết lập cấu trúc "Trust" (Ủy thác) đầu tiên trên thế giới của Rockefeller nhằm tập trung hóa hoàn toàn quyền kiểm soát sản xuất và phân phối của hơn 40 công ty thành viên.',
      relevance: 'Giải thích chi tiết về cấu trúc của hình thức độc quyền cao cấp (Trust) theo lý thuyết kinh tế chính trị.'
    },
    {
      id: 'ref-rockefeller',
      title: 'John D. Rockefeller - Biography and Industrial Influence',
      category: 'historical',
      source: 'Wikipedia - John D. Rockefeller',
      url: 'https://en.wikipedia.org/wiki/John_D._Rockefeller',
      description: 'Tiểu sử chi tiết về Vua dầu mỏ Rockefeller, quá trình tích lũy tài sản khổng lồ đạt đỉnh cao kiểm soát 90% lọc dầu Mỹ và quá trình chuyển đổi tư bản công nghiệp thành tư bản tài chính siêu cường.',
      relevance: 'Nguồn tư liệu về tài sản, doanh số và quá trình sáp nhập tư bản công nghiệp thành đầu sỏ tài chính.'
    },
    {
      id: 'ref-supreme-court',
      title: 'Standard Oil Co. of New Jersey v. United States (1911) - Supreme Court Case',
      category: 'legal',
      source: 'Wikipedia - Supreme Court Ruling',
      url: 'https://en.wikipedia.org/wiki/Standard_Oil_Co._of_New_Jersey_v._United_States',
      description: 'Hồ sơ pháp lý đầy đủ về phán quyết lịch sử của Tòa án Tối cao Mỹ ngày 15 tháng 5 năm 1911 buộc giải thể Standard Oil Trust thành 34 công ty độc lập vì vi phạm Luật chống độc quyền Sherman.',
      relevance: 'Chứng minh sự can thiệp của Nhà nước tư sản trong việc điều tiết độc quyền để bảo vệ trật tự kinh tế chung.'
    },
    {
      id: 'ref-meta-ftc',
      title: 'FTC v. Meta Platforms, Inc. (Acquisitions of Instagram & WhatsApp)',
      category: 'legal',
      source: 'Federal Trade Commission (FTC) Official Case File',
      url: 'https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0134-facebook-inc-ftc-v-ftc-v-meta-platforms-inc',
      description: 'Vụ kiện chống độc quyền chính thức của Ủy ban Thương mại Liên bang Mỹ đối với Meta (Facebook) cáo buộc tập đoàn này thực hiện chiến thuật mua lại các đối thủ cạnh tranh tiềm năng (Instagram, WhatsApp) để duy trì vị thế độc quyền truyền thông xã hội.',
      relevance: 'Liên hệ thực tế Big Tech hiện đại thực hiện chiến lược thâu tóm "Cleveland Massacre" phiên bản số hóa để triệt tiêu cạnh tranh.'
    },
    {
      id: 'ref-google-share',
      title: 'Search Engine Market Share Worldwide (Statcounter Global Stats)',
      category: 'modern',
      source: 'Statcounter Global Stats',
      url: 'https://gs.statcounter.com/search-engine-market-share',
      description: 'Số liệu thống kê thời gian thực về thị phần của các công cụ tìm kiếm trên toàn thế giới, chứng minh sự thống trị ổn định ở mức ~90% của Google Search.',
      relevance: 'Minh chứng cho việc độc quyền dữ liệu tìm kiếm số hóa tạo ra gọng kìm độc quyền thống trị tương tự như nguồn cung dầu thô của Standard Oil.'
    },
    {
      id: 'ref-google-android',
      title: 'Antitrust: Commission fines Google €4.34 billion for illegal practices regarding Android',
      category: 'legal',
      source: 'European Commission Press Corner',
      url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_18_4581',
      description: 'Thông cáo báo chí chính thức của Ủy ban Châu Âu về phán quyết phạt Google kỷ lục 4.34 tỷ euro do lạm dụng vị thế thống trị của hệ điều hành Android để buộc các nhà sản xuất thiết bị cài sẵn các ứng dụng dịch vụ của Google.',
      relevance: 'Minh chứng cho vai trò điều tiết, cưỡng chế và can thiệp của Độc quyền Nhà nước hiện đại đối với thị trường công nghệ số.'
    }
  ];

  const filteredReferences = referenceData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 animate-fade-in text-slate-200">
      
      {/* HEADER SECTION */}
      <div className="bg-slate-900 border border-slate-750 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(99,102,241,0.06),transparent_50%)]"></div>
        <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div className="space-y-1 relative z-10">
          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">Thư viện khoa học</span>
          <h3 className="font-display text-2xl font-black text-white">DANH MỤC NGUỒN TÀI LIỆU KHẢO SÁT</h3>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Tổng hợp đầy đủ các liên kết nguồn dữ liệu chính thống, luật pháp và thống kê thị trường quốc tế được sử dụng làm cơ sở luận chứng thực tế cho toàn bộ học thuyết trong ứng dụng.
          </p>
        </div>
      </div>

      {/* SEARCH AND FILTER CONTROL BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 bg-slate-900/60 p-4 rounded-lg border border-slate-800">
        <div className="md:col-span-6 relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-slate-500" />
          <input
            id="input-search-ref"
            type="text"
            placeholder="Tìm kiếm tài liệu nguồn, cơ quan trích dẫn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0F172A] border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
          />
        </div>

        <div className="md:col-span-6 flex gap-2">
          {(['all', 'historical', 'modern', 'legal'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`flex-1 py-2 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer border ${
                categoryFilter === cat
                  ? 'bg-indigo-950/30 border-indigo-500/40 text-indigo-400'
                  : 'bg-[#0F172A] border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {cat === 'all' && 'Tất Cả'}
              {cat === 'historical' && 'Lịch Sử'}
              {cat === 'modern' && 'Kinh Tế Số'}
              {cat === 'legal' && 'Pháp Lý'}
            </button>
          ))}
        </div>
      </div>

      {/* BIBLIOGRAPHY LIST */}
      <div className="space-y-4">
        {filteredReferences.length > 0 ? (
          filteredReferences.map((ref) => (
            <div
              id={`ref-card-${ref.id}`}
              key={ref.id}
              className="p-5 rounded-lg bg-slate-800/40 border border-slate-750 hover:border-slate-650 hover:bg-slate-800/60 transition-all flex flex-col md:flex-row md:items-start justify-between gap-5"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-[9px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                    <Bookmark className="w-3 h-3 text-indigo-400" /> {ref.source}
                  </span>
                  <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border tracking-wider ${
                    ref.category === 'historical' ? 'text-amber-400 bg-amber-500/5 border-amber-500/10' :
                    ref.category === 'legal' ? 'text-purple-400 bg-purple-500/5 border-purple-500/10' :
                    'text-rose-400 bg-rose-500/5 border-rose-500/10'
                  }`}>
                    {ref.category === 'historical' ? 'Lịch sử Standard Oil' :
                     ref.category === 'legal' ? 'Luật & Phán quyết pháp lý' :
                     'Kinh tế số Big Tech'}
                  </span>
                </div>

                <h4 className="font-display text-sm font-bold text-white tracking-tight">{ref.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{ref.description}</p>
                <div className="text-[11px] text-slate-450 italic leading-relaxed bg-[#0F172A]/50 px-3 py-2 rounded border border-slate-850">
                  <strong className="text-indigo-400 font-semibold font-mono text-[9px] uppercase tracking-wider block mb-0.5">Giá trị khoa học:</strong>
                  {ref.relevance}
                </div>
              </div>

              <div className="shrink-0 flex items-end">
                <a
                  id={`btn-open-ref-${ref.id}`}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-all shadow-[0_0_10px_rgba(99,102,241,0.2)] cursor-pointer"
                >
                  <Link className="w-3.5 h-3.5" /> Xem nguồn gốc <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 rounded-lg bg-slate-900 border border-slate-800 text-center text-slate-500 text-xs">
            Không tìm thấy tài liệu tham khảo nào khớp với điều kiện tìm kiếm.
          </div>
        )}
      </div>

      {/* METHODOLOGY NOTE CARD */}
      <div className="p-4 rounded-lg bg-indigo-950/10 border border-indigo-500/20 flex gap-3 text-xs">
        <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-wider block">Ghi chú phương pháp luận khoa học</span>
          <p className="text-slate-350 leading-relaxed">
            Hệ thống bài giảng này nghiêm túc áp dụng phương pháp luận <strong>Biện chứng Duy vật lịch sử</strong> kết hợp với nghiên cứu tình huống điển hình (Case Study Research) để làm sáng tỏ các phạm trù kinh tế chính trị phức tạp. Việc đối sánh liên lịch sử (cross-era comparison) giữa mô thức tích lũy tài nguyên vật lý thế kỷ XIX và tài nguyên số hóa thế kỷ XXI chứng minh tính đúng đắn khách quan, lâu dài của học thuyết kinh tế Lênin vĩ đại.
          </p>
        </div>
      </div>

    </div>
  );
}
