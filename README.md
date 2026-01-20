# 🏡 Casa Lía Bosque

Landing page oficial de **Casa Lía**, un alojamiento turístico ubicado en el Bosque Peralta Ramos, Mar del Plata.
El sitio permite presentar el alojamiento, mostrar fotos, destacar beneficios y recibir **consultas de disponibilidad mediante un formulario de contacto** conectado a email.

---

## 🌐 Sitio en producción

👉 [https://casaliabosque.com](https://casaliabosque.com)

---

## ✨ Funcionalidades

- Landing page moderna y responsive
- Sección de presentación del alojamiento
- Galería de imágenes
- Información de ubicación y beneficios
- Formulario de contacto funcional
- Envío de emails mediante dominio propio
- Deploy automático en Vercel

---

## 🛠️ Stack tecnológico

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **UI:** React + Tailwind CSS
- **Email:** Resend
- **Hosting:** Vercel
- **Control de versiones:** Git + GitHub
- **Package manager:** pnpm

---

## 📩 Formulario de contacto

El formulario envía los mensajes a un email configurado por variables de entorno.

### Flujo:

1. Usuario completa el formulario
2. API Route (`/api/contact`) procesa la solicitud
3. Se envía un email usando Resend
4. El mensaje llega al correo configurado
5. Al responder, el reply va directo al usuario

---

## 🔐 Variables de entorno

Estas variables **NO deben subirse al repositorio**.

### Local (`.env.local`)

```env
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL=lacasadelia1@gmail.com
```

### Producción (Vercel)

Configurar las mismas variables en:

`Vercel → Project → Settings → Environment Variables`

---

## 🚀 Desarrollo local

### Instalar dependencias

```bash
pnpm install
```

### Levantar entorno de desarrollo

```bash
pnpm dev
```

Abrir:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🧱 Build de producción

Antes de subir cambios importantes:

```bash
pnpm build
```

Esto replica el proceso que ejecuta Vercel en producción.

---

## 🌿 Flujo de trabajo con Git

### 1. Crear un branch desde `main`

```bash
git checkout main
git pull origin main
git checkout -b fix/nombre-del-cambio
```

### 2. Trabajar y commitear cambios

```bash
git add .
git commit -m "Descripción clara del cambio"
```

### 3. Subir branch a GitHub

```bash
git push origin fix/nombre-del-cambio
```

### 4. Pull Request → Merge a `main`

- Crear Pull Request en GitHub
- Revisar cambios
- Merge a `main`

### 5. Deploy automático

Al mergear a `main`, Vercel ejecuta automáticamente el deploy.

---

## 🧹 Buenas prácticas

- No trabajar directamente sobre `main`
- Usar branches para cada cambio
- No subir archivos `.env`
- Commits pequeños y descriptivos
- Probar el formulario luego de cada deploy

---

## 📌 Próximas mejoras posibles

- Email automático de confirmación al huésped
- Protección anti-spam (honeypot / rate limit)
- Guardado de consultas (Sheets / Notion / DB)
- Mejoras visuales del email
- Panel administrativo

---

## 👤 Autor

Proyecto desarrollado por **Felipe Pelletier**.

---

✨ Proyecto listo para producción, mantenible y escalable.
