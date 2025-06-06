# 🎛️ Neighbourly – CMS Backend (Strapi)

This is the content management backend for **Neighbourly**, a real estate SaaS platform. Built using **Strapi**, this CMS provides an admin interface for managing all the static content of the appllication. It serves content via REST APIs and is integrated with the frontend services.

---

## 🧱 Tech Stack

- [Strapi](https://strapi.io/)
- [PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html)

---

## ⚙️ Getting Started

### 🔨 Installation

```bash
git clone https://github.com/nikitapoyarekar05/nexus-strapi.git
cd nexus-strapi
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root:

```env
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_salt
ADMIN_JWT_SECRET=admin_jwt
JWT_SECRET=jwt_secret
DATABASE_CLIENT=postgres
DATABASE_NAME=strapi
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=yourpassword
```

---

## 📦 Running the CMS

```bash
# Start development server
npm run develop

# Build for production
npm run build
npm start
```

Admin Panel: [http://localhost:1337/admin](http://localhost:1337/admin)

---

## 🧪 Testing & Deployment

- Tested locally using PostgreSQL and hosted on Strapi cloud
- For deployment:
  - Use Render, Railway, or Docker
  - Configure all `.env` variables
  - Consider using cloud storage (e.g., AWS S3) for production media

---

## 🙋‍♀️ Maintainer

Built with ❤️ by [@nikitapoyarekar05](https://github.com/nikitapoyarekar05)