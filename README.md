# Convention

## Branch name

Supporting branches are used to aid parallel development between team members. These branches always have a limited life time, since they will be removed. The different types of branches we may use are:

Feature branches:

- Must branch from `main`
- Must merge back into `main`
- Naming convention: `feature/<ticker-id>_create_new_feature`

Bug branches

- Must branch from `main`
- Must merge back into `main`
- Naming convention: `fix/<ticker-id>_fix_my_feature`

## Commit

The commit message should be structured as follows:

```
<type>[optional scope]: <description in imperative present tense>

[optional body]

[optional footer(s)]
```

Follow this [link](https://www.conventionalcommits.org/en/v1.0.0/) for more information

#### E2E Folder

This folder is used to write the end-to-end tests, to write them we use the [page object model pattern](https://javascript.plainenglish.io/end-to-end-testing-using-jest-and-puppeteer-page-object-model-with-typescript-7fbd099f1b42)

The structure will be like this:

#### Src Folder

This folder is used to store the code of the application

The structure will be like this:

- `domain` will have the types files
- `hoc` will have the High Order Component
- `hooks` will have the hooks
- `main` will have the files linked to electron
- `services` will have the services
- `store` will have the files linked to the state of the app
- `translations` will have translations of the app
- `typings` will have the missing typings of a dependency
- `ui-components` will have the components that are part of the design system
- `utils` will have the utility function
- `views` will have all the components linked to a view (page/screen)

# heart-rate-mobile
