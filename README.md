# API Automation with Playwright

This repository contains a collection of API test automation scripts using Playwright in JavaScript. It is designed to facilitate automated testing and reporting for REST APIs, integrating seamlessly with CI/CD pipelines on GitHub.

## Features

- **Playwright for JavaScript**: Utilizes Playwright to automate API testing, simulating various API requests and responses.
- **Allure Reporting**: Incorporates Allure to generate comprehensive and interactive test reports.
- **CI/CD Integration**: Configured to integrate with GitHub Actions, enabling continuous integration and deployment.
- **Extensible Framework**: Structured to easily add more APIs and extend test capabilities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (Node Package Manager)
- Any text editor (e.g., VSCode)

### Installing

A step-by-step guide to setting up a development environment:


1. **Clone the repository:**
   ```bash
   git clone https://github.com/salekin-newaz/apiAutomation_With_Playwright.git
   ```
2. **Navigate to the repository folder:**
   ```bash
   cd apiAutomation_With_Playwright
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the tests

To run the tests and generate an Allure report, execute the following commands:

```bash
npm run test
npm run report
```

This will execute the defined tests and generate a report under the `allure-report` folder.

## CI/CD Integration

This project is configured to use GitHub Actions for continuous integration. Upon each push or pull request, the tests are executed, and results are updated in the repository. Review the `.github/workflows` directory for workflow configurations.
