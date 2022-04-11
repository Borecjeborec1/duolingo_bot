
setTimeout(() => {
  document.addEventListener("click", (e) => {
    if (e.x > 10 || e.x == 0) return
    let doys = document.querySelectorAll("._13doy")
    getTrans(0)
    function getTrans(ind) {
      doys[ind].click()
      setTimeout(() => {
        write(document.querySelector("._2_c8s").textContent)
        if (ind != doys.length)
          setTimeout(getTrans(++ind), 2000)
      }, 1000)
    }
    function write(string) {
      let btns = document.querySelectorAll("._2LmyT")
      btns.forEach(el => {
        if (string.includes(el.textContent.toLowerCase())) {
          if (el.className.includes("_2mDNn")) return
          console.log(el)
          el.childNodes[0].click()
        }
      })
    }

  })
}, 3000)
