RBMA Yellow Flyers
==================

Collection of club flyers from the influential club

How to set up
-------------
* First, make sure git is installed.

* Make sure you have node.js installed locally on your machine. Download [can be found here](http://nodejs.org/download/)

* Verify that node is up and running by typing `node -v` from the command line. Also make sure node is in your **/usr/local/bin** by typing `echo $PATH` in the command line.

* Once node is installed, make sure you also have [bower](http://bower.io/) installed. Can you installed globally by simply running `npm install -g bower` from your terminal.

* Next, create a folder on your local machine in the terminal (`mkdir`) and `cd` into it.

* Clone this repo into the folder by pasting the clone link.

* Run `npm install` and `bower install` to get all the package dependencies.

* Once all this is done, the site can be launched using `grunt serve` and viewed at `localhost:9000'

* Pull any recent changes down

* After any updates, the site can be built using `grunt build`, pushed to S3 using `grunt s3` and deployed to microsite environment using `grunt ftp-deploy`

* Please create a branch if making any major modifications



