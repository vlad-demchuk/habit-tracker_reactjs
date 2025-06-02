# ⚡ Vite + React + TypeScript Starter Template (Feature-Based Architecture)

A scalable, high-performance React starter template powered by **Vite**, **TypeScript**, and a clean **feature-based architecture**. Designed for rapid development with maintainability and best practices in mind.

## 🔧 Features

- ⚡ **Vite v6** – Lightning fast build tool with hot module replacement
- 🔄 **React v19** – Latest version of the popular UI library
- 📦 **TypeScript v5.8** – Static typing and enhanced developer experience
- 🧱 **Feature-based architecture** – Scalable folder structure
- 🎨 **Tailwind CSS v4** – Utility-first styling framework
- 🔍 **ESLint v9** – Advanced linting with zero-warnings policy
- 💅 **Prettier v3.5** – Code formatting enforced via pre-commit
- 🧹 **Husky + lint-staged** – Pre-commit hooks for code quality enforcement
- 🔒 **pnpm enforced** – Efficient package management
- ✅ **Production-ready configuration** – Set up for optimal performance

## 🗂️ Folder Structure

Well described structure you can find here: [`structure-guide.md`](structure-guide.md)

## 🚀 Getting Started

### 1. Use This Template

This is a GitHub repository template. You can use it as a starting point for your own projects:

1. Click the green "Use this template" button at the top of the repository page
2. Select "Create a new repository"
3. Fill in your repository details and create the new repository
4. Clone your new repository to your local machine

```bash
git clone https://github.com/your-username/your-new-repo-name.git
cd your-new-repo-name
```

### 2. Prerequisites

- **Node.js v22+** - This template requires Node.js version 22 or higher
- **pnpm** - This template uses pnpm as the package manager

```bash
# Check your Node.js version
node -v

# Install or update Node.js if needed
# Visit https://nodejs.org/ or use a version manager like nvm

# Install pnpm if you don't have it already
npm install -g pnpm
```

### 3. Install Dependencies

This template requires [pnpm](https://pnpm.io/) as the package manager. The project is configured to only allow pnpm.

```bash
pnpm install
```

### 4. Start Development Server

```bash
pnpm dev
```

Your app will be available at `http://localhost:5173` by default.

### 5. Build for Production

```bash
pnpm build
```

## 🔧 Available Scripts

- `pnpm dev` - Start the development server with Vite
- `pnpm build` - Run TypeScript build and create production build with Vite
- `pnpm preview` - Preview the production build locally
- `pnpm prettier:check` - Check code formatting with Prettier
- `pnpm prettier:fix` - Fix code formatting with Prettier
- `pnpm lint:check` - Check for linting errors with ESLint (with zero warnings allowed)
- `pnpm lint:fix` - Fix linting errors automatically with ESLint
- `pnpm check-style` - Run both linting and formatting checks
- `pnpm fix-style` - Fix both linting and formatting issues

## 👥 How to Contribute

Contributions are welcome and appreciated! Here's how you can contribute:

### 1. Fork the Repository

1. Click the "Fork" button at the top right of this repository
2. Clone your forked repository to your local machine

```bash
git clone https://github.com/your-username/react-starter-template.git
cd react-starter-template
```

### 2. Create a Branch

Create a new branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-you-are-fixing
```

### 3. Make Your Changes

1. Implement your changes
2. Make sure to follow the code style guidelines
3. Write tests for your changes if applicable
4. Run the linter and tests to ensure everything passes:

```bash
pnpm check-style
```

### 4. Commit and Push

```bash
git add .
git commit -m "Brief description of your changes"
git push origin your-branch-name
```

### 5. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "Pull Request" and then "New Pull Request"
3. Select your fork and branch from the dropdown
4. Fill in the PR template with details about your changes
5. Submit the pull request

### Contribution Guidelines

- Follow the existing code style and project structure
- Update documentation for any new features
- Add tests for new features or bug fixes
- Keep pull requests focused on a single topic
- Be respectful and constructive in discussions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vite team for the amazing build tool
- React team for the incredible library
- Community members who have contributed to this template
