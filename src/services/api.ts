import axios from 'axios';

// Định nghĩa interface cho dịch vụ
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

// Tạo instance axios
const api = axios.create({
  baseURL: 'http://localhost:3001', // Giả sử API chạy ở port 3001
});

// Các hàm gọi API
export const getServices = async (): Promise<Service[]> => {
  try {
    // Trong thực tế, đây sẽ là một API call
    // Nhưng vì chúng ta chưa có backend nên sẽ trả về dữ liệu mẫu
    // const response = await api.get('/services');
    // return response.data;
    
    return [
      {
        id: 1,
        title: 'Bảo dưỡng định kỳ',
        description: 'Dịch vụ bảo dưỡng xe định kỳ theo tiêu chuẩn nhà sản xuất, bao gồm thay dầu, kiểm tra và thay thế các bộ phận cần thiết.',
        icon: 'fas fa-tools',
        price: '500.000 - 2.000.000 VNĐ'
      },
      {
        id: 2,
        title: 'Sửa chữa động cơ',
        description: 'Dịch vụ sửa chữa, bảo dưỡng và thay thế các bộ phận động cơ, giúp xe vận hành êm ái và tiết kiệm nhiên liệu.',
        icon: 'fas fa-cogs',
        price: '1.000.000 - 10.000.000 VNĐ'
      },
      {
        id: 3,
        title: 'Hệ thống điện',
        description: 'Kiểm tra và sửa chữa hệ thống điện, bao gồm ắc quy, máy phát điện, đèn và các thiết bị điện tử khác trên xe.',
        icon: 'fas fa-bolt',
        price: '300.000 - 2.000.000 VNĐ'
      },
      {
        id: 4,
        title: 'Hệ thống phanh',
        description: 'Kiểm tra, bảo dưỡng và thay thế các bộ phận của hệ thống phanh để đảm bảo an toàn khi lái xe.',
        icon: 'fas fa-brake-system',
        price: '500.000 - 3.000.000 VNĐ'
      },
      {
        id: 5,
        title: 'Điều hòa & làm mát',
        description: 'Kiểm tra, sửa chữa và nạp gas cho hệ thống điều hòa, đảm bảo không khí trong xe luôn mát mẻ và trong lành.',
        icon: 'fas fa-snowflake',
        price: '400.000 - 2.500.000 VNĐ'
      },
      {
        id: 6,
        title: 'Thay lốp & cân bằng',
        description: 'Dịch vụ thay lốp, cân bằng động và đảo lốp, giúp tăng tuổi thọ lốp và đảm bảo an toàn khi lái xe.',
        icon: 'fas fa-car-side',
        price: '200.000 - 1.000.000 VNĐ/lốp'
      }
    ];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const submitContactForm = async (formData: any) => {
  try {
    // Trong thực tế, đây sẽ là một API call để gửi form
    // const response = await api.post('/contact', formData);
    // return response.data;
    
    // Giả lập gửi form thành công
    return { success: true, message: 'Form submitted successfully' };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

export const getServiceById = async (id: number): Promise<Service | null> => {
  try {
    // Trong thực tế, đây sẽ là một API call
    // const response = await api.get(`/services/${id}`);
    // return response.data;
    
    const services = await getServices();
    return services.find(service => service.id === id) || null;
  } catch (error) {
    console.error(`Error fetching service with id ${id}:`, error);
    throw error;
  }
};

export default api; 