import names from './names';

export class WorkerGenerator {
    constructor(worldState) {
        let remaining = names.filter(data => !worldState.workers.includes(work => work.name = data))
        this.state = {
            names: remaining
        }
    }
}