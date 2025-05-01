# Kế hoạch hoàn thiện dự án Clone Sapo Web App - Phần 2: State Management

## Giai đoạn 2: Tích hợp State Management

### 2.1 Thiết lập State Management
- **Tích hợp giải pháp quản lý state**
  - Đánh giá và chọn giải pháp phù hợp (React Context API hoặc Redux)
  - Thiết lập cấu trúc store/context
  - Tạo hệ thống actions và reducers
  - Triển khai hệ thống middleware (nếu cần)

- **Xây dựng các reducer/store cho các phần chính**
  - **Quản lý sản phẩm**:
    - Lưu trữ danh sách sản phẩm
    - Quản lý state tìm kiếm, lọc, phân trang
    - Xử lý thêm/sửa/xóa sản phẩm

  - **Quản lý đơn hàng**:
    - Lưu trữ danh sách đơn hàng
    - Quản lý state tìm kiếm, lọc, phân trang
    - Xử lý tạo mới, cập nhật trạng thái đơn hàng

  - **Quản lý khách hàng**:
    - Lưu trữ danh sách khách hàng
    - Quản lý state tìm kiếm, lọc, phân trang
    - Xử lý thêm/sửa/xóa khách hàng

- **Thiết lập các global state**:
  - Quản lý state authentication
  - Quản lý theme và UI preferences
  - Quản lý notifications và alerts

### 2.2 Chức năng giỏ hàng (POS)
- **Hoàn thiện logic giỏ hàng**
  - Thiết kế state model cho giỏ hàng
  - Xây dựng các actions và reducers liên quan
  - Xử lý persistence (lưu trữ tạm) cho giỏ hàng

- **Thêm/xóa/sửa sản phẩm trong giỏ hàng**
  - Thêm sản phẩm (với số lượng, biến thể) vào giỏ hàng
  - Cập nhật số lượng, thuộc tính của sản phẩm
  - Xóa sản phẩm khỏi giỏ hàng
  - Làm trống giỏ hàng

- **Tính toán tổng tiền, thuế, giảm giá**
  - Tính tổng tiền hàng
  - Áp dụng các loại thuế khác nhau
  - Xử lý giảm giá (theo sản phẩm, theo đơn hàng)
  - Tính phí vận chuyển (nếu có)
  - Tính toán số tiền còn lại sau khi áp dụng khuyến mãi

- **Lưu trữ và khôi phục trạng thái giỏ hàng**
  - Lưu giỏ hàng vào localStorage hoặc sessionStorage
  - Khôi phục giỏ hàng khi người dùng quay lại
  - Xử lý nhiều giỏ hàng cùng lúc (draft orders)

### 2.3 Tích hợp với UI
- **Kết nối state với các component UI**
  - Sử dụng hooks/selectors để kết nối state với UI
  - Tối ưu re-rendering
  - Thêm loading states cho các action bất đồng bộ

- **Xử lý side-effects**
  - Sử dụng middleware/hooks để xử lý side-effects
  - Xử lý logic phức tạp (như tính toán liên quan giỏ hàng)
  - Xử lý các tác vụ bất đồng bộ

## Thời gian dự kiến
- Hoàn thành giai đoạn 2: 1-2 tuần

## Ưu tiên hiện tại
1. Thiết lập cấu trúc state management
2. Hoàn thiện logic giỏ hàng cho POS
3. Kết nối state với UI