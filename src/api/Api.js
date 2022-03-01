const appId = "6d13db4e";
const appKey = "44d1f50f6a8461189a7f5a39b9d10195";

export let urlGetMetroLines = `https://api.tmb.cat/v1/transit/linies/metro?${appId}&${appKey}`;
export let urlGetMetroLine1 = `https://api.tmb.cat/v1/transit/linies/metro/1?${appId}&${appKey}`;

export const getMetroLines = async () => {
    try {
        const response = await fetch(urlGetMetroLines);
        const data = await response.json();
        return data;
    } catch (err) {}
}

export const getMetroLine1 = async () => {
    try {
        const response = await fetch(urlGetMetroLine1);
        const data = await response.json();
        return data;
    } catch (err) {}
}