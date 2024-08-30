export const bytesCounter = (text: string): number => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        count += text[i].charCodeAt(0) > 255 ? 2 : 1;
    }

    return count;
};
