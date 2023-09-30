# Shop-now

- Abstraction Interface for Frontend
    
    Используем шаблон Feature Sliced Design который разделаяет функцианальности приложения на леййеры тоесть слойи который каждий слой выполняет одну действию без независимо от других слоев, монолитная архитектура, автомотизируем процессы (CI/CD) таких как тестирование, тайп-чек, еслинт ошыбки, соглашением методологии Clean Code для написание чистого кода, покрывем код с тестами, юнит-тестов, интеграционное тесты и e2e тесты, пищем тест после нарисания кода (TLD), постораетесь писать чистый, понятный код и не дублируеший код, код должен быть максимально простым, декомпозируете больщшие компоненты и модули.
    Для реализации маркет плейса используем: Typescript, Nuxt3, Axios, Custom-UI и т.д 
    Для реализации админки используем: Typescript, Vue3, Axios, Custom-UI и т.д
    
    - Pages
        - Main Page
            - Header
                - Logo, Search Input, button-profile, button-wishes, button-cart
                - filter-bar, button-more, open-modal-bar, categories, category dropdowns(to every category show default 4 options)
            - Main
                - banner slider, about-news
                - Products in Sale,
                - then sections for every base categories, with default 5 cards, (if you click to category opens page with products)
                - populars
                - new published products
            - Footer
                - navbar links, social links, faq
        - Category Page
            - Bread-crumbs
            - Name Category, filter by (popularty, more expencive, cheaper, high rating, new published)
            - left sidebar
                - category category list, in index where located this category
                - Filter
                    - when done some filter, button for clear all filter list to every section of filter
                    - by price range input
                    - by color
                    - brand
                    - when done some filter, button for get result
                    - when done some filter, button for clear all filter list
                - filtered list of elements
                    - item (product card-item)
                - pagination
        - Detail Page
            
             full-page
            
            - left-side
                - product images in slider
            - right-side
                - product rate, product order count, button for add wish list
                - name of product
                - name of salesman
                - Delivery, time, money
                - color: name
                - image how looks
                - sizes
                - picking every option of product count of order changes
                - order count for buy, how many does exist (changes when picks one of option)
                - price
                - button for buy and add to card list
                - how many orders done in this week
                - briefly about the product:
            - tab-bar
                - description of product
                - comments, count of reviews
                    - textarea for adding comment
                    - item review
                        - name, time,
                        - comment body
                    - reviews can answer
                    - edit written comment
            - same products
                - item (product card-item)
            - viewed products recently
                - item (product card-item)
            - Footer
        - Salesman Page
            - Overview
                - banner
                - about
                    - logo saller
                    - count of orders, rate and reviews, subscribed users
                    - Name Salesman
                    - when joined
                    - Description
                    - Contact Data
            - Products of Salesman (name), sort by (popularity, cheaper, most exspencive, most ordered, new published, high rating)
                - sidebar
                    - categories list
                - Filter
                    - when done some filter, button for clear all filter list to every section of filter
                    - by price range input
                    - by color
                    - brand
                    - when done some filter, button for get result
                    - when done some filter, button for clear all filter list
                    
        - Wishes Page
            - header with ( My favorites), search input
            - item (product card-item)
            - pagination
        - Card List Page
            - Your Card, count of products
            - products list
                - checkbox for select all, (when delivers, time)
                - item
                    - checkbox for select
                    - product image
                    - name product, salesman name, color, size
                    - count of product, price of one product
                    - button delete, (when clicks to delete opens confirm modal)
                    - total price
            - total check data
                - can delivery to door, or get from
                - your orders
                - product count, total price
                - total price
                    - if has sale price (you are economming sale price)
                - place order goes to order buy options
        - order buy options
            - way to get and adress for delivery
                - city delivery
                - point for receive
                    - order storage period
                    - can be tested
                    - quick return
                    - cashback and others
                    - points
                        - pick one of point, search
                        - item
                            - checkbox
                            - adress name
                            - work-item, work-days
                            - when can i get date and time
                            - how much time he can wait
                - delivery to door
                    
                    form
                    
                    - region
                    - strict, home
                    - comment for delivery man
                    - data and time delivery
            - order getter
                - last name, first name
                - number phone
            - payment methods
                - with card(card types) and image
                - on receipt
            - ordered products
                - item
                    - checkbox for select
                    - product image
                    - name product, salesman name, color, size
                    - count of product, price of one product
                    - button delete, (when clicks to delete opens confirm modal)
                    - total price
            - payment content block in right side
                - your order, ack to cards list page
                - products amount, price
                - delivery, price
                - total price
                - promocodes
                - 
        - item (product card-item)
            - product image
            - on top right side button for adding wish list (heart-button)
            - name product
            - rate
            - price, button for adding card list
            - when click to button add card list opens modal with form to add (modal add card)
        - modal add card
            - slider images of product
            - name of product
            - color
            - size
            - count
            - price
            - add to card lsit
