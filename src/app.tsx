import { ThemeProvider } from "./app/contexts/theme-provider";


export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center">
        <h1>Default Project</h1>
      </div>
    </ThemeProvider>
  )
};
