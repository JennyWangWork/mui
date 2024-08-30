// useSvgPath.ts
import { useEffect, useState } from "react";

function useSvgPath(svgUrl: string) {
    const [pathData, setPathData] = useState<string | null>(null);
    const [width, setWidth] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                // 使用 fetch 請求 SVG 文件
                const response = await fetch(svgUrl);
                // 確保請求成功
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                // 獲取 SVG 文件內容
                const svgText = await response.text();
                // 使用 DOMParser 解析 SVG 文件
                const parser = new DOMParser();
                const doc = parser.parseFromString(svgText, "image/svg+xml");
                // 查找 <path> 元素
                const path = doc.querySelector("path");
                if (path) {
                    // 設置 pathData 狀態
                    setPathData(path.getAttribute("d") || "");
                } else {
                    console.error("No <path> element found in SVG");
                }
                // 查找 <svg> 元素並提取 width 屬性
                const svgElement = doc.querySelector("svg");
                if (svgElement) {
                    setWidth(svgElement.getAttribute("width") || null);
                    setHeight(svgElement.getAttribute("height") || null);
                } else {
                    console.error("No <svg> element found in SVG");
                }
            } catch (error) {
                console.error("Error fetching SVG:", error);
            }
        };

        fetchSvg();
    }, [svgUrl]);

    return { pathData, width, height };
}

export default useSvgPath;
