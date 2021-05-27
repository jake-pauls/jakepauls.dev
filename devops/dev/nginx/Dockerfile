FROM nginx

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom app nginx config
COPY nginx.conf /etc/nginx/conf.d/
