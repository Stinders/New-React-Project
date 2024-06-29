import react_core_concepts from '../assets/react_core_concepts.png'

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

export default function Header() {
  const rDescription = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={react_core_concepts} alt="stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {rDescription} react concepts you will need for almost any app you are
        going to build.
      </p>
    </header>
  );
}
