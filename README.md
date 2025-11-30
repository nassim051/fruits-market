# Fruits Market - Version minimale

Application e-commerce avec API REST et base de données MariaDB.

Cette version de l'application contient :

- Configuration __Docker Compose__ (API REST + Base de données MariaDB + Adminer) :
  - Configuration des dépendances entre services Docker entre (via depends_on et healthcheck),
  - Variables d'environnement :
    - api/.env
    - db/.env
- __API REST__ : application TypeScript (Hono)
  - Connexion à la base de données via __TypeORM__ (api/database/data-source.ts),
  - Configuration de l'entité __Product__ avec __TypeORM__(api/entities/Product.ts),
  - Configuration du routeur __products__ (routes préfixées par "/products"),
  - Handler __GetAllProducts__ (api/src/handlers/products/GetAllProducts.ts) associé à la route __HTTP GET /products__,
  - Mise en place de middlewares hono/cors, hono/secure-headers, hono/pretty-json, hono/trailing-slash ((api/src/app.ts))
  - Gestion centralisée des __erreurs 404__ avec __app.notFound__ (api/src/app.ts),
  - Gestion centralisée des __erreurs__ avec __app.onError__ (api/src/app.ts).
- Requêtes HTTP de test de l'API avec __Bruno__.

## Travail à réaliser

- Implémenter les __entitées__ manquantes :
  - Cart
  - CartItem
  - Country
  - Order
  - OrderItem
  - Product
  - User
- Implémenter les __handlers__ manquants :
  - auth
  - carts
  - countries
  - orders
  - products
- Implémenter le __middleware auth__ pour vérifier l'authentification

- Gérer les routes manquantes :
  - /products
  - /countries
  - /auth
  - /carts
  - /orders

## Architecture

- __API__ : Bun + TypeORM + Hono (port 3000)
- __Base de données__ : MariaDB
- __Adminer__ : Adminer (port 8080)

## Commandes Docker Compose

### Démarrer le projet

```bash
# Démarrer tous les services en arrière-plan
docker compose up -d

# Démarrer et voir les logs en temps réel
docker compose up

# Démarrer un service spécifique
docker compose up -d api
```

### Arrêter le projet

Se placer dans le terminal et saisir le raccourci clavier CTRL + C (identique Windows ou Mac).

```bash
# Arrêter tous les services

docker compose down

# Arrêter et supprimer les volumes (supprime les données)
docker compose down -v
```

### Reconstruire les images

```bash
# Reconstruire les images sans cache
docker compose build --no-cache

# Reconstruire et redémarrer
docker compose up -d --build
```

### Voir les logs

```bash
# Logs de tous les services
docker compose logs

# Logs en temps réel
docker compose logs -f

# Logs d'un service spécifique
docker compose logs -f api
```

### Gérer les services

```bash
# Redémarrer un service
docker compose restart api

# Stopper un service
docker compose stop api

# Démarrer un service stoppé
docker compose start api

# Voir l'état des services
docker compose ps
```

### Accéder aux conteneurs

```bash
# Ouvrir un shell dans le conteneur de l'API
docker compose exec api sh

# Ouvrir un shell dans la base de données
docker compose exec db bash

# Exécuter une commande dans un conteneur
docker compose exec api bun run test
```

### Nettoyage

```bash
# Supprimer les conteneurs arrêtés, réseaux et images non utilisées
docker compose down --rmi all

# Nettoyer le système Docker complet (affecte tous les projets)
docker system prune -a --volumes
```

## Accès aux services

- __API__ : <http://localhost:3000>
- __Adminer__ : <http://localhost:8080>
- __Health check__ : <http://localhost:3000/health>

![Fruits market](./assets/fruits-market.png)

--

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

__Alexandre Leroux__
_Enseignant / Formateur_
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
