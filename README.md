# Astrology Planetary Data: 16th to 21st Century

## Overview

This repository provides a comprehensive collection of Vedic astrological planetary data, spanning from the 16th to the 21st century.  The data encompasses a wide range of planetary combinations, making it a valuable resource for data science applications, particularly in the analysis and prediction of astrological phenomena.  It's designed to facilitate research, analysis, and the development of predictive models.

This repository contains high-quality historical data covering several centuries. The datasets can be used in data science projects focused on:

* Statistical astrology research
* Development of predictive models for natural calamities
* Educational and academic exploration of Vedic astrology

## Repository Structure

The repository is organized into several key folders and files:

| Folder/File | Description |
| --- | --- |
| `/data` | Contains raw datasets (CSV, JSON, or similar formats). These files include historical planetary positions and astrological events spanning from the 16th to the 21st century. |
| `/scripts` | Python scripts and utilities to parse, clean, analyze, and visualize the planetary data. These scripts allow users to experiment with the data processing pipeline. |
| `/notebooks` | Jupyter notebooks demonstrating exploratory data analysis, example visualizations, and use cases for the provided datasets. |
| `/docs` | Additional documentation that explains the data schema, data source details, and methodologies used in compiling and processing the data. |
| `README.md` | This file, providing an overview of the project, instructions for use, and guidelines for contribution. |
| `LICENSE` | The licensing details under which this project is released. |

* **`Planets_Data`**: This is the main directory containing the core planetary data.  It is further organized by year.
    * **`CSV_Data`**: Within each year folder (e.g., `2024`), you'll find CSV files. Each CSV file contains the planetary data for a specific date and time.  The files are named in the format `Year-Month-Day_Hour-Minute-Second.csv`. For example, `2024-01-15_12-30-00.csv` would contain the planetary positions for January 15, 2024, at 12:30:00.
        * The CSV files contain columns for:
            * **Date**: The date of the planetary positions.
            * **Time**: The time of the planetary positions.
            * **Planet**: The name of the planet (e.g., Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).
            * **Longitude**: The longitude of the planet in degrees.
            * **Latitude**: The latitude of the planet in degrees.
            * **Speed**: The speed of the planet in degrees per day.
            * **House**: The house in which the planet is located.
    * **`JSON_Data`**:  Similar to `CSV_Data`, but the data is stored in JSON format.  This provides an alternative data format that might be more suitable for certain applications.  The structure mirrors the CSV structure, with files named `Year-Month-Day_Hour-Minute-Second.json`.
        * The JSON files contain the same data fields as the CSV files, organized as key-value pairs.

* **`/scripts`**: This directory contains scripts that can be used to process or analyze the data.
    * **`data_generation.py`**: A Python script (if applicable) that was used to generate the planetary data.  This script may be useful for understanding how the data was created or for generating additional data.  It might include functions to calculate planetary positions for given dates and times.
    * **`data_analysis.py`**: (Example) A sample Python script demonstrating how to load, process, and analyze the data.  This could include examples of calculating astrological charts, finding planetary aspects, or performing statistical analysis.  (This may or may not be present, but it's a good example of a useful script).

## Getting Started

### Prerequisites

* Python 3.6 or higher
* Recommended Python libraries:
    * `pandas`
    * `numpy`
    * `matplotlib` (or other visualization libraries)
    * `jupyter` (if you wish to run the notebooks)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/astro-fusion/Astrology_Planetary_Data.git](https://github.com/astro-fusion/Astrology_Planetary_Data.git)
    ```

2.  **Navigate to the repository directory:**
    ```bash
    cd Astrology_Planetary_Data
    ```

3.  **(Optional) Set up a virtual environment (recommended):**
     ```bash
     python3 -m venv venv
     source venv/bin/activate  # On Linux/macOS
     venv\Scripts\activate  # On Windows
     ```

4. **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt # Install the libraries listed above and any others.
    ```

## Data Usage

Here's how you can use the data in this repository:

1.  **Download the Data:**
    * You can download the entire repository as a ZIP file.
    * Alternatively, you can use Git to clone the repository:
        ```bash
        git clone [https://github.com/astro-fusion/Astrology_Planetary_Data.git](https://github.com/astro-fusion/Astrology_Planetary_Data.git)
        ```

2.  **Explore the Data:**
    * Navigate to the `Planets_Data` folder and then to the specific year you are interested in.
    * Choose either the `CSV_Data` or `JSON_Data` folder.
    * Open the data files using your preferred data analysis tool (e.g., Python with Pandas, R, Excel, etc.).

3.  **Understand the Data:**
    * Refer to the `data_dictionary.md` file in the `docs` folder to understand the meaning of each column in the data files.
    * Consult the `methodology.md` file to understand how the planetary positions were calculated.

4.  **Analyze the Data:**
    * Load the data into your analysis tool.  For example, in Python with Pandas:
        ```python
        import pandas as pd

        # Load a CSV file
        df = pd.read_csv('path/to/your/file.csv')

        # Load a JSON file
        df = pd.read_json('path/to/your/file.json')

        print(df.head()) # Display the first few rows
        print(df.describe()) # Get summary statistics
        ```
    * Perform your desired analysis, such as:
        * Calculating planetary aspects (e.g., conjunctions, oppositions, squares).
        * Analyzing planetary transits.
        * Building predictive models using machine learning.
        * Statistical analysis of planetary patterns.
        * Creating astrological charts.

## Contributing

Contributions to this repository are welcome! If you have additional data, scripts, or documentation that you would like to contribute, please submit a pull request.

## Disclaimer

The data provided in this repository is for research and informational purposes only.  It is not intended as a substitute for professional astrological advice.  The accuracy of astrological predictions depends on various factors, and the user is solely responsible for interpreting and applying the data.
