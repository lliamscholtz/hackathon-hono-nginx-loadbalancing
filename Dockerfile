# Use the official Bun image
FROM oven/bun:1

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 1337

# Start the application
CMD ["bun", "run", "src/index.ts"] 