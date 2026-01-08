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
    'user': 'Người dùng',
    'guest': 'Khách',
    
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
    'testimonial1': '"Dịch vụ rất tốt và chuyên nghiệp. Nhân viên thân thiện và giải thích rõ ràng về vấn đề của xe tôi. Giá cả hợp lý và thời gian sửa chữa nhanh chóng."',
    'testimonial2': '"Tôi rất hài lòng với dịch vụ bảo dưỡng định kỳ. Kỹ thuật viên rất tận tâm và cẩn thận. Xe chạy êm hơn nhiều sau khi được bảo dưỡng."',
    'testimonial3': '"Đội ngũ kỹ thuật viên rất chuyên nghiệp và am hiểu về xe. Họ đã giúp tôi sửa chữa một vấn đề phức tạp mà nhiều garage khác không thể giải quyết được."',
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
    'about.story.lead': 'Auto Service Center được thành lập vào năm 2010 với mục tiêu cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với giá cả hợp lý.',
    'about.story.p1': 'Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào về đội ngũ kỹ thuật viên chuyên nghiệp và trang thiết bị hiện đại. Chúng tôi cam kết mang đến cho khách hàng dịch vụ tốt nhất và sự hài lòng tuyệt đối.',
    'about.story.p2': 'Tại Auto Service Center, chúng tôi không chỉ sửa chữa xe hơi mà còn xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin tưởng và chất lượng dịch vụ.',
    'about.mission.text': 'Cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với giá cả hợp lý, đảm bảo an toàn và sự hài lòng cho khách hàng.',
    'about.vision.text': 'Trở thành trung tâm dịch vụ ô tô hàng đầu tại Việt Nam, được khách hàng tin tưởng và lựa chọn nhờ chất lượng dịch vụ và sự chuyên nghiệp.',
    'about.values.text': 'Chúng tôi hoạt động dựa trên các giá trị: Chất lượng, Trung thực, Minh bạch, Tôn trọng khách hàng và Không ngừng cải tiến.',
    'team.director': 'Giám đốc',
    'team.tech.lead': 'Trưởng kỹ thuật',
    'team.customer.service': 'Quản lý dịch vụ khách hàng',
    'team.senior.tech': 'Kỹ thuật viên cao cấp',
    
    // Contact page
    'contact.us': 'Liên hệ với chúng tôi',
    'contact.description': 'Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào',
    'contact.info': 'Thông tin liên hệ',
    'address': 'Địa chỉ',
    'phone': 'Điện thoại',
    'email': 'Email',
    'working.hours': 'Giờ làm việc',
    'connect.with.us': 'Kết nối với chúng tôi',
    'contact.sunday.closed': 'Chủ nhật: Đóng cửa',
    
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
    'admin.login': 'Đăng nhập',
    'username': 'Tên đăng nhập',
    'password': 'Mật khẩu',
    'login': 'Đăng nhập',
    'logging.in': 'Đang đăng nhập...',
    'login.error': 'Tên đăng nhập hoặc mật khẩu không đúng',
    'login.error.server': 'Có lỗi xảy ra, vui lòng thử lại sau',
    'demo.credentials': 'Thông tin đăng nhập demo',
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

    // NotFound page
    'page.not.found': 'Không tìm thấy trang',
    'page.not.found.message': 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.',
    'back.to.home': 'Quay lại trang chủ',

    // Registration
    'register': 'Đăng ký',
    'register.title': 'Đăng ký tài khoản',
    'confirm.password': 'Xác nhận mật khẩu',
    'select.role': 'Chọn vai trò',
    'registering': 'Đang đăng ký...',
    'register.error': 'Có lỗi xảy ra khi đăng ký',
    'register.error.username': 'Tên đăng nhập đã tồn tại',
    'register.error.password': 'Mật khẩu xác nhận không khớp',
    'already.have.account': 'Bạn đã có tài khoản?',
    'dont.have.account': 'Bạn chưa có tài khoản?',
    'register.now': 'Đăng ký ngay',
    'login.now': 'Đăng nhập ngay',
    'password.requirements': 'Mật khẩu phải có ít nhất 6 ký tự',
    
    // Dashboard
    'user.dashboard': 'Bảng điều khiển người dùng',
    'guest.dashboard': 'Bảng điều khiển khách',
    'welcome': 'Xin chào',
    'my.profile': 'Hồ sơ của tôi',
    'my.services': 'Dịch vụ của tôi',
    'my.appointments': 'Cuộc hẹn của tôi',
    'no.services.yet': 'Bạn chưa đăng ký dịch vụ nào',
    'no.appointments': 'Bạn chưa có cuộc hẹn nào',
    'book.service': 'Đặt dịch vụ',
    'schedule.appointment': 'Lên lịch hẹn',
    'limited.access': 'Truy cập hạn chế',
    'guest.limited.access.message': 'Tài khoản khách có quyền truy cập hạn chế. Nâng cấp lên tài khoản người dùng để sử dụng đầy đủ tính năng.',
    'upgrade.to.user': 'Nâng cấp lên người dùng',
    'browse.services': 'Duyệt dịch vụ',
    'guest.browse.services.message': 'Bạn có thể xem các dịch vụ có sẵn nhưng cần nâng cấp tài khoản để đặt lịch.',
    'view.services': 'Xem dịch vụ',

    // FAQ
    'faq.appointment': 'Tôi cần đặt lịch hẹn trước không?',
    'faq.appointment.answer': 'Có, chúng tôi khuyến khích khách hàng đặt lịch hẹn trước để đảm bảo có đủ thời gian và nhân lực để phục vụ bạn tốt nhất. Tuy nhiên, trong trường hợp khẩn cấp, chúng tôi sẽ cố gắng hỗ trợ bạn ngay khi có thể.',
    'faq.warranty': 'Thời gian bảo hành dịch vụ là bao lâu?',
    'faq.warranty.answer': 'Thời gian bảo hành phụ thuộc vào loại dịch vụ. Thông thường, chúng tôi cung cấp bảo hành 6 tháng cho các dịch vụ sửa chữa lớn và 3 tháng cho các dịch vụ nhỏ. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.',
    'faq.payment': 'Các phương thức thanh toán nào được chấp nhận?',
    'faq.payment.answer': 'Chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng/ghi nợ, và chuyển khoản ngân hàng. Đối với các dịch vụ sửa chữa lớn, chúng tôi cũng có các tùy chọn trả góp.',

    // Service Card
    'details': 'Chi tiết',

    // Footer
    'footer.description': 'Chúng tôi cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với đội ngũ kỹ thuật viên chuyên nghiệp và thiết bị hiện đại.',
    'footer.quick.links': 'Liên kết nhanh',
    'footer.address': '123 Đường Lê Lợi, Quận 1, TP.HCM',
    'footer.working.hours': 'Thứ 2 - Thứ 7: 8:00 - 18:00',
    'footer.copyright': 'Đã đăng ký bản quyền.',

    // Icons
    'icon.tools': 'Công cụ',
    'icon.gears': 'Bánh răng',
    'icon.car': 'Xe hơi',
    'icon.oil': 'Dầu',
    'icon.electric': 'Điện',
    'icon.gauge': 'Đồng hồ',
    'icon.battery': 'Ắc quy',
    'icon.repair': 'Sửa chữa',
    'icon.ac': 'Điều hòa',
    'icon.tire': 'Lốp xe',
  },
  en: {
    // Navbar
    'home': 'Home',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact',
    'admin': 'Admin',
    'user': 'User',
    'guest': 'Guest',
    
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
    'testimonial1': '"Excellent service and very professional. Staff were friendly and explained the issues with my car clearly. Fair pricing and quick turnaround time."',
    'testimonial2': '"I\'m very satisfied with the regular maintenance service. The technicians were attentive and careful. My car runs much smoother after the service."',
    'testimonial3': '"The technical team is very professional and knowledgeable about cars. They helped me fix a complex issue that many other garages couldn\'t resolve."',
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
    'about.story.lead': 'Auto Service Center was founded in 2010 with the goal of providing high-quality car repair and maintenance services at reasonable prices.',
    'about.story.p1': 'With over 10 years of experience in the industry, we take pride in our professional technicians and modern equipment. We are committed to providing customers with the best service and absolute satisfaction.',
    'about.story.p2': 'At Auto Service Center, we don\'t just repair cars but also build long-term relationships with customers based on trust and service quality.',
    'about.mission.text': 'Provide high-quality car repair and maintenance services at reasonable prices, ensuring safety and customer satisfaction.',
    'about.vision.text': 'To become the leading auto service center in Vietnam, trusted and chosen by customers for service quality and professionalism.',
    'about.values.text': 'We operate based on the values: Quality, Honesty, Transparency, Customer Respect, and Continuous Improvement.',
    'team.director': 'Director',
    'team.tech.lead': 'Technical Lead',
    'team.customer.service': 'Customer Service Manager',
    'team.senior.tech': 'Senior Technician',
    
    // Contact page
    'contact.us': 'Contact Us',
    'contact.description': 'Get in touch with us if you have any questions or requests',
    'contact.info': 'Contact Information',
    'address': 'Address',
    'phone': 'Phone',
    'email': 'Email',
    'working.hours': 'Working Hours',
    'connect.with.us': 'Connect With Us',
    'contact.sunday.closed': 'Sunday: Closed',
    
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
    'admin.login': 'Login',
    'username': 'Username',
    'password': 'Password',
    'login': 'Login',
    'logging.in': 'Logging in...',
    'login.error': 'Invalid username or password',
    'login.error.server': 'An error occurred, please try again later',
    'demo.credentials': 'Demo Credentials',
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

    // NotFound page
    'page.not.found': 'Page Not Found',
    'page.not.found.message': 'The page you are looking for does not exist or has been moved.',
    'back.to.home': 'Back to Home',

    // Registration
    'register': 'Register',
    'register.title': 'Create Account',
    'confirm.password': 'Confirm Password',
    'select.role': 'Select Role',
    'registering': 'Registering...',
    'register.error': 'An error occurred during registration',
    'register.error.username': 'Username already exists',
    'register.error.password': 'Passwords do not match',
    'already.have.account': 'Already have an account?',
    'dont.have.account': 'Don\'t have an account?',
    'register.now': 'Register now',
    'login.now': 'Login now',
    'password.requirements': 'Password must be at least 6 characters',
    
    // Dashboard
    'user.dashboard': 'User Dashboard',
    'guest.dashboard': 'Guest Dashboard',
    'welcome': 'Welcome',
    'my.profile': 'My Profile',
    'my.services': 'My Services',
    'my.appointments': 'My Appointments',
    'no.services.yet': 'You haven\'t booked any services yet',
    'no.appointments': 'You don\'t have any appointments',
    'book.service': 'Book a Service',
    'schedule.appointment': 'Schedule Appointment',
    'limited.access': 'Limited Access',
    'guest.limited.access.message': 'Guest accounts have limited access. Upgrade to a user account to use all features.',
    'upgrade.to.user': 'Upgrade to User',
    'browse.services': 'Browse Services',
    'guest.browse.services.message': 'You can view available services but need to upgrade your account to book appointments.',
    'view.services': 'View Services',

    // FAQ
    'faq.appointment': 'Do I need to make an appointment in advance?',
    'faq.appointment.answer': 'Yes, we encourage customers to make appointments in advance to ensure we have enough time and staff to serve you best. However, in case of emergencies, we will try to assist you as soon as possible.',
    'faq.warranty': 'How long is the service warranty period?',
    'faq.warranty.answer': 'The warranty period depends on the type of service. Typically, we provide a 6-month warranty for major repairs and 3 months for minor services. Please contact us for more details.',
    'faq.payment': 'What payment methods are accepted?',
    'faq.payment.answer': 'We accept payment by cash, credit/debit cards, and bank transfers. For major repair services, we also have installment options available.',

    // Service Card
    'details': 'Details',

    // Footer
    'footer.description': 'We provide high-quality car repair and maintenance services with professional technicians and modern equipment.',
    'footer.quick.links': 'Quick Links',
    'footer.address': '123 Le Loi Street, District 1, HCMC',
    'footer.working.hours': 'Monday - Saturday: 8:00 AM - 6:00 PM',
    'footer.copyright': 'All rights reserved.',

    // Icons
    'icon.tools': 'Tools',
    'icon.gears': 'Gears',
    'icon.car': 'Car',
    'icon.oil': 'Oil',
    'icon.electric': 'Electric',
    'icon.gauge': 'Gauge',
    'icon.battery': 'Battery',
    'icon.repair': 'Repair',
    'icon.ac': 'Air Conditioning',
    'icon.tire': 'Tire',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Lấy ngôn ngữ từ localStorage hoặc mặc định là 'en'
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageType) || 'en';
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
    // Kiểm tra nếu key tồn tại trong bản dịch hiện tại
    if (translations[language][key]) {
      return translations[language][key];
    }
    
    // Nếu không tìm thấy, trả về key
    console.warn(`Translation key not found: ${key}`);
    return key;
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
