FROM php:8.2-fpm

# Install dependencies for pdo_pgsql
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql sockets

# Install zip extension and unzip
RUN apt-get install -y libzip-dev unzip \
    && docker-php-ext-install zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /app

# Copy your application code
COPY ./stock-management-api .

# Install application dependencies with Composer
RUN composer install
