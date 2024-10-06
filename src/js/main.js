import '../css/style.scss'
import { images as imagesInfo, buttons as buttonInfo } from "../../data/db.json"

// 获得root节点
const app = document.querySelector('#app')

const cardGroup = document.createElement('div')
cardGroup.classList.add('card-group')

app.appendChild(cardGroup)

imagesInfo.forEach(imgInfo => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.style.backgroundImage = `url(${imgInfo.url})`
  cardGroup.appendChild(card)
})

const buttonGroup = document.createElement('div')
buttonGroup.classList.add('btn-group')

cardGroup.appendChild(buttonGroup)

buttonInfo.forEach(btnInfo => {
  const button = document.createElement('span')
  btnInfo.classList.forEach(className => {
    button.classList.add(className)
  })
  buttonGroup.appendChild(button)
})

const leftBtn = document.querySelector('.btn.left')
const rightBtn = document.querySelector('.btn.right')

function getCardList() {
  return document.querySelectorAll('.card-group .card')
}

function leftBtnFunc(event) {
  event.preventDefault()
  const cardList = getCardList()
  cardGroup.insertBefore(cardList[0], buttonGroup)
}

function rightBtnFunc(event) {
  event.preventDefault()
  const cardList = getCardList()
  cardGroup.insertBefore(cardList[cardList.length - 1], cardList[0])
}

leftBtn.addEventListener('click', leftBtnFunc)

rightBtn.addEventListener('click', rightBtnFunc)