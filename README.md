////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"# Containerised-Microservices-Data-Collection-and-Analytics-System" 

A containerised microservices data collection and analytics system , with a docker file for each image (service) , and docker compose file to run the system .

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

The project is basically a system that get ages from authorized users , using EnterDataWebApp , and shows the average of ages using ShowResultWebApp .

The figure below demonstrates the structure of the whole system :

![](https://github.com/IssamAbdoh/Containerised-Microservices-Data-Collection-and-Analytics-System/blob/main/Pictures/images%20with%20arrows.png)

To better understand what the project exactly , you can refer to the video uploaded on YouTube , the link is in "Link.txt" file .
Or read the attached report "Containerisation Report.pdf" .

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

To run the project , run the following commands :

cd Project

docker compose build

docker compose up

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

To access EnterDataWebApp , open :  

http://localhost:3000/

[localhost](http://localhost:3000/)

Main page :

![](https://github.com/IssamAbdoh/Containerised-Microservices-Data-Collection-and-Analytics-System/blob/main/Pictures/screencapture-localhost-3000-2022-07-25-20_21_59.png)

After logging in using :

Email : ea@ea.com

Password : 123

This page will appear , so the authorised user can enter his age :

![](https://github.com/IssamAbdoh/Containerised-Microservices-Data-Collection-and-Analytics-System/blob/main/Pictures/screencapture-localhost-3000-EnterData-2022-07-25-20_22_30.png)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

To access ShowResultsWebApp , open :  

http://localhost:3002/

[localhost](http://localhost:3002/)

This page will appear :

![](https://github.com/IssamAbdoh/Containerised-Microservices-Data-Collection-and-Analytics-System/blob/main/Pictures/screencapture-localhost-3002-2022-07-25-20_22_41.png)

To log in , use the following credentials :

Email : ea@ea.com

Password : 123

The average of the entered ages will be displayed :

![](https://github.com/IssamAbdoh/Containerised-Microservices-Data-Collection-and-Analytics-System/blob/main/Pictures/screencapture-localhost-3002-ShowResults-2022-07-25-20_22_54.png)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

To access mongo-express , open :  

http://localhost:8081/

[localhost](http://localhost:8081/)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
