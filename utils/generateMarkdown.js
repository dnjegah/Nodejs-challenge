const generateMarkdown = (response) => {
    return `<div id="top"></div>
    <h3 align="center">${response.projectTitle}</h3>
  ## Table of Contents
  * [Project Description](#description)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  
  
  
  ## Description
  ${response.description}
  <p align="right">(<a href="#top">back to top</a>)</p>
  ## Installation Instructions
  
  ${response.installation}
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ## Usage
  
  ${response.usage}
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ## License
  
  ${
    (() => {
        if(response.license == "MIT License") {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        } else if(response.license === "GNU AGPLv3") {
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        } else if(response.license === "GNU GPLv3") {
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        } else if(response.license === "GNU LGPLv3") {
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        } else if(response.license === "Mozilla Public License 2.0") {
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        } else if(response.license === "Apache License 2.0") {
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        } else if(response.license === "Boost Software License 1.0") {
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } else if(response.license === "The Unlicense") {
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        }
    })()
  }
    
  ## Contributors
  ${response.contributors}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ## Questions
  Github: [${response.githubUsername}](https://github.com/${response.githubUsername})<br/>
  
  Email: [${response.email}](${response.email})
  <p align="right">(<a href="#top">back to top</a>)</p>`
  };
  
  module.exports = generateMarkdown;
