## Requirements

| Subjects | Content  | Practices  |
| ------------- |-------------| -----|
| 1. Giới thiệu về Rails?|- Version hiện tại?  <br> - Cách tạo 1 rails app?  <br> -Các thành phần trong 1 Rails app? | - Install Ruby 2.4.2 <br> - Tạo 1 app rails sử dụng MySQL  <br> - Run app port 3000  <br> - Xem kết quả tại localhost:  <br> - Tạo git repo của app và push code lên  <br> - Run app server? <br/> - Install rails 5.1.4  <br>-Sử dụng RVM để quản lý ruby versions.|
|2. MVC trong Rails app, Resful design | | |		
|3. Active Record | - ORM là gì? <br/>- Model Naming Convention <br> - Tạo 1 active record model <br> - Các phương thức (thêm, sửa, xoá) <br> - Validation. <br> - Callback.<br/> - Migrations.|Thiết kế Database theo Class Diagram bên dưới <br> Yêu cầu: <br> - Sử dụng MySQL <br> - Sử dụng ActiveRecord (ko sử dụng các ORM khác) <br> - Ở tất cả model phải có created_at và updated_at <br>- Validation: <br/> + customer model:<br/> customer_name: không cho phép nil hoặc blank, độ dài không lớn hơn 15 <br/>address: cho phép blank <br/>+ account model:<br/>email: không cho phép nil, unique, nếu tạo 1 bản ghi đã trùng thì phải có errors message thông báo 'Email has already been taken' <br/> password: encrypt password, password không được phép nil hoặc blank, nếu password blank thì errors message phải thông báo 'password can not blank' <br/> + administrator model: <br/> admin_name: không cho phép nil hoặc blank, độ dài không lớn hơn 15 <br/> + order model: <br/> status là processing, pending thì được phép update bản ghi, còn lại thì không, nếu update có errors message ""Order has been expried""  customer_id là trường bắt buộc phải có. shipping_info, order_products là bắt buộc phải có. <br/> + product model: name, price not nil, not blank categories: là array và phải nằm trong enum ProductCategories <br/>+ order_product model: quantity not nil, not blank unit_price not nil, not  product id chắc chắn phải có <br/> - Callback: <br/> + Khi create hay update 1 account, email phải valid. <br/> + password trước khi save or create phải được encrypt. <br/> + Một bản ghi account bị chuyển sang trạng thái blocked or banned thì tất cả các đơn hàng pending, processing phải chuyển sang trạng thái canceled <br/> + Không cho phép delete bản ghi của Account, Product, Order|
|4. Active Record Associations|	- Các loại quan hệ giữa các Active Record||	
|5. Controller(1)|- Action Controller là gì?| - Controller Naming Convention <br/>- Methods, actions <br/> - Routing Parameters <br/> - Filtering <br/> - Routing|	- Viết các controller, view đáp ứng biểu đồ Use case bên phải |
|6. Controller(2)|- Session, Accessing the Session |- The Flash <br/> - Cookies <br/> - HTTP Authentication <br/> - Streaming and File Downloads <br/> - Rescue <br/>- Force HTTPS protocol| 
|7. Views|- Action View là gì? Action View trong Rails <br/> - View Naming Convention <br/>- Templates, Partials and Layouts <br/> - Helpers provided by Action View <br/> - Form helper. <br/> - Layouts and Rendering in Rails| |
|Authentication/ Authorization| ||		

## Shopping online usecase
![Shopping online usecase](https://www.lucidchart.com/publicSegments/view/1e48a750-2c74-4544-9b41-8c601c5cba46/image.png)

## Shopping online class
![Shopping online class](https://www.lucidchart.com/publicSegments/view/7c5d6bc1-bb61-4e3e-85f1-f71b043f996b/image.png)