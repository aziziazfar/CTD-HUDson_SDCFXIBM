# HUDson

## Team C T D

C T D aspires to connect the dots and move mountains :sparkles: :sparkles: :sparkles:

* Sajjad Ali Qadri
* Muhammad Hazzry Bin Shafaruan
* Azizi Azfar Bin Zahari

## Problems Identified
1. Often times when someone realises that he is experiencing heat stroke, it is already too late.
2. Necessary on-the-ground information for the ROTA Commander to make informed decisions
3. Lag-time between accessing injuries and treating injuries

## About HUDson
Our idea aims at tackling these issues by taking advantage of the availability of IOT sensors and IBM's Cloud Services.

The HUDson is an enhancement to the current bunker gear by integrating a wearable system within it. Sensors that measure the user's vitals such as Temperature (both Ambient and User), Heart Rate, SP02 allows for the commanders to keep track of the user's condition during training and operations. 

It also consists of a HUD (Heads Up Display) to provide real-time feeds from these sensors to the user. The system is also connected to the cellular network to provide direct communications between the responders.

## Project Architecture

## Detailed Solution
The details to our proposed solution can be found [here](https://docs.google.com/presentation/d/118ZEW3oC22b5wW0z8rRuRln_HrM24JXRShlhw-pjIVY/edit?usp=sharing).

## Proposed Timeline
![Proposed Timleine](./images/ProposedTimeline.png)

## Getting Started

Follow the instructions below to setup the project on your local machine:

### Node-Red
----------------------------

### Cloud Annotations
----------------------------

#### Setup
`git clone` the repo and `cd` into it by running the following command:

```bash
git clone https://github.com/cloud-annotations/classification-react.git
cd classification-react
```

#### `npm install`

> Note: You’ll need to have Node 8.10.0 or later on your local development machine. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

#### Add TensorFlow.js Model to the App
Copy the `model_web` directory generated from the classification walkthrough and paste it into the `public` folder of this repo.

#### Run the App
#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### IBM Speech-To-Text
----------------------------
#### Setting Up IBM Cloud
1. Sign up for an IBM Cloud account.
2. Download the IBM Cloud CLI.
3. Create an instance of the Speech to Text service and get your credentials:
    * Go to the Speech to Text page in the IBM Cloud Catalog.
    * Log in to your IBM Cloud account.
    * Click **Create**.
    * Click **Show** to view the service credentials.
    * Copy the `apikey` value.
    * Copy the `url` value.
  
#### Setting Up on Local Machine
1. In the application folder, create a file called .env

`touch .env`

2. Open the .env file and add the service credentials that you obtained during the setting up of IBM Cloud.

```
SPEECH_TO_TEXT_IAM_APIKEY={ apikey } 
SPEECH_TO_TEXT_URL={ url }
```

**Example** .env file that configures the apikey and url for a Speech to Text service instance hosted in the US East region:

```
SPEECH_TO_TEXT_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
SPEECH_TO_TEXT_URL=https://gateway-wdc.watsonplatform.net/speech-to-text/api
```
#### Running on Local Machine
1. Install the necessary dpendencies
`npm install`

2. Run application
`npm start`

3. View the application in a browser at `localhost:3000`

## Libraries and Services Used
----------------------------
* IBM Cloud Annotations for Object Classification
* IBM Speech-To-Text
* IBM Watson Assistant
* IBM Cloud for Node-Red Deployment 
* Node-Red
* ReactJS

_____________________
**Powered by IBM**