# Use an official Node.js runtime as the base image
FROM node:18.18.2

# Set environment variables (if any)
ENV NODE_ENV=production



# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Run your build commands
RUN npm run build
