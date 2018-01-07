class Pokemon {
    constructor(id, name, type, health, abilities, attackDamage, catchRate, xp, level) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.health = health;
        this.attackDamage = attackDamage;
        this.attackName = abilities;
        this.catchRate = catchRate;
        this.xp = xp;
        this.level = level;
    };
};

export default Pokemon;