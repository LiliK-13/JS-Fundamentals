function Inventory(arr){
    let heroes = [];
    for(let heroInfo of arr){

        //let [name, level, items] = heroInfo.split(' / '); новый синтаксис
        let splitedElements = heroInfo.split(' / ');
        let name = splitedElements[0];
        let level = splitedElements[1];
        let items = splitedElements[2];

        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }
        heroes.push(currentHero)
    }
    let sortedByLevel = heroes.sort((a,b)=>{
        return a.level - b.level;
  })
  
  for ( let hero of sortedByLevel){
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
Inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
 'Hes / 1 / Desolator, Sentinel, Antara'])