# MyScreen
Let others watch your screen from their own computer. Designed to work in a LAN environment.

  - Uses Node.js and Socket.io
  - Tested on Xubuntu
  - Designed to be used by Teachers/Lecturers
 

### New Features!

  - Saves IP address of server in a text file called serverip.txt
  
### Installation on XUbuntu

```sh
  sudo apt-get update
  sudo apt install curl
  curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  sudo apt-get install -y nodejs
  sudo apt-get install scrot
  sudo npm i desktop-screenshot
```


### How to Run
- Download and extract code
- Open terminal in extracted folder
- For first time only: sudo npm i desktop-screenshot
- To run server: sudo node server.js
- Use ifconfig/ipconfig to get your ip address. Link: http://ipaddress:3000
- You can also open the file serverip.txt to get your server link.






