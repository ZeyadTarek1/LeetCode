function countOdds(low: number, high: number): number {
    let count: number = 0;
    for ( let i: number = low; i < high+1; i++){
        if (i % 2 !== 0)
            count++;
    }
    return count
};