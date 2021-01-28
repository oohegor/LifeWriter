FROM php:8.0-apache

# php extensions
RUN docker-php-ext-install \
    pdo_mysql

# configure apache
RUN a2enmod rewrite

# install node, npm
#RUN	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
#	apt-get install -y nodejs

# install src
#RUN cd /var/www/html/ && npm install
