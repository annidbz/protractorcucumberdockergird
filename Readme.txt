The below scenarios have been auomated 

Scenario 1 Task to add a post
Scenario 2 Task to delete a post
Scenario 3 Check posts in active and complete tab
Scenario 4 Verify Get calls for API Allpost , Firstpost, postwithid1 

->All the scenario are written using BDD in cucumber. 
->ui test cases atuomated using typescript protractor library and api testcases  using axios library.
->The suit contains docker-compose.yml to enable grid execution.

Below are the steps to execute the :

->To run on local given latest browser is installed

1)Navigate to out folder of the package 
2)run commad in command prompt "protractor Configuration.js"

->To run on selenium grid giving docker and dockerhub is already insalled on local machine

1)Run docker-compose up
2)Navigate to out folder of the package 
3)Run command  "protracor Configurationgrid.js"

 
