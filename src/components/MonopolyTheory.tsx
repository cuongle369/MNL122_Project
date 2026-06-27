import React, { useState } from 'react';
import { Layers, HelpCircle, Network, Users, BookOpen, GitMerge, FileText, Globe } from 'lucide-react';

export default function MonopolyTheory() {
  const [selectedForm, setSelectedForm] = useState<'cartel' | 'syndicate' | 'trust' | 'consortium'>('cartel');

  const causes = [
    {
      num: '01',
      title: 'Tiến bộ Khoa học - Kỹ thuật',
      desc: 'Dưới tác động của tiến bộ KH-KT cuối thế kỷ XIX, xuất hiện các ngành sản xuất mới (luyện kim, cơ khí chế tạo, hóa chất...) đòi hỏi ngay từ đầu quy mô vốn và trình độ tích tụ sản xuất cực kỳ khổng lồ.'
    },
    {
      num: '02',
      title: 'Áp lực Cạnh tranh khốc liệt',
      desc: 'Cạnh tranh tự do thúc bách các nhà tư bản phải liên tục cải tiến công nghệ và tăng quy mô tích lũy sản xuất để sống sót, gián tiếp gia tăng tốc độ tích tụ tư bản.'
    },
    {
      num: '03',
      title: 'Khủng hoảng Kinh tế liên miên',
      desc: 'Các cuộc khủng hoảng kinh tế (đặc biệt là cuộc khủng hoảng 1873) quét sạch hàng vạt các xí nghiệp vừa và nhỏ, đẩy nhanh quá trình tập trung sản xuất vào tay các đại tập đoàn có tiềm lực vững mạnh.'
    },
    {
      num: '04',
      title: 'Xu hướng Thỏa hiệp giữa các Ông lớn',
      desc: 'Các công ty lớn đấu tranh dai dẳng khó phân thắng bại, tổn hao tài chính khổng lồ. Để tránh thiệt hại cho đôi bên, họ nảy sinh xu hướng thỏa hiệp ngầm, bắt tay nhau lập ra liên minh độc quyền thống trị.'
    }
  ];

  const formsDetails = {
    cartel: {
      name: 'Cartel (Liên minh giá cả)',
      level: 'Lỏng lẻo nhất (Liên kết Ngang)',
      description: 'Hình thức liên minh giữa các xí nghiệp cùng ngành nhằm thỏa thuận giá bán, sản lượng và phân chia thị trường tiêu thụ. Sản xuất và bán hàng vẫn do từng thành viên tự thực hiện.',
      pros: 'Dễ dàng thiết lập nhanh chóng.',
      cons: 'Rất lỏng lẻo, dễ bị phá vỡ khi tương quan lực lượng thay đổi hoặc có thành viên lén phá giá.'
    },
    syndicate: {
      name: 'Syndicate (Liên minh tiêu thụ)',
      level: 'Chặt chẽ trung bình (Liên kết Ngang)',
      description: 'Hình thức độc quyền tập trung việc tiêu thụ sản phẩm vào một ban quản trị chung đảm nhiệm, nhưng sản xuất vẫn là việc độc lập của từng thành viên.',
      pros: 'Tránh được hiện tượng thành viên cạnh tranh phá giá lẫn nhau.',
      cons: 'Vẫn giữ sự độc lập về sản xuất nên sự đồng thuận về lợi ích nội bộ vẫn còn nhiều xung đột.'
    },
    trust: {
      name: 'Trust (Nhất thể hóa sản xuất - tiêu thụ)',
      level: 'Chặt chẽ cao (Liên kết Ngang)',
      description: 'Hình thức độc quyền thống nhất cả việc sản xuất và tiêu thụ sản phẩm vào tay một ban quản trị chung. Các chủ doanh nghiệp cũ trở thành các cổ đông nhận cổ tức theo cổ phần đóng góp.',
      pros: 'Cực kỳ ổn định, triệt tiêu mọi cạnh tranh nội bộ, tối ưu hóa lợi nhuận độc quyền cao.',
      cons: 'Các doanh nghiệp thành viên mất hoàn toàn tính độc lập tự chủ.'
    },
    consortium: {
      name: 'Consortium (Đa ngành dọc)',
      level: 'Phức tạp nhất (Liên kết Dọc)',
      description: 'Hình thức liên kết dọc đa ngành, gom các Syndicate, Trust... thuộc các ngành khác nhau nhưng có liên hệ về kinh tế và kỹ thuật (ví dụ: Khai mỏ -> Luyện thép -> Chế tạo xe -> Ngân hàng).',
      pros: 'Tự chủ hoàn nguyên vật liệu, khép kín quy trình sản xuất, tạo thành đế chế tư bản tài chính siêu hùng mạnh.',
      cons: 'Đòi hỏi trình độ quản trị cực kỳ phức tạp và quy mô vốn khổng lồ.'
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* LEFT COLUMN: 4 CAUSES */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-rose-500/10 text-rose-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Phần 3 - Lý luận</span>
              <h4 className="font-display text-xl font-black text-white mt-0.5">SỰ RA ĐỜI CỦA TỔ CHỨC ĐỘC QUYỀN</h4>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mt-4">
            Theo Lênin, khi chủ nghĩa tư bản cạnh tranh tự do phát triển đến một độ nhất định sẽ xuất hiện các tổ chức độc quyền thống trị nền kinh tế, đưa CNTB sang giai đoạn mới là <strong className="text-rose-500 font-bold">Chủ nghĩa tư bản Độc quyền (Đế quốc chủ nghĩa)</strong>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-xs font-bold text-slate-400 tracking-widest uppercase px-1">4 Nguyên nhân chủ yếu dẫn đến Độc quyền:</h4>
          
          <div className="space-y-3">
            {causes.map((cause) => (
              <div key={cause.num} className="p-4 rounded bg-slate-800/40 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/60 transition-all flex gap-4">
                <span className="font-mono text-xl font-bold text-rose-500/80 shrink-0">{cause.num}</span>
                <div>
                  <h5 className="font-display text-sm font-bold text-white">{cause.title}</h5>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{cause.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: CORPORATE STRUCTURAL FORMS */}
      <div className="lg:col-span-6">
        <div id="mon-forms-card" className="p-6 rounded-lg bg-slate-900 border border-slate-700 flex flex-col h-full shadow-xl">
          <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">Cơ Cấu Tổ Chức</span>
          <h4 className="font-display text-lg font-black text-white">CÁC HÌNH THỨC LIÊN KẾT ĐỘC QUYỀN</h4>
          <p className="text-xs text-slate-400 mt-1 mb-5">
            Lênin phân tích các tổ chức độc quyền hình thành theo hai hình thức liên kết: Liên kết Ngang (Cartel, Syndicate, Trust) và Liên kết Dọc (Consortium). Hãy click chọn bên dưới để xem sơ đồ cơ cấu hoạt động:
          </p>

          {/* Selector Tabs */}
          <div className="grid grid-cols-4 gap-1 bg-[#0F172A] p-1 rounded border border-slate-800 text-center mb-5">
            {(['cartel', 'syndicate', 'trust', 'consortium'] as const).map((form) => (
              <button
                id={`tab-${form}`}
                key={form}
                onClick={() => setSelectedForm(form)}
                className={`py-2 text-[10px] font-mono font-bold rounded transition-all cursor-pointer capitalize ${
                  selectedForm === form
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {form}
              </button>
            ))}
          </div>

          {/* Interactive Structural Flowchart Canvas */}
          <div className="bg-[#0F172A] rounded p-4 border border-slate-850 flex-1 flex flex-col justify-between">
            {/* Visual Flow diagram representation */}
            <div className="flex-1 flex flex-col items-center justify-center py-6">
              {selectedForm === 'cartel' && (
                <div className="w-full flex flex-col items-center gap-4 animate-fade-in">
                  <div className="bg-rose-950/30 border border-rose-500/40 text-rose-400 px-4 py-2 rounded text-xs font-mono font-bold text-center">
                    HIỆP ĐỊNH CARTEL (Giá cả & Thị phần)
                  </div>
                  <div className="flex justify-between w-full max-w-sm border-t border-dashed border-rose-500/20 pt-4 px-2">
                    {['Xí nghiệp 1', 'Xí nghiệp 2', 'Xí nghiệp 3'].map((n) => (
                      <div key={n} className="flex flex-col items-center">
                        <div className="bg-slate-800 border border-slate-700 rounded p-2.5 text-center text-[10px] text-slate-300 font-mono">
                          {n}
                        </div>
                        <span className="text-[9px] text-emerald-400 font-mono mt-1 font-semibold">Tự bán & SX</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedForm === 'syndicate' && (
                <div className="w-full flex flex-col items-center gap-4 animate-fade-in">
                  <div className="flex justify-between w-full max-w-sm px-2">
                    {['Nhà máy A', 'Nhà máy B', 'Nhà máy C'].map((n) => (
                      <div key={n} className="flex flex-col items-center">
                        <div className="bg-slate-800 border border-slate-700 rounded p-2.5 text-center text-[10px] text-slate-300 font-mono">
                          {n}
                        </div>
                        <span className="text-[9px] text-yellow-500 font-mono mt-1 font-semibold">Tự sản xuất</span>
                      </div>
                    ))}
                  </div>
                  {/* Arrows pointing down to distribution board */}
                  <div className="h-5 w-0.5 border-l-2 border-dashed border-slate-600"></div>
                  <div className="bg-rose-950/30 border border-rose-500/40 text-rose-400 px-5 py-2.5 rounded text-xs font-mono font-bold text-center">
                    BAN QUẢN TRỊ TIÊU THỤ CHUNG
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono font-semibold">Bán ra Thị trường độc quyền</span>
                </div>
              )}

              {selectedForm === 'trust' && (
                <div className="w-full flex flex-col items-center animate-fade-in">
                  <div className="border border-rose-500/30 bg-rose-950/10 rounded p-4 w-full max-w-xs flex flex-col items-center">
                    <div className="bg-rose-600 text-white text-xs font-mono font-bold px-3 py-1.5 rounded text-center mb-3">
                      BAN TRỊ SỰ TRƯỞNG (TRUST BOARD)
                    </div>
                    <p className="text-[10px] text-slate-400 text-center italic mb-3">
                      Thống nhất toàn diện Sản xuất & Phân phối tiêu thụ
                    </p>
                    <div className="grid grid-cols-3 gap-2 w-full pt-3 border-t border-slate-800">
                      {['Cổ đông A', 'Cổ đông B', 'Cổ đông C'].map((c) => (
                        <div key={c} className="bg-slate-800 border border-slate-700 rounded p-1.5 text-center text-[9px] text-slate-300 font-mono">
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedForm === 'consortium' && (
                <div className="w-full flex flex-col items-center gap-2 animate-fade-in">
                  <div className="bg-rose-950/30 border border-rose-500/40 text-rose-400 px-4 py-1.5 rounded text-xs font-mono font-bold">
                    TẬP ĐOÀN CONSORTIUM ĐA NGÀNH DỌC
                  </div>
                  
                  {/* Vertical chain */}
                  <div className="flex flex-col items-center gap-1.5 mt-3 w-full max-w-sm">
                    <div className="bg-slate-800 border border-slate-700 rounded py-1 px-3 w-full text-center text-[10px] text-slate-300 font-mono flex justify-between items-center">
                      <span>Giai đoạn 1: Khai thác dầu thô</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-905 text-blue-400">Nguyên liệu</span>
                    </div>
                    <div className="h-2 w-0.5 bg-slate-600"></div>
                    <div className="bg-slate-800 border border-slate-700 rounded py-1 px-3 w-full text-center text-[10px] text-slate-300 font-mono flex justify-between items-center">
                      <span>Giai đoạn 2: Lọc hóa dầu (Standard Oil)</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-905 text-yellow-400">Chế biến</span>
                    </div>
                    <div className="h-2 w-0.5 bg-slate-600"></div>
                    <div className="bg-slate-800 border border-slate-700 rounded py-1 px-3 w-full text-center text-[10px] text-slate-300 font-mono flex justify-between items-center">
                      <span>Giai đoạn 3: Hệ thống đường ống & Đường sắt</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-905 text-purple-400">Vận tải</span>
                    </div>
                    <div className="h-2 w-0.5 bg-slate-600"></div>
                    <div className="bg-slate-800 border border-slate-700 rounded py-1 px-3 w-full text-center text-[10px] text-slate-300 font-mono flex justify-between items-center">
                      <span>Giai đoạn 4: Ngân hàng tài chính</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-905 text-emerald-400">Tín dụng</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Card Text */}
            <div className="border-t border-slate-800/80 pt-4 mt-2">
              <h5 className="text-xs font-bold text-white uppercase font-display">{formsDetails[selectedForm].name}</h5>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">Mức độ liên kết: <span className="text-rose-400 font-bold">{formsDetails[selectedForm].level}</span></div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                {formsDetails[selectedForm].description}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3 border-t border-slate-800/40 pt-3 text-[10px] leading-relaxed">
                <div>
                  <span className="text-emerald-400 font-semibold block">Ưu điểm cấu trúc:</span>
                  <span className="text-slate-450">{formsDetails[selectedForm].pros}</span>
                </div>
                <div>
                  <span className="text-rose-450 font-semibold block">Nhược điểm cấu trúc:</span>
                  <span className="text-slate-450">{formsDetails[selectedForm].cons}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
