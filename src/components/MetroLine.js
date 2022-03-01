import { getMetroLines, getMetroLine1 } from '../api/Api';
import { urlGetMetroLines, urlGetMetroLine1 } from '../api/Api';

const MetroLine = () => {
    const apiURL = urlGetMetroLines;

    return (
        <div>Lines</div>
    );
}

export default MetroLine;