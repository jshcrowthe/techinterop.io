# Data Structure

We will generate a list of tags from repositories/tags added to the list of demos. We will use a cloud function to do this work.

## `/repos`

The data at this point will be a firebase array (i.e. not a JS array) of objects formatted as follows

```typescript
/repos: Repo[]

interface Repo {
  repo: string; // The repo name
  url: string; // The URL of the repo
  tags: string[] // An array of tags
}
```

## `/tags`

The data at this point will be an array of objects formatted as follows

```typescript
/tags: Tag[]

interface Tag {
  tag: string; // The tag name
  count: number; // The number of repos w/ that tag
}
```