- Abstraction Interface for Backend API
    
    Я не очень шарю в backend)
    исползуем: Typescript, Express, для СУБД Mongoose, для авторизации после создание аккаунта через отправки кодд на емеил, а в админке через JWT.
    
    - infostructure:
        
        Companies:
        
        - Company
            - id
            - name
            - logo
            - description
            - createdAt
            - order-counts
            - rate
            - banner
            - followers
                
                user
                
                - 
        
        Product:
        
        - Product
            
            id
            
            name
            
            rate
            
            price
            
            salePrice?
            
            inSale
            
            - tags:
                
                [categoryKeys]
                
            
            categoryId
            
            images
            
        
        Products-detail:
        
        - Product-detail
            - name
            - id
            - seller-company
            - rate
            - seller-company-id
            - price
            - salePrice?
            - inSale:
            - orderedAmount
            - ordered-in-last-week
            - options
                
                item
                
                - size
                    - value
                    - img
                - color
                    - value
                    - img
                - exist-amount
                - can add some options
            - bierfy-about
            - description
            - categoryId
            - reviews
                
                item
                
                - user
                    - userCredentials
                - title
                - id
                - createdAt
                - answers
                    - reviews_item
            - tagnames
            - delivery-time
        
        Categories:
        
        - Category-item
            - value
                - uz
                - ru
                - en
                - icon
            - categoryId
            - children-categories
        
        Wishes:
        
        - Wish
            - Product-detail
        
        Cards:
        
        - Card
            - products
                - item
                    
                    Product-item
                    
                    - name
                    - seller-company
                    - seller-company-id
                    - price
                    - sale-price
                    - total-price
                    - ordered-amount
                    - id
                    - productId
                    - product-image
                    - options
                        - color
                        - size
            - max-delivery-day
            - id
            
        
        Ordered Cards:
        
        - Ordered_item
            - createdAt
            - id
            - totalPrice
            - cardId
            - deliveryPoint
                - pointId
                - pointName
                - pointWorkTime
                - 
            - products
                - item
                    - name
                    - seller-company
                    - seller-company-id
                    - price
                    - sale-price
                    - total-price
                    - ordered-amount
                    - id
                    - productId
                    - product-image
                    - options
        
        User:
        
        - User_item
            - name
            - logo_img
            - id
            - created_at
            - followings
                - company_id
        
    
    что мне делать:
    
    - в Users
        - [ ]  auth
        - [ ]  follow
        - [ ]  history
        - [ ]  orders-list
        - [ ]  wish-list
    - в Categories
        - [ ]  tags
        - [ ]  search
        - [ ]  children
        - [ ]  language
    - в Product
        - [ ]  rate-system
        - [ ]  get list
        - [ ]  get filters
        - [ ]  language
        - [ ]  adding to wish list
        - [ ]  order
        - [ ]  change only content-makers and company employers
    - в Companies
        - [ ]  rate-system
        - [ ]  orders-history
        - [ ]  language
        - [ ]  authorization
        - [ ]  admin permissions
        - [ ]  control employers
    - нужно сделать еще одну док swagger для работников именно shop-now а потом только для компании в итоге у нас долюно получится 3 документации: marketplace, company-admin, main-admin
    - потом нужно сделать main-admin модуль
    - потом нужно сделать company-admin модуль
    - потом нужно сделать оформления заказа
    - заказ после оформления должно поподатся в лист orders-company и в main-adming new order-item, а потом уже туда к филлиялу которуму сделали получения, если это доставка тогда к ближаешый филлиал к покупателю
    
    ### в comapny-admin,
    
    1. authorization
    2. admin permisstions
        1. [Super-admin] - can be only one in company (can create admins, and control on them, and have access to any thing, the super admins history havn’t be on history-employer)
        2. [Admin] - Admin (can create customers, control with products and customers, he can do anything, can delete employers only with confirmation of super-admin)
        3. [Order-manager] - Orders-Manager (employer should look after orders-list, he sends orders to point, and answers to quality of product, and logistics of product delivery to point, and he can cancel the order)
        4. [Product-manager] - Product-Manager (employer have to look after by products content, and it can create new products and update and delete them)
    3. Enpoints
        - /profile [employers-detail]
            1. history
            2. worked days
            3. profile-img
            4. who assigned him to the company, if admin logsout, ( have to be name, dispite unexist of admin)
            5. [only admin has access to see the profiles of employers dispite of their role, amdin can’t see the another admin’s profile]
        - /history-employer
            1. get-list of employers dispite the role, if its admin is getting list of employers it should return only order-manager and product if it super admin it have to return admins to
            2. sort by role
            3. [delete employer only from admins and super-admins]
            4. product-manager and orders-manager they have no access to employers history 
            5. admins can delete the product-manager and orders-manager only with confirmation of super-admin
            6. model:
                1. message: Order delivered to the point
                2. message: Order canceled
                3. message: Product created 
                4. message: Product updated
                5. message: Product deleted
                6. message: Created employer
                7. message: deleted employer
                8. worker signed at: time
                9. worker exited at: time
                10. created_at
                11. id
                12. employer: employer_id (always save)
                13. 
                    
                    
        - /history-company
            1. only for admins and super-admins, laid of workers, every received order and sended to the point and canceled orders, created, updated orders, and sold out product.
            2. no one can delete it from history-company
            3. filter
                1. status
            4. model
                1. status
                    1. 
                2. id if it sended product it has to be id for item of orders-list if it selled product it has to be id of selled-products, if it deletion of employers id of employers
                3. 
        - /orders-list
            1. only super-admin and admin and order-mannager have access to this model and basicly there work onyl order-managers, and there no-one can create new point, and then there should be sort options like, by_created_At, and by point_id and by_delivery_max_time, and there should be two filters that paid and unpaid, and default is unpaid, and for unpaid products also should be two status that delivered and undelivered it status changes only by confirmation of point-order-managers also point-admins, well in conlusion
                1. Filter
                    1. paid
                        1. Sort
                            1. created_recenty
                            2. 
                    2. unpaid (default)
                        1. Sort:
                            1. delivered
                            2. undelivered (default)
                            3. created_recently (1)
                    3. canceled
                        1. Sort:
                            1. delivered
                            2. undelivered
                            3. created_recently
        - /employers
            
            only super-admin and admins has access to create employers with role [order-manager, product-manager] and delete them
            
            filter: by_role
            
            order-manager
            
            product-manager
            
            sort:
            
            by_created_at
            
            model: 
            
            name
            
            phone-number
            
            email
            
            password
            
            role
            
            token
            
            created_at
            
        - /admins
            
            only-super-admins has access to work on admins create and delete and update their name or same that
            
            sort:
            
            by_created_At
            
            model
            
        - /logout
    4. orders-list
        1. delivered
        2.  in way
        3. undelivered
        4. canceled
    5. cash, daily, weekly, all
    6. post-content-crud
    7. employers work-time
    8. exit, in employers
    9. logout and delete
    
    ### в main-admin
    
    1. authorization
    2. admin permissions [order-manager, admin, organization-manager, point-admin]
        1. order-manager - looks after orders, for canceling order
        2. admin - for create order-manager and organization-managers
        3. organization-manager - crud of companies, crud of points
        4. point-admin - every point has admin
    3. orders-list
        1. user (userRef)
        2. products
            1. product_id
            2. name
            3. price
            4. options
            5. 
    4. filter-list
    5. cash daily
    6. advertisements
    7. company-control and product-control
    8. employers control
    9. points-list
    10. products list
    
    ### models
    
    - for points (Points Model)
        
        location:
        
        - city
        - district
        - adress
        - orientation
        
        worktime:
        
        - work-time
        - non-working-days
        
        phone-numbers: array  
        
        degrees: 
        
        - longitude
        - latitude
        
        _id
        
        created_at
        
        relates to (admin):
        
        email
        
        name
        
    - for employers (main-admin-employers)
        
        role: 
        
        - order-manager - looks after orders, for canceling order
        - admin - for create order-manager and organization-managers
        - organization-manager - crud of companies, crud of points
        - point-admin - every point has admin
        
        name
        
        email
        
        password
        
        phone-number
        
        token
        
    - for orders list (orders-list)
        
        price:
        
        - total
        - sale-discounts
        - promocode
        
        location:
        
        status:
        
        - deliver-to-door
        - pick-up-point
        
        adress ?(if status deliver-to-door):
        
        - city, district, street, house
        - reference point
        - phone-number
        - name
        - coordinates?
        
        delivery-time: 1day (default)
        
        order-id
        
        payment-status: false (must be true if client wants to deliver it to door!!)
        
        payment-info (if deliver-to-door!!)
        
        - card type [visa, mastercard …]
        - card name
        - card id
        - transaction …
        
        user(userRef):
        
        products-length
        
    - for companies
        
        
    
    companies