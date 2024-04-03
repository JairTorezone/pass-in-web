import nlwIcon from "../assets/icon.svg";
import { NavLink } from "./Nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nlwIcon} alt="log nlw" />

      <nav className="flex items-center gap-5 py-2">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
