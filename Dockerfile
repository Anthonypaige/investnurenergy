# Use an official Node.js runtime as the base image
FROM node:18.18.2

# Set environment variables (if any)
ENV NODE_ENV=production

# Install necessary build tools
RUN apt-get update && apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install sharp separately
RUN npm install --ignore-scripts=false --verbose sharp

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build
