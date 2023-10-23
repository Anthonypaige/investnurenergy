# Use Node.js v18 Alpine as the base image
FROM node:18-alpine

# Create app directory
RUN mkdir -p /app

# Set environment variables
ENV NODE_ENV=production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=true

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install sharp with verbose logging
RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build
