# Digital Onboarding Application

## Overview
This project involves creating a digital onboarding application using **Angular 19**. The application displays a series of phrases with associated images and background colors. Users can navigate through the phrases using "Next" and "Back" buttons. Additional features include navigation indicators (dots), responsiveness, and animations between steps.

---

## Project Objectives
- Understand and pracice SASS and Bootstrap 5
- Learn Angular fundamentals
- Animations between pages

---

### Core Functionality

#### Basic Component Structure
1. **Components**:
   - `Home`: Parent component.
   - `Escena`: Child component of `Home`.

3. **Component nesting**:
   - Loaded `Home` inside the `App` component.
   - Loaded `Escena` inside the `Home` component.

5. Created an interface `iStep` with the following properties:
   - `title`
   - `description`
   - `img`
   - `bgcolor`
   - `id`

6. Service `steps` provides the text on the cards.

---

#### Responsive Design
- Style the `Escena` component to be responsive across multiple screen sizes.

---

#### Navigation Functionality
1. Implement **next** and **back** buttons in the `Escena` component.
2. `currentStep` variable to track the active phrase.
3. Navigation indicators for each phrase.
4. Users can click on any navigation dot to jump directly to the corresponding phrase.

### Animations

#### Transition Animations
1. Animations between steps.

## Technologies Used
- **Angular 19**: Framework for building the application.
- **HTML & CSS**: For layout and styling.
- **TypeScript**: For defining interfaces and application logic.

---

## Getting Started

1. Clone the repository:
   ```bash
   https://github.dev/oscarrep/S5-OnboardingApp-Angular
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Start development server:
   ```
   ng serve -o
   ```
   App will open at:
   ```
   http://localhost:4200
   ```
