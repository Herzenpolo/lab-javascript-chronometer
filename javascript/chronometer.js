class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  
  startClick(callback) {
    // ... your code goes here
   let id = setInterval(() => {
     this.currentTime+=1
     callback()
    }, 1000)
     this.intervalId = id
  }

  getMinutes() {
    // ... your code goes here
    let currentMinutes = Math.floor(this.currentTime/60)
    return currentMinutes
  }
  getSeconds() {
    // ... your code goes here

  return this.currentTime % 60
  }
  
    twoDigitsNumber(value) {
      // ... your code goes here
     if(value < 10) {
       return `0${value}`
     } else {
       return `${value}`
     }
    }
  
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }

  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}