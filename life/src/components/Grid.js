export const Grid = props => {
    const arr = [[0,0,0,1,1], [0,0,0,1,1] , [0,0,0,1,1] , [0,0,0,1,1],[0,0,0,1,1]];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++)
            if(arr[i][j] === 0){
                console.log('◽️')
            } else {
                console.log('◼️')
            }
        
    }

    return arr

}

