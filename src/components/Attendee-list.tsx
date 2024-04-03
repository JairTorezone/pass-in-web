import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

import { IconButton } from "./Icon-button";
import { Table } from "./table/Table";
import { TableHeader } from "./table/Table-header";
import { TableCell } from "./table/Table-cell";
import { TableRow } from "./table/Table-row";
import { useState } from "react";
import { attendees } from "../data/attendees";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
  const [search, setSearch] = useState("");

  function onSearchInputChanged(
    event: React.ChangeEventHandler<HTMLInputElement>
  ) {
    setSearch(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold ">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participantes"
          />
        </div>
      </div>
      {search}

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border-white/10 "
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border-white/10 "
                  />
                </TableCell>
                <TableCell> {attendee.id} </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span className="text-xs text-white/50">
                      {attendee.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.createdInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>Showing 10 of 228 items</TableCell>

            <TableCell
              className="py-3 px-4 text-sm text-zinc-300 text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Pagina 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
