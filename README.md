File system [Feature-sliced-design]

- src/
    - **tests** — [*tests, module and integration tests*]
    - models — [*mongoose models*]
    - lib — [*configuration of this api*]
    - router — [inits all route files from different sections]
    - utils — [*functions that starts this project, and most commonly used helpers in this project*]
    - main.ts — [*init functions that helps to start the project*]
    - marketplace/
        - router/index.ts — [*main router file of marketplace section, init all module routes, and has access to controllers*]
        - utils — [*main helper functions, or init option of necessary services, such as swagger or etc.* ]
        - types — [*essential types to all modules*]
        - middleware — [*middleware functions that used in this part of api*]
        - services — [*classes with function that has access to models*]
        - controllers — [*classes with function that has access to services*]
        - modules — [*module that does one bf*]
            - lib - [*configuration variables for one module*]
            - middlewares - [*middleware function for one module*]
            - routers - [*routes for one module, has access to controllers from outside ../../controllers/**]
            - utils- [*helper functions, or mini service configurations*]
            - swagger - [swagger api for one module]
            - index.ts - ***public api***
    - company-admin/
    - main-admin/
- .husky — [*commit hooks configuration*]
- .github — [*configuration workflows (cd)*]

Rules:

- For every feature despite fix bugs, open them own branch
- After completing feature commit them, commit pre-hook works and it fixes lint errors
- Try to write clean code, [DRY, KISS]