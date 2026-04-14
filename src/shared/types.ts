export type Versions = {
  node: () => string,
  chrome: () => string,
  electron: () => string,
  executeSomething: () => Promise<string>,
}
