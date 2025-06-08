import React, { createContext, useState, useEffect, useContext } from 'react';

type LanguageType = 'vi' | 'en';

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Từ điển dịch
const translations: Record<LanguageType, Record<string, string>> = {
  vi: {
    // Navbar
    'home': 'Trang chủ',
    'services': 'Dịch vụ',
    'about': 'Giới thiệu',
    'contact': 'Liên hệ',
    'admin': 'Quản trị',
    
    // Home page
    'hero.title': 'Dịch vụ sửa chữa ô tô chuyên nghiệp',
    'hero.description': 'Chúng tôi cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với đội ngũ kỹ thuật viên chuyên nghiệp và thiết bị hiện đại.',
    'hero.view_services': 'Xem dịch vụ',
    'hero.contact_now': 'Liên hệ ngay',
    'featured.services': 'Dịch vụ nổi bật',
    'view.all.services': 'Xem tất cả dịch vụ',
    'why.choose.us': 'Tại sao chọn chúng tôi?',
    'professional.team': 'Đội ngũ chuyên nghiệp',
    'professional.team.desc': 'Kỹ thuật viên của chúng tôi được đào tạo chuyên sâu và có nhiều năm kinh nghiệm trong lĩnh vực sửa chữa ô tô.',
    'modern.equipment': 'Thiết bị hiện đại',
    'modern.equipment.desc': 'Chúng tôi sử dụng các thiết bị và công nghệ hiện đại nhất để chẩn đoán và sửa chữa xe của bạn một cách chính xác.',
    'service.warranty': 'Bảo hành dịch vụ',
    'service.warranty.desc': 'Chúng tôi cam kết chất lượng dịch vụ với chính sách bảo hành rõ ràng cho tất cả các công việc sửa chữa.',
    'testimonials': 'Khách hàng nói gì về chúng tôi',
    'cta.title': 'Bạn cần dịch vụ sửa chữa hoặc bảo dưỡng xe?',
    'cta.description': 'Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt lịch hẹn',
    'contact.now': 'Liên hệ ngay',
    
    // Services page
    'our.services': 'Dịch vụ của chúng tôi',
    'services.description': 'Chúng tôi cung cấp đầy đủ các dịch vụ sửa chữa và bảo dưỡng xe hơi với chất lượng cao',
    'all.services': 'Tất cả dịch vụ',
    'filter.all': 'Tất cả dịch vụ',
    'filter.low': 'Giá thấp',
    'filter.medium': 'Giá trung bình',
    'filter.high': 'Giá cao',
    'no.services': 'Không tìm thấy dịch vụ nào phù hợp với bộ lọc.',
    'work.process': 'Quy trình làm việc',
    'appointment': 'Đặt lịch hẹn',
    'appointment.desc': 'Liên hệ với chúng tôi qua điện thoại hoặc form trực tuyến để đặt lịch hẹn.',
    'check.car': 'Kiểm tra xe',
    'check.car.desc': 'Kỹ thuật viên của chúng tôi sẽ kiểm tra xe và xác định vấn đề cần giải quyết.',
    'repair': 'Sửa chữa',
    'repair.desc': 'Xe của bạn sẽ được sửa chữa bởi đội ngũ kỹ thuật viên chuyên nghiệp với thiết bị hiện đại.',
    'delivery': 'Bàn giao xe',
    'delivery.desc': 'Xe sẽ được kiểm tra lại trước khi bàn giao để đảm bảo mọi vấn đề đã được giải quyết.',
    'faq': 'Câu hỏi thường gặp',
    
    // About page
    'about.us': 'Về chúng tôi',
    'about.description': 'Tìm hiểu thêm về Auto Service Center và đội ngũ của chúng tôi',
    'our.story': 'Câu chuyện của chúng tôi',
    'mission': 'Sứ mệnh',
    'vision': 'Tầm nhìn',
    'core.values': 'Giá trị cốt lõi',
    'our.team': 'Đội ngũ của chúng tôi',
    'achievements': 'Thành tựu của chúng tôi',
    'years.experience': 'Năm kinh nghiệm',
    'happy.customers': 'Khách hàng hài lòng',
    'professional.technicians': 'Kỹ thuật viên chuyên nghiệp',
    'quality.awards': 'Giải thưởng chất lượng',
    'ready.experience': 'Sẵn sàng trải nghiệm dịch vụ của chúng tôi?',
    
    // Contact page
    'contact.us': 'Liên hệ với chúng tôi',
    'contact.description': 'Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào',
    'contact.info': 'Thông tin liên hệ',
    'address': 'Địa chỉ',
    'phone': 'Điện thoại',
    'email': 'Email',
    'working.hours': 'Giờ làm việc',
    'connect.with.us': 'Kết nối với chúng tôi',
    
    // Form
    'send.request': 'Gửi yêu cầu',
    'full.name': 'Họ và tên',
    'phone.number': 'Số điện thoại',
    'subject': 'Chủ đề',
    'choose.subject': 'Chọn chủ đề',
    'repair.service': 'Sửa chữa',
    'maintenance': 'Bảo dưỡng',
    'consultation': 'Tư vấn',
    'other': 'Khác',
    'message': 'Nội dung',
    'send.request.btn': 'Gửi yêu cầu',
    'thank.you': 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
    
    // Admin
    'admin.login': 'Đăng nhập quản trị',
    'username': 'Tên đăng nhập',
    'password': 'Mật khẩu',
    'login': 'Đăng nhập',
    'service.management': 'Quản lý dịch vụ',
    'logout': 'Đăng xuất',
    'add.service': 'Thêm dịch vụ mới',
    'update.service': 'Cập nhật dịch vụ',
    'service.name': 'Tên dịch vụ',
    'description': 'Mô tả',
    'icon': 'Icon',
    'price': 'Giá',
    'add': 'Thêm dịch vụ',
    'update': 'Cập nhật',
    'cancel': 'Hủy',
    'service.list': 'Danh sách dịch vụ',
    'id': 'ID',
    'actions': 'Thao tác',
    
    // Theme
    'dark.mode': 'Chế độ tối',
    'light.mode': 'Chế độ sáng',
    
    // Language
    'language': 'Ngôn ngữ',
    'vietnamese': 'Tiếng Việt',
    'english': 'Tiếng Anh',
  },
  en: {
    // Navbar
    'home': 'Home',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact',
    'admin': 'Admin',
    
    // Home page
    'hero.title': 'Professional Car Repair Services',
    'hero.description': 'We provide high-quality car repair and maintenance services with professional technicians and modern equipment.',
    'hero.view_services': 'View Services',
    'hero.contact_now': 'Contact Now',
    'featured.services': 'Featured Services',
    'view.all.services': 'View All Services',
    'why.choose.us': 'Why Choose Us?',
    'professional.team': 'Professional Team',
    'professional.team.desc': 'Our technicians are well-trained and have many years of experience in the automotive repair industry.',
    'modern.equipment': 'Modern Equipment',
    'modern.equipment.desc': 'We use the latest equipment and technology to diagnose and repair your vehicle accurately.',
    'service.warranty': 'Service Warranty',
    'service.warranty.desc': 'We are committed to quality service with a clear warranty policy for all repair work.',
    'testimonials': 'What Our Customers Say',
    'cta.title': 'Need car repair or maintenance services?',
    'cta.description': 'Contact us today for consultation and appointment',
    'contact.now': 'Contact Now',
    
    // Services page
    'our.services': 'Our Services',
    'services.description': 'We provide a full range of high-quality car repair and maintenance services',
    'all.services': 'All Services',
    'filter.all': 'All Services',
    'filter.low': 'Low Price',
    'filter.medium': 'Medium Price',
    'filter.high': 'High Price',
    'no.services': 'No services found matching the filter.',
    'work.process': 'Work Process',
    'appointment': 'Make Appointment',
    'appointment.desc': 'Contact us by phone or online form to make an appointment.',
    'check.car': 'Car Inspection',
    'check.car.desc': 'Our technicians will inspect your car and identify issues that need to be addressed.',
    'repair': 'Repair',
    'repair.desc': 'Your car will be repaired by our professional technicians with modern equipment.',
    'delivery': 'Car Delivery',
    'delivery.desc': 'The car will be inspected again before delivery to ensure all issues have been resolved.',
    'faq': 'Frequently Asked Questions',
    
    // About page
    'about.us': 'About Us',
    'about.description': 'Learn more about Auto Service Center and our team',
    'our.story': 'Our Story',
    'mission': 'Mission',
    'vision': 'Vision',
    'core.values': 'Core Values',
    'our.team': 'Our Team',
    'achievements': 'Our Achievements',
    'years.experience': 'Years of Experience',
    'happy.customers': 'Happy Customers',
    'professional.technicians': 'Professional Technicians',
    'quality.awards': 'Quality Awards',
    'ready.experience': 'Ready to experience our services?',
    
    // Contact page
    'contact.us': 'Contact Us',
    'contact.description': 'Get in touch with us if you have any questions or requests',
    'contact.info': 'Contact Information',
    'address': 'Address',
    'phone': 'Phone',
    'email': 'Email',
    'working.hours': 'Working Hours',
    'connect.with.us': 'Connect With Us',
    
    // Form
    'send.request': 'Send Request',
    'full.name': 'Full Name',
    'phone.number': 'Phone Number',
    'subject': 'Subject',
    'choose.subject': 'Choose Subject',
    'repair.service': 'Repair',
    'maintenance': 'Maintenance',
    'consultation': 'Consultation',
    'other': 'Other',
    'message': 'Message',
    'send.request.btn': 'Send Request',
    'thank.you': 'Thank you for contacting us! We will respond as soon as possible.',
    
    // Admin
    'admin.login': 'Admin Login',
    'username': 'Username',
    'password': 'Password',
    'login': 'Login',
    'service.management': 'Service Management',
    'logout': 'Logout',
    'add.service': 'Add New Service',
    'update.service': 'Update Service',
    'service.name': 'Service Name',
    'description': 'Description',
    'icon': 'Icon',
    'price': 'Price',
    'add': 'Add Service',
    'update': 'Update',
    'cancel': 'Cancel',
    'service.list': 'Service List',
    'id': 'ID',
    'actions': 'Actions',
    
    // Theme
    'dark.mode': 'Dark Mode',
    'light.mode': 'Light Mode',
    
    // Language
    'language': 'Language',
    'vietnamese': 'Vietnamese',
    'english': 'English',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Lấy ngôn ngữ từ localStorage hoặc mặc định là 'vi'
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageType) || 'vi';
  });

  // Cập nhật ngôn ngữ trong localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Hàm để toggle ngôn ngữ
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'vi' ? 'en' : 'vi'));
  };

  // Hàm để lấy bản dịch
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook để sử dụng ngôn ngữ
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
