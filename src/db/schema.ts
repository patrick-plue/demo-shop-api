import {
    pgTable,
    real,
    text,
    serial,
    primaryKey,
    varchar,
    integer,
} from 'drizzle-orm/pg-core';

export const product = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    description: text('description'),
    price: real('price'),
    categoryId: integer('categoryId').references(() => category.id),
});

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
});

export const category = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
});

export const order = pgTable('orders', {
    id: serial('id').primaryKey(),
    userId: integer('userId').references(() => user.id),
    total: real('total').notNull(),
});

export const orderHasProducts = pgTable(
    'orderHasProducts',
    {
        productsId: integer('productId').references(() => product.id),
        orderId: integer('orderId').references(() => order.id),
        quantity: integer('quantity').notNull(),
    },
    (table) => {
        return {
            pk: primaryKey({ columns: [table.productsId, table.orderId] }),
        };
    }
);
