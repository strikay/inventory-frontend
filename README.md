# Inventory Client App (React)

Inventory Client App is a React Application for managing inventory. It connects to a custom [Laravel Inventory API](https://github.com/strikay/inventory-backend) via designated API endpoints which follow the CRUD style of all REST APIs. It provides an aesthetically appealing way for end users to add, remove and update information about their inventory. 

It was bootstrapped using Vite

## Screenshots
| ![Screenshot 2024-04-11 072840](https://github.com/strikay/inventory-frontend/assets/41167411/b048b8af-6a8e-460f-93c6-e3445e7ad648) | ![Screenshot 2024-04-11 072953](https://github.com/strikay/inventory-frontend/assets/41167411/1ad75274-4628-4f2c-b73d-f9679b9ea4ed) |
| ![Screenshot 2024-04-11 073236](https://github.com/strikay/inventory-frontend/assets/41167411/1c9fc187-18b0-4d5d-9b26-ec2b3d4aba83) | ![Screenshot 2024-04-11 073336](https://github.com/strikay/inventory-frontend/assets/41167411/ba1d47e6-7b73-4bd0-a81d-3a6f8732ef88) |

## Installation

Download and configure latest version of NodeJS to work on the project

Fork and clone this project by running the git clone command
```bash
git clone REPOSITORY_URL
```
Navigate to the project directory
```bash
cd inventory-frontend
```

Use the package manager [npm](https://nodejs.org/en/download)(which come with NodeJS) to install all the Javascript packages in the project. Then run

```bash
npm install
```

## Usage

Be mindful to create the .env file at the root of the project and add the following constant, which points to the url of your API server:
```bash
VITE_API_SERVER_URL:<API_SERVER_URL>
```

To start the Vite development server run
```bash
npm run dev
```
The project should start and display the HOST and the PORT it is running on, e.g. http://localhost:5173

To login you can use the following fictitious credentials (provided you are using it with the Laravel API referenced above):

Email: po@inventory.com
Password: password


## License

[MIT](https://choosealicense.com/licenses/mit/)
