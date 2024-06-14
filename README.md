# Repository for personal coding projects I have created. Author: Michelangelo Zampieri 

## This repository Includes the following projects: 

---------------------------------------------------------------------------------------------------------

### Anniversary_Gift: 

- I downloaded all of my girlfriend's and I texts on iMessage over the two years we have been together, and analyzed some statistics about them, I presented her the findings in a poster I created using Canva.

- For this project I started by using a third party software to download the texts in a csv file. I then created a java class to read the csv file and a main class to hold the main functions to determine certain patterns in the texts. MainClass hols the different functions to analyze the different parts of the texts, including: most used word, phrase, emojis, the most texts in a day, who sends the most texts, and other metrics. DateTest.java was used to test the date import as I had never used it before. 

- This project helped me get a strong foundation for file reading and information extraction. If I could do it again I would work more on the paster itself as it would be a great way to practice more html and css. 

---------------------------------------------------------------------------------------------------------

### Budget 

### Work in progress 

- In this project I aimed to get a sense of my own spending habits to try and see if maybe there were ways I could save money. I began by downloading my credit card transactions from their respective banks into csv files. 

- I started this project by combining all the transactions for each credit card into a large file for each type of card. I did this by copying and pasting but I realize now that I could have used pandas method concat to make it easier. I then combined all of the different csv files into a combined transaction file; I did this through the combine.py file. I then started to filter the information that I wanted to keep, I did this with the filter.py method which has different functions for the different card types, as they hold different information. Again I think this could be done more easily with pandas methods but I am unfamiliar with the exact methods. 

- I decided to try a new approach for this project. I started over in a jupyter notebook, and tackle the problem with a machine learning lens. I decided to start over and begin a simple model traiing with the data. I began by loading all the transactions into respective data frames and then began cleaning the data. The next step is to finish combining all the information into a unified dataframe, and then create and train the data to extract ay information. 

---------------------------------------------------------------------------------------------------------

### Dialysis_Tracker_App

### Work in Progress/ Have not started 

- I just recently got this idea for an app that helps dialysis patients (including myself) keep track of important factors of their health. Some of the ideas for functions of the app include: 

1. Food Scanner: This would be similar to scanners used in dieting apps, such as weight watchers, but the difference would be that the app gives you information about the food's phosphorus and potassium contents, as those are the primary things dialsysis patients should avoid. 

2. Dialysis Center Finder: A quick map that would find centers that are available and in network for users when planning to travel. Finding a center is critical as travel is not possible otheriwse. 

3. Liquid Intake Tracker: Users would insert their target weight as instructed by physician, and their daily liquid limit. The app helps track how much liquids have been consumed in the day and how much they have alloted for the day. I was also thinking of adding "weight check ins" in which the user could enter their current weight and the app would tell them how much liquids they can expect to take off during their next session. 

4. Calander: A simple calander to track when their dialysis appointments are to better meange treatments, can also send reminders beforehand. 

---------------------------------------------------------------------------------------------------------

### More projects to be added!