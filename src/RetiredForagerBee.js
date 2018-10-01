class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();

    this.age = 40;
    this.color = 'grey';
    this.canFly = false;
    this.job = 'gamble';
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble() {
    this.treasureChest.push('Pollen chips');
  }
}
