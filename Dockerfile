# Use the official Nginx image as the base
FROM nginx:alpine

# Copy your custom files to the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
