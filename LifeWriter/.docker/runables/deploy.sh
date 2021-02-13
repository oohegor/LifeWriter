#!/bin/bash

echo -e "\nInstalling composer dependencies...\n"
composer install --prefer-dist --no-interaction

echo -e "\nInstalling node dependencies\n"
npm install

echo -e "\nSetup permissions ... \n"
chmod -R 777 /var/www/html/node_modules/ /var/www/html/vendor/ /var/www/html/storage/

echo -e "Generating app key  ... \n"
cp /var/www/html/.env.example /var/www/html/.env
php artisan key:generate
