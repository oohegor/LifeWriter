# start with our base image
FROM php:8.0-apache

# php extensions
RUN docker-php-ext-install \
    pdo_mysql

# install all the system dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git && \
    apt-get install -y curl && \
    apt-get install -y zip && \
    apt-get install -y unzip

# install xdebug
RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# install node, npm
RUN	curl -sL https://deb.nodesource.com/setup_15.x | bash - && \
	apt-get install -y nodejs && \
	nodejs --version && \
	npm --version

# copy source files and set workdir
COPY . /var/www/html
WORKDIR /var/www/html

# change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

# configure apache
RUN a2enmod rewrite

#change ownership of our applications
RUN chown -R www-data:www-data /var/www/html/
