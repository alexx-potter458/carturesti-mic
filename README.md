# Carturesti mic website 🌍

## Description:

This is an e-commerce website for selling books and only books.
It is based on Dokcer containers:

    💡 Database: A Postgres database container;
    💡 User Managemet API: A Nest.JS API for managing the users and their orders on the website;
    💡 Stock Management API: A Laravel API for managing the books stocks and the favourite lists of books;
    💡 UI: A React.JS App delivered to the user by an NGINX server.

### How to's:

⚡Start the docker containers:

```
docker compose up -d
```

⚡ Init the database:

```
docker exec -it database bash
psql -d carturesti -U carturar -f docker-entrypoint-initdb.d/init_backup.sql
```

Shutdown the docker containers:

```
docker compose down
```

### Stats:

🗃️ Postgres credetials:

```
    db: carturesti
    user: carturar
    password: parolacarturar
    port 2000
```

🗃️ UI port:

```
3000
```

🗃️ User Managemet API port:

```
4000
```

🗃️ Stock Managemet API port:

```
8000
```
