const listHouses = [
  {
    note: 'Independent living',
    title: 'Brunlees Court',
    location: '19-23 Cambridge Road, Southport',
    cost: '211,853',
    img: 'assets/img/content/house.png',
    id: 1
  },
  {
    note: 'Independent living',
    title: 'Charlotte Court',
    location: '19-23 Cambridge Road, Southport',
    cost: '742,884',
    img: 'assets/img/content/house2.png',
    id: 2
  },
  {
    note: 'Restaurant & Support available',
    title: 'Grove Court',
    location: '19-23 Cambridge Road, Southport',
    cost: '184,435',
    img: 'assets/img/content/house3.png',
    id: 3
  },
  {
    note: 'Independent living',
    title: 'Business house',
    location: '5966 Lubao Ave, Woodland Hills, CA 91367',
    cost: '953,842',
    img: 'assets/img/content/house3.png',
    id: 4
  },
  {
    note: 'Vacation home',
    title: 'Guest house',
    location: '14006 Riverside Dr, Sherman Oaks, CA 91423,',
    cost: '756,123',
    img: 'assets/img/content/house.png',
    id: 5
  },
  {
    note: 'Restaurant & Support available',
    title: 'Entertainment house',
    location: '3614 W Magnolia Blvd, Burbank, CA 91505',
    cost: '457,439',
    img: 'assets/img/content/house2.png',
    id: 6
  },
  {
    note: 'Independent living',
    title: 'Business house',
    location: '6600 Topanga Canyon Blvd, Canoga Par',
    cost: '211,853',
    img: 'assets/img/content/house.png',
    id: 7
  },
  {
    note: 'Vacation home',
    title: 'Guest house',
    location: '6150 De Soto Ave, Woodland Hills, CA 91367',
    cost: '742,884',
    img: 'assets/img/content/house3.png',
    id: 8
  },
  {
    note: 'Restaurant & Support available',
    title: 'Entertainment house',
    location: '22219 Summit Vue Ln, Woodland Hills, CA 91367',
    cost: '184,435',
    img: 'assets/img/content/house2.png',
    id: 9
  },
  {
    note: 'Independent living',
    title: 'Business house',
    location: '5966 Lubao Ave, Woodland Hills, CA 91367',
    cost: '953,842',
    img: 'assets/img/content/house3.png',
    id: 10
  },
  {
    note: 'Vacation home',
    title: 'Guest house',
    location: '14006 Riverside Dr, Sherman Oaks, CA 91423,',
    cost: '756,123',
    img: 'assets/img/content/house.png',
    id: 11
  },
  {
    note: 'Restaurant & Support available',
    title: 'Entertainment house',
    location: '3614 W Magnolia Blvd, Burbank, CA 91505',
    cost: '457,439',
    img: 'assets/img/content/house2.png',
    id: 12
  },
  {
    note: 'Independent living',
    title: 'Business house',
    location: '6600 Topanga Canyon Blvd, Canoga Par',
    cost: '211,853',
    img: 'assets/img/content/house.png',
    id: 13
  },
  {
    note: 'Vacation home',
    title: 'Guest house',
    location: '6150 De Soto Ave, Woodland Hills, CA 91367',
    cost: '742,884',
    img: 'assets/img/content/house3.png',
    id: 14
  },
  {
    note: 'Restaurant & Support available',
    title: 'Entertainment house',
    location: '22219 Summit Vue Ln, Woodland Hills, CA 91367',
    cost: '184,435',
    img: 'assets/img/content/house2.png',
    id: 15
  },
  {
    note: 'Independent living',
    title: 'Business house',
    location: '5966 Lubao Ave, Woodland Hills, CA 91367',
    cost: '953,842',
    img: 'assets/img/content/house3.png',
    id: 16
  },
  {
    note: 'Vacation home',
    title: 'Guest house',
    location: '14006 Riverside Dr, Sherman Oaks, CA 91423,',
    cost: '756,123',
    img: 'assets/img/content/house.png',
    id: 17
  }
]
var doc = document
var btnShow = doc.getElementById('show')
var initialValue = 3

