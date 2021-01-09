storybook w/ webpack 4.45.0 broke

to fix it, I added the following line in package.json:

```
"resolutions": {
    "webpack": "4.44.2"
  },
```

When this gets fixed in storybook, we should remove that line:

Watch https://github.com/storybookjs/storybook/issues/13585 for a resolution
