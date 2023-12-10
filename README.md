# Carturesti mic website 🌍

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
