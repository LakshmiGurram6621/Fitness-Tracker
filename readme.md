Fitness Tracker Application

Features:
1.User can register with our App
2.Can Create Exercises with or with out account
3.Can see existing Exercises with or with out account
4.Existing users can see past or present exercises
4.Can share with friends(Present update,it will share the JSON object to your friend)

For running instructions:
for cloning project to your local workspace:git clone https://github.com/LakshmiGurram6621/Fitness-Tracker.git

If npm is already installed in your machine(For checking node -v), for running the project below are the commands
For client running ---> cd client then npm run serve
For Server running---->cd server then npm run dev

if npm is not installed then
install node to your machine(https://nodejs.org/en/download/) 

then cross check in terminal or command prompt using node -v
then 

For client running --->cd client then npm run serve(if npm is not recongnizing then install modules with npm install then npm run serve)
For Server running ---->cd server then npm run dev

Implementation Details:

Front-end :
HTML(For layout),CSS(styling purpose),JavaScript(How to act),Bulma(will override default css style and apply Bulma styles),Vue JS(Will follow VMMV structure,for default structure have used Vue cli)

vuex-->Used Vuex for sharing details from one module to another module(central repository and we can use when there is no child and parent relationship between the components) 


Fetch--->to make a request from client to server have used Fetch request which is a promise

Back-end:
Node Js,Express(For web server Creation)
Nodemailer---->For sharing the exercise to friends have used default Nodemailer





