#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Check if .github directory exists, if not, create it
const githubDir = path.join(process.cwd(), '.github');
if (!fs.existsSync(githubDir)) {
  fs.mkdirSync(githubDir);
  console.log('.github directory has been created.');
}

// Create ISSUE_TEMPLATE directory
const issueDir = path.join(githubDir, 'ISSUE_TEMPLATE');
if (!fs.existsSync(issueDir)) {
  fs.mkdirSync(issueDir);
}

// PR template
const prTemplate = `# Overview

<!--
    A clear and concise description of what this pr is about.
 -->

## Screenshots (Optional)

<!--
    You can attach screenshots demonstrating the modified screens or features.
 -->
`;

// Issue templates (YAML)
const bugYamlTemplate = `name: bug
description: Report a bug
labels: [bug]
title: "[bug]:"
body:
  - type: textarea
    id: description
    attributes:
      description: Description what bug we need to fix
      label: Bug description
    validations:
      required: true
`;

const featureYamlTemplate = `name: feature
description: Do you have a new feature or specification?
title: "[feature] "
labels: ["feature"]
body:
  - type: textarea
    id: feat-description
    attributes:
      label: 📄 Description
      description: Please describe the new feature.
      placeholder: Provide detailed description!
    validations:
      required: true
  - type: textarea
    id: feat-tasks
    attributes:
      label: ✅ Tasks
      description: Please list the tasks that need to be done.
      placeholder: Break them down as much as possible!
    validations:
      required: true
`;

// Write files
fs.writeFileSync(path.join(issueDir, 'bug.yml'), bugYamlTemplate);
fs.writeFileSync(path.join(issueDir, 'feature.yml'), featureYamlTemplate);
fs.writeFileSync(path.join(githubDir, 'pull_request_template.md'), prTemplate);

console.log('Templates have been successfully created.');