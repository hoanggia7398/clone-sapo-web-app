# Plan 1 Implementation Checklist: Tổng quan và UI/UX

## 1. Tạo các trang còn thiếu

### 1.1 Trang sản phẩm (/products)
- [x] Tạo file trang cơ bản (`src/app/products/page.tsx`)
- [x] Thiết kế và triển khai UI danh sách sản phẩm
  - [x] Tạo component bảng hiển thị sản phẩm (`src/components/Products/ProductTable.tsx`)
  - [x] Thêm các cột: hình ảnh, tên, mã SKU, giá bán, tồn kho, trạng thái
  - [x] Tạo mockData cho sản phẩm (`src/mockData/products.ts`)
- [x] Thêm chức năng xem chi tiết sản phẩm
  - [x] Tạo modal/dialog hiển thị chi tiết (`src/components/Products/ProductDetail.tsx`)
- [x] Thêm chức năng thêm mới sản phẩm
  - [x] Tạo form thêm sản phẩm (`src/components/Products/ProductForm.tsx`)
- [x] Thêm chức năng sửa sản phẩm
  - [x] Tái sử dụng ProductForm với mode edit
- [x] Thêm chức năng xóa sản phẩm
  - [x] Tạo dialog xác nhận xóa (`src/components/Products/DeleteProductDialog.tsx`)
- [x] Thêm chức năng tìm kiếm sản phẩm

### 1.2 Trang danh mục (/categories)
- [x] Tạo file trang cơ bản (`src/app/categories/page.tsx`)
- [x] Thiết kế và triển khai UI danh mục
  - [x] Tạo component hiển thị cây danh mục (`src/components/Categories/CategoryTree.tsx`)
  - [x] Tạo mockData cho danh mục (`src/mockData/categories.ts`)
- [x] Thêm chức năng thêm danh mục
- [x] Thêm chức năng sửa danh mục
- [x] Thêm chức năng xóa danh mục
- [x] Tạo liên kết giữa sản phẩm và danh mục

### 1.3 Trang doanh thu (/revenue)
- [x] Tạo file trang cơ bản (`src/app/revenue/page.tsx`)
- [x] Thiết kế và triển khai biểu đồ doanh thu
  - [x] Tạo component biểu đồ doanh thu (`src/components/Revenue/RevenueChart.tsx`)
  - [x] Tạo mockData cho doanh thu (`src/mockData/revenue.ts`)
- [x] Thêm bộ lọc theo thời gian
- [x] Thêm thống kê doanh thu theo kênh bán hàng

### 1.4 Trang sản phẩm bán chạy (/bestsellers)
- [x] Tạo file trang cơ bản (`src/app/bestsellers/page.tsx`)
- [x] Thiết kế và triển khai UI danh sách sản phẩm bán chạy
  - [x] Tạo component hiển thị sản phẩm bán chạy (`src/components/BestSellers/BestsellingProductsTable.tsx`)
  - [x] Tạo mockData cho sản phẩm bán chạy (`src/mockData/bestsellers.ts`)
- [x] Thêm bộ lọc theo thời gian, danh mục, chi nhánh (`src/components/BestSellers/BestsellersHeader.tsx`)
- [x] Tạo biểu đồ trực quan hóa doanh số
  - [x] Biểu đồ sản phẩm bán chạy (`src/components/BestSellers/BestsellingProductsChart.tsx`)
  - [x] Biểu đồ danh mục bán chạy (`src/components/BestSellers/BestsellingCategoryChart.tsx`)

### 1.5 Trang chi nhánh (/stores)
- [x] Tạo file trang cơ bản (`src/app/stores/page.tsx`)
- [x] Thiết kế và triển khai UI danh sách chi nhánh
  - [x] Tạo component hiển thị chi nhánh (`src/components/Stores/StoresList.tsx`)
  - [x] Tạo mockData cho chi nhánh (`src/mockData/stores.ts`)
- [x] Thêm chức năng xem chi tiết chi nhánh
- [x] Thêm chức năng thêm chi nhánh
- [x] Thêm chức năng sửa chi nhánh
- [x] Thêm chức năng xóa chi nhánh

### 1.6 Trang nhân viên (/staff)
- [ ] Tạo file trang cơ bản (`src/app/staff/page.tsx`)
- [ ] Thiết kế và triển khai UI danh sách nhân viên
  - [ ] Tạo component hiển thị nhân viên (`src/components/Staff/StaffList.tsx`)
  - [ ] Tạo mockData cho nhân viên (`src/mockData/staff.ts`)
- [ ] Thêm chức năng quản lý thông tin nhân viên
- [ ] Thêm chức năng phân quyền cho nhân viên
- [ ] Thêm thống kê hoạt động của nhân viên

### 1.7 Trang cài đặt (/settings)
- [ ] Tạo file trang cơ bản (`src/app/settings/page.tsx`)
- [ ] Thiết kế và triển khai UI cài đặt
  - [ ] Tạo các tab cài đặt khác nhau
- [ ] Thêm cài đặt thông tin cửa hàng
- [ ] Thêm cài đặt thuế, phí vận chuyển
- [ ] Thêm cài đặt tài khoản người dùng
- [ ] Thêm cài đặt in hóa đơn

## 2. Cải thiện các trang hiện có

### 2.1 Thêm pagination cho danh sách đơn hàng và khách hàng
- [ ] Thêm component phân trang (`src/components/Common/Pagination.tsx`)
- [ ] Triển khai phân trang cho trang đơn hàng
- [ ] Triển khai phân trang cho trang khách hàng
- [ ] Thêm tùy chọn điều chỉnh số lượng hiển thị
- [ ] Thêm chức năng lọc và tìm kiếm nâng cao

### 2.2 Cải thiện UX cho màn hình POS
- [ ] Tối ưu quy trình thanh toán
- [ ] Thêm tùy chọn thanh toán đa phương thức
- [ ] Cải thiện giao diện tìm kiếm sản phẩm
- [ ] Thêm chức năng áp dụng khuyến mãi và mã giảm giá

### 2.3 Thêm tính năng lọc và sắp xếp dữ liệu
- [ ] Tạo component lọc chung (`src/components/Common/Filter.tsx`)
- [ ] Tạo component sắp xếp chung (`src/components/Common/Sort.tsx`)
- [ ] Triển khai lọc và sắp xếp cho tất cả các danh sách
- [ ] Thêm chức năng lưu tùy chọn lọc và sắp xếp

## 3. Responsive Design

### 3.1 Tối ưu giao diện trên các thiết bị di động
- [ ] Điều chỉnh layout cho màn hình nhỏ
- [ ] Tối ưu các thành phần UI cho màn hình cảm ứng
- [ ] Cải thiện tốc độ tải trang trên thiết bị di động

### 3.2 Cải thiện mobile menu
- [ ] Thiết kế menu thu gọn cho thiết bị di động
- [ ] Thêm các cử chỉ và animation phù hợp với mobile
- [ ] Đảm bảo khả năng tiếp cận (accessibility)

## Ưu tiên hiện tại (theo kế hoạch)
1. ✅ Hoàn thiện trang sản phẩm (/products)
2. ✅ Hoàn thiện trang danh mục (/categories)
3. Thêm pagination cho danh sách đơn hàng và khách hàng
4. Tối ưu giao diện trên thiết bị di động