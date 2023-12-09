CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "email" varchar,
  "phone" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "password" varchar
);

CREATE TABLE "auth" (
  "id" integer PRIMARY KEY,
  "token" varchar,
  "user_id" integer
);

CREATE TABLE "addresses" (
  "id" integer PRIMARY KEY,
  "city" integer,
  "county" integer,
  "country" integer,
  "address_line" varchar
);

CREATE TABLE "books" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "price" integer,
  "genre_id" integer,
  "quantity" integer
);

CREATE TABLE "authors" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "books_authors" (
  "id" integer PRIMARY KEY,
  "book_id" integer,
  "author_id" integer
);

CREATE TABLE "orders" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "total" integer,
  "creation_date" timestamp,
  "status_id" integer,
  "address_id" integer
);

CREATE TABLE "order_statuses" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "order_products" (
  "id" integer PRIMARY KEY,
  "order_id" integer,
  "book_id" integer,
  "quantity" integer
);

CREATE TABLE "favourite_books" (
  "id" integer PRIMARY KEY,
  "book_id" integer,
  "user_id" integer
);

ALTER TABLE "auth" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "books_authors" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "books_authors" ADD FOREIGN KEY ("author_id") REFERENCES "authors" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("status_id") REFERENCES "order_statuses" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "order_products" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "books" ADD FOREIGN KEY ("id") REFERENCES "order_products" ("book_id");

ALTER TABLE "favourite_books" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");

ALTER TABLE "favourite_books" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
