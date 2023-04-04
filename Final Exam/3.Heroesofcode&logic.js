function solve(input) {
    let num = Number(input.shift());
    let heroes = {}
 
    for (let i = 0; i < num; i++) {
        let lines = input.shift().split(` `);
        let [hero, hp, mp] = lines;
        if(!heroes.hasOwnProperty(hero)) {
            heroes[hero] = [];
        }
        heroes[hero] = {'hp': Number(hp), 'mp': Number(mp)}
    }
    
    while(input[0] !== `End`) {
        let tokens = input.shift().split(` - `);
        let command = tokens[0];
        
        if(command === `CastSpell`) {
            let hero = tokens[1];
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if(heroes[hero].mp > mpNeeded) {
                heroes[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === `TakeDamage`) {
            let hero = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            heroes[hero].hp -= damage;
            if(heroes[hero].hp < 0) {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroes[hero];
            } else {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            }
        } else if (command === `Recharge`) {
            let hero = tokens[1];
            let mpHeal = Number(tokens[2]);
            let currentMp = Number(heroes[hero].mp);
            heroes[hero].mp += mpHeal;
            if(heroes[hero].mp > 200) {
                heroes[hero].mp = 200;
                console.log(`${hero} recharged for ${200 - currentMp} MP!`)
            } else {
                console.log(`${hero} recharged for ${mpHeal} MP!`)
            }
        } else if (command === `Heal`) {
            let hero = tokens[1];
            let hpHeal = Number(tokens[2]);
            let currentHp = Number(heroes[hero].hp);
            heroes[hero].hp += hpHeal;
            if(heroes[hero].hp > 100) {
                heroes[hero].hp = 100;
                console.log(`${hero} healed for ${100 - currentHp} HP!`);
            } else {
                console.log(`${hero} healed for ${hpHeal} HP!`)
            }
        }
    }
 
    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hp}`);
        console.log(`  MP: ${heroes[hero].mp}`)
    }
}
solve([4,
    `Adela 90 150`,
    `SirMullich 70 40`,
    `Ivor 1 111`,
    `Tyris 94 61`,
    `Heal - SirMullich - 50`,
    `Recharge - Adela - 100`,
    `CastSpell - Tyris - 1000 - Fireball`,
    `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`,
    `End`])
 
solve([2,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`])