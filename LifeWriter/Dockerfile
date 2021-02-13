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
    apt-get install -y unzip && \
    apt-get install -y iproute2

# install xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_host=$(/sbin/ip route|awk '/default/ { print $3 }')" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_port=9000" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# install node, npm
RUN	curl -sL https://deb.nodesource.com/setup_15.x | bash - && \
	apt-get install -y nodejs && \
	nodejs --version && \
	npm --version

# change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

# configure apache
RUN a2enmod rewrite

# install the runables
COPY ./.docker/runables/deploy.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/deploy.sh

#change ownership of our applications
RUN chown -R www-data:www-data /var/www/html/
