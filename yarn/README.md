#### Установка Yarn на Windows.  
* ######   [`Скачать Yarn`](https://yarnpkg.com/latest.msi)    
* ######   [`Скачать Node.js`](https://nodejs.org/en/)
###### yarn --version
#### Установка Debian/Ubuntu Linux
###### curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
###### echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
На Ubuntu 16.04 или ниже и Debian Stable, нужно настроить NodeSource репозиторий, чтобы получить достаточно новую версию Node.js.
Потом использовать команду:
###### sudo apt-get update && sudo apt-get install yarn
