# 🎯 Habit Tracker App (in progress, general structure is ready)

A modern, user-friendly habit tracking application built with React and TypeScript. Track your daily habits, build streaks, and achieve your personal goals with an intuitive interface.

## ✨ Features

- 📝 Create and manage personalized habits
- 🔥 Track daily streaks for motivation
- 📊 Visual progress indicators
- 🎨 Clean and intuitive user interface
- 📱 Responsive design for all devices
- ⚡ Lightning-fast performance with Vite

## 🚀 Tech Stack

- **Frontend:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 4
- **State Management:** React Hooks
- **Code Quality:** ESLint, Prettier
- **Package Manager:** pnpm

## 🛠️ Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd habit-tracker_reactjs
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build
- `pnpm lint:check` - Check for linting errors
- `pnpm lint:fix` - Fix linting errors
- `pnpm prettier:check` - Check code formatting
- `pnpm prettier:fix` - Fix code formatting
- `pnpm check-style` - Run all code quality checks
- `pnpm fix-style` - Fix all code style issues

## 📁 Project Structure (Go to [structure-guide](./structure-guide.md))

```
src/
├── components/         # Reusable UI components
├── features/
│   ├── habits/        # Habit tracking feature
│   └── streak/        # Streak tracking feature
├── layouts/           # Page layouts
├── pages/            # Route pages
├── routes/           # Routing configuration
├── styles/           # Global styles
└── utils/            # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
