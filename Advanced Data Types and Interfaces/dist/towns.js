function towns(arr) {
    const townsArr = [];
    for (const townInfo of arr) {
        const [town, latitude, longitude] = townInfo.split(' | ');
        townsArr.push({ town, latitude, longitude });
    }
    townsArr.map((town) => console.log(town));
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);
