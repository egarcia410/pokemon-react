class Pokemon {
    constructor(id, name, type, maxHealth, currentHealth, attackDamage, attackName, catchRate, xp, level) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.maxHealth = maxHealth;
        this.currentHealth = currentHealth;
        this.attackDamage = attackDamage;
        this.attackName = attackName;
        this.catchRate = catchRate;
        this.xp = xp;
        this.level = level;
    };
};

export default Pokemon;