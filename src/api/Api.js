const appId = "6d13db4e";
const appKey = "44d1f50f6a8461189a7f5a39b9d10195";

export const getMetroLines = async () => {
    try {
        let url = `https://api.tmb.cat/v1/transit/linies/metro?${appId}&${appKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
}