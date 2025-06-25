/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        destructive: "hsl(var(--destructive))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        'card-foreground': "hsl(var(--card-foreground))",
        'popover-foreground': "hsl(var(--popover-foreground))",
        'primary-foreground': "hsl(var(--primary-foreground))",
        'secondary-foreground': "hsl(var(--secondary-foreground))",
        'muted-foreground': "hsl(var(--muted-foreground))",
        'accent-foreground': "hsl(var(--accent-foreground))",
        'destructive-foreground': "hsl(var(--destructive-foreground))",
        'sidebar-background': "hsl(var(--sidebar-background))",
        'sidebar-foreground': "hsl(var(--sidebar-foreground))",
        // Puedes agregar más colores personalizados aquí
      },
    },
  },
  plugins: [],
};
