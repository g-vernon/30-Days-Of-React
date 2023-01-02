class Person {
  constructor(firstName = 'John', lastName = 'Smith', age = '25', country = 'USA', city = 'New York') {
    this.firstName=firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }

  get getScore() {
    return this.score
  }

  get getSkills() {
    return this.skills
  }

  set setScore(score) {
    this.score += score
  }

  set setSkill(skill) {
    this.skills.push(skill)
  }

  getPersonInfo() {
    let fullName = this.getFullName()
    let skills = 
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length -1).join(', ') +
      ` and ${this.skills[this.skills.length -1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''
 
    let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }

  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }

  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    
    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

class Student extends Person {
  saySomething() {
    console.log('I am a student')
  }
}

const person1 = new Person()
const person2 = new Person('George', 'Vernon', 23, 'UK', 'Waterlooville')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars City')

const s1 = new Student ('Homer', 'Simpson', 54, 'USA', 'Springfield')
s1.saySomething()
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
