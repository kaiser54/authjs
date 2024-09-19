use the keyboard shortcut `Ctrl + K and then V` (Windows/Linux) or `Cmd + K and then V` (Mac) to access Markdown preview

Here’s a list of common commit types like `fix:` and `chore:` based on the Conventional Commits standard, with their meaning and typical use cases:
# Extended List of Commit Types

1. **`fix:`**
   - **Meaning:** Fixes a bug in your codebase.
   - **Function:** Used when a commit patches a bug in your project.
   - **Example:** `fix: resolve issue with user login not working`

2. **`feat:`**
   - **Meaning:** Introduces a new feature.
   - **Function:** Used when you add a new feature to your project.
   - **Example:** `feat: add support for multiple user accounts`

3. **`chore:`**
   - **Meaning:** Changes that don't modify application logic or functionality.
   - **Function:** Typically used for tasks like updating dependencies or tooling.
   - **Example:** `chore: update eslint configuration`

4. **`refactor:`**
   - **Meaning:** Refactoring code without fixing bugs or adding features.
   - **Function:** Used when improving the structure or readability of code.
   - **Example:** `refactor: reorganize user authentication module`

5. **`style:`**
   - **Meaning:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
   - **Function:** Used for code style improvements.
   - **Example:** `style: fix linting issues in app.js`

6. **`perf:`**
   - **Meaning:** Improves performance of the code.
   - **Function:** Used when making performance enhancements.
   - **Example:** `perf: optimize image loading in the dashboard`

7. **`test:`**
   - **Meaning:** Adding or updating tests.
   - **Function:** Used for changes related to testing.
   - **Example:** `test: add unit tests for payment processing`

8. **`docs:`**
   - **Meaning:** Documentation-only changes.
   - **Function:** Used for changes to documentation like README files.
   - **Example:** `docs: update README with setup instructions`

9. **`build:`**
   - **Meaning:** Changes that affect the build system or external dependencies (e.g., npm, webpack, etc.).
   - **Function:** Used for modifying the build process.
   - **Example:** `build: update webpack configuration`

10. **`ci:`**
    - **Meaning:** Changes to your CI configuration files and scripts (e.g., CircleCI, Travis, GitHub Actions).
    - **Function:** Used when modifying continuous integration settings.
    - **Example:** `ci: update GitHub Actions for Node.js 14 support`

11. **`revert:`**
    - **Meaning:** Reverts a previous commit.
    - **Function:** Used when you need to undo a previous change.
    - **Example:** `revert: revert "feat: add support for multiple user accounts"`

12. **`hotfix:`**
    - **Meaning:** Urgent fixes typically deployed to production.
    - **Function:** Used for quick fixes that need immediate attention.
    - **Example:** `hotfix: fix broken links on production site`

13. **`config:`**
    - **Meaning:** Configuration changes in project files.
    - **Function:** Used when modifying config files like `.eslintrc`, `.babelrc`, etc.
    - **Example:** `config: update eslint rules for better type checking`

14. **`merge:`**
    - **Meaning:** Merge branches.
    - **Function:** Used when merging changes from one branch into another.
    - **Example:** `merge: merge feature/checkout into main`

15. **`security:`**
    - **Meaning:** Addresses security vulnerabilities.
    - **Function:** Used when fixing security issues or implementing security features.
    - **Example:** `security: patch XSS vulnerability in form submission`

16. **`i18n:`** or **`l10n:`**
    - **Meaning:** Internationalization and localization changes.
    - **Function:** Used for adding or updating translations and localization features.
    - **Example:** `i18n: add French translations for user interface`

17. **`a11y:`**
    - **Meaning:** Accessibility improvements.
    - **Function:** Used when enhancing the accessibility of the application.
    - **Example:** `a11y: improve screen reader support for navigation menu`

18. **`ux:`**
    - **Meaning:** User experience improvements.
    - **Function:** Used for changes that enhance the user experience but don't necessarily add new features.
    - **Example:** `ux: streamline checkout process`

19. **`deps:`**
    - **Meaning:** Dependency updates.
    - **Function:** Used when updating project dependencies.
    - **Example:** `deps: update React to version 18.2.0`

20. **`init:`**
    - **Meaning:** Initial commit or project setup.
    - **Function:** Used for the first commit in a repository or when setting up a new project structure.
    - **Example:** `init: initial project setup`

21. **`data:`**
    - **Meaning:** Data-related changes.
    - **Function:** Used for changes to data files, database schemas, or data processing logic.
    - **Example:** `data: update product catalog JSON`

22. **`release:`**
    - **Meaning:** Release version tags.
    - **Function:** Used when creating a new software release or version.
    - **Example:** `release: version 2.1.0`

23. **`ui:`**
    - **Meaning:** User interface changes or improvements.
    - **Function:** Used for updates to the visual aspects of the application, including layout, styling, and UI-related code.
    - **Example:** `ui: adjust spacing in navigation menu using Tailwind classes`

These commit types help maintain consistency, clarity, and can often tie into automated tools for versioning and release notes. The specific types used can vary between projects and teams, so it's always a good idea to agree on a set of conventions within your development team.