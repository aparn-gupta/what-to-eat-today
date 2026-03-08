# MealMuse: Food Discovery App (React Native)

Mobile application for discovering food options based on user preferences.

The app allows users to apply filters such as taste, ingredients, origin, calories, cooking method, and preparation time to explore dishes that match their choices. Matching dishes are returned with detailed information along with the recipe.

The frontend communicates with a Django REST API backend that provides authentication and dish data.

---

## Tech Stack

- **React Native (Expo)**
- **Expo Router**
- **NativeWind**
- **REST API Integration**

---

## Features

- User authentication (login / signup)
- Filter-based food discovery
- Dynamic dish results
- Integration with backend REST APIs

---

## Architecture

React Native (Expo) App  
→ REST API Requests (authentication, dish queries, filter-based search)  
→ Django Backend API  
→ PostgreSQL Database

---

## Notes

Project currently in progress.

Backend API repository: https://github.com/aparn-gupta/foodApp_mobile.git