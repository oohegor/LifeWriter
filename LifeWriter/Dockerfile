FROM php:8.0-apache

# php extensions
RUN docker-php-ext-install \
    pdo_mysql

# configure apache
RUN a2enmod rewrite

#install xdebug
RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini

# install node, npm
#RUN	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
#	apt-get install -y nodejs

# install src
#RUN cd /var/www/html/ && npm install
