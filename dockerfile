# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the static website files to the Nginx container
COPY ./static-web/ /usr/share/nginx/html

# Make port 80 available to the world outside this container
EXPOSE 80

# Run Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]