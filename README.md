# tmkr

**tmkr** is easy and fast to create github issue or pr.

![npm](https://img.shields.io/npm/v/tmkr)
![license](https://img.shields.io/npm/l/tmkr)

## Quick Start

Get **tmkr** up and running quickly!

1. **Run**:
    ```bash
    npx tmkr
    ```
2. **Done!**


## tmkr templates

### Issue Templates

#### Bug Report (`bug.yml`)
```yaml
name: bug 
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
```

#### Feature Request (`feature.yml`)
```yaml
name: feature
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
```

### Pull Request Template (`pull_request_template.md`)
```markdown
# Overview

<!--
    A clear and concise description of what this PR is about.
 -->

## Screenshots (Optional)

<!--
    You can attach screenshots demonstrating the modified screens or features.
 -->
```

## Contributing

We welcome contributions to **tmkr**! Whether it's reporting a bug, suggesting an enhancement, or submitting a pull request, your input is valued.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or feedback, please contact [love1ace](mailto:lovelacedud@gmail.com).