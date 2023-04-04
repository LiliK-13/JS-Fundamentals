function shootForTheWin(input){
    let targets = input.shift().split(' ').map(Number) // мишени  = вход.(удалили 1 эллемент в массиве).(разлеоиои на массив через пробел).(сделали массив числом)

    let count = 0; //брояч будет 0
    let command = input.shift(); // комманда это 1 удаленный элемент

    while( command != 'End'){ // вайл цикл пока не равен команде енд
        let indexOfTheTarget = Number.parseInt(command) //принимает строку в качестве аргумента и возвращает целое число

        if(indexOfTheTarget >= 0 && indexOfTheTarget < targets.length){ //  если индекс таргета больше и равен 0 или индекс таргета меньше длинны массива таргет
            for(let i =0; i < targets.length; i++){ //проходимся через массив таргет
                let currentTarget = targets[indexOfTheTarget] //броячТаргета = индексу таргета

                if( i !== indexOfTheTarget && targets[i] !== -1){ //если i  не равно  индексуТаргет и Иаргет[i]  не равен -1
                    if(targets[i] > currentTarget){ // если таргет [i]  меньше болячаТаргет
                        targets[i] -= currentTarget //из таргет[i]  вычитаем броячтаргета


                    }else{
                        targets[i] += currentTarget // если нет  таргет[i] + броячемТаргета
                    }

                }

            }
            targets[indexOfTheTarget]= -1;
            count++

        }
            command = input.shift()
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])