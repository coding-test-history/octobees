# Gunakan base image PHP 8.3 dengan Apache
FROM php:8.3-apache

# Install dependensi untuk Laravel dan Git
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    git \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Salin semua file proyek Laravel ke dalam container
COPY . /var/www/html

# Set permission untuk Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install dependencies Laravel
WORKDIR /var/www/html
RUN composer install \
    && cp .env.example .env \
    && php artisan key:generate \
    && php artisan migrate \
    && php artisan db:seed --class=DatabaseSeeder \
    && npm install && npm run build

# Aktifkan mod_rewrite Apache untuk Laravel
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html