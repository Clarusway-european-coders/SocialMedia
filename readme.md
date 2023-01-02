# Project Information:

- [Jira](https://kml-4291.atlassian.net/projects/T0?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:jira-slack-integration__project-config-page)
- [Github](https://github.com/Clarusway-european-coders/SocialMedia)
- [Figma](https://www.figma.com/file/kyZoAV3MXO3m459of45iEl/Social-Media-Platform?t=BkYMTzj1VvFvamll-0)

## Setup

Prefered build tool is vite. You can find more about the documentation about the VITE with this [Link](https://vitejs.dev/guide/).

To deploy the program, run the following commands

- npm install
- npm run dev

## Used Libraries

- React-router
- MUI
- Styled-Components
- axios
- Formik and Yup

## Agile Methodology

In this project, we will be using Kanban method.

## Database and User Authentication

All the related features will be handled via Firebase.

## Functionalities

- User follow
- Like and share tweets
- Sharing img, text and maybe video format tweets
- Editing old tweets

## Possible Future Features

- Adding a component which tracks the user location and shows the weather information
- DM'ing users
- Discover section

## Ongoing Issues

- When a user tweets something on profile page it doesn't automatically display the new tweet.
- On profile page clicking on profile sends to a non existing page.
- Tweets are not displayed according to their published date. [done]
- Users can like tweets more than once. [done]
- Other tweet users profile name is not visible nor othes can visit it. [done]
- Megaphone disables the home button on the main page.
- The liked state of the tweet is not consistent with the state of the db.[done]
  - DB works as intended but it doesn't catch the first state of the tweet.[done]

## Missing features

- Users can't like tweets [done]
- Users can't retweets tweets [done]
- User follow isn't a thing yet.
