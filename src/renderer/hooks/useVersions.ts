import type {Versions} from '@shared/types';

export const useVersions = () => {
  const versions = (window as Window & {versions?: Versions}).versions;
  if (versions) {
    return versions;
  }

  throw "versions key not present in window";
}
