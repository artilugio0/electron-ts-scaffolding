import {contextBridge, ipcRenderer} from 'electron';
import type {Versions} from '@shared/types';

const versions: Versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  executeSomething: () => ipcRenderer.invoke("executeSomething"),
};

contextBridge.exposeInMainWorld('versions', versions);