window.addEventListener('load', showHouses(initialValue))

function makeCounter () {
  // function counter
  return function () {
    return (initialValue = initialValue + 6)
  }
}

const count = makeCounter()

btnShow.addEventListener('click', function () {
  // added cards
  count()
  showHouses(initialValue, true)
})

function showHouses (state, type) {
  // render list houses
  if (state > listHouses.length) {
    var showMoreBtn = doc.getElementById('show')
    showMoreBtn.className = 'button_show-more hidden'
  }

  function initialShow () {
    var arr = []
    for (var i = 0; i < listHouses.length && i < state; i++) {
      arr.push(listHouses[i])
    }
    return arr
  }

  var newListHouses = initialShow()

  if (type) {
    var listItems = doc.getElementById('listItems')
    while (listItems.firstChild) {
      listItems.removeChild(listItems.firstChild)
    }
  }

  newListHouses.map(el => {
    return createCardHouse(
      el.id,
      el.img,
      el.note,
      el.title,
      el.location,
      el.cost
    )
  })
}

function createCardHouse () {
  var id =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
  var img =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
  var note =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : 'Independent living'
  var title =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : 'Brunlees Court'
  var location =
    arguments.length > 4 && arguments[4] !== undefined
      ? arguments[4]
      : '19-23 Cambridge Road, Southport'
  var cost =
    arguments.length > 5 && arguments[5] !== undefined
      ? arguments[5]
      : '374,222'
  var desc =
    arguments.length > 6 && arguments[6] !== undefined
      ? arguments[6]
      : 'Shared Ownership Available'
  var listItems = doc.getElementById('listItems')
  var item = doc.createElement('li')
  item.className = 'list-houses__item'
  item.setAttribute('key', id)
  var linkItem = doc.createElement('a')
  linkItem.className = 'list-houses__item-card'
  linkItem.setAttribute('href', '#') // path to card the page house

  item.appendChild(linkItem)
  var linkItemImageBlock = doc.createElement('figure')
  linkItemImageBlock.className = 'list-houses__image'
  var imageWrapper = doc.createElement('div')
  imageWrapper.className = 'list-houses__image-wrapper'
  linkItemImageBlock.appendChild(imageWrapper)
  var image = doc.createElement('img')
  image.setAttribute('src', img) // path to image

  image.setAttribute('alt', 'house')
  imageWrapper.appendChild(image)
  var imageNote = doc.createElement('span')
  imageNote.className = 'list-houses__image_note'
  imageNote.innerHTML = note //  text for note

  imageWrapper.appendChild(imageNote)
  linkItem.appendChild(linkItemImageBlock)
  var linkItemDescBlock = doc.createElement('div')
  linkItemDescBlock.className = 'list-houses__description'
  var itemTitle = doc.createElement('h2')
  itemTitle.className = 'list-houses__title'
  itemTitle.innerHTML = title // title house

  linkItemDescBlock.appendChild(itemTitle)
  var itemLocation = doc.createElement('p')
  itemLocation.className = 'list-houses__text list-houses__text_margin-text'
  itemLocation.innerHTML = location // location text

  linkItemDescBlock.appendChild(itemLocation)
  var priceText = doc.createElement('p')
  priceText.className = 'list-houses__text'
  priceText.innerHTML = 'New Properties for Sale from'
  linkItemDescBlock.appendChild(priceText)
  var price = doc.createElement('span')
  price.className = 'list-houses__price'
  price.innerHTML = ' &pound;'.concat(cost) // price house

  priceText.appendChild(price)
  var additionalInformation = doc.createElement('p')
  additionalInformation.className = 'list-houses__additional-information'
  additionalInformation.innerHTML = desc // description

  linkItemDescBlock.appendChild(additionalInformation)
  linkItem.appendChild(linkItemDescBlock)
  listItems.appendChild(item)
}
