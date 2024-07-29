Data Structures (for your models)
User

    id: Integer
    name: String
    email: String
    password: String

Product

    id: Integer
    name: String
    description: String
    price: Float
    categoryId: Integer

Category

    id: Integer
    name: String

Order

    id: Integer
    userId: Integer
    products: Array of objects containing productId (Integer) and quantity (Integer)
    total: Float
