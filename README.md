# Dummy Data Interface for IQ Bot Post Processing

This is the code for a dummy web application that can be used to demonstrate how RPA can take IQ Bot data and add it to any UI.

## Getting Started

This web application is designed to be deployed on the same server as IQ Bot
This web application is build on node.js (the IQ Bot interface is also built on node.js so this prerequisite should always be satisfied)

### Prerequisites

IQ Bot v5.x+

### Installation

* Clone this repository locally on the IQ Bot Server
* in a Command Line window, as local Administrator, run the following command from within the repository folder: "npm install"
* Once done, double click on "start.bat"
* the CL window should say "Listening on port 3001", which means you can now navigate to it and check out the interface

### Configuration

Minimal configuration required: the interface itself is customizable: you can change the title of each Field (simply click on the field name and you will be able to edit it.).
Once you have changed the Field Names, click on the "Save Fields" button, this will ensure your Field names are saved and are now the default.
Example: you can change "Invoice Number" to "P.O. Number".

## Contributing

Feel free to fork or suggest improvements


## Authors

* **Bren Sapience** - *Initial work* - [GitHub](https://github.com/BrendanSapience)


