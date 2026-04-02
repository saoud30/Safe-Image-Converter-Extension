// build-crx.js

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const extensionDir = path.join(__dirname, 'extension'); // Directory containing the extension source code
const outputDir = path.join(__dirname, 'build'); // Output directory for the CRX file
const crxFileName = 'extension.crx'; // Name for the resulting CRX file

// Function to generate CRX file
function generateCRX() {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Command to create CRX file (assuming some build tool, e.g., crx3)
    const buildCommand = `crx3 pack ${extensionDir} -o ${path.join(outputDir, crxFileName)}`;

    exec(buildCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error creating CRX: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`CRX file created successfully: ${path.join(outputDir, crxFileName)}`);
    });
}

// Execute the function
generateCRX();
