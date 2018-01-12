class Pokemon {
    constructor(id, name, type, maxHealth, currentHealth, attackDamage, attackName, level=Number(1), xp=Number(0)) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.attackDamage = attackDamage;
        this.attackName = attackName;
        this.level = level;
        this.xp = xp;
    };
};

export default Pokemon;