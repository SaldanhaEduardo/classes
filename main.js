class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }
  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

class novoVingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }
  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}
const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Super Força", "Raio"],
  true,
  true
);

const hulk = new novoVingador(
  "Hulk",
  "2.30",
  "180kg",
  ["Hiper Força", "Regeneração"],
  false,
  false
);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
  hulk.lutar();
};
