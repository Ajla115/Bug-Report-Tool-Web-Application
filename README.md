# Bug-Report-Tool-Web-Application
This is a repository for a Bug Report Tool Web Application using MERN stack (MongoDB, Express, React, Nodejs)

Notes:
1. Client is a frontend part, and server is for backend.
2. npm init command se koristi za kreiranje package.json file gdje su sve komande, funkcije itd. 
3. kreirati jos dodatno index.js u server
4. npm install express je za instaliranje ovoga frameworka
5. Dodavati ; nakraj funkcije u Node.js
6. https://expressjs.com/en/starter/hello-world.html
7. dodali smo i ovo u package.json da mozemo import express u index.js na noviji nacin, "type" : "module", 
8. Dodali ovo u package.json da imamo default commandu "dev" : "node index.js" i runnali je kao npm run dev u server directory, da svaki sljedeci put mozemo onda umjesto node index.js npm run dev ukucati
9. Ako uradimo neku promjenu u nodeu, prvo moramo pokrenuti server sad preko npm run dev i onda cemo tek vidjeti promjene na localhostu, ALI ako dodamo nodemon onda ce to on automatski raditi i instaliramo ga preko dev dependecy npm install --save-dev nodemon
10. Sad u package dependencies prepraviti da umjesto node bude nodemon da se sad sve promjene automatski izvrsavaju da ne bismo morali svaki put ispocetka server pokretati, "dev": "nodemon index.js"
11. Prije smo imali slucaj da smo u terminal mogli kucati node index.js ali to ne bismo mogli i sa nodemon index.js jer njega nemamo globalno install na laptopu vec samo na ovome projektu i pozivamo ga onda preko keyworda iz skripte iz package.json koja onda zna sta treba raditi
12. U Postmanu se mogu sve rute testirati, i uvijek se koristi uz backend za testiranje