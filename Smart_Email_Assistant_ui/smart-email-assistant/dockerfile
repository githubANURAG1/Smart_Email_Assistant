# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Run Angular in dev mode
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200"]