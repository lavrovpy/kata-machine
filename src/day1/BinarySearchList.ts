export default function bs_list(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) {
        return false;
    }

    let lo = 0;
    let hi = haystack.length;

    while(hi > lo) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if(haystack[mid] === needle) {
            return true;
        } else if (needle > haystack[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return false;
}
