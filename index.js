fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((response) => response.json())
  .then((result) => {
    console.log(result.categories)


    let div = document.getElementById("meny")

    let select = document.getElementById("optionlist");

    for (let i = 0; i < result.categories.length; i++) {
      let div2 = document.createElement("div")
      div2.setAttribute("id", result.categories[i].strCategory)
      div2.style = "display:none"

      let p = document.createElement("p")
      console.log(result.categories[i].strCategory)
      p.textContent = result.categories[i].strCategory
      div2.appendChild(p)


      let option = document.createElement("option");
      option.innerText = result.categories[i].strCategory;
      option.setAttribute("value", result.categories[i].strCategory);
      select.appendChild(option)

      let matdiv = document.createElement("div")
      matdiv.setAttribute("class", "matdiv")

      let img = document.createElement("img")
      // console.log(image)
      img.setAttribute('src', result.categories[i].strCategoryThumb)
      //div2.appendChild(img)
      matdiv.appendChild(img)


      let b = document.createElement("b")
      b.textContent = result.categories[i].strCategoryDescription
      //div2.appendChild(b)
      matdiv.appendChild(b)

      div2.appendChild(matdiv);

      div.appendChild(div2);
    }


    function a(option) {
      console.log("Maträtt: " + option.target.value)
      //let rsult = document.querySelector('result')
      let select = document.getElementById("optionlist");

      let div = document.getElementById("meny")


      for (let i = 0; i < div.childNodes.length; i++) {

        // if (option.target.value !== "Chooase") {
        div.childNodes[i].style = "display:none"
        // }
        // else {
        //div.childNodes[i].style = "display:true"
        // }
      }

      if (option.target.value !== "Choose") {
        document.getElementById(option.target.value).style = "display: true"
      }

    }

    select.addEventListener('change', a)

  })



  // console.log("child: " + div.children[i].getElementById(option.target.value))
        // if(div.childNodes[i].innerText === option.target.value)
        // {
        //   div.childNodes[i].style="display:true"
        // }
        // else{

    // let selection = document.querySelector('Select')
    //   div.appendChild(selection)
    //   selection.addEventListener('change', () => {
    //   });
 // let ol = document.querySelector('ol')
      // ol.innerHTML +=
      //   '<li>' + result.categories[i] + '(' + result.categories[i].strCategoryThumb + ')</li>'
  // let image = document.getElementById('image')
    // console.log(image)
    // image.setAttribute('src', div.strCategoryThumb)

    // let text = document.getElementById('text')
    // console.log(text)

    // let knappar = document.querySelector(".knappar")

    // knappar.addEventListener = (click, a)
