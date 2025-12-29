# ⚽ Football Simulator Client

The frontend application for the Football Simulator, providing an interactive interface to manage simulations, track standings, and view match fixtures.

## 🚀 Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **HTTP Client:** [Axios](https://axios-http.com/)

## 📋 Requirements

- **Node.js:** `^20.19.0` or `>=22.12.0`
- **npm:** Recommended version (usually bundled with Node.js)

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd football-simulator-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```

## 🏃 Running the Application

### Development
Start the development server with hot-module replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production
Build the application for production:
```bash
npm run build
```
This command runs type-checking and then builds the project into the `dist/` directory.

### Preview Production Build
Locally preview the production build:
```bash
npm run preview
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles and minifies the project for production, including type-checking.
- `npm run build-only`: Builds the project without running type-check.
- `npm run type-check`: Runs `vue-tsc` to perform static type checking.

## 🔑 Environment Variables

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `VITE_API_URL` | The base URL of the backend API. | `http://localhost:8080/api` |

## 🧪 Testing

- No automated tests are currently implemented.
- **TODO:** Implement unit tests using [Vitest](https://vitest.dev/).
- **TODO:** Implement E2E tests using [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).

## 📂 Project Structure

```text
src/
├── api/             # API services, models, and DTOs
│   ├── dto/         # Data Transfer Objects
│   ├── models/      # Client-side data models
│   └── services/    # Axios service classes
├── assets/          # Static assets (CSS, SVG)
├── components/      # Reusable UI components
├── layouts/         # Page layouts (e.g., MainLayout)
├── pages/           # Main view components (routes)
├── router/          # Vue Router configuration
├── stores/          # Pinia state management
├── App.vue          # Root component
└── main.ts          # Application entry point
```

## 💡 Development Tips

- **IDE:** Recommended to use [VS Code](https://code.visualstudio.com/) with the [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension or [WebStorm](https://www.jetbrains.com/webstorm/).
- **Debugging:** Install the [Vue DevTools](https://devtools.vuejs.org/) browser extension for easier debugging of components and Pinia stores.

## 📄 License

- **TODO:** Add license information (e.g., MIT, Apache 2.0).

---
*Built with ❤️ for the love of football and clean code.*
