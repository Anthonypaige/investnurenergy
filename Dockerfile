# Use Node.js v18 as the base image
FROM node:18

# Set environment variables
ENV NODE_ENV=production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=true

# Install necessary build tools (if needed)
RUN apt-get update && apt-get install -y build-essential

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install sharp with verbose logging
RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# Install sharp for linux-x64
RUN npm install --platform=linux --arch=x64 sharp

# Install project dependencies
RUN npm install

# Rebuild native modules
RUN npm rebuild

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build
