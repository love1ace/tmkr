#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// .github 디렉토리가 있는지 확인하고 없으면 생성
const githubDir = path.join(process.cwd(), '.github');
if (!fs.existsSync(githubDir)) {
  fs.mkdirSync(githubDir);
  console.log('.github 디렉토리가 생성되었습니다.');
}

// ISSUE_TEMPLATE 디렉토리 생성
const issueDir = path.join(githubDir, 'ISSUE_TEMPLATE');
if (!fs.existsSync(issueDir)) {
  fs.mkdirSync(issueDir);
}

// PR 템플릿
const prTemplate = `# Overview

<!--
    A clear and concise description of what this pr is about.
 -->

## Screenshots (Optional)

<!--
    You can attach screenshots demonstrating the modified screens or features.
 -->
`;

// 이슈 템플릿 (YAML)
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

// 파일 생성
fs.writeFileSync(path.join(issueDir, 'bug.yml'), bugYamlTemplate);
fs.writeFileSync(path.join(issueDir, 'feature.yml'), featureYamlTemplate);
fs.writeFileSync(path.join(githubDir, 'pull_request_template.md'), prTemplate);

console.log('템플릿이 성공적으로 생성되었습니다.');