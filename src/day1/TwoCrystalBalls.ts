export default function two_crystal_balls(breaks: boolean[]): number {
    if(breaks.length === 0) {
        return -1;
    }

    const step = Math.floor(Math.sqrt(breaks.length));

    let i = step;

    for (i; i < breaks.length; i += step) {
        if(breaks[i]) {
            i = i - step;
            break;
        }
    }

    for(let j = i; j < i + step && j < breaks.length; ++j){
        if(breaks[j]) return j;
    }

    return -1;
}
