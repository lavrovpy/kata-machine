const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 1.Base Case 
    // off the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length){
        return false;
    }

    // hit a wall
    if(maze[curr.y][curr.x] === wall){
        return false;
    }

    // found the exit
    if(curr.y === end.y && curr.x === end.x){
        path.push(end);
        return true;
    }

    // already was there
    if(seen[curr.y][curr.x]){
        return false;
    }

    // 2. recursive casse
    // pre
    path.push(curr);

    // recurse
    for(let i = 0; i < directions.length; ++i){
        const [x, y] = directions[i];
        const point_to_go: Point = {
            x: curr.x + x,
            y: curr.y + y
        };
        console.log(`point to go: ${JSON.stringify(point_to_go)}`);
        if(walk(maze, wall, point_to_go, end, seen, path)){
            return true;
        }

        seen[point_to_go.y][point_to_go.x] = true;
    };

    // post
    path.pop();
    return false;
}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i){
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
