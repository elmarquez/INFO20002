Lecture Slides for INFO 20002 HTML and CSS Presentations
========================================================

This repository contains INFO 20002 lecture slides in HTML format. Follow the
instructions below to compile the slide presentation and then run it on your
own machine.

Dependencies
------------

Install NodeJS, then install grunt and bower packages as follows:

    npm install -g grunt bower

Install all compilation dependencies:

    npm install
    
Install all client dependencies:

    bower install
    
Compile the slide presentations:

    grunt compile
    
Start a local web server and open a browser.

    grunt serve
    
Navigate to the dist/html or dist/css folder to view the respective slides.