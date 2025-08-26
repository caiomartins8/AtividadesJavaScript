 const combo = document.getElementById("meuCombo");

    combo.addEventListener("change", function() {
      if (this.value) {
        window.open(this.value, "_blank"); 
      }
    });