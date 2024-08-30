// fetchSvgPathData.ts
export async function fetchSvgPathData(svgUrl: string): Promise<string | null> {
    try {
        const response = await fetch(svgUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const svgText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const path = doc.querySelector("path");
        return path ? path.getAttribute("d") || "" : null;
    } catch (error) {
        console.error("Error fetching SVG:", error);
        return null;
    }
}
