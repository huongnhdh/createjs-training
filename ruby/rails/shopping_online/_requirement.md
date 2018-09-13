Requirements


| Subjects       | Content           | Practices  |
| ------------- |:-------------:| -----:|
| 1. Giới thiệu về Rails?| 
- Version hiện tại? 
- Cách tạo 1 rails app?
- Các thành phần trong 1 Rails app? | - Install Ruby 2.4.2
- Tạo 1 app rails sử dụng MySQL
- Run app port 3000
- Xem kết quả tại localhost:3000
- Tạo git repo của app và push code lên" 
- Run app server?"	"- Install rails 5.1.4
- Sử dụng RVM để quản lý ruby versions.|
|2. MVC trong Rails app, Resful design | | |		
3. Active Record	"- ORM là gì?
- Model Naming Convention
- Tạo 1 active record model
- Các phương thức (thêm, sửa, xoá)
- Validation.
- Callback.
- Migrations."	"Thiết kế Database theo Class Diagram bên phải
Yêu cầu:
- Sử dụng MySQL
- Sử dụng ActiveRecord (ko sử dụng các ORM khác)
- Ở tất cả model phải có created_at và updated_at
- Validation:
+ customer model:
customer_name: không cho phép nil hoặc blank, độ dài không lớn hơn 15
address: cho phép blank
+ account model:
email: không cho phép nil, unique, nếu tạo 1 bản ghi đã trùng thì phải có errors message thông báo 'Email has already been taken'
password: encrypt password, password không được phép nil hoặc blank, nếu password blank thì errors message phải thông báo 'password can not blank'
+ administrator model:
admin_name: không cho phép nil hoặc blank, độ dài không lớn hơn 15
+ order model:
status là processing, pending thì được phép update bản ghi, còn lại thì không, nếu update có errors message ""Order has been expried""
customer_id là trường bắt buộc phải có.
shipping_info, order_products là bắt buộc phải có.
+ product model:
name, price not nil, not blank
categories: là array và phải nằm trong enum ProductCategories
+ order_product model:
quantity not nil, not blank
unit_price not nil, not blank
product id chắc chắn phải có
- Callback:
+ Khi create hay update 1 account, email phải valid.
+ password trước khi save or create phải được encrypt.
+ Một bản ghi account bị chuyển sang trạng thái blocked or banned thì tất cả các đơn hàng pending, processing phải chuyển sang trạng thái canceled
+ Không cho phép delete bản ghi của Account, Product, Order"
4. Active Record Associations	- Các loại quan hệ giữa các Active Record	
5. Controller(1)	"- Action Controller là gì?
- Controller Naming Convention
- Methods, actions
- Routing Parameters
- Filtering
- Routing"	- Viết các controller, view đáp ứng biểu đồ Use case bên phải
6. Controller(2)	"- Session, Accessing the Session
- The Flash
- Cookies
- HTTP Authentication
- Streaming and File Downloads
- Rescue
- Force HTTPS protocol"	
7. Views	"- Action View là gì? Action View trong Rails
- View Naming Convention
- Templates, Partials and Layouts
- Helpers provided by Action View
- Form helper.
- Layouts and Rendering in Rails"	
Authentication/ Authorization		
## Shopping online usecase
![Shopping online usecase](https://www.lucidchart.com/publicSegments/view/1e48a750-2c74-4544-9b41-8c601c5cba46/image.png)

## Shopping online class
![Shopping online class](https://www.lucidchart.com/publicSegments/view/7c5d6bc1-bb61-4e3e-85f1-f71b043f996b/image.png)