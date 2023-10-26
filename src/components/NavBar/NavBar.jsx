import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
      <div>
        <button className="btn btn-success mx-2"> Inicio </button>
        <button className="btn btn-success mx-2"> Productos </button>
        <button className="btn btn-success mx-2"> Contacto </button>
      </div>
      <div className="d-flex">
        <CartWidget />
        <p className="mx-3"> 1 </p>
      </div>
    </nav>
  );
};
