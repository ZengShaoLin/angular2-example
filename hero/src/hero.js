export default class Hero {
    constructor(id, name, power, alterEgo, isSecret) {
        Object.assign(this, { id, name, power, alterEgo, isSecret });
    }
}