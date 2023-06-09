# todoposts
Created by Ms.Nutnaree Sookhong 

<br/>

## About's todoposts
This todoposts is a simply and basically web be managed by AdonisJS and TypeScript. The main idea is to add, view, edit, and delete todo posts including complete it with a strikethrough and design its note freely. However, this project is in my subject on field of Information Technology, INT511 Full atack Web development, and still be in the process.

<br/>

## Overview
<br/>

![home_todoposts](https://user-images.githubusercontent.com/69097689/228609654-24037c77-f531-4851-ba91-88d6fa91fcb9.jpg)
![detail_todoposts](https://user-images.githubusercontent.com/69097689/228609769-fbdcf2e8-a7df-48f1-8fc8-d4021a03f7eb.jpg)

<br/>

### Functions<hr/>
<li>Add new posts</li>
<li>Edit or complete existed posts</li>
<li>Delete posts</li>
<li>View note of each post</li>
<li>Edit or delete note of each post</li>

<br/>

### Tech Stacks & Tools<hr/>
<li>TypeScript</li>
<li>AdonisJS</li>
<li>Visual Studio Code</li>
<li>MySQL Workbench</li>

<br/>

### How to use<hr/>
#### 1. install npm after downloaded and install lucid if you never use.
``
npm install
``
<br/>
``
npm i @adonisjs/lucid
``
<br/>

If it display to choose options, please select the database driver as 'MySQL/MariaDB' and where to display instructions as 'In the browser'.

#### 2. If don't have setup about 'lucid' in your database, please run this in your terminal respectively.
``
node ace configure @adonisjs/lucid
``
<br/>
``
mysql -u root -p -h localhost
``
<br/>
``
create user lucid@localhost identified by 'lucid' ; ;
``
<br/>
``
create database lucid ;
``
<br/>
``
grant all privileges on lucid.* to lucid@localhost ;
``
<br/>

After finished that, you can see the result by those command.<br/>

``
show grants for lucid@localhost ;
``
<br/>
``
mysql -u lucid -p -h localhost
``
<br/>
``
use luclid ;
``
<br/>
``
show tables ;
``

#### 3. Run migration file to create the tables.
``
node ace migration:fresh --seed
``

#### 4. Run to check status of migration files.
``
node ace migration:status
``

#### 5. Run to view result in the web browser.
``
node ace serve --watch
``

<!-- ![..](https://media.giphy.com/media/3ClZRV9NbqRO3VxDLA/giphy.gif) -->
