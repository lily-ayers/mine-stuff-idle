import React, {Component} from 'react';
import names from './names';
import Navbar from './Navbar'
import Hub from './hub'
import Items from './items';

class App extends Component {
  constructor(props) {
    super(props);
    let remaining = names;
    for (let era of this.props.worldState) {
        remaining = remaining.filter(data => !era.workers.includes(work => work.name = data))
    }
    this.state = {
      selectedEra: 0,
      workerNames: remaining,
      gameClock: 0,
      currentFont: 0,
      styles: {
        fonts: [
          { fontFamily: "'Inconsolata', monospace" },
          { fontFamily: "'Indie Flower', cursive" },
          { fontFamily: "'Shadows Into Light', cursive" },
          { fontFamily: "'Squada One', cursive" },
          { fontFamily: "'Cute Font', cursive" }
        ]
      }
    }
    setInterval(() => this.conductBehavior(this.props.worldState), 1000)
  }

  save = (worldState) => {
      localStorage.setItem('MSI-WorldState', JSON.stringify(worldState))
  }
  
  superviseWorkers = (worldState) => {
      for (let worker of worldState.workers) {
          if (worker.assignedJob !== "" && worker.assignedLocation !== "" && worker.assignment !== "") {
              if (!worker.returning) {
                  switch (worker.assignedJob) {
                      case "Mining":
                          let assignedMine = null;
                          for (let mine of worldState.mines) {
                              if (mine.name === worker.assignedLocation) {
                                  assignedMine = mine;
                                  break;
                              }
                          }
                          if (assignedMine !== null) {
                              let mat = assignedMine.materials.find(data => data[0] === worker.assignment);
                              worker.progress += (1 + (worker.power / (mat[3] / 2)));
                              console.log(worker.progress)
                              if (worker.progress >= 100) {
                                  worker.returning = true;
                                  worker.heldMaterial = mat;
                                  worker.progress = 100;
                              }
                          }
                          break;
                      case "Dungeoning":
                              let assignedDungeon = null;
                              for (let dungeon of worldState.dungeons) {
                                  if (dungeon.name === worker.assignedLocation) {
                                      assignedDungeon = dungeon;
                                      break;
                                  }
                              }
                              if (assignedDungeon !== null) {
                                let enem = assignedDungeon.enemies.find(data => data[0] === worker.assignment);
                                worker.progress += (1 + (worker.damage / (enem[1] * enem[4] / 2)));
                                if (worker.progress >= 100) {
                                    worker.returning = true;
                                    worker.heldMaterial = enem;
                                    worker.progress = 100;
                                }                                  
                              }
                          break;
                  }
              } else {
                if (worker.assignedJob === "Mining") {
                  worker.progress -= (1 + (worker.speed / (worker.mat[3] / 2)));
                } else if (worker.assignedJob === "Dungeoning") {
                  worker.progress -= (1 + (worker.speed / (worker.enem[1] * worker.enem[3] / 2)));
                }
                if (worker.progress <= 0) {
                    worker.progress = 0;
                    if (worker.assignedJob === "Mining") {
                      worker.heldMaterial[4]++;
                    } else if (worker.assignedJob === "Dungeoning") {
                      this.getWorkerDrops(worker.heldMaterial[5]);
                    }
                    worker.heldMaterial = null;
                    worker.returning = false;
                }
            }
          }
      }
  }

  populate = (eraState) => {
    let index = 0;
    for (let mine of eraState.mines) {
      if (eraState.triggerMines[index]) {
        let materialAbsence = 0;
        for (let mat of mine.materials) {
          if (mat.remaining < mat.capacity) {
            materialAbsence += (mat.capacity - mat.remaining);
          }
          if(this.state.gameClock % 60 === 0 && mat.remaining < mat.capacity) {
            mat.remaining += Math.floor(((materialAbsence) / mine.refreshRate));
          }
        }
      }
      index++;
    }
    index = 0
    for (let dungeon of eraState.dungeons) {
      if (eraState.triggerDungeons[index]) {
        for (let enem of dungeon.enemies) {
          if (!enem[6]) {
            if (enem[7] >= (enem[1] * dungeon.respawnRate)) {
              enem[6] = true;
            } else {
              enem[7]++;
            }
          }
        }
        index++;
      }
    }
  }
  
  conductBehavior = (worldState) => {
    this.save(worldState);
    for (let eraState of worldState) {
        this.superviseWorkers(eraState)
        this.populate(eraState)
    }
    let state = this.state;
    state.currentFont = this.state.styles.fonts[this.state.selectedEra]
    state.gameClock += 1;
    this.setState(state);
  }

  changeEra = (era) => {
    this.setState({
      selectedEra: era
    })
  }

  getWorkerDrops = (itemName) => {
    let item = Items.find(data => data.name === itemName)
    if (item.type === "Equippable") {
        let slot;
        switch (item.slot) {
            case "Head":
                slot = 0;
                break;
            case "Chest":
                slot = 1
                break;
            case "Weapon":
                slot = 2
                break;
            case "Legs":
                slot = 3
                break;
        }
        if (this.props.worldState.equippedItems[slot].name !== item.name) {
            this.props.worldState.equippableItems[slot].push(item);
            this.props.worldState.equippableItems[slot] = [...new Set(this.props.worldState.equippableItems[slot])];
        }
    } else if (item.type === "Consumable") {
        let found = false;
        for (let consumable of this.props.worldState.consumables) {
            if (consumable.name === item.name) {
                consumable.amountHeld++;
                found = true;
            }
        }
        if (!found) {
            this.props.worldState.consumables.push(item)
        }
        this.props.worldState.consumables.push(item)
    } else {
        let found = false;
        for (let material of this.props.worldState.otherMaterials) {
            if (material.name === item.name) {
                material.amountHeld++;
                found = true;
            }
        }
        if (!found) {
            this.props.worldState.otherMaterials.push(item)
        }
        this.props.worldState.otherMaterials.push(item)
    }
  }

  render() {
    return (
      <div className="main">
        <Navbar font={this.state.styles.fonts} worldState={this.props.worldState} era={this.state.selectedEra} changeEra={this.changeEra}/>
        <Hub font={this.state.styles.fonts[this.state.selectedEra]} worldState={this.props.worldState} era={this.state.selectedEra} names={this.state.workerNames}/>
      </div>
    );
  }
}

export default App;