import { configDefaults, defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"
import react from "@vitejs/plugin-react"

export default mergeConfig(
    viteConfig,
    defineConfig({
        plugins: [react()],
        test: {
            globals: true,
            environment: "jsdom",
            include: ["./src/**/*.{test,spec}.{ts,tsx}"],
            exclude: [
                ...configDefaults.exclude,
                "**/node_modules/**",
                "**/dist/**",
                "**/cypress/**",
                "**/.{idea,git,cache,output,temp}/**",
                "./src/config/**",
            ],
        },
    })
)
// setupFiles: ["src/tests/setupTest.ts"],
