import React from 'react';
import { Flame, Star, Shuffle, Sparkles, AlertCircle } from 'lucide-react';

export default function FreeCompetition() {
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-6 animate-fade-in">
      {/* Definition card */}
      <div id="comp-definition" className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-rose-600">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">Phần 1 - Lý thuyết</span>
            <h4 className="font-display text-xl font-black text-white mt-0.5">Thế Nào Là Cạnh Tranh Tự Do?</h4>
          </div>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">
          <strong className="text-rose-400 font-semibold">Cạnh tranh tự do</strong> là trạng thái kinh tế khi các doanh nghiệp tự do tham gia vào các ngành sản xuất, có quyền tự do di chuyển vốn, sức lao động và tư liệu sản xuất từ nơi này sang nơi khác mà không bị cản trở bởi các thế lực áp đặt độc quyền hay sự can thiệp hành chính sâu sắc.
        </p>
      </div>

      {/* Characteristics Grid */}
      <div className="flex flex-col gap-3">
        <h4 className="font-display text-xs font-bold text-rose-500 tracking-widest uppercase px-1">4 Đặc điểm của Cạnh Tranh Tự Do:</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all">
            <div className="flex items-center gap-2.5 text-rose-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <h5 className="font-display text-sm font-bold text-white">Tính khách quan</h5>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Quy luật cạnh tranh là quy luật kinh tế điều tiết một cách khách quan mối quan hệ ganh đua giữa các chủ thể. Không ai có thể xóa bỏ hoàn toàn quy luật này trong sản xuất hàng hóa.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all">
            <div className="flex items-center gap-2.5 text-rose-400">
              <Shuffle className="w-5 h-5 flex-shrink-0" />
              <h5 className="font-display text-sm font-bold text-white">Cấp độ đa dạng</h5>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Diễn ra dưới nhiều hình thức: <strong className="text-slate-300 font-semibold">Cạnh tranh trong nội bộ ngành</strong> (nhằm thu siêu lợi nhuận thông qua hạ giá trị cá biệt) và <strong className="text-slate-300 font-semibold">Cạnh tranh giữa các ngành</strong> (nhằm tìm kiếm nơi có tỷ suất lợi nhuận cao hơn).
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all">
            <div className="flex items-center gap-2.5 text-rose-400">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <h5 className="font-display text-sm font-bold text-white">Gắn liền với động cơ lợi ích</h5>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Động lực thúc đẩy các chủ thể kinh tế hành động trước hết là vì lợi ích kinh tế (thu nhiều giá trị thặng dư hơn, tối đa hóa lợi nhuận thực tế).
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all">
            <div className="flex items-center gap-2.5 text-rose-400">
              <Star className="w-5 h-5 flex-shrink-0" />
              <h5 className="font-display text-sm font-bold text-white">Không bị tiêu diệt hoàn toàn</h5>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Ngay cả khi bước vào giai đoạn độc quyền thống trị, cạnh tranh vẫn không bị triệt tiêu hoàn toàn mà tồn tại song song, thậm chí trở nên khốc liệt hơn bao giờ hết.
            </p>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/60 backdrop-blur-md">
        <h4 className="font-display text-sm font-bold text-white tracking-widest uppercase mb-4">Vai Trò Của Cạnh Tranh Tự Do</h4>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          Cạnh tranh được coi là động lực cốt lõi thúc đẩy nền kinh tế phát triển mạnh mẽ thông qua các tác động tích cực cơ bản sau:
        </p>
        <div className="space-y-3.5">
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-rose-950 text-rose-300 font-mono text-xs font-bold shrink-0">1</div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Thúc đẩy phát triển lực lượng sản xuất</h5>
              <p className="text-xs text-slate-400 mt-0.5">Ép buộc các doanh nghiệp liên tục cải tiến máy móc, áp dụng tiến bộ kỹ thuật mới để hạ chi phí sản xuất.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-rose-950 text-rose-300 font-mono text-xs font-bold shrink-0">2</div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Kích thích năng động và sáng tạo</h5>
              <p className="text-xs text-slate-400 mt-0.5">Sàng lọc, tuyển chọn những chủ thể nhạy bén, đào thải những xí nghiệp kém hiệu quả, lạc hậu.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-rose-950 text-rose-300 font-mono text-xs font-bold shrink-0">3</div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Điều chỉnh linh hoạt việc phân bổ nguồn lực</h5>
              <p className="text-xs text-slate-400 mt-0.5">Di chuyển vốn, nguyên vật liệu và sức lao động đến các ngành có nhu cầu xã hội cao nhất, thông qua biến động giá cả và tỷ suất lợi nhuận.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
