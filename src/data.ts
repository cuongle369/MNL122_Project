import { TimelineEvent, QuizQuestion } from './types';

export const leninQuotes = [
  {
    text: "Cạnh tranh tự do đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định, lại dẫn tới độc quyền.",
    author: "V.I. Lênin",
    source: "Tác phẩm: 'Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản' (1916)"
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1870,
    title: "Thành lập Standard Oil",
    category: "accumulation",
    description: "John D. Rockefeller cùng các cộng sự thành lập Công ty Standard Oil tại Ohio với số vốn ban đầu 1 triệu USD.",
    stats: {
      label: "Vốn ban đầu",
      value: "1.000.000 USD",
      comparison: "Khoảng 25 triệu USD ngày nay"
    },
    details: [
      "Rockefeller áp dụng chiến lược tích tụ tư bản triệt để, tái đầu tư toàn bộ lợi nhuận vào nâng cao hiệu suất.",
      "Standard Oil kiểm soát chặt chẽ chi phí sản xuất, tự làm thùng gỗ đựng dầu, tự sản xuất hóa chất phụ trợ để giảm chi phí.",
      "Vị thế này giúp công ty sống sót qua các cuộc suy thoái ban đầu nhờ lượng tiền dự trữ dồi dào."
    ],
    citationUrl: "https://www.britannica.com/topic/Standard-Oil",
    citationLabel: "Encyclopædia Britannica"
  },
  {
    year: 1872,
    title: "Sự kiện 'Thảm sát Cleveland' (Cleveland Massacre)",
    category: "accumulation",
    description: "Standard Oil tiến hành chiến dịch sáp nhập (tập trung tư bản) tàn khốc, ép mua lại hầu hết đối thủ lọc dầu.",
    stats: {
      label: "Tốc độ thâu tóm",
      value: "22 / 26 đối thủ",
      comparison: "Trong vòng chưa đầy 2 tháng"
    },
    details: [
      "Chiến thuật cốt lõi: Standard Oil liên minh ngầm với các hãng đường sắt lớn để được giảm cước vận chuyển cực sâu, trong khi các đối thủ phải trả cước cao.",
      "Rockefeller đưa ra tối hậu thư cho các nhà máy lọc dầu độc lập tại Cleveland: Sáp nhập vào Standard Oil hoặc bị bóp nghẹt tài chính đến phá sản.",
      "Đây là minh chứng kinh điển cho lý luận Lênin về việc kẻ mạnh thôn tính kẻ yếu thông qua cạnh tranh tự do."
    ],
    citationUrl: "https://en.wikipedia.org/wiki/Standard_Oil#The_Cleveland_Massacre",
    citationLabel: "Wikipedia - Cleveland Massacre"
  },
  {
    year: 1882,
    title: "Thành lập Standard Oil Trust",
    category: "monopoly",
    description: "Nhằm lách luật cấm sở hữu cổ phần công ty bang khác, Standard Oil sáng tạo ra mô hình 'Trust' (Liên minh ủy thác) đầu tiên trên thế giới.",
    stats: {
      label: "Quy mô sáp nhập",
      value: "40 công ty",
      comparison: "Dưới sự quản lý của 1 ban trị sự"
    },
    details: [
      "Ban quản lý gồm 9 thành viên, đứng đầu là John D. Rockefeller, trực tiếp kiểm soát tất cả hoạt động sản xuất, giá cả và phân phối của 40 công ty thành viên.",
      "Các thành viên cũ giao nộp cổ phần và nhận lại 'chứng chỉ ủy thác' (Trust certificates), nhận cổ tức đều đặn nhưng mất quyền biểu quyết độc lập.",
      "Mô hình Trust thống nhất hoàn toàn hoạt động sản xuất và tiêu thụ, tối ưu hóa lợi nhuận độc quyền cao."
    ],
    citationUrl: "https://en.wikipedia.org/wiki/Standard_Oil#The_Trust",
    citationLabel: "Wikipedia - Standard Oil Trust"
  },
  {
    year: 1904,
    title: "Đỉnh cao thống trị thị trường",
    category: "power",
    description: "Standard Oil đạt đỉnh cao kiểm soát gần như tuyệt đối ngành công nghiệp dầu mỏ Hoa Kỳ.",
    stats: {
      label: "Thị phần lọc dầu",
      value: "91%",
      comparison: "Và 85% doanh số bán hàng"
    },
    details: [
      "Standard Oil khống chế toàn bộ hệ thống đường ống dẫn dầu, cô lập hoàn toàn mọi đối thủ cố gắng xâm nhập thị trường.",
      "Họ sử dụng chính sách bán phá giá tại các vùng có cạnh tranh (bán dưới giá thành để triệt tiêu đối thủ), và nâng giá cực cao ở vùng đã độc quyền để bù đắp thiệt hại.",
      "Lợi nhuận ròng giai đoạn 1882-1906 đạt tới 838 triệu USD, Rockefeller trở thành tỷ phú đô la đầu tiên trong lịch sử loài người."
    ],
    citationUrl: "https://en.wikipedia.org/wiki/John_D._Rockefeller",
    citationLabel: "Wikipedia - John D. Rockefeller"
  },
  {
    year: 1911,
    title: "Phán quyết giải thể lịch sử",
    category: "dissolution",
    description: "Tòa án Tối cao Mỹ ra lệnh chia tách Standard Oil thành 34 công ty độc lập vì vi phạm Luật chống độc quyền Sherman.",
    stats: {
      label: "Số công ty con tách ra",
      value: "34 công ty",
      comparison: "Bao gồm Exxon, Mobil, Chevron ngày nay"
    },
    details: [
      "Phán quyết lịch sử chỉ rõ Standard Oil đã dùng các thủ đoạn phi pháp (đi đêm vận tải, phá giá, thu thập thông tin gián điệp) để bóp nghẹt cạnh tranh tự do.",
      "Tuy nhiên, sự can thiệp của Nhà nước tư sản không làm thay đổi bản chất tư bản. Do được định giá độc lập và minh bạch hơn, giá trị cổ phiếu các công ty con tăng vọt.",
      "Rockefeller giữ 25% cổ phần đã nhân đôi tài sản cá nhân lên mức tương đương 2% GDP nước Mỹ thời bấy giờ, chứng minh bản chất độc quyền vẫn tồn tại dưới hình thức mới."
    ],
    citationUrl: "https://en.wikipedia.org/wiki/Standard_Oil_Co._of_New_Jersey_v._United_States",
    citationLabel: "Wikipedia - Supreme Court Ruling"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Theo lý luận của Lênin, nguyên nhân trực tiếp dẫn tới sự ra đời của độc quyền là gì?",
    options: [
      "Do sự can thiệp trực tiếp của Nhà nước tư sản.",
      "Do sự phát triển của cạnh tranh tự do dẫn đến tích tụ và tập trung sản xuất.",
      "Do ý muốn chủ quan của các nhà tài phiệt siêu giàu.",
      "Do sự suy yếu của hệ thống thương mại quốc tế."
    ],
    correctAnswerIndex: 1,
    explanation: "Lênin chỉ ra rằng cạnh tranh tự do thúc đẩy tích tụ và tập trung tư bản, khi phát triển đến một trình độ nhất định sẽ tất yếu dẫn tới độc quyền. Đây là một quy luật khách quan của chủ nghĩa tư bản."
  },
  {
    id: 2,
    question: "Sự khác biệt cốt lõi giữa 'Tích tụ tư bản' và 'Tập trung tư bản' là gì?",
    options: [
      "Tích tụ là tự lớn lên từ lợi nhuận giữ lại (tái đầu tư); Tập trung là sáp nhập các tư bản có sẵn bên ngoài lại với nhau.",
      "Tích tụ là sáp nhập các công ty; Tập trung là nâng cao trình độ công nghệ nội bộ.",
      "Tích tụ làm giảm tổng số tư bản xã hội; Tập trung làm tăng tổng tư bản xã hội.",
      "Tích tụ diễn ra chậm hơn Tập trung và không phụ thuộc vào giá trị thặng dư."
    ],
    correctAnswerIndex: 0,
    explanation: "Tích tụ tư bản là tăng quy mô tư bản cá biệt bằng cách tư bản hóa giá trị thặng dư (doanh nghiệp tự lớn lên từ bên trong). Tập trung tư bản là liên kết hoặc sáp nhập các tư bản cá biệt có sẵn trong xã hội (lớn lên bằng cách gộp từ bên ngoài)."
  },
  {
    id: 3,
    question: "Các hình thức tổ chức độc quyền theo liên kết ngang phát triển theo trình tự lịch sử nào sau đây?",
    options: [
      "Trust -> Syndicate -> Cartel",
      "Cartel -> Trust -> Syndicate",
      "Cartel -> Syndicate -> Trust",
      "Syndicate -> Cartel -> Trust"
    ],
    correctAnswerIndex: 2,
    explanation: "Trình tự phát triển liên kết ngang từ lỏng lẻo đến chặt chẽ là: Cartel (chỉ thỏa thuận giá/thị trường) -> Syndicate (chung đầu ra tiêu thụ sản phẩm) -> Trust (sáp nhập hoàn toàn cả sản xuất lẫn tiêu thụ)."
  },
  {
    id: 4,
    question: "Trong Case Study Standard Oil, thủ đoạn nào được coi là vũ khí chí tử để tiêu diệt các đối thủ cạnh tranh?",
    options: [
      "Sử dụng bạo lực vũ trang để phá hoại nhà máy đối thủ.",
      "Cấu kết ngầm với các hãng đường sắt để ép giá cước vận chuyển và ăn tiền hoa hồng từ chính phí vận chuyển của đối thủ.",
      "Chiếm đoạt bằng sáng chế công nghệ của đối thủ qua con đường gián điệp nhà nước.",
      "Kêu gọi chính phủ Mỹ cấm hoàn toàn hoạt động của các đối thủ."
    ],
    correctAnswerIndex: 1,
    explanation: "Standard Oil đi đêm với các hãng đường sắt lớn để được hưởng mức cước vận tải cực thấp (giảm 71%), đồng thời buộc hãng tàu hỏa trả tiền hoa hồng trích từ cước vận chuyển của chính đối thủ cho Standard Oil. Thủ đoạn này bóp nghẹt mọi đối thủ lọc dầu độc lập."
  },
  {
    id: 5,
    question: "Sự kiện giải thể Standard Oil năm 1911 bởi Nhà nước tư sản Mỹ dẫn tới kết quả bất ngờ nào?",
    options: [
      "Rockefeller bị khánh kiệt tài sản hoàn toàn và phải ngồi tù.",
      "Các công ty con bị đóng cửa toàn bộ, nước Mỹ rơi vào khủng hoảng dầu mỏ nghiêm trọng.",
      "Giá trị các công ty con tăng vọt khi minh bạch hóa, khiến tài sản Rockefeller tăng gấp đôi và độc quyền tiếp tục tồn tại dưới các hình thức mới.",
      "Thị trường dầu mỏ quay trở lại thời kỳ cạnh tranh tự do hoàn hảo, không còn bóng dáng độc quyền."
    ],
    correctAnswerIndex: 2,
    explanation: "Vụ chia tách Standard Oil thành 34 công ty con vô tình giúp bộc lộ giá trị thực cực lớn của từng công ty trên thị trường chứng khoán. Cổ phiếu tăng vọt làm tài sản Rockefeller tăng gấp đôi, chứng minh sự can thiệp của Nhà nước tư sản chỉ điều tiết mâu thuẫn xã hội chứ không tiêu diệt được bản chất tích tụ độc quyền."
  }
];
