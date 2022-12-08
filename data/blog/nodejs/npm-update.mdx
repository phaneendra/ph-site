---
title: Upgrading npm dependencies
date: '2016-03-08'
tags: ['npm', 'nodejs', 'code', 'features']
draft: false
summary: How to safely upgrade the npm dependencies
---

[![image by cocoparisienne https://pixabay.com/users/cocoparisienne-127419/](https://www.carlrippon.com/static/f6b79a2c83ed467c4901fed2d8224a68/88218/upgrading-npm-dependencies.jpg 'image by cocoparisienne https://pixabay.com/users/cocoparisienne-127419/')](https://www.carlrippon.com/static/f6b79a2c83ed467c4901fed2d8224a68/b89a9/upgrading-npm-dependencies.jpg)

How can we safely upgrade the npm dependencies in our project? What do the funny `^` and `~` characters mean in front of the dependency package versions? How can we do a major version upgrade on an npm dependency in our project? We’ll find out in this post.

## Version parts

npm package versioning follows [semantic versioning](https://semver.org/). So, a package version has 3 parts - **Major.Minor.Patch**

- **Patch**. This is incremented when a bug fix is made that won’t break consuming code
- **Minor**. This is incremented when features are added that won’t break consuming code
- **Major**. This is incremented when breaking changes are made

## What does the `^` and `~` mean?

A version often has a `^` in front of it (e.g. `^16.8.6`). This means that the latest minor version can be safely installed. So in this example, `^16.12.1` can be safely installed if this was the newest version in `16.x`.

Sometimes a version has a `~` in front of it (e.g. `~16.8.6`). This means that only the latest patch version can be safely installed. So in this example, `^16.8.12` can be safely installed if this was the newest version in `16.8.x`.

## So, `npm install` installs the latest safe version of the dependencies?

Yes and no!

If the packages have already been installed into the `node_modules` folder, then `npm install` **won’t** update any packages.

If the packages haven’t been installed and a `package-lock.json` file exists, then `npm install` will install the exact dependency versions specified in `package-lock.json`.

`npm install` will install the latest safe version of the dependencies if they don’t exist in the `node_modules` folder and, there is no `package-lock.json` file. However, you may think the latest safe version **hasn’t** been installed because `package.json` is unchanged, but if you check the packages in the `node_modules` folder, the latest safe version will have been installed.

## So, how do I safely update all the dependencies?

Firstly, the dependencies that are out of date can be discovered by running the following command:

The dependencies will be listed out:

[![npm outdated](https://www.carlrippon.com/static/d5414e272db9fe43ad4f05e749395874/799d3/npm-outdated.png 'npm outdated')](https://www.carlrippon.com/static/d5414e272db9fe43ad4f05e749395874/6935e/npm-outdated.png)

The **wanted** version is the latest safe version that can be taken (according to the semantic version and the `^` or `~` prefix). The **latest** version is the latest version available in the npm registry.

All the dependencies can be safely updated to the _wanted_ version by using the following command:

As well as updating the packages in the `node_modules` folder, the `package.json` and `package-lock.json` files will be updated.

If we don’t want to update all of the packages, then the package names can be specified at the end of the command:

```
npm update "react" "react-dom"
```

React is updated in the above example.

## Updating all dependencies with major changes

So, how do we upgrade dependencies when there has been a major version change?

Perhaps the safest way is as follows:

- Check the changelog of the dependent package for breaking changes that could affect our app
- If we think we are safe to do the upgrade, run the following command:

```
npm install <packagename>@latest
```

- If multiple packages go together, you can list them all out. The example below will update React to the latest version:

```
npm install react@latest react-dom@latest
```

- Verify the app isn’t broken by doing some tests
- Repeat the process for other packages where there is a major version change

Is there a quicker way of just updating all the dependencies, including major version changes? So, like `npm update` but for major version updates as well?

Yes, there is a tool called [npm-check-updates](https://github.com/tjunnone/npm-check-updates) that will do this. Just run the following command:

This will update the dependencies to the latest versions (including major version changes) in the `package.json` file. If we are happy to go ahead with the upgrades we need to run the following command:

This will then upgrade the packages in the `node_modules` folder, and the `package-lock.json` file will be updated as well.

## Wrap up

- Use `npm outdated` to discover dependencies that are out of date
- Use `npm update` to perform safe dependency upgrades
- Use `npm install <packagename>@latest` to upgrade to the latest major version of a package
- Use `npx npm-check-updates -u` and `npm install` to upgrade all dependencies to their latest major versions
