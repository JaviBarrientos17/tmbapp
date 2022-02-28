import './App.css';
import { getMetroLines } from './api/Api';
import MetroLine from './components/MetroLine';

export default function App() {
  return (
    <MetroLine />
  );
}