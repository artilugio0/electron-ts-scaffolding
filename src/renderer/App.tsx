import {useVersions} from './hooks/useVersions';
import {useEffect, useState} from 'react';

export default function App() {
  const versions = useVersions();
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const executeSomething = async () => {
      try {
        setResult(await versions.executeSomething());
      } catch (e: any) {
        setError(`${e}`);
      }
    }

    executeSomething();
  }, [versions]);

  return (
    <div className="app">
      <h1>My Electron App</h1>
      <p>{`This app is using Node (v${versions?.node() ?? "unknown :("})`}</p>
      <p>{`This app is using Chrome (v${versions?.chrome() ?? "unknown :("})`}</p>
      <p>{`This app is using Electron (v${versions?.electron() ?? "unknown :("})`}</p>
      {result && <p>{`Execution result: ${result}`}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
