# **Install App**

### install git
- sudo apt install git

### clone LifeWriter app
- https://github.com/oohegor/LifeWriter.git

### install docker
- sudo apt install apt-transport-https ca-certificates curl software-properties-common
- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
- sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
- sudo apt update
- apt-cache policy docker-ce
- sudo apt install docker-ce
- sudo systemctl status docker
- sudo usermod -aG docker ${USER}
- su - ${USER}
- id -nG

### install docker-compose
- sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
- sudo chmod +x /usr/local/bin/docker-compose

### install the app through docker-compose
- docker-compose up --build -d

### create .env file from .env.example

### generate laravel app key inside laravel container
- docker exec -it life_writer bash
- php artisan key:generate

### set interpreter php from Docker and check in settings that Code Sniffer and Xdebug are working
(sometimes ide cannot see docker.sock file for connecting then: 
- sudo chmod 777 /var/run/docker.sock)

### additional commands
- docker-compose ps
- docker-compose down
- docker-compose run composer install
