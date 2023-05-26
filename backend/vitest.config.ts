import { configDefaults, defineConfig, mergeConfig } from "vitest/config"

export default defineConfig({
    plugins: [],
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
