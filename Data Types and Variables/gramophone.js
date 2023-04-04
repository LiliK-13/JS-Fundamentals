function gramophone (bandName, albumName, songName){
let songDuration = (albumName.length * bandName.length) * songName.length / 2;
let rotation = Math.ceil(songDuration/2.5)
console.log(`The plate was rotated ${rotation} times.`)

}
gramophone('Black Sabbath', 'Paranoid','War Pigs')
gramophone ('Rammstein', 'Sehnsucht','Engel')